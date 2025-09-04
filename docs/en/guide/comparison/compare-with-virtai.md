---
outline: deep
---

# Compare with VirtAI OrionX

VirtAI OrionX is a closed-source GPU pooling and virtualization solution, the feature set is similar to HAMi, but more powerful and enterprise-ready. 

TensorFusion has similar features with VirtAI OrionX, but the implementation and architecture is completely different. It's open source and offers self-service onboarding, seamless migration.

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
| GPU-first Autoscaling Policies | ✅ | ❓ |
| Support different QoS levels | ✅ | ❓ |
| Request Multiple vGPUs | ✅ | ✅ |
| GPU Node Auto Provisioning/Termination | ✅ | ❌ |
| GPU Compaction/Bin-packing | 🚧 | ✅ |
| Dynamic MIG(Multi-instance GPU) | 👋 | 👋 |
| Centralized Dashboard & Control Plane | ✅ | ✅ |
| Support None-Nvidia GPU | 🚧 | ✅ |
| <b>Enterprise Features</b> |  |  |
| Windows/Linux VM vGPU | ✅ | ❓ |
| OpenGL Virtualization  | ✅ | ❓ |
| GPU Live Migration | 🚧 | ❌ |
| Advanced observability, CUDA Call Profiling/Tracing | 🚧 | ❌ |
| AI Model Preloading | 🚧 | ❌ |
| Advanced auto-scaling policies, scale to zero, rebalancing | 🚧 | ❓ |
| Monetization of your GPU cluster | 🚧 | ❌ |


## Deploy & Usage

VirtAI OrionX requires license and does not offer self-service onboarding. You can only "Book a Demo" and contact salesperson to get started.

To use OrionX vGPU, you need to [customize the environment variables](https://virtaitech.com/development?doc=4r4gnqv5j9qgw70njj2a2jnzma), and change the Kubernetes scheduler.

VirtAI OrionX offers basic Kubernetes support, whereas TensorFusion's team includes Kubernetes contributors. This expertise enables TensorFusion to provide superior compatibility with the Kubernetes ecosystem and seamless integration with cloud vendors.

```yaml
# VirtAI OrionX Example
env:
  - name: ORION_VGPU
    value: "1"
  - name: ORION_GMEM
    value: "4096"
  - name: ORION_RATIO
    value: "100"
  - name: ORION_RESERVED
    value: "0"
  - name: ORION_CROSS_NODE
    value: "0"
  - name : ORION_GROUP_ID
    valueFrom:
      fieldRef:
        fieldPath: metadata.uid
resources:
  limits:
    virtaitech.com/gpu: 1
```

TensorFusion has less dependencies and more open, progressive than VirtAI OrionX, offers self-service onboarding. 

As for end users, just add annotations in PodTemplate, much simpler and more flexible.

```yaml
# TensorFusion
metadata:
  labels:
    tensor-fusion.ai/enabled: 'true' // [!code highlight]
  annotations:
    tensor-fusion.ai/workload-profile: example-workload-profile // [!code highlight]
    # you can override profile fields
    tensor-fusion.ai/vram-limit: 4Gi // [!code highlight]
```

### Total Cost of Ownership

The TCO of VirtAI OrionX is higher than TensorFusion due to its:

- High license cost
- Closed-source
- Limited autoscaling policies
- Focus on China market, lack of global support

In comparison, TensorFusion is open source, offers self-service onboarding, and has free community version and global support network.