---
outline: deep
---

# 与HAMi的对比

[HAMi](https://github.com/Project-HAMi/HAMi) 是一个流行的多厂商GPU/NPU资源池管理解决方案，提供分片GPU和动态MIG功能。

与HAMi相比，TensorFusion不仅提供GPU切分，还通过完全不同的技术实现了真正的GPU虚拟化、隔离、远程共享和实时迁移，有更丰富的企业级功能和云厂商集成。

### 功能对比

| 功能 | TensorFusion | HAMi |
| --- | --- | --- |
| **基础功能** |  |  |
| GPU切分 | ✅ | ✅ |
| GPU池管理 | ✅ | ✅ |
| GPU调度与分配 | ✅ | ✅ |
| 远程GPU共享 | ✅ | ❌ |
| **高级功能** |  |  |
| 无缝迁移现有服务 | ✅ | ✅ |
| 监控与告警 | ✅ | ✅ |
| GPU超额分配 | ✅ | 🚧 |
| GPU显存扩充与冷热分层 | ✅ | ❌ |
| 基于GPU资源的自动扩缩容 | ✅ | ❌ |
| 自定义QoS级别 | ✅ | ❌ |
| 分配单机多个vGPU | ✅ | ✅ |
| GPU节点自动买/停 | ✅ | ❌ |
| GPU算力碎片整理 | 🚧 | 🚧 |
| NVIDIA MIG动态配置 | 👋 | ✅ |
| 云端控制台 | ✅ | ✅ |
| 支持非英伟达 GPU | 🚧 | ❌ |
| **企业级功能** |  |  |
| GPU实时迁移 | 🚧 | ❌ |
| CUDA调用链追踪与分析 | 🚧 | ❌ |
| AI模型预加载 | 🚧 | ❌ |
| 高级扩缩容策略与热点显卡平衡 | 🚧 | ❓ |
| GPU集群用量统计与货币化 | 🚧 | ❌ |

注：
- ✅ 表示支持
- ❌ 表示不支持
- 🚧 表示开发中
- ❓ 表示未知
- 👋 表示不再需要

TensorFusion和HAMi都提供Kubernetes环境下的GPU切分、分布式调度。TensorFusion功能更丰富，而HAMi支持更多GPU厂商。

在GPU切分设计上，HAMi采用百分比配额方式，而TensorFusion使用FP16 TFlops作为度量单位。百分比方式可能导致不可预测的行为，因为不同代际GPU的1%算力差异巨大。

在技术实现方面，两者在Kubernetes层都使用Golang开发，但在虚拟化层HAMi使用C语言，TensorFusion使用Rust和C++。技术上另一个本质区别在于HAMi通过DevicePlugin注入劫持后的libcuda，而TensorFusion只依赖PodMutationWebhook，HAMi对劫持的libcuda只覆盖了资源配额相关的API，而TensorFusion实现了完整的GPU设备虚拟化和远程共享。

### 部署与使用

HAMi提供Helm部署，TensorFusion则提供更友好的控制台进行GPU集群管理。TensorFusion架构更简单，无需Kubernetes DevicePlugin或SchedulerPlugin，为社区和商业用户提供完整的控制平面，一键部署，多集群统一管控。

使用对比：

```yaml
# HAMI
spec:
  containers:
    - name: python
      image: ...
      resources:
        limits:
          nvidia.com/gpu: 1 // [!code highlight]
          nvidia.com/gpumem: 3000 # 3000Mi显存 // [!code highlight]
          nvidia.com/gpucores: 30 # 请求30%计算资源 // [!code highlight]
```

TensorFusion只需添加PodTemplate注解，更简单灵活：

```yaml
# TensorFusion
metadata:
  labels:
    tensor-fusion.ai/enabled: 'true' // [!code highlight]
  annotations:
    tensor-fusion.ai/workload-profile: example-workload-profile // [!code highlight]
    tensor-fusion.ai/vram-limit: 4Gi // [!code highlight]
```

## 总体拥有成本(TCO)

简言之：小规模GPU池时HAMi开源版TCO与TensorFusion相当，但当GPU池扩大需要复杂编排和调度时，HAMi功能较少，其综合使用成本增长更快。

### 小型GPU池场景

如果您的AI Infra团队有丰富的Kubernetes和GPU管理经验，HAMi开源版是不错的选择，否则TensorFusion因依赖更少、认知负荷更低，对多数AI Infra团队是更优选择。

### 中大型GPU池场景

当GPU池规模扩大时，丰富功能集变得更重要。HAMi缺乏资源超售、远程共享和实时迁移等功能，综合使用成本将显著高于TensorFusion。

### 其他考量

HAMi的企业版主要面向中国GPU厂商和市场，而TensorFusion由新加坡公司NexusGPU PTE.LTD.开发，国际企业或中国大陆出海企业用户可获得NexusGPU提供的24x7商业支持、企业级安全合规能力（开发中），包括SAML/OIDC、SOC2、ISO27001等国际认证。
