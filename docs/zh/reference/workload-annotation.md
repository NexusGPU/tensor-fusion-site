# 工作负载配置

本文档解释了如何使用Pod Annotation和WorkloadProfile自定义资源为AI应用分配vGPU资源。

## 添加 Pod 注解

在Pod metadata中可以添加以下注解。

### 注解参考

**基础注解**

| 注解 | 描述 | 示例值 |
|------------|-------------|---------------|
| `tensor-fusion.ai/tflops-request` | 每个vGPU worker每个GPU设备请求的TFlops(FP16)算力 | `'10'` |
| `tensor-fusion.ai/vram-request` | 每个vGPU worker每个GPU设备请求的VRAM(显存或帧缓冲) | `4Gi` |
| `tensor-fusion.ai/tflops-limit` | 每个vGPU worker每个GPU设备允许的最大TFlops(FP16)算力 | `'20'` |
| `tensor-fusion.ai/vram-limit` | 每个vGPU worker每个GPU设备允许的最大VRAM(显存或帧缓冲) | `4Gi` |
| `tensor-fusion.ai/inject-container` | 要注入GPU资源的容器，多个容器可用逗号分隔 | `python` |
| `tensor-fusion.ai/qos` | 服务质量等级 | `low` `medium` `high` `critical` |
| `tensor-fusion.ai/is-local-gpu` | 将工作负载调度到运行vGPU worker的同一台GPU服务器以获得最佳性能，默认为false | `'true'` |
| `tensor-fusion.ai/gpu-count` | 请求的GPU设备数量，每个vGPU worker将映射到此字段设置的N个物理GPU设备，vram/tflops资源消耗将按此字段缩放，默认为1，您的AI工作负载可以获得`cuda:0`设备 | `'4'` |
| `tensor-fusion.ai/gpupool` | 指定目标GPU池 | `default-pool` |

**高级注解**

| 注解 | 描述 | 示例值 |
|------------|-------------|---------------|
| `tensor-fusion.ai/gpu-model` | 指定GPU/NPU型号 | `A100` `H100` `L4` `L40s` |
| `tensor-fusion.ai/dedicated-gpu` | 与 `tensor-fusion.ai/gpu-model` 注解一起使用，独占所分配的物理GPU设备 | `'true'` |
| `tensor-fusion.ai/workload` | TensorFusionWorkload名称，如果存在，将共享相同的vGPU workers | `pytorch-example` |
| `tensor-fusion.ai/workload-profile` | 引用WorkloadProfile以重用预定义参数 | `default-profile` |
| `tensor-fusion.ai/enabled-replicas` | 设置为小于或等于ReplicaSet副本数的任何数字，用于TensorFusion的灰度发布 | `'1','42'` |
| `tensor-fusion.ai/auto-requests` | 根据工作负载历史指标自动设置vram和/或tflops `requests`，详细设置请使用`WorkloadProfile`自定义资源 | `'true'` |
| `tensor-fusion.ai/auto-limits` | 根据工作负载历史指标自动设置vram和/或tflops `limits`，详细设置请使用`WorkloadProfile`自定义资源 | `'true'` |
| `tensor-fusion.ai/auto-replicas` | 根据工作负载历史指标自动设置vGPU worker `replicas`，详细设置请使用`WorkloadProfile`自定义资源 | `'true'` |
| `tensor-fusion.ai/standalone-worker-mode` | 当`is-local-gpu`为true时，此选项为false，意味着vGPU worker将被注入到init容器中，而不是运行独立的vGPU worker，以实现最佳性能，代价是用户可能绕过vGPU worker直接使用物理GPU，当`is-local-gpu`为false时，此选项无效 | `'true'` |
| `tensor-fusion.ai/disable-features` | 用于部分禁用tensor fusion内置功能的开关，多个功能可用逗号分隔 | `'gpu-limiter, gpu-opt, mem-manager'` |

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
        tensor-fusion.ai/inject-container: python # 如果多个容器使用 GPU，可以用逗号分隔 // [!code highlight]
        tensor-fusion.ai/tflops-limit: '20'
        tensor-fusion.ai/tflops-request: '10'
        tensor-fusion.ai/vram-limit: 4Gi
        tensor-fusion.ai/vram-request: 4Gi
        tensor-fusion.ai/qos: medium
        tensor-fusion.ai/workload-profile: default-profile # WorkloadProfile 作为模板，优先级低于annotation // [!code highlight]
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
  # AI算力资源需求
  resources:
    requests:
      tflops: "5"
      vram: "3Gi"
    limits:
      tflops: "15"
      vram: "3Gi"
  # Worker的数量，通常与Deployment的replicas相同
  replicas: 1
  
  # 将Pod调度到和GPU Worker同一台GPU服务器提升性能（可选）
  isLocalGPU: true

  # 指定池名称（可选）
  poolName: default-pool

  # 指定 QoS 等级（默认为 medium）
  qos: medium
  
  # 指定每个Worker的GPU设备数量（可选，默认为1）
  gpuCount: 1
  
  # 指定特定GPU/NPU机型（可选）
  gpuModel: A100
  
  # 自动扩缩容配置选项（可选）
  autoScalingConfig: {}
```

然后在Pod Annotation中引用，若Annotation中存在相同配置，WorkloadProfile优先级较低：

```yaml
tensor-fusion.ai/workload-profile: example-workload-profile
```

更多内容请参考[WorkloadProfile详细配置选项](./schema/workload-profile.md)。
