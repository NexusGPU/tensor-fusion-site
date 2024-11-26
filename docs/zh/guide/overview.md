---
outline: deep
---

＃ 概述

## 什么是TensorFusion？

TensorFusion是一个GPU虚拟化框架。

用更少的GPU，运行更多的AI应用。

- 多个AI模型共享融合的分布式GPU池并使用虚拟GPU进行推理。
- 在毫秒内的CUDA API级别上自动扩缩AI应用程序

试想一下，每个AI应用程序，都能用到池中所有的GPU！

## 它是如何工作的？

张量融合框架包括：

- cf-client：Hook CUDA API以使推理应用无需GPU运行
- cf-server：重放CUDA调用、上下文切换
- cf-mediator（可选）：CUDA调用的Load-Balancer
- cf-control（可选）：用于管理GPU群集元数据的控制面，控制调度策略

![](https://cdn.gamma.app/2bbv2jorfkzmum4/d644830ef2ba49a78fb7e51f1b3d974f/original/cuda-fusion_page_page_page_page-1728562838096.png)

## TensorFusion如何为您提供帮助？

### 节省40％-90％的GPU成本

通过毫秒级调度，驱逐，负载平衡，摆脱定期GPU尖峰效果，将GPU的使用率整形，Scale to Zero。

### 弹性推理

自动在CUDA API级别扩容，大大增加推理吞吐量、减少热模型延迟。

### 轻松管理GPU节点

没有GPU Operator，drive, device-plugin, 或任何麻烦的Infra问题。

TensorFusion自动管理GPU池，就像NFS一样使用它即可！

## 动机

目前业界有3个常见问题。

### ＃1 AI模型运行成本过高

大规模的多模型推理时，多个GPU无法充分利用。

理想情况下，系统应该保持稳定的70%左右的GPU使用率，而不是10%-30%，从而节省超过50％的成本。

![](https://cdn.gamma.app/2bbv2jorfkzmum4/eeba1fce813f4a789ddca1b5892a62ae/original/image.png)

### ＃2开发人员缺乏GPU

开发AI应用、或通过Hands-on Lab学习时，多个开发人员/学生需要时排队锁定GPU机器，互相等待。

理想情况下，开发人员可以无需锁定整个VM，就能按需使用GPU资源。

![](https://cdn.gamma.app/2bbv2jorfkzmum4/635d6cff36ab4096bccccd7d19f27e2a/original/CUDA-Fusion_Page-2--1728563773207.png)

### ＃3云供应商GPU不够卖

云供应商向客户出售GPU机器，但他们总是缺乏可用的GPU。

理想情况下，云供应商应该能够超卖GPU，多租户在底层共享同一个物理设备。

![](https://cdn.gamma.app/2bbv2jorfkzmum4/3df49b34ff9a4171ba45bab3bcb31809/original/Screenshot-2024-10-10-at-20.41.13.png)

## 何时使用TensorFusion？

- 提供多个小型/中/大型型号，但不是Llama-3.1-70B或405B这种超大模型
- 当您为多个学习者建立AI动手实验室时。

## 何时不使用TensorFusion？

- 运行大于70B的单个超大模型。这类模型无法加载到单个GPU，是通信密集型场景，远程GPU池并不是最佳实践，请购买NVLink和NVSwwitch增加吞吐量。
- 当您不关心GPU费用时。
