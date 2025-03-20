# Configure AutoScaling for AI Workloads

[Under Construction]

```yaml
apiVersion: tensor-fusion.ai/v1
kind: WorkloadProfile
metadata:
  name: auto-scale-template
spec:
  qos: medium
  
  autoRequests: true
  autoLimits: true
  autoReplicas: true
  
  # when auto replicas is enabled, this number will be the init replica, 
  # and won't be changed along with the config, but with the actual load
  replicas: 2
```