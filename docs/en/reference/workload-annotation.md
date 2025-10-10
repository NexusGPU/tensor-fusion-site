# Workload Configuration

This doc explains how to allocate vGPU resources for your AI workloads using annotations and WorkloadProfile custom resources.

## Add Pod Annotations

Add the following annotations to your Pod metadata to configure GPU workload requirements.

### Annotation Reference

**Basic Annotations**

| Annotation | Description | Example Value |
|------------|-------------|---------------|
| `tensor-fusion.ai/tflops-request` | Requested TFlops(FP16) per vGPU worker per GPU device | `'10'` |
| `tensor-fusion.ai/vram-request` | Requested VRAM(stand for Video Memory or Frame Buffer) per vGPU worker per GPU device | `4Gi` |
| `tensor-fusion.ai/tflops-limit` | Maximum TFlops(FP16) allowed per vGPU worker per GPU device | `'20'` |
| `tensor-fusion.ai/vram-limit` | Maximum VRAM(stand for Video Memory or Frame Buffer) allowed per vGPU worker per GPU device | `4Gi` |
| `tensor-fusion.ai/inject-container` | Container to inject GPU resources into, could be comma split format for multiple containers | `python` |
| `tensor-fusion.ai/qos` | Quality of service level | `low` `medium` `high` `critical` |
| `tensor-fusion.ai/is-local-gpu` | Schedule the workload to the same GPU server that runs vGPU worker for best performance, default to false | `'true'` |
| `tensor-fusion.ai/gpu-count` | Requested GPU device count, each vGPU worker will map to N physical GPU devices set by this field, and vram/tflops resource consumption will be scaled by this field, default to 1, your AI workloads can get `cuda:0` device | `'4'` |
| `tensor-fusion.ai/gpupool` | Specifies target GPU pool | `default-pool` |

**Advanced Annotations**

| Annotation | Description | Example Value |
|------------|-------------|---------------|
| `tensor-fusion.ai/gpu-model` | Specifies the GPU/NPU model | `A100` `H100` `L4` `L40s` |
| `tensor-fusion.ai/dedicated-gpu` | Use along with `tensor-fusion.ai/gpu-model` annotation, occupancy whole GPU for this workload | `'true'` |
| `tensor-fusion.ai/workload` | TensorFusionWorkload name, if exists, will share the same vGPU workers | `pytorch-example` |
| `tensor-fusion.ai/workload-profile` | Reference to a WorkloadProfile to reuse pre-defined parameters | `default-profile` |
| `tensor-fusion.ai/enabled-replicas` | Set to any number less or equal to ReplicaSet replicas, for grey releasing TensorFusion | `'1','42'` |
| `tensor-fusion.ai/auto-resources` | Auto set vram and/or tflops based on workload historical metrics, for detail settings please use `WorkloadProfile` custom resource | `'true'` |
| `tensor-fusion.ai/auto-replicas` | Auto set vGPU worker `replicas` based on workload historical metrics, for detail settings please use `WorkloadProfile` custom resource | `'true'` |
| `tensor-fusion.ai/standalone-worker-mode` | When `is-local-gpu` is true, this option is false, it means vGPU worker will be injected into init container, not running standalone vGPU worker, to achieve best performance, the trade-off is user might bypass vGPU worker and directly use physical GPU, when `is-local-gpu` is false, this option is invalid | `'true'` |
| `tensor-fusion.ai/disable-features` | Killer switch to disable tensor fusion built-in features partially, could be comma split format for multiple features | `'gpu-limiter,gpu-opt,mem-manager'` |


### Example Config

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
        tensor-fusion.ai/inject-container: python # could be comma split if multiple containers using GPU // [!code highlight]
        tensor-fusion.ai/tflops-limit: '20'
        tensor-fusion.ai/tflops-request: '10'
        tensor-fusion.ai/vram-limit: 4Gi
        tensor-fusion.ai/vram-request: 4Gi
        tensor-fusion.ai/qos: medium
        tensor-fusion.ai/workload-profile: default-profile # WorkloadProfile has lower priority as template // [!code highlight]
        tensor-fusion.ai/is-local-gpu: 'true'
        tensor-fusion.ai/gpu-count: '1' # GPU device number per TensorFusion Worker
    spec: {} 
```

## Configure WorkloadProfile Custom Resource

For advanced features like auto-scaling, create a `WorkloadProfile` custom resource and reference it in your Pod annotations.

```yaml
apiVersion: tensor-fusion.ai/v1
kind: WorkloadProfile
metadata:
  name: example-workload-profile
  namespace: same-namespace-as-your-workload
spec:
  # Specify AI computing resources needed
  resources:
    requests:
      tflops: "5"
      vram: "3Gi"
    limits:
      tflops: "15"
      vram: "3Gi"
  # Specify the number of vGPU workers, usually the same as Deployment replicas
  replicas: 1
  
  # Schedule the workload to the same GPU server that runs GPU worker for best performance
  isLocalGPU: true

  # Specify pool name (optional)
  poolName: default-pool

  # Specify QoS level (defaults to medium)
  qos: medium
  
  # Specify the number of GPU devices per vGPU worker (optional, default to 1)
  gpuCount: 1
  
  # Specify the GPU/NPU model (optional)
  gpuModel: A100
  
  # Auto-scaling configuration options (optional)
  autoScalingConfig: {}
```

Then reference this profile in your Pod annotation:

```yaml
tensor-fusion.ai/workload-profile: example-workload-profile
```

For more details on WorkloadProfile schema, see the [WorkloadProfile Schema Reference](./schema/workload-profile.md).
