---
outline: deep
---

# 与 Run.AI 对比

[Run.AI](https://run.ai) 是闭源的商业化GPU集群管理平台，提供GPU池化和切分能力。其功能集与[HAMi](https://github.com/Project-HAMi/HAMi)相似，Run.AI也不支持GPU远程共享和显存冷热分层技术。另外，NVIDIA 于 2024 年 12月收购了Run.AI。

TensorFusion 开源了大部分代码，为AI Infra团队提供端到端的GPU虚拟化与池化解决方案。作为新兴的硬件厂商中立方案，TensorFusion技术栈、架构、功能集有所区别。

### 功能对比

| 功能 | TensorFusion | Run.AI |
| --- | --- | --- |
| **基础功能** |  |  |
| GPU切分 | ✅ | ✅ |
| GPU池管理 | ✅ | ✅ |
| GPU调度与分配 | ✅ | ✅ |
| 远程GPU共享 | ✅ | ❌ |
| **高级功能** |  |  |
| 无缝迁移现有服务 | ✅ | ❓ |
| 监控与告警 | ✅ | ✅ |
| GPU超额分配 | ✅ | ❌ |
| GPU显存扩展与冷热分层 | ✅ | ❌ |
| 基于GPU资源的自动扩缩容 | ✅ | ✅ |
| 自定义QoS级别 | ✅ | ❌ |
| 分配单机多个vGPU | ✅ | ✅ |
| GPU节点自动买/停 | ✅ | ❌ |
| GPU算力碎片整理 | 🚧 | ✅ |
| NVIDIA MIG动态配置 | 👋 | ✅ |
| 云端控制台 | ✅ | ✅ |
| 支持非英伟达 GPU | 🚧 | ❌ |
| **企业级功能** |  |  |
| GPU实时迁移 | 🚧 | ❌ |
| CUDA调用链追踪分析 | 🚧 | ❌ |
| AI模型预加载 | 🚧 | ❌ |
| 高级扩缩容策略与热点显卡平衡 | 🚧 | ❓ |
| GPU集群用量统计与货币化 | 🚧 | ❌ |

注记：
- ✅ 表示支持
- ❌ 表示不支持
- 🚧 表示开发中
- ❓ 表示未知
- 👋 表示无需支持

简而言之，Run.AI 作为闭源方案，提供专有的命令行工具、用户界面和API来管理GPU资源池和工作负载，不支持无缝迁移，无法实现远程共享。

### 部署与使用

Run.AI 不提供自助式接入，用户需通过"预约演示"联系销售人员开通服务。该平台还试图通过专有的Custom Resources 如 "InferenceWorkload" 进行封装，这种设计无法实现无缝迁移，会对现有工作负载造成影响。

TensorFusion 依赖更少且更加开放，为社区用户和商业用户提供完整的GPU/NPU集群控制平面，能够让用户自助服务。

```yaml
# Run.AI 申请GPU资源运行推理服务的示例
apiVersion: run.ai/v2alpha1
kind: InferenceWorkload
metadata:
  name: inference1
  namespace: default
spec:
  name:
    value: inference1
  gpu:
    value: "0.5"
  image:
    value: "gcr.io/run-ai-demo/example-triton-server"
  minScale:
    value: 1
  maxScale:
    value: 2
  metric:
    value: concurrency # 
  target:
    value: 80  # 
  ports:
      items:
        port1:
          value:
            container: 8000
```

TensorFusion 的接入更加简单灵活，用户只需在 PodTemplate 中添加注解即可：

```yaml
# TensorFusion
metadata:
  labels:
    tensor-fusion.ai/enabled: 'true' // [!code highlight]
  annotations:
    tensor-fusion.ai/workload-profile: example-workload-profile // [!code highlight]
    # 可覆盖配置档字段
    tensor-fusion.ai/vram-limit: 4Gi // [!code highlight]
```

## 总体拥有成本

Run.AI 的 TCO 显著高于 TensorFusion，主要原因包括：

- 高昂的授权费用
- 闭源架构与黑盒逻辑
- 专有资源定义，与现有工作负载不兼容
- 有限的自动扩缩容能力
- 供应商锁定风险

相较之下，TensorFusion 作为厂商中立的开源方案，支持无缝迁移和弹性扩缩容。小规模团队可免费使用，中大型团队使用费用不超过计算资源本身的4%即可享受50%以上的成本节约。