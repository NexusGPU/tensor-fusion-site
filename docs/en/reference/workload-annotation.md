# Workload Configuration

This doc explains how to allocate vGPU resources for your AI workloads using annotations and WorkloadProfile custom resources.

## Add Pod Annotations

Add the following annotations to your Pod metadata to configure GPU workload requirements.

### Annotation Reference

| Annotation | Description | Example Value |
|------------|-------------|---------------|
| `tensor-fusion.ai/gpupool` | Specifies target GPU pool | `default-pool` |
| `tensor-fusion.ai/inject-container` | Container to inject GPU resources into, could be comma split format | `python` |
| `tensor-fusion.ai/replicas` | Number of GPU worker replicas to create | `'1'` |
| `tensor-fusion.ai/tflops-limit` | Maximum TFLOPS allowed | `'20'` |
| `tensor-fusion.ai/tflops-request` | Requested TFLOPS | `'10'` |
| `tensor-fusion.ai/vram-limit` | Maximum VRAM allowed | `4Gi` |
| `tensor-fusion.ai/vram-request` | Requested VRAM | `4Gi` |
| `tensor-fusion.ai/qos` | Quality of service level | `medium` |
| `tensor-fusion.ai/workload` | Workload name, if specified, will reuse the pre-defined GPU workload workers rather than generate new one | `pytorch-example` |
| `tensor-fusion.ai/generate-workload` | Enables workload generation, exclusive with `workload` | `'true'` |
| `tensor-fusion.ai/workload-profile` | Reference to a WorkloadProfile to reuse pre-defined parameters | `default-profile` |

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
        tensor-fusion.ai/gpupool: default-pool
        tensor-fusion.ai/inject-container: python # could be comma split if multiple containers using GPU // [!code highlight]
        tensor-fusion.ai/replicas: '1' # The GPU worker replicas, same as Deployment replicas in most cases // [!code highlight]
        tensor-fusion.ai/tflops-limit: '20'
        tensor-fusion.ai/tflops-request: '10'
        tensor-fusion.ai/vram-limit: 4Gi
        tensor-fusion.ai/vram-request: 4Gi
        tensor-fusion.ai/qos: medium
        tensor-fusion.ai/workload: pytorch-example
        tensor-fusion.ai/generate-workload: 'true'  # If set to false, will use the workload of tensor-fusion.ai/workload rather than start new GPU workers // [!code highlight]
        tensor-fusion.ai/workload-profile: default-profile # WorkloadProfile has lower priority // [!code highlight]
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
  # Schedule the workload to the same GPU server that runs GPU worker for best performance
  isLocalGPU: true

  # Specify pool name (optional)
  poolName: default-pool

  # Specify QoS level (defaults to medium)
  qos: medium
  
  # Resource requirements
  resources:
    requests:
      tflops: "5"
      vram: "3Gi"
    limits:
      tflops: "15"
      vram: "3Gi"
  
  # Auto-scaling configuration options
  autoScaling: true
  minReplicas: 1
  maxReplicas: 5
```

Then reference this profile in your Pod annotation:

```yaml
tensor-fusion.ai/workload-profile: example-workload-profile
```

For more details on WorkloadProfile schema, see the [WorkloadProfile Schema Reference](./schema/workload-profile.md).
