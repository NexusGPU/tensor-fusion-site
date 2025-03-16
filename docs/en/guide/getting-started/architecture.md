---
outline: deep
---

# TensorFusion架构

## 系统架构

TensorFusion由三个部分组成，分别是：
- **虚拟化层**：实现GPU切分、地址和资源隔离、超额订阅、远程共享。包括Hypervisor、ResourceLimiter、GPU Worker、GPU Client Stub
- **池化调度层**：实现GPU资源的池化管理、分布式调度、监控、云厂商集成。包括TensorFusion Operator & Scheduler、Node Discovery Job
- **控制层**：在云端统一管理GPU/NPU集群，包括在用户Kubernetes集群中的ClusterAgent、云端的TensorFusion Portal

整体系统架构如下：

![](https://cdn.tensor-fusion.ai/tf-architecture.png)

## 部署拓扑

**部署TensorFusion后**，用户集群会增加：
- 一个**TensorFusion Deployment**，包括controller/cluster-agent/vector-metrics-collector三个容器。
- **每个GPU节点会自动部署Hypervisor及采集GPU信息的NodeDiscovery一次性Job**
- 当需要AI算力的应用在集群任意节点运行时，TensorFusion在集群内**按需、动态启动对应的GPU Worker Pod**，每个Worker内置ResourceLimiter动态链接库、每个应用Pod内部自动注入GPU Stub动态链接库

在部署TensorFusion前，每个AI应用需要挂载GPU设备，集群拓扑如下：
![](https://cdn.tensor-fusion.ai/deploy-topo-before-tf.jpg)

**部署TensorFusion后**，每个AI应用能够在本机或其他节点**按需、动态获取切分后的GPU资源、无需挂载硬件设备，实现1 TFlops级别的AI算力自动扩缩容**，集群拓扑如下：
![](https://cdn.tensor-fusion.ai/tf-deploy-topo.jpg)

### 虚拟化层核心原理

- 用户在原有的Kubernetes Pod增加注解后，TensorFusion的Pod MutationWebhook通过InitContainer为其自动注入GPU运算所需的桩函数（GPU Stub）
- TensorFusion调度器同时分配GPU资源，在最合适的GPU主机上启动对应的Shadow Worker，实现不同租户资源隔离、函数地址和数据地址隔离
- 当Pod调用CUDA API时，通过GPU Stub将调用转发到Shadow Worker，经过特殊处理和优化后，实现安全的远程或本机共享GPU
- Worker端运行的ResourceLimiter拦截GPU驱动层函数调用，对内存管理、核函数调用（LaunchKernel）等进行算力、显存资源的灵活控制
- 在每个GPU主机上云霄的Hypervisor管理正在使用的多个Shadow Worker，实现VRAM的冷温热分层、实时监控、GPU上下文热迁移、模型预加载等高级功能。

![](https://cdn.tensor-fusion.ai/vgpu-flow-tf.pic.jpg)

### 池化调度层原理

TensorFusion完全基于Kubernetes扩展实现，通过一系列CRD的定义和状态协调器，实现GPU池管理的所有功能。

![](https://cdn.tensor-fusion.ai/tf-crd.png)

其中，对节点Bin-packing和自动买停，与[Karpenter](https://github.com/kubernetes-sigs/karpenter)类似，借鉴了Karpenter的核心流程和部分实现。

### 控制层原理

ClusterAgent启动后，根据AgentID和EnrollToken与云端控制台建立Secure WebSocket连接，实现与云端控制台的双向安全通信。
