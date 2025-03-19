---
outline: deep
---

# Compare with HAMi

[HAMi](https://github.com/Project-HAMi/HAMi) is a popular GPU pool management solution, offering fractional GPU and dynamic MIG features for multi-vendor GPU/NPUs.

Compare to HAMi, TensorFusion not only offers fractional GPU, but also offers real GPU virtualization, isolation, remote sharing, live migration by completely different technology, with more features and enterprise-grade features and cloud vendor integration.

### Features

| Feature | TensorFusion | HAMi |
| --- | --- | --- |
| <b>Basic Features</b> |  |  |
| Fractional GPU | ✅ | ✅ |
| GPU Pooling | ✅ | ✅ |
| GPU Scheduling & Allocation | ✅ | ✅ |
| Remote GPU Sharing | ✅ | ❌ |
| <b>Advanced Features</b> |  |  |
| Seamless Onboarding for Existing Workloads | ✅ | ✅ |
| Monitoring & Alert | ✅ | ✅ |
| GPU Resource Oversubscription | ✅ | 🚧 |
| GPU VRAM Expansion and hot/warm/cold tiering | ✅ | ❌ |
| GPU-first Autoscaling Policies | ✅ | ❌ |
| Support different QoS levels | 🚧 | ❌ |
| Request Multiple vGPUs | 🚧 | ✅ |
| GPU Node Auto Provisioning/Termination | ✅ | ❌ |
| GPU Compaction/Bin-packing | 🚧 | 🚧 |
| Dynamic MIG(Multi-instance GPU) | 👋 | ✅ |
| IDE Extensions & Plugins | 🚧 | ❌ |
| Centralized Dashboard & Control Plane | ✅ | ✅ |
| Support AMD GPU | 🚧 | ❌ |
| Support HuaweiAscend/Cambricon and other GPU/NPU | 🚧 | ✅ |
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

In summary, both TensorFusion and HAMi offer fractional GPU and distributed scheduler in Kubernetes. While TensorFusion offers more features, HAMi supports more GPU vendors.

As for the Fractional GPU feature, there are also design differences, HAMi uses percentage based limit unit, while TensorFusion uses FP16 TFlops. Percentage-based way can lead to unpredictable behaviors, because 1% of GPU card 5 years ago has huge difference with 1% of GPU card today.

**Technically**, Both HAMi and TensorFusion are using Golang for Kubernetes layer, while in virtualization layer, HAMi is written in C, TensorFusion is written in Rust and C++. 

There are also some fundamental differences. HAMi hooks libcuda and injects it to Pods through a special Kubernetes DevicePlugin, while TensorFusion solely depends on Pod mutation webhook, HAMi just hooks libcuda for mem and launchKernel limit, while TensorFusion implements whole GPU device virtualization and remoting.

### Deploy & Usage

HAMi offers Helm deployment, while TensorFusion provides a more user-friendly console to deploy and manage GPU clusters.

TensorFusion's deployment architecture is simpler than HAMi, it doesn't require Kubernetes Device Plugin nor Kubernetes Scheduler Plugin, and offers full-fledged control plane to operator the GPU/NPU cluster for both community and commercial users.


Here is the usage comparison:

```yaml
# HAMI
spec:
  containers:
    - name: python
      image: ...
      resources:
        limits:
          nvidia.com/gpu: 1 // [!code highlight]
          nvidia.com/gpumem: 3000 # 3000Mi VRAM // [!code highlight]
          nvidia.com/gpucores: 30 # request 30% computing of each vGPU // [!code highlight] 
```

Since TensorFusion doesn't require Kubernetes Device Plugin, just add annotations in PodTemplate, simpler and more flexible.

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


<!-- ### Performance Comparison -->
<!-- Benchmark -->

## Total Cost of Ownership

> TL;DR: TCO of HAMi open-source version is medium and similar to TensorFusion when GPU pool is small and you don't need rich feature set, but HAMi will grow much faster than TensorFusion when GPU pool is large and complex orchestration, scheduling and autoscaling is needed.

### Small GPU Pool Scenario

If your AI Infra team has rich experience of Kubernetes and GPU/NPU management and can build observability stack and troubleshoot complex issues, HAMi open-source version is a good choice, otherwise, TensorFusion TCO is a bit lower since it has less dependencies and cognitive load.

### Medium and Large GPU Pool Scenario

When GPU Pool grows larger, rich feature set will be more important. HAMi doesn't support oversubscription and remote sharing nor GPU live migration to achieve higher utilization or high availability, TCO of HAMi will be much higher than TensorFusion in this case.

### Other Considerations

Since HAMi also offers enterprise paid version, but it's mainly focused on Chinese GPU vendors and Chinese market.

While TensorFusion is built by a Singapore company NexusGPU PTE.LTD., and focusing on global market from day one. 

For enterprise users, NexusGPU PTE.LTD. offers 24x7 commercial support and enterprise-level security and compliance (currently working in progress), including SAML/OIDC, SOC2, ISO27001 certification etc. 