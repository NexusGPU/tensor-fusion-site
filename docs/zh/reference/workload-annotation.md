# 工作负载配置

本文档解释了如何使用Pod Annotation和WorkloadProfile自定义资源为AI应用分配vGPU资源。

## 添加 Pod 注释

在Pod metadata中可以添加以下注解。

### 注释参考

| 注释 | 描述 | 示例值 |
|------------|-------------|---------------|
| `tensor-fusion.ai/gpupool` | 指定目标 GPU 池 | `default-pool` |
| `tensor-fusion.ai/inject-container` | 要注入 GPU 资源的容器，可以是逗号分隔格式 | `python` |
| `tensor-fusion.ai/replicas` | 要创建的 GPU 工作副本数量 | `'1'` |
| `tensor-fusion.ai/tflops-limit` | 允许的最大 TFLOPS | `'20'` |
| `tensor-fusion.ai/tflops-request` | 请求的 TFLOPS | `'10'` |
| `tensor-fusion.ai/vram-limit` | 允许的最大 VRAM | `4Gi` |
| `tensor-fusion.ai/vram-request` | 请求的 VRAM | `4Gi` |
| `tensor-fusion.ai/qos` | 服务质量等级 | `medium` |
| `tensor-fusion.ai/workload` | 工作负载名称，如果指定，将重用预定义的 GPU 工作负载Worker，而不是生成新的 | `pytorch-example` |
| `tensor-fusion.ai/generate-workload` | 启用工作负载生成，与 `workload` 互斥 | `'true'` |
| `tensor-fusion.ai/workload-profile` | 引用 WorkloadProfile 以重用预定义参数 | `default-profile` |

### 示例配置

```yaml
kind: Deployment
apiVersion: apps/v1
metadata: {}
spec:
  template:
    metadata:
      labels:
        tensor-fusion.ai/enabled: "true"
      annotations:
        tensor-fusion.ai/gpupool: default-pool
        tensor-fusion.ai/inject-container: python # 如果多个容器使用 GPU，可以用逗号分隔 // [!code highlight]
        tensor-fusion.ai/replicas: '1' # GPU Worker的副本数量，大多数情况下与 Deployment 副本相同 // [!code highlight]
        tensor-fusion.ai/tflops-limit: '20'
        tensor-fusion.ai/tflops-request: '10'
        tensor-fusion.ai/vram-limit: 4Gi
        tensor-fusion.ai/vram-request: 4Gi
        tensor-fusion.ai/qos: medium
        tensor-fusion.ai/workload: pytorch-example
        tensor-fusion.ai/generate-workload: 'true'  # 如果设置为 false，将使用 tensor-fusion.ai/workload 的工作负载，而不是启动新的 GPU Worker // [!code highlight]
        tensor-fusion.ai/workload-profile: default-profile # WorkloadProfile 优先级较低 // [!code highlight]
    spec: {} 
```

## 配置 WorkloadProfile 自定义资源

如需使用自动扩缩容等高级功能，要创建一个`WorkloadProfile`并在 Pod Annotation中引用。

```yaml
apiVersion: tensor-fusion.ai/v1
kind: WorkloadProfile
metadata:
  name: example-workload-profile
  namespace: 与您的工作负载相同的命名空间
spec:
  # 将Pod调度到和GPU Worker同一台GPU服务器提升性能
  isLocalGPU: true

  # 指定池名称（可选）
  poolName: default-pool

  # 指定 QoS 等级（默认为 medium）
  qos: medium
  
  # AI算力资源需求
  resources:
    requests:
      tflops: "5"
      vram: "3Gi"
    limits:
      tflops: "15"
      vram: "3Gi"
  
  # 自动扩缩容配置选项
  autoScaling: true
  minReplicas: 1
  maxReplicas: 5
```

然后在Pod Annotation中引用，若Annotation中存在相同配置，WorkloadProfile优先级较低：

```yaml
tensor-fusion.ai/workload-profile: example-workload-profile
```

更多内容请参考[WorkloadProfile详细配置选项](./schema/workload-profile.md)。
