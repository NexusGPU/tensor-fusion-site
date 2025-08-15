---
outline: deep
---

# Compare with MIG/MPS/Timeslicing

NVIDIA MIG (Multi-Instance GPU) provides basic GPU partitioning, allowing up to 7 instances per GPU card, but is limited to Ampere architecture and newer.

NVIDIA's **MPS** (Multi-Process Service) and **Timeslicing** features offer simple GPU sharing for multiple processes. However, they lack error isolation and cannot effectively limit CUDA/TensorCore & VRAM resources. Furthermore, Timeslicing has proven inadequate due to its complete lack of resource control.

TensorFusion offers end-to-end GPU virtualization, pooling solution, support almost all industrial in-use NVIDIA GPU models, it's far more than a GPU partitioning tool.

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
| Support different QoS levels | ✅ | ❌ |
| Request Multiple vGPUs | ✅ | ❌ |
| GPU Node Auto Provisioning/Termination | ✅ | ❌ |
| GPU Compaction/Bin-packing | 🚧 | ❌ |
| IDE Extensions & Plugins | 🚧 | ❌ |
| Centralized Dashboard & Control Plane | ✅ | ❌ |
| Support None-Nvidia GPU | 🚧 | ❌ |
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

In essence, while MIG+MPS is NVIDIA's official method for GPU partitioning and sharing, it has significant limitations. It's overly complex, lacks fine-grained resource control, doesn't support oversubscription or remote GPU sharing, and requires the nvidia-gpu-operator in Kubernetes environments.

TensorFusion provides a more comprehensive feature set and a smoother onboarding process. It offers powerful capabilities with a user-friendly approach.

A another key distinction is: MIG+MPS is tied to specific GPU hardware and software interfaces, whereas TensorFusion is designed to be vendor and hardware agnostic.

### Deploy & Usage

NVIDIA MIG and MPS requires manual planning and configuration, learning curve is high.

TensorFusion has less dependencies and offers full-fledged control plane to operator the GPU/NPU cluster for both community and commercial users.

Let's compare the usage between these solutions:

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
    tensor-fusion.ai/workload-profile: example-workload-profile // [!code highlight]
    # you can override profile fields
    tensor-fusion.ai/vram-limit: 4Gi // [!code highlight]
```

## Total Cost of Ownership

TCO of MIG+MPS is much higher than TensorFusion due to obvious disadvantages of MIG+MPS:

- Complex manual planning and configuration
- Coarse-grained resource control
- Limited feature set
- Vendor lock-in

In comparison, TensorFusion is vendor-neutral and open source, supports fine-grained resource control and remote GPU sharing, with extensive automation across its feature set. It's free for small teams, and charges less than 4% of computing cost for medium and large teams to archive 50%+ cost saving.

<!-- ### Performance Comparison -->
<!-- Benchmark -->