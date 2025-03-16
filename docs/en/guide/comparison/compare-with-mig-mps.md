---
outline: deep
---

# Compare with MIG/MPS

NVIDIA MIG(Multi-instance GPU) only offers basic GPU splitting feature, 7 sub-gpus per GPU card, and requires GPU architecture higher than Ampere.

NVIDIA GPU MPS and Timeslicing feature offers basic GPU sharing for multiple process, but both can not isolate errors nor CUDA/TensorCore & VRAM resources. Moreover, Timeslicing is proven to be not a good solution because of no resource control at all.

TensorFusion offers end-to-end GPU virtualization, pooling solution, support almost all industrial in-use NVIDIA GPU models.

### Features

| Feature | TensorFusion | MIG + MPS | Comment |
| --- | --- | --- | --- |
| <b>Basic Features</b> |  |  |  |
| Fractional GPU | ✅ | ✅ | Can not exceed 7 sub-gpus using MIG |
| GPU Pooling | ✅ | ❌ | Not possible, relies on nvidia-gpu-operator for basic GPU node mgmt. |
| GPU Scheduling & Allocation | ✅ | ❌ | Single device level allocation based on Kubernetes native scheduler |
| Remote GPU Sharing | ✅ | ❌ | Not possible |
| <b>Advanced Features</b> |  |  |
| Seamless Onboarding for Existing Workloads | ✅ | ❌ | Require manual configuration |
| Monitoring & Alert | ✅ | ❌ |  |
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

Notes:
- ✅ means supported
- ❌ means not supported
- 🚧 means Working in progress
- ❓ means unknown
- 👋 means not necessary any more

In summary, MIG+MPS is the recommended GPU splitting and sharing tool from NVIDIA, but it's too complex and can not achieve fine-grained resource control, nor oversubscription and GPU remote sharing. It must be used with nvidia-gpu-operator in Kubernetes environment.

TensorFusion offers much more powerful features and also much more seamless onboarding experience.

Another huge difference is that MIG+MPS are implemented inside GPU hardware plus a software interface, while TensorFusion is vendor agnostic and hardware agnostic.

### Deploy & Usage

NVIDIA MIG and MPS requires manual planning and configuration, learning curve is high.

TensorFusion has less dependencies and offers full-fledged control plane to operator the GPU/NPU cluster for both community and commercial users.

```yaml
# NVIDIA MIG+MPS Pod Template
spec:
  volumes:
    - name: nvidia-mps
      hostPath:
        path: /tmp/nvidia-mps
  containers:
    - name: python
      image: ...
      env:
        - name: CUDA_MPS_PIPE_DIRECTORY
          value: "/tmp/nvidia-mps"
        - name: CUDA_MPS_LOG_DIRECTORY
          value: "/tmp/nvidia-log"
      resources:
        limits:
          nvidia.com/mig-2g.10gb: 1 // [!code highlight]
---
# Plus a manual configured MIG profile
apiVersion: v1
kind: ConfigMap
metadata:
  name: nvidia-mig-config
  namespace: kube-system
data:
  config.yaml: |
    version: v1
    sharing:
      mps:
        resources:
          - name: nvidia.com/mig-3g.20gb
            replicas: 1
          - name: nvidia.com/mig-2g.10gb
            replicas: 2
    mig-configs:
      # Complex resource planning and manual configuration // [!code highlight]
      all-3g.20gb-2g.10gb:
        - devices: ["0"]
          mig-enabled: true
          mig-devices:
            - profile: "3g.20gb"
              count: 1
            - profile: "2g.10gb"
              count: 2
```

TensorFusion doesn't require Kubernetes Device Plugin nor MPS Service DaemonSet, just add annotations in PodTemplate, much simpler and more flexible.

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