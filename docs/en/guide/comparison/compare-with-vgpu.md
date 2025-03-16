---
outline: deep
---

# Compare with NVIDIA vGPU

NVIDIA vGPU, formerly known as GRID, is a proprietary device virtualization solution developed by NVIDIA. Their license is expensive and can only achieve fractional GPU feature. It's even not a standard SR-IOV implementation, but a mdev-like traditional hardware virtualization technology and you have to download a special Driver with license to use it. 

It's not a distributed GPU pooling software, nor remote sharing or oversubscription. It's not built for optimizing resource utilization but for "extending monopoly". No modern AI companies and cloud vendors use it.

### Features

| Feature | TensorFusion | NVIDIA vGPU |
| --- | --- | --- |
| <b>Basic Features</b> |  |  |
| Fractional GPU | ✅ | ✅ |
| GPU Pooling | ✅ | ❌ |
| GPU Scheduling & Allocation | ✅ | ❌ |
| Remote GPU Sharing | ✅ | ❌ |
| <b>Advanced Features</b> |  |  |
| Seamless Onboarding for Existing Workloads | ✅ | ❌ |
| Monitoring & Alert | ✅ | ❌ |
| GPU Resource Oversubscription | ✅ | ❌ |
| GPU VRAM Expansion and hot/warm/cold tiering | ✅ | ❌ |
| GPU-first Autoscaling Policies | ✅ | ❌ |
| Support different QoS levels | 🚧 | ❌ |
| Request Multiple vGPUs | 🚧 | ❌ |
| GPU Node Auto Provisioning/Termination | ✅ | ❌ |
| GPU Compaction/Bin-packing | 🚧 | ❌ |
| IDE Extensions & Plugins | 🚧 | ❌ |
| Centralized Dashboard & Control Plane | ✅ | ❌ |
| Support AMD GPU/NPU | 🚧 | ❌ |
| Support HuaweiAscend/Cambricon and other GPU/NPU | 🚧 | ❌ |
| <b>Enterprise Features</b> |  |  |
| GPU Live Migration | 🚧 | ❌ |
| Advanced observability, CUDA Call Profiling/Tracing | 🚧 | ❌ |
| AI Model Preloading | 🚧 | ❌ |
| Advanced auto-scaling policies, scale to zero, rebalancing | 🚧 | ❌ |
| Monetization of your GPU cluster | 🚧 | ❌ |


### Deploy & Usage

NVIDIA vGPU requires a license and download a special driver with license to use it. The configuration is also complex and manual, look at this [Slow and Steady Start](https://docs.nvidia.com/vgpu/17.0/grid-software-quick-start-guide/index.html#configure-vmware-vsphere-8-vm-with-vgpu).

TensorFusion offers one-click install and zero-configuration for admins, and seamless migration by simple PodTemplate annotations for end users.

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