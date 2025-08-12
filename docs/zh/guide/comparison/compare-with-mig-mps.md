---
outline: deep
---

# 与MIG/MPS/Timeslicing的对比

NVIDIA MIG（多实例GPU）提供基础的GPU分区能力，单卡最多支持7个实例，但仅限Ampere架构及以上显卡。

NVIDIA的**MPS**（多进程服务）和**分时复用**特性为多进程提供简单的GPU共享，但缺乏错误隔离且无法有效限制CUDA/TensorCore和显存资源。尤其是Timeslicing，因完全缺乏资源控制已被证明风险较大，不适合生产环境使用。

TensorFusion提供端到端的GPU虚拟化与资源池方案，支持几乎所有工业级NVIDIA GPU型号。

### 功能对比

| 功能 | TensorFusion | MIG + MPS | 备注 |
| --- | --- | --- | --- |
| **基础功能** |  |  |  |
| GPU切分 | ✅ | ✅ | MIG方案单卡最多7个子GPU |
| GPU池管理 | ✅ | ❌ | 依赖nvidia-gpu-operator进行基础GPU节点管理 |
| GPU调度与分配 | ✅ | ❌ | 基于Kubernetes原生调度器的单设备级分配 |
| 远程GPU共享 | ✅ | ❌ | 不支持 |
| **高级功能** |  |  |  |
| 无缝迁移现有服务 | ✅ | ❌ | 需手动配置 |
| 监控与告警 | ✅ | ❌ |  |
| GPU超额分配 | ✅ | ❌ |  |
| GPU显存扩展与冷热分层 | ✅ | ❌ |  |
| 基于GPU资源的自动扩缩 | ✅ | ❌ |  |
| 自定义QoS级别 | ✅ | ❌ |  |
| 分配单机多个vGPU | ✅ | ❌ |  |
| GPU节点自动买/停 | ✅ | ❌ |  |
| GPU算力碎片整理 | 🚧 | ❌ |  |
| 集中式控制台 | ✅ | ❌ |  |
| 支持非英伟达 GPU | 🚧 | ❌ |  |
| **企业级功能** |  |  |  |
| GPU实时迁移 | 🚧 | ❌ |  |
| CUDA调用链追踪分析 | 🚧 | ❌ |  |
| AI模型预加载 | 🚧 | ❌ |  |
| 高级扩缩容策略与热点显卡平衡 | 🚧 | ❌ |  |
| GPU集群用量统计与货币化 | 🚧 | ❌ |  |

注：
- ✅ 表示支持
- ❌ 表示不支持
- 🚧 表示开发中
- ❓ 表示未知
- 👋 表示不再需要

MIG+MPS作为NVIDIA官方的GPU分区共享方案，存在明显的局限性：配置复杂、缺乏细粒度资源控制、不支持超售和远程共享，且在Kubernetes环境中依赖nvidia-gpu-operator。

TensorFusion提供更完整的虚拟化和池化功能集，而不仅仅是一个分区工具，提供更平滑的接入体验和自动化管理功能，支持几乎所有的业界在使用NVIDIA GPU型号。

MIG+MPS与NVIDIA特定架构的GPU硬件绑定，而TensorFusion是硬件厂商中立的软件方案。

### 部署与使用

NVIDIA MIG+MPS需要人工规划配置，学习曲线陡峭。

TensorFusion依赖更少且提供完整控制平面，为社区和商业用户提供开箱即用的GPU/NPU集群管理能力。

使用对比：

```yaml
# NVIDIA MIG+MPS Pod模板
spec:
  volumes:
    - name: nvidia-mps
      hostPath:
        path: /tmp/nvidia-mps
  containers:
    - name: python
      image: ...
      env:
        - name: CUDA_MPS_PIPE_DIRECTORY
          value: "/tmp/nvidia-mps"
        - name: CUDA_MPS_LOG_DIRECTORY
          value: "/tmp/nvidia-log"
      resources:
        limits:
          nvidia.com/mig-2g.10gb: 1 // [!code highlight]
---
# 需手动配置MIG profile
apiVersion: v1
kind: ConfigMap
metadata:
  name: nvidia-mig-config
  namespace: kube-system
data:
  config.yaml: |
    version: v1
    sharing:
      mps:
        resources:
          - name: nvidia.com/mig-3g.20gb
            replicas: 1
          - name: nvidia.com/mig-2g.10gb
            replicas: 2
    mig-configs:
      # 复杂的资源规划与手动配置 // [!code highlight]
      all-3g.20gb-2g.10gb:
        - devices: ["0"]
          mig-enabled: true
          mig-devices:
            - profile: "3g.20gb"
              count: 1
            - profile: "2g.10gb"
              count: 2
```

TensorFusion无需Kubernetes DevicePlugin或MPS守护进程，只需添加Pod注解即可，更简单灵活：

```yaml
# TensorFusion
metadata:
  labels:
    tensor-fusion.ai/enabled: 'true' // [!code highlight]
  annotations:
    tensor-fusion.ai/workload-profile: example-workload-profile // [!code highlight]
    # 可覆盖配置参数
    tensor-fusion.ai/vram-limit: 4Gi // [!code highlight]
```

## 总体拥有成本(TCO)

MIG+MPS的综合成本显著高于TensorFusion，主要由于：
- 复杂的人工规划配置
- 粗粒度资源控制
- 仅有GPU分区功能
- 厂商锁定

相较之下，TensorFusion保持厂商中立和开源，支持细粒度资源控制与远程共享，并提供丰富的自动化功能。小型团队可免费使用，中大型团队仅需支付不足算力成本4%的费用。

<!-- ### 性能对比 -->
<!-- 基准测试 -->