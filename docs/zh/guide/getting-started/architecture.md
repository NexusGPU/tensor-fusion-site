---
outline: deep
---

# TensorFusion架构和原理

## 系统整体架构

TensorFusion由三个部分组成，分别是：

- **虚拟化层**：实现GPU切分、地址和资源隔离、超额订阅、远程共享。包括Hypervisor、ResourceLimiter、GPU Worker、GPU Client Stub
- **池化调度层**：实现GPU资源的池化管理、分布式调度、监控、云厂商集成。包括TensorFusion Operator & Scheduler、Node Discovery Job
- **控制层**：在云端统一管理GPU/NPU集群，包括在用户Kubernetes集群中的ClusterAgent、云端的TensorFusion Portal

整体系统架构如下：

#### 本地GPU运行 (内嵌vGPU模式)

![](https://cdn.tensor-fusion.ai/tf-architecture-ngpu.png)

#### IP/IB网络共享GPU (远程vGPU模式)

![](https://cdn.tensor-fusion.ai/tf-architecture-remote.png)



## 核心概念

### 基本概念

- **TFLOPS**：每秒万亿次浮点运算，是TensorFusion算力分配和调度的基本单位，在TensorFusion中统一以FP16稠密算力计量
- **VRAM**： GPU/NPU显存，常用别名有"Framebuffer", "GPU Mem"，在TensorFusion中统一以MiB为最小单位计量、分配、调度
- **vGPU**：GPU/NPU设备经过隔离与资源限制后的、软件定义的虚拟GPU，对于应用来说，vGPU与实际的GPU设备无异
- **Fractional GPU**：GPU切分，通过ResourceLimiter实现
- **GPU Cluster**：GPU集群，每个集群由一个到多个GPU Pool组成，通常对应一个Kubernetes集群，一个TensorFusion Console中的Environment
- **GPU Pool**：GPU池，一个GPU池由一个或多个GPU Node组成，是分布式算力调度的基本单元
- **GPU Node**：每个GPU Node由一个或多个GPU设备和宿主服务器组成，是算力计费的基本单元

### TensorFusion系统中的概念

- **GPU Worker**：TensorFusion用来实际运行用户GPU程序的沙箱，类比CPU虚拟化中的VM实例、或Kubernetes中的Pod，由TensorFusion自动管理，用户无需感知
- **GPU Client Stub**：为vGPU提供的、在用户态运行的虚拟GPU驱动库，由TensorFusion自动注入，用户无需感知
- **TensorFusion Hypervisor**：TensorFusion Hypervisor，是管理GPU Worker的核心组件，类比CPU虚拟化概念中的虚拟机监视器(VMM)，或类比Kubernetes中的Kubelet
- **TensorFusion Controller**：在用户Kubernetes集群中扩展的Controller，包括Kubebuilder构建的Operator和Scheduler组成，是管理用户AI基础设施的核心组件，类比Kubernetes中的 controller-manager 和 scheduler
- **TensorFusion Workload**：使用GPU算力的AI应用，用户可手动管理或交给TensorFusion自动管理，类比Kubernetes中的Deployment
- **TensorFusion Connection**：TensorFusion用来管理AI应用实例与GPU Worker连接的Kubernetes扩展资源，类比Kubernetes中的Service Endpoint，用户无需感知
- **QoS**：以优先级区分的算力服务质量，在最大化混合部署的AI集群整体效率时保障每个服务算力可用性的关键配置。高QoS的应用算力分配、抢占的优先级都高于低QoS应用

## 部署拓扑

在**部署TensorFusion后**，用户集群会增加以下组件：

- 一个**TensorFusion Deployment**，包括controller/cluster-agent/vector-metrics-collector三个容器。
- **每个GPU节点会自动部署Hypervisor及采集GPU信息的NodeDiscovery一次性Job**
- 当需要AI算力的应用在集群任意节点运行时，TensorFusion在集群内**按需、动态启动对应的GPU Worker Pod**，每个Worker内置ResourceLimiter动态链接库、每个应用Pod内部自动注入GPU Stub动态链接库

在部署TensorFusion前，每个AI应用需要挂载GPU设备，集群拓扑如下：

![](https://cdn.tensor-fusion.ai/deploy-topo-before-tf.jpg)

**部署TensorFusion后**，每个AI应用能够在本机或其他节点**按需、动态获取切分后的GPU资源、无需挂载硬件设备，实现1 TFlops级别的AI算力自动扩缩容**，集群拓扑如下：

![](https://cdn.tensor-fusion.ai/tf-deploy-topo.jpg)

### 虚拟化层核心原理

TensorFusion的虚拟化层，是在rCUDA、GaiaGPU等前辈的学术研究基础上，结合了团队对GPU的深入理解和大量工程优化，以C++/Rust开发的工业级方案。

- 用户在原有的Kubernetes Pod增加注解后，TensorFusion的Pod MutationWebhook通过InitContainer为其自动注入GPU运算所需的桩函数（GPU Stub）
- TensorFusion调度器同时分配GPU资源，在最合适的GPU主机上启动对应的Worker，实现不同租户资源隔离、函数地址和数据地址隔离
- 当Pod调用CUDA API时，通过GPU Stub将调用转发到Worker，经过特殊处理和优化后，实现安全的远程或本机共享GPU
- Worker端运行的ResourceLimiter拦截GPU驱动层函数调用，对内存管理、核函数调用（LaunchKernel）等进行算力、显存资源的灵活控制
- 在每个GPU主机上运行的Hypervisor管理正在使用的多个Worker，实现VRAM的冷温热分层、实时监控、GPU上下文热迁移、模型预加载等高级功能。

![](https://cdn.tensor-fusion.ai/vgpu-flow-tf.pic.jpg)


### 池化调度层原理

TensorFusion完全基于Kubernetes扩展实现，通过一系列CRD的定义和状态协调器，实现GPU池管理的所有功能。

![](https://cdn.tensor-fusion.ai/tf-crd.png)

其中，对节点碎片整理和自动买停，与[Karpenter](https://github.com/kubernetes-sigs/karpenter)项目类似，借鉴了Karpenter的核心流程和部分实现。

### 控制层原理

ClusterAgent启动后，根据AgentID和EnrollToken与云端控制台建立Secure WebSocket连接，实现与云端控制台的双向安全通信。
