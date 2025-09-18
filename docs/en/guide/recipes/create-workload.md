# Create a Workload WorkloadProfile

## Step 1. Analyze Computing Resource Requirements and QoS Level

### Calculate Initial Resource Requests

You can use TensorFusion cloud to get resource recommendations. Or you can estimate the TFlops/VRAM by following method:

VRAM: 
- For each 1B parameters FP8 precision inference, need about 1GiB VRAM
- For LLM, each 1K context window indicates about 1GiB additional VRAM for each user


TFlops estimation is complex since different training and inference framework has huge different, different types of AI models also varies. One possible way is to run a basic case on a single GPU and monitor the GPU utilization, then calculate the TFlops for multiple users or larger dataset value in linear way, and then adjust that value or enable TFlops auto scaling.

Refer: [Common GPU Information](https://en.wikipedia.org/wiki/List_of_Nvidia_graphics_processing_units)

### Choose QoS Levels

- **low: Best for training and labs**. Ensures capacity but not latency. Accumulates credits for bursts when GPUs are available. VRAM cools down quickly.
- **medium: Ideal for offline tasks** like embedding. Ensures capacity with bursts, preempting low QoS tasks. No latency guarantee. VRAM cools down moderately.
- **high: Suited for non-latency-sensitive online tasks** like inference. Ensures capacity, preempts medium QoS tasks. VRAM stays at requested levels.
- **critical: For real-time, latency-critical tasks** like live translation. Ensures capacity and low latency, preempts most tasks. VRAM remains at requested levels.


## Step 2. Create Workload with Annotations

### Add Pod Annotations

```yaml
tensor-fusion.ai/inject-container: python
tensor-fusion.ai/tflops-limit: '20'
tensor-fusion.ai/tflops-request: '10'
tensor-fusion.ai/vram-limit: 4Gi
tensor-fusion.ai/vram-request: 4Gi
tensor-fusion.ai/qos: medium
tensor-fusion.ai/gpu-count: '1'
```

### Use the WorkloadProfile

You can also create `WorkloadProfile` and refer it like this `tensor-fusion.ai/workload-profile: default-profile` in Pod annotation to use advanced features.

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
        tensor-fusion.ai/workload-profile: template-for-small-model
```

See all configuration options [Workload Configuration](/reference/workload-annotation)

## Step 3. Verify the App Status

1. You will see a new container named ```inject-lib``` in your pods

2. Execute into the shell of ```tensor-fusion.ai/inject-container```, run ```nvidia-smi```

3. You will see the command running well and the quota has been changed to your ```tensor-fusion.ai/vram-limit```
