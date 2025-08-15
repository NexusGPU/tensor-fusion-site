# 生产级部署指南

高可用性、可观测性、可灰度、可回滚、高性能是生产环境的核心要求。本指南将详细介绍如何配置生产级 TensorFusion 部署。

## Operator 高可用配置

通过以下命令使用官方提供的生产级配置进行部署，该配置已包含高可用设置，并为 controller 和 alertManager 分配了充足的资源：

'helm install/upgrade ... -f https://download.tensor-fusion.ai/values-production.yaml'

您也可以自定义 values-production.yaml 文件，以下是一个参考配置：

```yaml
controller:
  replicaCount: 2
  resources:
    requests:
      memory: 1Gi
      cpu: 1000m
    limits:
      memory: 4Gi
      cpu: 4000m

# 在生产环境中使用您自己的 Greptime 以实现 HA，请参见下一节
greptime:
  isCloud: true
  installStandalone: false
  host: <db-instance>.us-west-2.aws.greptime.cloud
  user: username
  db: db-id-public
  password: your-own-password
  port: 5001

agent:
  resources:
    requests:
      cpu: 500m
      memory: 256Mi
    limits:
      cpu: 4000m
      memory: 2Gi

alert:
  replicaCount: 3
  resources:
    requests:
      memory: 256Mi
      cpu: 200m
    limits:
      memory: 1Gi
      cpu: 2000m
  persistence:
    enabled: true
    size: 5Gi
```

## 可观测性：监控指标

### GreptimeDB 高可用性

TensorFusion 使用 GreptimeDB 存储监控指标。默认部署会安装单节点 GreptimeDB，但生产环境建议采用以下高可用方案：

