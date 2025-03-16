---
outline: deep
---

# 概述

## 什么是TensorFusion？

TensorFusion是一个GPU虚拟化和池化解决方案。

### 🌟 核心功能

- 📐 Fractional GPU with Single TFlops/MiB Precision
- 🔄 Battle-tested GPU-over-IP Remote GPU Sharing
- ⚖️ GPU-first Scheduling and Auto-scaling
- 📊 Computing Oversubscription and GPU VRAM Expansion
- 🛫 GPU Live Migration

<!-- ## 🎬 演示 TODO -->

## 为什么需要TensorFusion？

TensorFusion是为AI Infra团队量身打造的一站式解决方案，其核心是通过虚拟化和池化实现的先进的**GPU效能管理能力**，实现**用更少的GPU，运行更多AI应用**。

- **减少GPU/NPU成本**：在几乎不牺牲性能情况下，通过远程共享GPU、池化、超额订阅，省掉40％-90％的GPU成本
- **增加AI应用弹性**：GPU-first调度策略，让AI应用实现秒级扩缩容，像使用NFS一样使用GPU算力
- **减少AI Infra管理复杂度**：为AI Infra团队提供全托管、自动化的AI基础设施管理方案，渐进接入现有集群，对业务零侵入

## 🚀 快速开始

- [在Kubernetes集群部署](/zh/guide/get-started.md)
- [在VM/BareMetal创建新集群](/zh/guide/onboard-from-scratch.md)

## ⚖️ 与业界其他方案对比

#### 功能对比

与业界其他方案相比，TensorFusion是**唯一能同时实现以下功能**的一站式AI Infra解决方案：
- 真正的GPU虚拟化，实现GPU虚拟地址、错误隔离、能够超卖资源
- 对业务零侵入、性能损失低于5%的GPU远程共享（GPU-over-IP）方案
- GPU显存冷温热分层、GPU显存与主机内存的秒级置换
- 全自动化的GPU/NPU池的资源管理、监控告警、碎片整理
- 🚧 可自定义QoS优先级、租户计费
- 🚧 GPU上下文跨机热迁移、AI模型预加载

#### 价格对比

TensorFusion提供免费的社区版和付费的商业版，免费版功能已经基本满足多数中小型企业的需求，商业版本定价远低于Run.AI、NVIDIA vGPU、VirtAI OrionX等闭源方案。

- TensorFusion社区版对GPU/NPU数量不超过10个的用户完全免费
- GPU/NPU数量超过10个时，TensorFusion仅收取低于算力成本4%的订阅价格达成50%以上的节省，远低于vGPU、Run.AI等商业方案的高昂定价

#### 其他不同点

- **代码开源**。TensorFusion的池化、调度、GPU切分等核心代码开源，而NVIDIA vGPU、Run.AI、VirtAI OrionX等商业方案完全闭源
- **轻量**。容器层不需要Kubernetes Device Plugin、不需要NVIDIA GPU Operator，而包括HAMi在内的其他方案引入组件更多，维护复杂度较高
- **极致性能**。虚拟化层由Rust和C++编写，针对NVIDIA GPU做过特殊优化，在LocalGPU模式下，**超过一半基准测试性能甚至超过直接挂载使用GPU设备**

<!-- TODO: Realtime Benchmark Link -->

### 详细对比报告

- [TensorFusion vs. MIG/MPS/Timeslicing](/zh/guide/compare-with.md)
- [TensorFusion vs. NVIDIA vGPU](/zh/guide/compare-with.md)
- [TensorFusion vs. Run.AI](/zh/guide/compare-with.md)
- [TensorFusion vs. HAMi](/zh/guide/compare-with.md)
- [TensorFusion vs. VirtAI OrionX](/zh/guide/compare-with.md)

## ✅ 适用场景

1. **混合部署的多模型推断(Inference)场景**，有多个多个中小型模型混合部署。典型场景有：Model as a Service(MaaS)平台；提供GPU租赁的IaaS或PaaS云厂商；自有集群运行AI模型的AI SaaS平台。
2. **动手实验室场景**，为开发者、学生或研究人员提供有GPU算力的实验环境。典型场景有：AI教学实验、AI应用开发。

## 😔 不适用场景

🚧 TensorFusion暂不支持**GPU通信密集且参数规模超过单GPU容量的AI模型**。比如：超大规模分布式训练，FP8精度的405B、671B参数量LLM的部署。对超大AI模型的支持正在规划中。

## 📚 参考文档

- [TensorFusion的运行原理](/zh/guide/architecture.md)
- [Kubernetes Custom Resource详细定义](/zh/reference/deployment-k8s.md)
- [性能测试报告](/zh/reference/deployment-k8s.md)
- [API参考](/zh/reference/api.md)

## ❓ FAQ

**Q: TensorFusion有哪些成功案例？**

<!-- - [ZOOM](https://zoom.com) -->
- [TenClass](https://tenclass.com)

**Q: TensorFusion是开源的吗？**

是的，TensorFusion以Apache 2.0许可证开源了大部分代码，包括池化管理、调度器、虚拟化层Hypervisor等核心组件，而Client Stub和Worker代码暂不开源，具体实现与[rCUDA](https://ieeexplore.ieee.org/document/5547126)相近，但更先进。

**Q：TensorFusion在什么情况下免费使用？**

对于管理GPU数量**不超过10**的商业用途、非商业用途用户，都完全免费。管理GPU数量超过10个的，请[与我们联系](mailto:support@tensor-fusion.com)获取商业版、教育版许可证。

**Q：TensorFusion开发团队在哪里？**

TensorFusion产品以及相关Github项目，由总部位于新加坡的NexusGPU PTE.LTD.开发、运营，成员分布在中国、美国、新加坡等地。

**Q：TensorFusion支持哪些厂商和版本的GPU？**

- TensorFusion支持从Volta架构及以上的NVIDIA全系列GPU，NVIDIA驱动版本不低于470.x，支持的CUDA版本从11.8到最新的CUDA 12.8
- AMD GPU的支持在规划中
