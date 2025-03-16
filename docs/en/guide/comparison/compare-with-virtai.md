---
outline: deep
---

# Compare with VirtAI OrionX

VirtAI OrionX is a closed-source GPU pooling and virtualization solution, developed by a Chinese company.

## Features

| Feature | TensorFusion | VirtAI OrionX |
| --- | --- | --- |
| <b>Basic Features</b> |  |  |
| Fractional GPU | ✅ | ✅ |
| GPU Pooling | ✅ | ✅ |
| GPU Scheduling & Allocation | ✅ | ✅ |
| Remote GPU Sharing | ✅ | ✅ |
| <b>Advanced Features</b> |  |  |
| Seamless Onboarding for Existing Workloads | ✅ | ✅ |
| Monitoring & Alert | ✅ | ✅ |
| GPU Resource Oversubscription | ✅ | ✅ |
| GPU VRAM Expansion and hot/warm/cold tiering | ✅ | ✅ |
| GPU-first Autoscaling Policies | ✅ | ❌ |
| Support different QoS levels | 🚧 | ❓ |
| Request Multiple vGPUs | 🚧 | ✅ |
| GPU Node Auto Provisioning/Termination | ✅ | ❌ |
| GPU Compaction/Bin-packing | 🚧 | ✅ |
| Dynamic MIG(Multi-instance GPU) | 👋 | 👋 |
| IDE Extensions & Plugins | 🚧 | ❌ |
| Centralized Dashboard & Control Plane | ✅ | ✅ |
| Support AMD GPU/NPU | 🚧 | ❌ |
| Support HuaweiAscend/Cambricon and other GPU/NPU | 🚧 | ✅ |
| <b>Enterprise Features</b> |  |  |
| GPU Live Migration | 🚧 | ❌ |
| Advanced observability, CUDA Call Profiling/Tracing | 🚧 | ❌ |
| AI Model Preloading | 🚧 | ❌ |
| Advanced auto-scaling policies, scale to zero, rebalancing | 🚧 | ❓ |
| Monetization of your GPU cluster | 🚧 | ❌ |


## Deploy & Usage

VirtAI OrionX requires license and does not offer self-service onboarding. You can only "Book a Demo" and contact salesperson to get started.

TensorFusion has less dependencies and much more open than VirtAI OrionX, offers self-service onboarding. As for end users, just add annotations in PodTemplate, much simpler and more flexible.

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
