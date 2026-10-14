---
outline: deep
---

# TensorFusion概览

## ♾️ 什么是TensorFusion？

TensorFusion是一个**先进的GPU虚拟化和池化平台**，旨在最大GPU集群利用率、为AI应用提供极致弹性、自动化AI基础设施管理。

### 🌟 核心功能

- 📐 精确到单TFlops/MiB级别的GPU切分、虚拟化
- 🔄 对业务零侵入的GPU远程共享
- ⚖️ GPU优先的调度和自动扩缩容
- 📊 计算超额订阅和GPU显存扩展
- 🛫 GPU池化、监控、实时迁移、AI模型预加载等更多功能

## 🎬 演示

### 端到端演示

<VideoPlayer class="vjs-fluid vjs-16-9" src="https://files.gpu.tf/demo/tensorfusion-demo-voiced.mp4" :controls="true">
</VideoPlayer>

### 按需扩容

<VideoPlayer class="vjs-fluid vjs-16-9" src="https://files.gpu.tf/demo/tensorfusion-case-1-scale-on-demand.mp4" :controls="true">
</VideoPlayer>

### 多个应用共享一张GPU

<VideoPlayer class="vjs-fluid vjs-16-9" src="https://files.gpu.tf/demo/tensorfusion-case-2-share-one-gpu.mp4" :controls="true">
</VideoPlayer>

### 限额隔离

<VideoPlayer class="vjs-fluid vjs-16-9" src="https://files.gpu.tf/demo/tensorfusion-case-3-enforce-the-limit.mp4" :controls="true">
</VideoPlayer>

### 远程GPU

<VideoPlayer class="vjs-fluid vjs-16-9" src="https://files.gpu.tf/demo/tensorfusion-case-4-remote-gpu.mp4" :controls="true">
</VideoPlayer>

### GPU上下文保存和迁移

<VideoPlayer class="vjs-fluid vjs-16-9" src="https://cdn.tensor-fusion.ai/GPU_Content_Migration.mp4" :controls="true">
</VideoPlayer>

## 💎 为什么需要TensorFusion？

TensorFusion是为AI Infra团队量身打造的一站式解决方案，其核心是通过虚拟化和池化实现的先进的**GPU效能管理能力**，实现**用更少的GPU，运行更多AI应用**。

- **减少GPU/NPU成本**：在几乎不牺牲性能情况下，通过远程共享GPU、池化、超额订阅，省掉40％-90％的GPU成本
- **增加AI应用弹性**：GPU-first调度策略，让AI应用实现秒级扩缩容，像使用NFS一样使用GPU算力
- **减少AI Infra管理复杂度**：为AI Infra团队提供全托管、自动化的AI基础设施管理方案，渐进接入现有集群，对业务零侵入

## 🚀 快速开始

- [在Kubernetes集群部署](/zh/guide/getting-started/deployment-k8s.md)
- [在VM/BareMetal创建新集群](/zh/guide/getting-started/deployment-vm.md)
- [了解TensorFusion的核心概念、架构、原理](/zh/guide/getting-started/architecture.md)

## ⚖️ 与业界其他方案对比

#### 功能对比

与业界其他方案相比，TensorFusion是**唯一能同时实现以下功能**的一站式AI Infra解决方案：
- 真正的GPU虚拟化，实现GPU虚拟地址、错误隔离、能够超卖资源
- 对业务零侵入、性能损失低于5%的GPU远程共享（GPU-over-IP）方案
- GPU显存冷温热分层、GPU显存与主机内存的秒级置换
- 全自动化的GPU/NPU池的资源管理、监控告警、碎片整理
- 可自定义QoS优先级、租户计费
- 🚧 GPU上下文跨机热迁移、AI模型预加载

#### 价格对比

TensorFusion提供免费的社区版和付费的商业版，免费版功能已经基本满足多数中小型企业的需求，商业版本定价远低于Run.AI、NVIDIA vGPU、VirtAI OrionX等闭源方案。

- TensorFusion社区版对GPU/NPU数量不超过10个的用户完全免费
- GPU/NPU数量超过10个时，TensorFusion仅收取低于算力成本4%的订阅价格达成50%以上的节省，远低于vGPU、Run.AI等商业方案

