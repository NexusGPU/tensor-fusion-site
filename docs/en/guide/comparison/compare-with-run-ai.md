---
outline: deep
---

# Compare with Run.AI

[Run.AI](https://run.ai) is a closed-source GPU pooling and virtualization solution. Feature set is similar to [HAMi](https://github.com/Project-HAMi/HAMi). It was acquired by NVIDIA in Dec. 2024.

TensorFusion open sourced most of the codes and offers end-to-end GPU virtualization, pooling solution, support almost all industrial in-use NVIDIA GPU models. It's newer and vendor agnostic.

### Features

| Feature | TensorFusion | Run.AI |
| --- | --- | --- |
| <b>Basic Features</b> |  |  |
| Fractional GPU | ✅ | ✅ |
| GPU Pooling | ✅ | ✅ |
| GPU Scheduling & Allocation | ✅ | ✅ |
| Remote GPU Sharing | ✅ | ❌ |
| <b>Advanced Features</b> |  |  |
| Seamless Onboarding for Existing Workloads | ✅ | ❓ |
| Monitoring & Alert | ✅ | ✅ |
| GPU Resource Oversubscription | ✅ | ❌ |
| GPU VRAM Expansion and hot/warm/cold tiering | ✅ | ❌ |
| GPU-first Autoscaling Policies | ✅ | ✅ |
| Support different QoS levels | 🚧 | ❌ |
| Request Multiple vGPUs | 🚧 | ✅ |
| GPU Node Auto Provisioning/Termination | ✅ | ❌ |
| GPU Compaction/Bin-packing | 🚧 | ✅ |
| Dynamic MIG(Multi-instance GPU) | 👋 | ✅ |
| IDE Extensions & Plugins | 🚧 | ❌ |
| Centralized Dashboard & Control Plane | ✅ | ✅ |
| Support AMD GPU/NPU | 🚧 | ❌ |
| Support HuaweiAscend/Cambricon and other GPU/NPU | 🚧 | ❌ |
| <b>Enterprise Features</b> |  |  |
| GPU Live Migration | 🚧 | ❌ |
| Advanced observability, CUDA Call Profiling/Tracing | 🚧 | ❌ |
| AI Model Preloading | 🚧 | ❌ |
| Advanced auto-scaling policies, scale to zero, rebalancing | 🚧 | ❓ |
| Monetization of your GPU cluster | 🚧 | ❌ |

Notes:
- ✅ means supported
- ❌ means not supported
- 🚧 means Working in progress
- ❓ means unknown
- 👋 means not necessary any more

In summary, Run.AI offers command line tools and user interface to manage GPU pools and GPU workloads in proprietary way.

### Deploy & Usage

Run.AI doesn't offer self-service onboarding, you can only "Book a Demo" and contact salesperson to get started. Run.AI also tries to wrapper higher layer proprietary Custom Resources like "InferenceWorkload". It's definitely not a seamless solution and will impact existing workloads.

TensorFusion has less dependencies and offers full-fledged control plane to operator the GPU/NPU cluster for both community and commercial users.

```yaml
# Example Run.AI InferenceWorkload to obtain GPU resources and run deployments
apiVersion: run.ai/v2alpha1
kind: InferenceWorkload
metadata:
  name: inference1
  namespace: default
spec:
  name:
    value: inference1
  gpu:
    value: "0.5"
  image:
    value: "gcr.io/run-ai-demo/example-triton-server"
  minScale:
    value: 1
  maxScale:
    value: 2
  metric:
    value: concurrency # 
  target:
    value: 80  # 
  ports:
      items:
        port1:
          value:
            container: 8000
```

TensorFusion has less dependencies and much more open than Run.AI, offers self-service onboarding. As for end users, just add annotations in PodTemplate, much simpler and more flexible.

```yaml
# TensorFusion
metadata:
  labels:
    tensor-fusion.ai/enabled: 'true' // [!code highlight]
  annotations:
    tensor-fusion.ai/client-profile: example-workload-profile // [!code highlight]
    # you can override profile fields
    tensor-fusion.ai/vram-limit: 4Gi // [!code highlight]
```

<!-- ### Performance Comparison -->
<!-- Benchmark -->