---
outline: deep
---

# Compare with NVIDIA vGPU

NVIDIA vGPU, previously called GRID, is NVIDIA's proprietary GPU virtualization solution. It offers fractional GPU capabilities but comes with a hefty license fee. Unlike standard SR-IOV implementations, it uses a mdev-like approach, requiring users to download and license a specialized driver.

NVIDIA vGPU is not designed for distributed GPU pooling, remote sharing, or oversubscription. Its primary focus seems to be on maintaining market dominance rather than optimizing resource utilization. As a result, it's unlikely that many cutting-edge AI companies or cloud providers are utilizing this solution.

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
| Support different QoS levels | ✅ | ❌ |
| Request Multiple vGPUs | ✅ | ❌ |
| GPU Node Auto Provisioning/Termination | ✅ | ❌ |
| GPU Compaction/Bin-packing | 🚧 | ❌ |
| Centralized Dashboard & Control Plane | ✅ | ❌ |
| Support None-Nvidia GPU | 🚧 | ❌ |
| <b>Enterprise Features</b> |  |  |
| Windows/Linux VM vGPU | ✅ | ✅ |
| OpenGL Virtualization  | ✅ | ✅ |
| GPU Live Migration | 🚧 | ❌ |
| Advanced observability, CUDA Call Profiling/Tracing | 🚧 | ❌ |
| AI Model Preloading | 🚧 | ❌ |
| Advanced auto-scaling policies, scale to zero, rebalancing | 🚧 | ❌ |
| Monetization of your GPU cluster | 🚧 | ❌ |

NVIDIA vGPU is just a legacy single GPU virtualization software, not designed for distributed GPU pooling and scheduling.

Moreover, the NVIDIA vGPU configuration is complex and manual, look at this ["Quick Start"](https://docs.nvidia.com/vgpu/17.0/grid-software-quick-start-guide/index.html#configure-vmware-vsphere-8-vm-with-vgpu).


## Total Cost of Ownership

There's no need to discuss the TCO of a software that can not meet your requirements.