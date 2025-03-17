
# Workload Configuration

## Configure with Annotations

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

## Configure with ClientProfile Custom Resource

```yaml
apiVersion: tensor-fusion.ai/v1
kind: ClientProfile
metadata:
  name: default-profile
  namespace: default
spec:
  isLocalGPU: true
  gpuPool: default-pool
  replicas: 1
  tflopsLimit: 20
  tflopsRequest: 10
  vramLimit: 4Gi
  vramRequest: 4Gi
  qos: medium
  workload: pytorch-example
```
