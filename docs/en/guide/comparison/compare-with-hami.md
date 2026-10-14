---
outline: deep
---

# Compare with HAMi

::: tip
The maintained version of this comparison, with per-dimension details, measured overhead and sources, is at [tensor-fusion.ai/docs › Compare with HAMi](https://tensor-fusion.ai/docs/tensor-fusion-engine/comparison/compare-with-hami). This page is a summary, checked in October 2026 against HAMi v2.10.0.
:::

[HAMi](https://github.com/Project-HAMi/HAMi) is an open source Kubernetes middleware for sharing GPUs and other accelerators, and a CNCF Incubating project. It overlaps the most with TensorFusion: both slice a GPU by compute and memory for containers, both enforce the limits with a library loaded into the container, and both ship a GPU-aware scheduler.

- **HAMi is stronger** on accelerator coverage (more than ten vendors), on openness (every component Apache 2.0, under CNCF governance), on community size, and on fitting into existing Kubernetes conventions (standard extended resources, `ResourceQuota`, Volcano, Kueue, Koordinator, KAI Scheduler, and a DRA driver).
- **TensorFusion is stronger** on what happens around the slice: separate requests and limits with QoS levels, limits changed while the workload runs, process-level and remote isolation, GPU-over-IP, GPU node autoscaling with Karpenter, usage-based right-sizing, and per-workload cost data.

## At a glance

| Dimension | TensorFusion | HAMi |
| --- | --- | --- |
| Architecture and footprint | One controller (webhook, scheduler, CRD controllers), a hypervisor DaemonSet with its own device plugin, GreptimeDB for metrics. | A mutating webhook, a scheduler extender, and a device plugin per vendor. |
| Isolation | `shared`, `soft` (in-process limiter), `hard` (separate worker process), `partitioned` (MIG, Ascend vNPU); remote mode adds a node boundary. | HAMi-core, an in-process library that intercepts CUDA calls; dynamic MIG on NVIDIA. |
| Resource model | Compute in TFLOPS or percent, VRAM in bytes; request and limit set separately. | Memory in MiB or percent, cores in percent, device count; one value per resource. |
| Scheduling | Own scheduler: bin-packing or spreading, NUMA and peer topology, gang scheduling, namespace quotas, four QoS levels. | Scheduler extender: binpack, spread and mutex policies, topology and NUMA awareness, `ResourceQuota`, PodGroup gang scheduling; queues through Volcano, Kueue or KAI. |
| Elasticity | GPU nodes added and removed through Karpenter or cloud APIs, compaction, usage-based right-sizing, compute and VRAM oversubscription. | No node provisioning or right-sizing built in; device memory scaling above 1 (experimental). |
| Remote GPU and VMs | GPU-over-IP for Pods on CPU nodes; VM guests (Linux, Windows) use host GPUs for compute APIs. | Not supported. |
| Hardware coverage | NVIDIA in all modes; Huawei Ascend, Moore Threads, Alibaba PPU in a subset. | NVIDIA, AMD Instinct, Ascend, Cambricon, Hygon, Iluvatar, Kunlunxin, MetaX, Moore Threads, Enflame, AWS Neuron, Biren, Vastai. |
| Observability and cost | Per-workload usage, built-in alert rules, unit prices and per-workload cost metrics, optional cloud console. | Prometheus metrics, Grafana dashboards, HAMi-WebUI; no cost attribution. |
| Performance overhead | `soft` with no limit: within 1% of native (T4, vLLM / ONNX Runtime / TorchBench). API remoting (`hard`, remote) depends on the workload. | Upstream benchmark: vLLM on an A100, v2.9 within about 1–3% of native latency. |
| Compatibility | Runs beside the NVIDIA GPU Operator; can take over Pods that request `nvidia.com/gpu`. | Replaces the NVIDIA device plugin on the nodes it manages. |
| License and support | Controller, scheduler, hypervisor: Apache 2.0. Vendor limiters and the remote client/worker: closed source, free under 10 GPUs. Support by NexusGPU. | Apache 2.0, all components. CNCF Incubating since July 2026. Enterprise edition from Dynamia. |

## Feature checklist

| Feature | TensorFusion | HAMi |
| --- | --- | --- |
| Fractional GPU: VRAM and compute limits | ✅ | ✅ |
| Separate request and limit | ✅ | ❌ |
| Limits changed while the Pod runs | ✅ | ❌ |
| Process-level isolation | ✅ `hard` | ❌ |
| Hardware partitions | ✅ MIG, Ascend vNPU | ✅ Dynamic MIG, vendor templates |
| Oversubscription | ✅ compute and VRAM | Partial, memory scaling (experimental) |
| Remote GPU (GPU-over-IP) | ✅ mainly NVIDIA | ❌ |
| VM guests using host GPUs | ✅ compute APIs | ❌ |
| Gang scheduling | ✅ | ✅ PodGroup (v2.10), or Volcano |
| Namespace GPU quotas | ✅ | ✅ `ResourceQuota` |
| DRA | ❌ | ✅ HAMi-DRA |
| GPU node autoscaling (Karpenter, cloud APIs) | ✅ | ❌ |
| Node compaction | ✅ | ❌ |
| Usage-based right-sizing | ✅ | ❌ |
| Per-workload cost attribution | ✅ | ❌ |
| Web console | ✅ optional cloud console | ✅ HAMi-WebUI |
| GPU live migration | Commercial edition | ❌ |
| Vendors beyond NVIDIA | Partial, three | ✅ more than ten |
| Fully open source | Partial | ✅ |

## Requesting a GPU

```yaml
# HAMi
spec:
  containers:
    - name: app
      resources:
        limits:
          nvidia.com/gpu: 1        # number of GPUs
          nvidia.com/gpumem: 4096  # MiB of GPU memory on each
          nvidia.com/gpucores: 30  # percent of each GPU's compute
```

```yaml
# TensorFusion
metadata:
  labels:
    tensor-fusion.ai/enabled: "true"
  annotations:
    tensor-fusion.ai/tflops-request: "10"
    tensor-fusion.ai/tflops-limit: "20"
    tensor-fusion.ai/vram-request: "4Gi"
    tensor-fusion.ai/vram-limit: "4Gi"
```

## When to choose which

Choose HAMi when you run accelerators TensorFusion does not support, need every component open source under CNCF governance, already use Volcano, Kueue, Koordinator or KAI Scheduler, or only need local fractional GPUs with fixed limits and as few components as possible.

Choose TensorFusion when you want fewer GPU nodes on a cloud (packing, Karpenter node autoscaling, releasing empty nodes), GPU limits right-sized from real usage without restarts, requests and limits with QoS levels, Pods or VMs using GPUs on other machines, or per-workload cost data for chargeback.
