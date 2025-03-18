---
outline: deep
---

# Overview

## ♾️ What is TensorFusion？

TensorFusion is a cutting-edge GPU virtualization and pooling platform designed to maximize GPU utilization, seamlessly scale AI applications, and automate AI infrastructure management.

### 🌟 Core Features

- 📐 Fractional GPU with Single TFlops/MiB Precision
- 🔄 Battle-tested GPU-over-IP Remote GPU Sharing
- ⚖️ GPU-first Scheduling and Auto-scaling
- 📊 Computing Oversubscription and GPU VRAM Expansion
- 🛫 GPU Pooling, Monitoring, Live Migration, AI Model Preloading, and more

<!-- ## 🎬 Demo TODO -->

## 💎 Why TensorFusion?

TensorFusion is the one-stop solution for AI Infra teams, enabling more AI applications with fewer GPUs, core values are:

- **Reduce GPU/NPU costs**: Achieve 40% to 90% cost savings through GPU sharing, pooling, and oversubscription, with less than 4% performance impact
- **Increase AI application elasticity**: GPU-first scheduling and allocation, allowing AI applications to scale in seconds, imagining using GPUs like NFS(Network File System)!
- **Reduce AI Infra management complexity**: A full-fledged, automated AI infrastructure management solution.

## 🚀 Quick Start

- [Deploy in Kubernetes cluster](/guide/getting-started/deployment-k8s.md)
- [Create new cluster in VM/BareMetal](/guide/getting-started/deployment-vm.md)
- [Learn Essential Concepts & Architecture](/guide/getting-started/architecture.md)

## ✅ Applicable Scenarios

1. **Multi-model serving scenario**. Typical scenarios include: Model as a Service(MaaS) platform; IaaS or PaaS cloud vendors offering GPU rentals; AI SaaS platforms running multiple AI models.
2. **Hands-on lab scenario**. Create temporary lab environments with local/remote virtual GPU for developers, students, or researchers. Typical scenarios include: AI teaching experiments, AI application development, AI research, on-demand scientific computing.

## 😔 Inapplicable Scenarios

🚧 TensorFusion currently doesn't support **AI models with intensive GPU communication and parameter sizes larger than a single GPU's capacity**. Examples include large-scale distributed training and deploying FP8 precision LLMs with 405B or 671B parameters. We're planning to add support for these ultra-large AI models in the future.

## ⚖️ Compare with Other Solutions

#### Feature Comparison

TensorFusion is the only solution that can deliver the following features in one-stop AI Infra solution:
- **True GPU virtualization**, achieving virtual memory address, error isolation, and resource oversubscription etc.
- **Zero-intrusion GPU remote sharing (GPU-over-IP)**, with less than 5% performance loss
- **GPU memory hot/warm/cold tiering**, second-level swapping between GPU memory and host memory
- **Fully automated GPU/NPU pool management**, monitoring, alerting, bin-packing etc.
- 🚧 Customizable QoS levels, usage measurement and AI computing monetization
- 🚧 Distributed live-migration of GPU contexts, AI model preloading

#### Price Comparison

TensorFusion community version is free for small teams, and a paid commercial version that charges below any other commercial solutions such as Run.AI, NVIDIA vGPU, and VirtAI OrionX etc.

- For users with up to 10 GPUs, **TensorFusion community version is free**
- For users with more than 10 GPUs, TensorFusion charges **below 4% of the computing cost**, while achieving more than 50% savings, far below the prices of Run.AI, NVIDIA vGPU, and VirtAI OrionX

#### Other Differences

- **Open Source**. TensorFusion's pooling, scheduling, and GPU partitioning core components are **open source**, while NVIDIA vGPU, Run.AI, and VirtAI OrionX commercial solutions are closed source.
- **Lightweight**. TensorFusion does not require Kubernetes DevicePlugin, does not require NVIDIA GPU Operator, while other solutions such as HAMi introduce more components, making maintenance more complex
- **Unparalleled Performance**. The virtualization layer, crafted in Rust and C++, is meticulously optimized for NVIDIA GPUs. Remarkably, in over 50% of benchmark tests, performance surpasses that of directly running on physical GPU.

### Detailed Comparison Report

- [TensorFusion vs. MIG/MPS/Timeslicing](/guide/comparison/compare-with-mig-mps.md)
- [TensorFusion vs. NVIDIA vGPU](/guide/comparison/compare-with-vgpu.md)
- [TensorFusion vs. Run.AI](/guide/comparison/compare-with-run-ai.md)
- [TensorFusion vs. HAMi](/guide/comparison/compare-with-hami.md)
- [TensorFusion vs. VirtAI OrionX](/guide/comparison/compare-with-virtai.md)

## 📚 Reference Documentation

- [Kubernetes Custom Resource Schema](/reference/crd-schema.md)
- [Performance Test Report](/reference/benchmark.md)
- [Open API Reference](/reference/api-schema.md)
- [System Metrics](/reference/metrics.md)

## ❓ FAQ

**Q: What are the success cases of TensorFusion?**

<!-- - [ZOOM](https://zoom.com) -->
- [How TenClass Saved 80% on GPU Costs with TensorFusion ?](/guide/case-study/ten-class.md)

<br />

**Q: Is TensorFusion open source?**

Yes, TensorFusion open sourced most of the codes, including the core components of pooling, scheduling, and GPU worker hypervisor, while the client stub and worker code are temporarily not open sourced, the implementation of Worker-ClientStub originates from [rCUDA](https://ieeexplore.ieee.org/document/5547126), but much more powerful.

<br />

**Q: In what cases is TensorFusion free?**

For users with up to 10 managed GPUs, TensorFusion is completely free for both commercial and non-commercial purposes, unless you need enable enterprise features, which are not important for startups and small teams.
For users with more than 10 managed GPUs, please [contact us](mailto:support@tensor-fusion.com) to obtain commercial or educational licenses.

<br />

**Q: Where is the development team of TensorFusion?**

The TensorFusion product and related Github projects are developed and operated by NexusGPU PTE.LTD., headquartered in Singapore, with members distributed in the United States, China, Singapore, and possibly other countries in future.

<br />

**Q: Which vendors and versions of GPUs does TensorFusion support?**

TensorFusion supports all series of NVIDIA GPUs from Volta architecture and above, with NVIDIA driver versions starting from 470.x, and CUDA versions range from 11.8 to the latest.
AMD GPU support is currently under planning