#### 其他不同点

- **代码开源**。TensorFusion的池化、调度、GPU切分等核心代码开源，而NVIDIA vGPU、Run.AI、VirtAI OrionX等商业方案完全闭源
- **融入现有集群**。一个 Helm chart 安装 controller（webhook 与调度器在同一进程）和带自有 device plugin 的 hypervisor；可与 NVIDIA GPU Operator 共存，并能接管申请 `nvidia.com/gpu` 的 Pod，现有工作负载可以分批迁移
- **开销低**。`soft` 隔离不设限额时，实测吞吐与原生 GPU 相差 1% 以内（NVIDIA T4 上的 vLLM、ONNX Runtime、TorchBench）。远程和 `hard` 模式把 GPU 调用转发给 worker，调用密集的工作负载开销更大，见[基准测试](https://tensor-fusion.ai/zh/docs/tensor-fusion-engine/reference/system-admins/benchmark)。

<!-- TODO: Realtime Benchmark Link -->

### 详细对比报告

- [TensorFusion vs. MIG/MPS/Timeslicing](/zh/guide/comparison/compare-with-mig-mps.md)
- [TensorFusion vs. NVIDIA vGPU](/zh/guide/comparison/compare-with-vgpu.md)
- [TensorFusion vs. Run.AI](/zh/guide/comparison/compare-with-run-ai.md)
- [TensorFusion vs. HAMi](/zh/guide/comparison/compare-with-hami.md)
- [TensorFusion vs. VirtAI OrionX](/zh/guide/comparison/compare-with-virtai.md)

## ✅ 适用场景

1. **混合部署的多模型推断(Inference)场景**，有多个多个中小型模型混合部署。典型场景有：Model as a Service(MaaS)平台；提供GPU租赁的IaaS或PaaS云厂商；自有集群运行AI模型的AI SaaS平台。
2. **动手实验室场景**，为开发者、学生或研究人员提供有GPU算力的实验环境。典型场景有：AI教学实验、AI应用开发。

## 📚 参考文档

- [Kubernetes Custom Resource详细定义](/zh/reference/crd-schema.md)
- [安全白皮书](/zh/reference/security-whitepaper.md)
- [Pod模板注解](/zh/reference/workload-annotation.md)
- [系统指标](/zh/reference/metrics.md)
<!-- - [性能测试报告](/zh/reference/benchmark.md)
- [API参考](/zh/reference/api-schema.md) -->

## ❓ FAQ

**Q: TensorFusion有哪些成功案例？**

<!-- - [ZOOM](https://zoom.com) -->
- [十方融海如何用TensorFusion节省80%GPU成本？](/zh/guide/case-study/ten-class.md)

<br>

**Q: TensorFusion是开源的吗？**

是的，TensorFusion以Apache 2.0许可证开源了大部分代码，包括池化管理、调度器、虚拟化层Hypervisor等核心组件，而Client Stub和Worker代码暂不开源，具体实现与[rCUDA](https://ieeexplore.ieee.org/document/5547126)相近，但更先进。

<br>

**Q：TensorFusion在什么情况下免费使用？**

对于管理GPU/NPU算力**不超过800 FP16 TFLOPs**(相当于12个Tesla T4卡)的商业用途、非商业用途用户，都完全免费，除非用到了一般小团队用不到的企业版功能。

管理GPU/NPU算力超过800 FP16 TFLOPs的客户，请[与我们联系](mailto:support@tensor-fusion.com)获取商业版、教育版许可证。

<br>

**Q：TensorFusion开发团队在哪里？**

TensorFusion产品以及相关Github项目，由新加坡公司NexusGPU PTE.LTD. 开发、运营，成员分布在中国、美国、新加坡等地，主要面向国际市场，也在中国成立了公司为中国大陆客户提供服务。

<br>

**Q：TensorFusion支持哪些厂商和版本的GPU？**

- TensorFusion支持从Volta架构及以上的NVIDIA全系列GPU，NVIDIA驱动版本不低于530.x，支持的CUDA版本从12.1到最新的CUDA
- AMD GPU的支持在规划中
