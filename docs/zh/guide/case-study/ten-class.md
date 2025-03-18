---
outline: deep
---

# 十方融海如何用TensorFusion节省80%GPU成本？

## 背景

[十方融海](https://www.tenclass.com/)是深圳一家知名的专注于职业教育的科技公司，理论+实操教学模式，利用科技优势赋能教学，提供围绕数字时代的文化素养及专业技能课程服务，帮助用户提升数字化能力。

## 问题与挑战

为了给学生提供最便捷、优质的实操环境，十方融海自研了虚拟机[mvisor](https://github.com/tenclass/mvisor)，但在AI绘图、AI视频职业教育课程的实操环境构建时，由于ComfyUI、Stable Diffusion等在线实验室环境在模型推理时需要直接访问GPU，**由于GPU虚拟化技术不成熟，为每一位学员配备专属的AI绘图环境非常困难、成本高昂**。


## 解决方案

在了解到TensorFusion可实现GPU虚拟化和池化后，经过一段时间的评估和落地，十方融海成为了TensorFusion的第一个客户。

TensorFusion为十方融海提供了以下解决方案，解决**大量用户的云端实验室环境**需要**中低频使用GPU算力的成本问题、GPU可用性问题**：

- 在Linux环境构建T4 GPU组成的、按需扩缩容的GPU池
- 每个T4根据ComfyUI需要的模型，切分成2个或3个虚拟GPU、在不活跃时自动将显存冷却到内存中，挂起对应的虚拟GPU算力
- 在同一个VPC中，每个用户专属的Windows虚拟机实操环境，内置了TensorFusion Client，启动或执行绘图工作流时，自动连接到虚拟GPU，按需获取AI算力


## 实施结果

| 使用 TensorFusion 前 | 使用 TensorFusion 后 |
|:--------------------------|:--------------------------|
| <span style="color: #FF6B6B;">😕 需要给每一个学员配备云端GPU</span> | <span style="color: #4ECB71;">😊 节省超80% GPU成本</span> |
| <span style="color: #FF6B6B;">😕 GPU资源时有短缺，无法从云厂商买到</span> | <span style="color: #4ECB71;">😊 GPU算力可用性达到99.9%</span> |
| <span style="color: #FF6B6B;">😕 实验环境搭建耗时较长</span> | <span style="color: #4ECB71;">😊 实验室环境创建时间缩短45%</span> |