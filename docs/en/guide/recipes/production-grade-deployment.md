# Production-Grade Deployment

High availability, observability, gray release, rollback, and high performance are essential for production environments. This guide walks you through deploying TensorFusion with enterprise-grade reliability and performance.

## Operator High Availability

TensorFusion provides production-ready deployment via `helm install/upgrade ... -f https://download.tensor-fusion.ai/values-production.yaml`, which includes default HA configurations and enhanced resource allocation for the controller and AlertManager.

Alternatively, you can customize your deployment with a custom `values-production.yaml`:

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

# Bring your own Greptime in production for HA, see next section
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

## Production-Ready Observability: Metrics

### GreptimeDB High Availability

TensorFusion requires GreptimeDB for metrics storage. Non-production deployments use a standalone GreptimeDB instance, which lacks high availability. Choose one of the following HA options:

- **[GreptimeDB Operator](https://docs.greptime.com/user-guide/deployments-administration/deploy-on-kubernetes/greptimedb-operator-management/)**: Deploy a GreptimeDB cluster with at least 3 data nodes. Requires additional operational expertise.
- **[Greptime Cloud](https://greptime.com/product/cloud)** (Recommended): Managed HA instance with lower total cost of ownership.

Update your Helm values before upgrading:

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

### Review Monitoring Dashboard

After configuring GreptimeDB, use the TensorFusion Cloud Console to monitor your cluster.

For complete on-premise environments without ClusterAgent and Cloud Console, set up monitoring dashboards using Grafana or your in-house monitoring infrastructure.

Refer to metrics definitions [here](../../reference/metrics.md)

<!-- TODO Offer a Grafana Dashboard for on-prem users  -->

## Production-Ready Observability: Alerts

### Setup Alert Pipeline

TensorFusion uses Prometheus AlertManager for alert delivery. Choose between integrating with your existing AlertManager or deploying a dedicated instance via TensorFusion's Helm chart.

**Option 1: Use your existing AlertManager deployment**

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

Configure alert routing rules and receivers using the [AlertManagerConfig](https://doc.crds.dev/github.com/prometheus-operator/kube-prometheus/monitoring.coreos.com/AlertmanagerConfig/v1alpha1@v0.7.0) custom resource from Prometheus Operator, or modify your existing AlertManager configuration directly.

**Option 2**: Use TensorFusion's AlertManager StatefulSet

```yaml
# values-production.yaml
alert:
  enabled: true
  alertManagerConfig:
    global: {} # change to your own config
    receivers:
    - name: default-receiver
    route: {} # change to your own config
# Refer: https://prometheus.io/docs/alerting/latest/configuration/
```

Regardless of deployment method, ensure the notification pipeline is functional and the "WatchDog alert" is configured.

### Custom Alerts

The TensorFusion Helm chart includes built-in alert rules. Add custom alerts based on your specific requirements:

<!-- TODO add alert definition reference -->

```yaml
# values-production.yaml
dynamicConfig:
  metricsTTL: 30d
  metricsFormat: influx
  alertRules:    
    # ... copy and modify built-in alert rules

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

## Progressive Migrate to TensorFusion

### Canary Deployment per Workload

Canary deployments enable gradual migration. Use `tensor-fusion.ai/enabled-replicas` to progressively migrate individual workloads to TensorFusion.

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
        # grey-releasing, migrate 3/10, namely 30% of replicas to TensorFusion
        ## keep others using container resource limits `nvidia.com/gpu: 1`
        tensor-fusion.ai/enabled-replicas: "3"  // [!code highlight]
  replicas: 10
```

### Coexist with NVIDIA GPU Operator & DevicePlugin

When NVIDIA GPU Operator is enabled, prevent scheduling conflicts by setting `nvidiaOperatorProgressiveMigration` to `true`. This ensures TensorFusion avoids GPUs already allocated by the NVIDIA DevicePlugin.

```yaml
# values-production.yaml
controller:
  nvidiaOperatorProgressiveMigration: true
```

Restart all Hypervisor Pods after the upgrade to detect GPUs allocated by the NVIDIA device plugin. **TensorFusion workloads will not use GPUs allocated by the NVIDIA device plugin.**

With this flag enabled, conflicts with native GPU pods using `nvidia.com/gpu` are also prevented. **Even when recreated, these pods will not use GPUs allocated by TensorFusion.**

### Prepare for Rollback

If issues arise during migration, rollback GPU workloads to native GPU usage by setting `tensor-fusion.ai/enabled` to `false` or `tensor-fusion.ai/enabled-replicas` to `0`.

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
              # No need to remove this during TensorFusion migration !
              nvidia.com/gpu: 1 // [!code highlight]
```

## Review Scheduler Configuration

The TensorFusion scheduler is a Kubernetes scheduler plugin configured via `ConfigMap/tensor-fusion-sys-config/config/scheduler-config.yaml`.

Before production deployment, understand these key differences from the native scheduler:

- **Compact-first strategy**: Optimizes for lower energy consumption and cost
- **GPU-first prioritization**: GPU resource claims take precedence over other resources

The default configuration incorporates best practices for most use cases:

```yaml
apiVersion: kubescheduler.config.k8s.io/v1
kind: KubeSchedulerConfiguration
profiles:
# Refer: https://kubernetes.io/docs/reference/scheduling/config/
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
      # Avoid the remote TFWorker RX/TX to avoid single node consume too much bandwidth
      # Need enable monitor to take effect
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

To customize the scheduler configuration, refer to the [Kubernetes Scheduler Configuration](https://kubernetes.io/docs/reference/scheduling/config/) documentation and test changes using the simulate schedule API:

```bash
# forward port to tensor-fusion operator/scheduler
kubectl port-forward deployment/tensor-fusion-sys-controller 8080:8080 -n tensor-fusion-sys

# call simulate schedule API
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

# call allocation-info API to check in-memory state
curl -X GET http://localhost:8080/api/allocation
```

## More Tips

### Log Level Management

Configure log levels for TensorFusion components using the `TF_LOG_LEVEL` environment variable. Avoid `debug` or `trace` levels in production to prevent log noise and performance degradation.

### Auto-Update Policy

The TensorFusion operator can automatically update components to specified versions. For production stability, consider disabling auto-updates:

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
            # Disable auto update
            autoUpdate: false
``` 

If enabling auto-updates, thoroughly test in non-production environments and ensure proper batching strategy and maintenance window configuration:

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
            # Enable auto update
            autoUpdate: true
            # Wait 5 minutes to start next batch updating
            batchInterval: 5m
            # Update 20% of nodes in each batch
            batchPercentage: 20
            # Update during maintenance window
            maintenanceWindow:
              includes:
                - 1 1 * * *
            # Update duration limit, when update takes longer than this, it will be stopped
            maxDuration: 10m
```

### Disk Space Requirements

Adequate disk space is critical for VRAM expansion and tiering. Reserve at least 100GB of free disk space per GPU node.

### Faster Network

For Remote vGPU mode, deploy high-speed, low-latency networks such as AWS EFA or InfiniBand to optimize performance.

### Conservative Resource Policies

The default oversubscription ratios may be too aggressive for production. Consider reducing them to prevent resource overselling:

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
            # 300% oversell ratio for TFLOPS
            tflopsOversellRatio: 300  // [!code highlight]
            # 40% oversell ratio for VRAM (expand to host memory, warm tier)
            vramExpandToHostMem: 40  // [!code highlight]
            # 20% oversell ratio for VRAM (expand to host disk, cold tier)
            vramExpandToHostDisk: 20
```

Ensure reasonable ratios between resource requests and limits for your workloads:

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
        # limited burst ratio for TFLOPS
        tensor-fusion.ai/tflops-request: "100" // [!code highlight]
        tensor-fusion.ai/tflops-limit: "200" // [!code highlight]

        # no burst for VRAM
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

### Cloud Vendor Integration

For large-scale deployments, managed GPU node pools enable automated and efficient node provisioning and termination.

This approach improves capacity planning by allowing warm-up capacity configuration to prevent cold starts and traffic bursts, while setting maximum capacity limits to control costs.

**Karpenter Integration:**

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

**TensorFusion Managed NodePool:**

For TensorFusion's native managed NodePool feature, configure cloud vendor credentials and node pools:

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

            # configure your own NodeClass for each cloud vendor
            nodeClass: tf-node-class  
          nodeCompaction:
            period: 5m
```