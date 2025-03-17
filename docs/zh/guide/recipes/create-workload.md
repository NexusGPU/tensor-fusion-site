

## Create a Workload ClientProfile

Annotations 

```yaml
tensor-fusion.ai/generate-workload: 'true'
tensor-fusion.ai/gpupool: default-pool
tensor-fusion.ai/inject-container: python
tensor-fusion.ai/replicas: '1'
tensor-fusion.ai/tflops-limit: '20'
tensor-fusion.ai/tflops-request: '10'
tensor-fusion.ai/vram-limit: 4Gi
tensor-fusion.ai/vram-request: 4Gi
tensor-fusion.ai/qos: medium
tensor-fusion.ai/workload: pytorch-example
tensor-fusion.ai/client-profile: default-profile
```

```yaml
apiVersion: tensor-fusion.ai/v1
kind: ClientProfile
metadata:
  name: template-for-small-model
spec:
  isLocalGPU: true
  gpuPool: default-pool
  replicas: 1
  tflopsLimit: 10
  tflopsRequest: 20
  vramLimit: 4Gi
  vramRequest: 4Gi
  qos: medium
```

Apply the ClientProfile

### Use the ClientProfile

You can refer the ClientProfile in your workload PodTemplate

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: <...>
spec:
  template:
    metadata:
      labels:
        tensor-fusion.ai/enabled: 'true'
      annotations:
        tensor-fusion.ai/client-profile: template-for-small-model
```

See all configuration options in reference:
- [Workload Configuration](/reference/workload-config)