- [GreptimeDB Operator](https://docs.greptime.com/user-guide/deployments-administration/deploy-on-kubernetes/greptimedb-operator-management/)：部署至少3个数据节点的集群，需要专业运维知识
- [Greptime Cloud](https://greptime.com/product/cloud)：推荐方案，提供托管服务和高可用保障，总体拥有成本(TCO)更低

升级前请确保 Helm values 已按以下模式配置：

```yaml
# values-production.yaml
greptime:
  isCloud: true
  installStandalone: false
  host: <db-instance>.us-west-2.aws.greptime.cloud
  user: username
  db: db-id-public
  password: your-own-password
  port: 5001
```

### 监控面板

设置 GreptimeDB 后，您可以使用 TensorFusion Cloud Console 监控您的 TensorFusion 集群。

如果您运行完全的本地环境并禁用了 ClusterAgent，则需要在 Grafana 或任何内部系统上设置自己的监控面板。

指标定义请参考[这里](../../reference/metrics.md)

<!-- TODO 为本地用户提供 Grafana Dashboard  -->

## 可观测性：告警

### 设置告警管道

TensorFusion 依赖 Prometheus AlertManager 发送告警。您可以使用现有的 AlertManager 部署，或使用 TensorFusion 的 Helm chart 部署一个简单的专用 AlertManager StatefulSet。

**选项 1：使用现有的 AlertManager 部署**

```yaml
# values-production.yaml
controller:
  command:
    - /manager
    - -metrics-bind-address
    - :9000
    - -leader-elect
    - -enable-auto-scale
    - -enable-alert
    - -alert-manager-addr
    - <your-own-alert-manager>.svc.cluster.local:9093
alert:
  enabled: false
```

然后您可以通过 Prometheus operator 提供的 [AlertManagerConfig](https://doc.crds.dev/github.com/prometheus-operator/kube-prometheus/monitoring.coreos.com/AlertmanagerConfig/v1alpha1@v0.7.0) 自定义资源添加告警路由规则和接收器，或直接更改现有的 AlertManager 配置。

**选项 2**：使用 TensorFusion 的 AlertManager StatefulSet

```yaml
# values-production.yaml
alert:
  enabled: true
  alertManagerConfig:
    global: {} # 更改为您自己的配置
    receivers:
    - name: default-receiver
    route: {} # 更改为您自己的配置
# 参考：https://prometheus.io/docs/alerting/latest/configuration/
```

无论您如何部署 AlertManager，请确保通知管道正常工作并且已设置 "WatchDog alert"。

### 自定义告警

TensorFusion Helm chart 提供内置告警规则，您可以根据业务需求添加自己的告警。以下是一个示例：

<!-- TODO 添加告警定义参考 -->

```yaml
# values-production.yaml
dynamicConfig:
  metricsTTL: 30d
  metricsFormat: influx
  alertRules:    
    # ... 复制并修改内置告警规则

    - name: My Special Alert
      query: |
        SELECT ...
        FROM tf_worker_usage
        WHERE {{ .Conditions }}
        GROUP BY ...
        HAVING ...
      threshold: 0
      evaluationInterval: 15s
      consecutiveCount: 3
      severity: P1
      summary: "My Special Alert"
      description: "Worker {{ .worker }} from Node {{ .node }} is ..."
      alertTargetInstance: "{{ .worker }}-{{ .uuid }}"
      runbookURL: "https://<your-own-runbook-url>"
```

## 渐进式迁移到 TensorFusion

### 灰度发布策略

建议通过灰度发布逐步迁移工作负载到 TensorFusion。使用 `tensor-fusion.ai/enabled-replicas` 注解可以控制迁移的副本数量：

```yaml
apiVersion: apps/v1
kind: Deployment
# ...
spec:
  template:
    metadata:
      labels:
        tensor-fusion.ai/enabled: "true"
      annotations:
        # 灰度发布，迁移 3/10，即 30% 的副本到 TensorFusion
        ## 其他副本继续使用容器资源限制 `nvidia.com/gpu: 1`
        tensor-fusion.ai/enabled-replicas: "3"  // [!code highlight]
  replicas: 10
```

### 与 NVIDIA GPU Operator 和 DevicePlugin 共存

若已部署NVIDIA GPU Operator，设置 `nvidiaOperatorProgressiveMigration: true` 可避免调度冲突。升级后需重启所有Hypervisor Pod以识别NVIDIA Device Plugin已分配的GPU。

```yaml
# values-production.yaml
controller:
  nvidiaOperatorProgressiveMigration: true
```

启用此功能后：
- TensorFusion工作负载不会使用NVIDIA Device Plugin已分配的GPU
- 原生GPU Pod也不会使用TensorFusion已分配的GPU节点

### 随时准备回滚

在迁移过程中发现任何问题时，您可以通过将 `tensor-fusion.ai/enabled` 设置为 `false` 或将 `tensor-fusion.ai/enabled-replicas` 设置为 0 来回滚 GPU 工作负载以使用原生 GPU。

```yaml
apiVersion: apps/v1
kind: Deployment
# ...
spec:
  template:
    metadata:
      labels:
        tensor-fusion.ai/enabled: "false" // [!code highlight]
      annotations:
        tensor-fusion.ai/enabled-replicas: "0"  // [!code highlight]
    spec:
      containers:
        - name: python
          image: ...
          resources:
            limits:
              # TensorFusion 迁移期间无需删除此项！
              nvidia.com/gpu: 1 // [!code highlight]
```

## 检查调度器配置

TensorFusion scheduler 是一个 Kubernetes 调度器插件，可以通过 `ConfigMap/tensor-fusion-sys-config/config/scheduler-config.yaml` 进行配置。

在发布到生产环境之前，请确保您了解原生调度器和 TensorFusion scheduler 之间的差异。

- **紧凑优先策略**：降低能耗和成本
- **GPU资源优先**：GPU资源请求具有更高优先级

默认配置适用于大多数场景，包含以下最佳实践：

```yaml
apiVersion: kubescheduler.config.k8s.io/v1
kind: KubeSchedulerConfiguration
profiles:
# 参考：https://kubernetes.io/docs/reference/scheduling/config/
- schedulerName: tensor-fusion-scheduler
  # ...
  pluginConfig:
  - name: GPUResourcesFit
    args:
      maxWorkerPerNode: 256
      vramWeight: 0.7
      tflopsWeight: 0.3
  - name: GPUNetworkTopologyAware
    args:
      # 避免远程 TFWorker RX/TX 以防止单个节点消耗过多带宽
      # 需要启用监控才能生效
      totalIntranetBandWidthGBps: 100
  - name: NodeResourcesFit
    args:
      scoringStrategy:
        resources:
        - name: cpu
          weight: 1
        - name: memory
          weight: 1
        - name: nvidia.com/gpu
          weight: 5
        requestedToCapacityRatio:
          shape:
          - utilization: 0
            score: 0
          - utilization: 75
            score: 9
          - utilization: 100
            score: 10
        type: RequestedToCapacityRatio
```

如需自定义调度器配置，请参考 [Kubernetes Scheduler Configuration](https://kubernetes.io/docs/reference/scheduling/config/)，并使用模拟调度 API 测试修改后的调度器配置

```bash
# 转发端口到 tensor-fusion operator/scheduler
kubectl port-forward deployment/tensor-fusion-sys-controller 8080:8080 -n tensor-fusion-sys

# 调用模拟调度 API
curl -X POST http://localhost:8080/api/simulate-schedule \
  -H "Content-Type: application/yaml" \
  -d 'apiVersion: v1
kind: Pod
metadata:
  name: test-pod
  namespace: default
  labels:
    tensor-fusion.ai/enabled: "true"
  annotations:
    tensor-fusion.ai/tflops-request: "100"
    tensor-fusion.ai/vram-request: "16Gi"
    tensor-fusion.ai/tflops-limit: "100"
    tensor-fusion.ai/vram-limit: "16Gi"
spec:
  schedulerName: tensor-fusion-scheduler
  containers:
  - name: test-container
    image: nvidia/cuda'

# 调用分配信息 API 检查内存状态
curl -X GET http://localhost:8080/api/allocation
```

## 其他建议

### 避免冗余日志

每个 TensorFusion 组件的日志级别可以通过设置 `TF_LOG_LEVEL` 环境变量来配置，确保在生产环境中不要设置 `debug` 或 `trace` 以避免日志噪音和负面性能影响。

### 配置自动更新策略

TensorFusion operator 可以自动将其他组件更新到指定版本，如果您不希望自动更新，请在生产环境中禁用它。

```yaml
apiVersion: tensor-fusion.ai/v1
kind: TensorFusionCluster
# ...
spec:
  gpuPools:
    - name: shared
      isDefault: true
      specTemplate:
        nodeManagerConfig:
          nodePoolRollingUpdatePolicy:
            # 禁用自动更新
            autoUpdate: false
``` 

如果您想启用它，请确保已在非生产环境中测试过，并且批处理策略和维护窗口已按预期配置。

```yaml
apiVersion: tensor-fusion.ai/v1
kind: TensorFusionCluster
# ...
spec:
  gpuPools:
    - name: shared
      isDefault: true
      specTemplate:
        nodeManagerConfig:
          nodePoolRollingUpdatePolicy:
            # 启用自动更新
            autoUpdate: true
            # 等待 5 分钟开始下一批更新
            batchInterval: 5m
            # 每批更新 20% 的节点
            batchPercentage: 20
            # 在维护窗口期间更新
            maintenanceWindow:
              includes:
                - 1 1 * * *
            # 更新持续时间限制，当更新时间超过此值时，将被停止
            maxDuration: 10m
```

### 预留足够的磁盘空间

磁盘空间对于 VRAM 扩展和分层至关重要。建议每个 GPU 节点至少有 100GB 的可用磁盘空间。

### 在生产环境中使用更好的网络

使用远程 vGPU 模式时的高速网络，考虑切换到更高速度和更低延迟的网络，如 AWS EFA、InfiniBand 等。

### 更保守的自动扩缩容和超卖策略

默认的超卖比例过高，您可以降低它以避免过度超卖。

```yaml
apiVersion: tensor-fusion.ai/v1
kind: TensorFusionCluster
# ...
spec:
  gpuPools:
    - name: shared
      isDefault: true
      specTemplate:
        capacityConfig:
          # ...
          oversubscription:
            # TFLOPS 300% 超卖比例
            tflopsOversellRatio: 300  // [!code highlight]
            # VRAM 40% 超卖比例（扩展到主机内存，温层）
            vramExpandToHostMem: 40  // [!code highlight]
            # VRAM 20% 超卖比例（扩展到主机磁盘，冷层）
            vramExpandToHostDisk: 20
```

另外，确保您的工作负载的 tflops-request 到 tflops-limit、vram-request 到 vram-limit 比例设置为合理值。

```yaml
apiVersion: apps/v1
kind: Deployment
# ...
spec:
  template:
    labels:
      tensor-fusion.ai/enabled: "true"
    metadata:
      annotations:
        # TFLOPS 有限突发比例
        tensor-fusion.ai/tflops-request: "100" // [!code highlight]
        tensor-fusion.ai/tflops-limit: "200" // [!code highlight]

        # VRAM 无突发
        tensor-fusion.ai/vram-request: "3Gi" // [!code highlight]
        tensor-fusion.ai/vram-limit: "3Gi" // [!code highlight]
    spec:
      containers:
        - name: my-workload
          resources:
            requests:
              memory: 1Gi
              cpu: 1000m
            limits:
              memory: 4Gi
              cpu: 4000m
```

### 启用云厂商集成

对于大规模部署，构建托管 GPU 节点池可以帮助您更自动、更高效地配置和终止 GPU 节点。

您还可以更好地规划容量，例如配置预热容量以避免冷启动或流量突发，配置最大容量以避免不可预测的计费。

如果您使用 Karpenter，请按如下方式启用 TensorFusion 的 Karpenter 集成

```yaml
apiVersion: tensor-fusion.ai/v1
kind: TensorFusionCluster
# ...
spec:
  gpuPools:
    - name: shared
      isDefault: true
      specTemplate:
        nodeManagerConfig:
          provisioningMode: Karpenter
          nodeProvisioner:
            karpenterNodeClassRef:
              group: karpenter.k8s.aws
              kind: EC2NodeClass
              name: <your-own-ec2-node-class-name>
              version: v1
          nodeCompaction:
            period: 5m
```

如果您使用 TensorFusion 自己的托管 NodePool 功能，请按如下方式配置云厂商凭据和节点池

```yaml
apiVersion: tensor-fusion.ai/v1
kind: TensorFusionCluster
# ...
spec:
  computingVendor:
    authType: serviceAccountRole
    enable: true
    name: aws-irsa-connection
    params:
      defaultRegion: us-east-1
      iamRole: arn:aws:iam::<your-aws-account-id>:role/tensor-fusion
      extraParams:
        keyPairName: ec2-ssh-key-pair
    type: aws
  gpuPools:
    - name: shared
      isDefault: true
      specTemplate:
        nodeManagerConfig:
          provisioningMode: Provisioned
          nodeProvisioner:
            gpuNodeLabels:
              tensor-fusion.ai/arch: Ampere
              tensor-fusion.ai/vendor: nvidia
            gpuNodeAnnotations:
              tensor-fusion.ai/provisioned: 'true'
            gpuRequirements:
              - key: karpenter.sh/capacity-type
                operator: In
                values:
                  - on-demand
                  - spot
              - key: node.kubernetes.io/instance-type
                operator: In
                values:
                  - g6.xlarge
                  - g6.12xlarge
              - key: topology.kubernetes.io/region
                operator: In
                values:
                  - us-east-1
              - key: topology.kubernetes.io/zone
                operator: In
                values:
                  - us-east-1b
                  - us-east-1c
                  - us-east-1d
              - key: kubernetes.io/os
                operator: In
                values:
                  - linux
            # gpuTaints:
            #   - effect: NoSchedule
            #     key: group
            #     value: gpu

            # 为每个云厂商配置您自己的 NodeClass
            nodeClass: tf-node-class  
          nodeCompaction:
            period: 5m
```