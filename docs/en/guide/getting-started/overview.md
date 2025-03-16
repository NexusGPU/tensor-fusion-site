---
outline: deep
---

# Overview

## What is TensorFusion？

TensorFusion is a state-of-the-art solution for GPU virtualization and pooling.

### 🌟 Core Features

- 📐 Fractional GPU with Single TFlops/MiB Precision
- 🔄 Battle-tested GPU-over-IP Remote GPU Sharing
- ⚖️ GPU-first Scheduling and Auto-scaling
- 📊 Computing Oversubscription and GPU VRAM Expansion
- 🛫 GPU Live Migration

<!-- ## 🎬 Demo TODO -->

## Why TensorFusion?

TensorFusion is a one-stop solution for AI Infra teams, built on the core principles of virtualization and pooling to deliver advanced GPU management capabilities, enabling more AI applications with fewer GPUs.

- **Reduce GPU/NPU costs**：In almost no performance sacrifice, by sharing GPUs, pooling, and oversubscription, saving 40% to 90% of GPU costs
- **Increase AI application elasticity**：GPU-first scheduling strategy, allowing AI applications to scale in seconds, like using NFS for GPU resources
- **Reduce AI Infra management complexity**：A fully managed, automated AI infrastructure management solution, gradually integrating into existing environments with zero business intrusion

## 🚀 Quick Start

- [Deploy in Kubernetes](/zh/guide/get-started.md)
- [Create new cluster in VM/BareMetal](/zh/guide/onboard-from-scratch.md)

## ✅ Applicable Scenarios

1. **Multi-model inference scenario**，with multiple small and medium-sized models deployed. Typical scenarios include: Model as a Service(MaaS) platform; IaaS or PaaS cloud vendors providing GPU rentals; AI SaaS platforms running AI models.
2. **Hands-on lab scenario**，for developers, students, or researchers to provide GPU算力的实验环境。典型场景有：AI teaching experiments、AI application development.

## 😔 Inapplicable Scenarios

🚧 TensorFusion currently does not support **AI models that are GPU communication-intensive and have a parameter scale exceeding single GPU capacity**. For example: ultra-scale distributed training, deployment of FP8 precision 405B and 671B parameter量LLM. Support for ultra-large AI models is currently under planning.

## ⚖️ Compare with Other Solutions

#### Feature Comparison

With other solutions, TensorFusion is the only one that can simultaneously deliver the following features in a one-stop AI Infra solution:
- True GPU virtualization, achieving GPU virtual addressing, error isolation, and resource oversubscription
- Zero-intrusion GPU remote sharing (GPU-over-IP) solution with less than 5% performance loss
- GPU memory hot/warm/cold tiering, second-level swapping between GPU memory and host memory
- Fully automated GPU/NPU pool resource management, monitoring, alerting, and defragmentation
- 🚧 Customizable QoS priorities and tenant billing
- 🚧 Cross-machine hot migration of GPU contexts and AI model preloading

#### Price Comparison

TensorFusion provides a free community version and a paid commercial version, with the community version being free for users with up to 10 GPUs, and the commercial version being priced below 4% of the算力 cost, far below the prices of Run.AI, NVIDIA vGPU, and VirtAI OrionX.

- TensorFusion community version is free for users with up to 10 GPUs
- For users with more than 10 GPUs, TensorFusion charges below 4% of the算力 cost, achieving more than 50% savings, far below the prices of Run.AI, NVIDIA vGPU, and VirtAI OrionX

#### Other Differences

- **Open Source**. TensorFusion's pooling, scheduling, and GPU partitioning core components are open source, while NVIDIA vGPU, Run.AI, and VirtAI OrionX commercial solutions are fully closed source
- **Lightweight**. Container layer does not require Kubernetes Device Plugin, does not require NVIDIA GPU Operator, while other solutions such as HAMi introduce more components, making maintenance more complex
- **Extreme Performance**. The virtualization layer is written in Rust and C++, optimized for NVIDIA GPUs, achieving more than 50% of benchmark test performance, even surpassing direct attachment of GPU devices

### Detailed Comparison Report

- [TensorFusion vs. MIG/MPS/Timeslicing](/zh/guide/compare-with.md)
- [TensorFusion vs. NVIDIA vGPU](/zh/guide/compare-with.md)
- [TensorFusion vs. Run.AI](/zh/guide/compare-with.md)
- [TensorFusion vs. HAMi](/zh/guide/compare-with.md)
- [TensorFusion vs. VirtAI OrionX](/zh/guide/compare-with.md)

## 📚 Reference Documentation

- [TensorFusion Architecture](/zh/guide/architecture.md)
- [Kubernetes Custom Resource Schema](/zh/reference/deployment-k8s.md)
- [Performance Test Report](/zh/reference/deployment-k8s.md)
- [API Reference](/zh/reference/api.md)

## ❓ FAQ

**Q: What are the success cases of TensorFusion?**

<!-- - [ZOOM](https://zoom.com) -->
- [TenClass](https://tenclass.com)

**Q: Is TensorFusion open source?**

Yes, TensorFusion open sourced most of the codes, including the core components of pooling, scheduling, and hypervisor of virtualization layer, while the client stub and worker code are temporarily not open sourced, and the implementation is similar to [rCUDA](https://ieeexplore.ieee.org/document/5547126), but with much more optimization.

**Q: In what cases is TensorFusion free?**

For users with up to 10 managed GPUs, both commercial and non-commercial purposes, TensorFusion is completely free. For users with more than 10 managed GPUs, please [contact us](mailto:support@tensor-fusion.com) to obtain commercial or educational licenses.

**Q: Where is the development team of TensorFusion?**

The TensorFusion product and related Github projects are developed and operated by NexusGPU PTE.LTD., headquartered in Singapore, with members distributed in the United States, China, and Singapore.

**Q: Which vendors and versions of GPUs does TensorFusion support?**

- TensorFusion supports all series of NVIDIA GPUs from Volta architecture and above, with NVIDIA driver versions starting from 470.x, and CUDA versions from 11.8 to the latest CUDA 12.8
- AMD GPU support is currently under planning
