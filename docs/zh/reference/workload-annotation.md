# 工作负载配置

本文档解释了如何使用Pod Annotation和WorkloadProfile自定义资源为AI应用分配vGPU资源。

## 添加 Pod 注解

在Pod metadata中可以添加以下注解。

### 注解参考

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


**基础注解**

| 注解 | 描述 | 示例值 |
|------------|-------------|---------------|
| `tensor-fusion.ai/tflops-request` | 分配的 TFlops(FP16)算力，给到每个vGPU worker每个GPU device | `'10'` |
| `tensor-fusion.ai/vram-request` | 分配的VRAM(即显存, Video Memory, Frame Buffer)，给到每个vGPU worker每个GPU device | `4Gi` |
| `tensor-fusion.ai/tflops-limit` | 每个vGPU worker每个GPU device最大允许使用的TFlops(FP16)算力 | `'20'` |
| `tensor-fusion.ai/vram-limit` | 每个vGPU worker每个GPU device允许的最大VRAM(显存) | `4Gi` |
| `tensor-fusion.ai/inject-container` | 要注入vGPU的容器，多个容器用逗号分隔 | `python` |
| `tensor-fusion.ai/qos` | QoS等级 | `low` `medium` `high` `critical` |
| `tensor-fusion.ai/is-local-gpu` | 将工作负载调度到与vGPU worker同一台GPU服务器以提升性能，默认为false | `'true'` |
| `tensor-fusion.ai/workload` | TensorFusionWorkload的名称，用来管理vGPU Worker，如果已存在，会复用已有的TensorFusionWorkload | `pytorch-example` |
| `tensor-fusion.ai/generate-workload` | 启用工作负载生成，若为false则查找已存在的TensorFusionWorkload，不会创建新的 | `'true'` |
| `tensor-fusion.ai/workload-profile` | 引用 WorkloadProfile 模板以重用预定义参数 | `default-profile` |
| `tensor-fusion.ai/replicas` | 要创建的 vGPU worker 副本数量，每个 vGPU worker 将分配请求的计算资源，应该与Deployment的 `replicas` 相同 | `'2'` |
| `tensor-fusion.ai/gpupool` | 指定目标GPU Pool | `default-pool` |

**高级注解**

| 注解 | 描述 | 示例值 |
|------------|-------------|---------------|
| `tensor-fusion.ai/gpu-count` | 请求的 GPU 设备数量，每个 vGPU worker 将映射到 N 物理 GPU 设备，vram/tflops 资源消耗将按此字段缩放，默认为 1，您的 AI 工作负载可以获取 `cuda:0` 设备 | `'4'` |
| `tensor-fusion.ai/auto-requests` | 根据工作负载历史指标自动设置 vram 和/或 tflops `requests`，请使用`WorkloadProfile`自定义资源进行详细设置 | `'true'` |
| `tensor-fusion.ai/auto-limits` | 根据工作负载历史指标自动设置 vram 和/或 tflops `limits`，请使用`WorkloadProfile`自定义资源进行详细设置 | `'true'` |
| `tensor-fusion.ai/auto-replicas` | 根据工作负载历史指标自动设置 vGPU worker `replicas`，请使用`WorkloadProfile`自定义资源进行详细设置 | `'true'` |
| `tensor-fusion.ai/no-standalone-worker-mode` | 仅在 `is-local-gpu` 设置为 true 时可用，在此模式下，TensorFusion 将也会将 vGPU worker 注入 init container，以实现最佳性能，代价是用户可能会绕过 vGPU worker 并直接使用物理 GPU | `'true'` |

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
        tensor-fusion.ai/is-local-gpu: 'true'
        tensor-fusion.ai/gpu-count: '1' # 每个 TensorFusion Worker 的 GPU 设备数量
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
