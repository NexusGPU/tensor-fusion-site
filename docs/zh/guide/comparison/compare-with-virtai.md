---
outline: deep
---

# 与VirtAI OrionX对比

VirtAI OrionX作为闭源的GPU池化与虚拟化解决方案，功能与HAMi有所重叠，但其企业级功能完备性比HAMi更好。

TensorFusion在提供类似能力的同时，基于完全不同的技术架构实现。TensorFusion大部分代码开源，支持自助式部署，并支持现有GPU工作负载的无缝迁移。

## 功能

| 功能 | TensorFusion | VirtAI OrionX |
| --- | --- | --- |
| <b>基础功能</b> |  |  |
| GPU切分 | ✅ | ✅ |
| GPU池管理 | ✅ | ✅ |
| GPU调度与分配 | ✅ | ✅ |
| 远程GPU共享 | ✅ | ✅ |
| <b>高级功能</b> |  |  |
| 无缝迁移现有服务 | ✅ | ✅ |
| 监控与告警 | ✅ | ✅ |
| GPU超额分配 | ✅ | ✅ |
| GPU显存扩展与冷热分层 | ✅ | ✅ |
| 基于GPU资源的自动扩缩容 | ✅ | ❌ |
| 自定义QoS级别 | 🚧 | ❓ |
| 多机多卡vGPU | 🚧 | ✅ |
| GPU节点自动买/停 | ✅ | ❌ |
| GPU算力碎片整理 | 🚧 | ✅ |
| NVIDIA MIG动态配置 | 👋 | 👋 |
| IDE扩展插件 | 🚧 | ❌ |
| 云端控制台 | ✅ | ✅ |
| 支持AMD GPU | 🚧 | ❌ |
| 支持昇腾/寒武纪等GPU/NPU | 🚧 | ✅ |
| <b>企业级功能</b> |  |  |
| GPU实时迁移 | 🚧 | ❌ |
| CUDA调用链追踪分析 | 🚧 | ❌ |
| AI模型预加载 | 🚧 | ❌ |
| 高级扩缩容策略与热点显卡平衡 | 🚧 | ❓ |
| GPU集群用量统计与货币化 | 🚧 | ❌ |


## 部署与使用

VirtAI OrionX需要许可证，不提供自助式上线。您只能"预约演示"并联系销售人员开始使用。另外，需要[自定义环境变量](https://virtaitech.com/development?doc=4r4gnqv5j9qgw70njj2a2jnzma)，并更改Kubernetes Scheduler，对业务有一定侵入。

VirtAI OrionX对Kubernetes的支持程度较普通，而TensorFusion团队成员有Kubernetes Contributor，在Kubernetes的生态兼容性、云厂商集成方面更好。

```yaml
# VirtAI OrionX 示例
env:
  - name: ORION_VGPU
    value: "1"
  - name: ORION_GMEM
    value: "4096"
  - name: ORION_RATIO
    value: "100"
  - name: ORION_RESERVED
    value: "0"
  - name: ORION_CROSS_NODE
    value: "0"
  - name : ORION_GROUP_ID
    valueFrom:
      fieldRef:
        fieldPath: metadata.uid
resources:
  limits:
    virtaitech.com/gpu: 1
```

TensorFusion依赖更少，比VirtAI OrionX更开放，提供自助式接入和免费的社区版。

对于终端用户，只需在PodTemplate中添加注解，更简单、更灵活。

```yaml
# TensorFusion
metadata:
  labels:
    tensor-fusion.ai/enabled: 'true' // [!code highlight]
  annotations:
    tensor-fusion.ai/workload-profile: example-workload-profile // [!code highlight]
    # 您可以覆盖配置文件字段
    tensor-fusion.ai/vram-limit: 4Gi // [!code highlight]
```

### 总拥有成本

VirtAI OrionX的总拥有成本高于TensorFusion，原因如下：

- 高昂的许可成本
- 闭源
- 有限的自动扩缩容策略
- 专注于中国市场，缺乏全球支持

相比之下，TensorFusion是开源的，并有免费的社区版、全球24x7的技术支持网络。