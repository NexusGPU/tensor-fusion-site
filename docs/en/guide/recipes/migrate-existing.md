
# Migrate Existing Workload to TensorFusion

This guide walks you through migrating your existing GPU workloads to TensorFusion's virtualized GPU infrastructure. The migration process is designed to be gradual and safe, allowing you to test the new setup before fully switching over.

## Prerequisites

- Existing workload running on physical GPUs
- TensorFusion cluster deployed and configured
- Access to your current workload's GPU specifications

## Step 1: Map Current GPU Requests to vGPU TFlops/VRAM Requests

Before migrating, you need to understand your current GPU resource requirements and map them to TensorFusion's vGPU specifications.

### 1.1 Identify Your GPU Instance Type

First, determine the GPU instance type currently used by your workload:

```bash
# Check your current pod's GPU requests
kubectl describe pod <your-pod-name> | grep -A 5 "Requests:"
```

### 1.2 Query GPU Specifications

Look up the total TFlops and VRAM specifications for your GPU instance type. You can find this information in:
- Cloud provider documentation (AWS, GCP, Azure)
- GPU manufacturer specifications (NVIDIA, AMD)
- Your cluster's node specifications

### 1.3 Configure Pod Annotations

Add the following annotations to your workload's pod specification to match your current GPU resources:

```yaml
metadata:
  annotations:
    tensor-fusion.ai/tflops-limit: "{total_tflops_of_instance_type}"
    tensor-fusion.ai/tflops-request: "{total_tflops_of_instance_type}"
    tensor-fusion.ai/vram-limit: "{total_vram_of_instance_type}"
    tensor-fusion.ai/vram-request: "{total_vram_of_instance_type}"
```

**Example:**
```yaml
metadata:
  annotations:
    tensor-fusion.ai/tflops-limit: "312"
    tensor-fusion.ai/tflops-request: "312"
    tensor-fusion.ai/vram-limit: "24Gi"
    tensor-fusion.ai/vram-request: "24Gi"
```

## Step 2: Deploy and Test New Workload with TensorFusion

Deploy a test version of your workload using TensorFusion's GPU pool to validate the migration.

### 2.1 Enable TensorFusion for Your Workload

Add the following configuration to enable TensorFusion:

**Labels:**
```yaml
metadata:
  labels:
    tensor-fusion.ai/enabled: "true"
```

**Annotations:**
```yaml
metadata:
  annotations:
    tensor-fusion.ai/enabled-replicas: "1"  # Start with 1 replica for testing
```

### 2.2 Deploy Test Workload

Deploy your workload with the TensorFusion configuration:

```bash
kubectl apply -f your-workload-with-tensorfusion.yaml
```

### 2.3 Validate the Migration

Test your workload to ensure it functions correctly with virtualized GPUs:

- Verify GPU resource allocation
- Run your typical workload tests
- Monitor performance metrics
- Check for any compatibility issues

## Step 3: Gradual Traffic Migration

Once testing is successful, gradually shift traffic from your old workload to the new TensorFusion-enabled workload.

### 3.1 Control Traffic Distribution

Use the `enabled-replicas` annotation to control the percentage of pods using virtualized GPUs:

```yaml
metadata:
  annotations:
    tensor-fusion.ai/enabled-replicas: "{number_of_replicas_to_use_tensorfusion}"
```

**Migration Strategy:**
- Start with 25% of replicas: `tensor-fusion.ai/enabled-replicas: "2"` (if you have 8 total replicas)
- Gradually increase to 50%, 75%, and finally 100%
- Monitor performance and stability at each stage

### 3.2 Complete Migration

When you're confident in the new setup, set all replicas to use TensorFusion:

```yaml
metadata:
  annotations:
    tensor-fusion.ai/enabled-replicas: "{total_replicas}"
```