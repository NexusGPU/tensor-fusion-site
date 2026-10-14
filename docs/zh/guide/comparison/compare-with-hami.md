---
outline: deep
---

# 与 HAMi 的对比

::: tip
持续维护的完整版本（分维度详述、实测开销与来源）见 [tensor-fusion.ai/docs › 与 HAMi 的对比](https://tensor-fusion.ai/zh/docs/tensor-fusion-engine/comparison/compare-with-hami)。本页是摘要，于 2026 年 10 月对照 HAMi v2.10.0 核对。
:::

[HAMi](https://github.com/Project-HAMi/HAMi) 是 Kubernetes 上的开源异构算力共享中间件，也是 CNCF 孵化（Incubating）项目。它和 TensorFusion 重合最多：两者都按算力和显存为容器切分 GPU，都在容器里加载一个库来执行限额，也都自带 GPU 感知调度器。

- **HAMi 更强的地方**：加速卡覆盖（十多家厂商）、开放程度（全部组件 Apache 2.0，由 CNCF 治理）、社区规模，以及与 Kubernetes 现有约定的贴合（标准扩展资源、`ResourceQuota`、Volcano、Kueue、Koordinator、KAI Scheduler，以及 DRA 驱动）。
- **TensorFusion 更强的地方**：请求与限额分开设置并带 QoS 等级、运行中调整限额、进程级和跨节点隔离、GPU-over-IP、通过 Karpenter 自动伸缩 GPU 节点、按用量自动调整规格，以及按工作负载的成本数据。

## 一览

| 维度 | TensorFusion | HAMi |
| --- | --- | --- |
| 架构与安装 | 一个 controller（webhook、调度器、CRD 控制器）、带自有 device plugin 的 hypervisor DaemonSet、存放指标的 GreptimeDB。 | Mutating webhook、scheduler extender、每家厂商一个 device plugin。 |
| 隔离 | `shared`、`soft`（进程内 limiter）、`hard`（独立 worker 进程）、`partitioned`（MIG、昇腾 vNPU）；远程模式再加一层节点边界。 | HAMi-core：进程内拦截 CUDA 调用的库；NVIDIA 上支持动态 MIG。 |
| 资源模型 | 算力用 TFLOPS 或百分比，显存用字节；请求与限额分开设置。 | 显存用 MiB 或百分比，算力用百分比，另有设备数量；每种资源一个值。 |
| 调度 | 自有调度器：紧凑装箱或负载均摊、NUMA 与 GPU 互联拓扑、Gang 调度、命名空间配额、四级 QoS。 | Scheduler extender：binpack、spread、mutex 策略，拓扑与 NUMA 感知，`ResourceQuota`，PodGroup Gang 调度；队列通过 Volcano、Kueue 或 KAI。 |
| 弹性 | 通过 Karpenter 或云 API 增减 GPU 节点、节点压缩、按用量调整规格、算力与显存超额分配。 | 未内置节点供给和规格调整；设备显存缩放比例可大于 1（实验特性）。 |
| 远程 GPU 与虚拟机 | CPU 节点上的 Pod 通过网络使用 GPU；虚拟机（Linux、Windows）使用宿主机 GPU，限计算类 API。 | 不支持。 |
| 硬件覆盖 | NVIDIA 支持全部模式；华为昇腾、摩尔线程、阿里 PPU 支持部分模式。 | NVIDIA、AMD Instinct、昇腾、寒武纪、海光、天数智芯、昆仑芯、沐曦、摩尔线程、燧原、AWS Neuron、壁仞、瀚博。 |
| 可观测性与成本 | 按工作负载的用量、内置告警规则、单价与按工作负载的成本指标、可选云端控制台。 | Prometheus 指标、Grafana 看板、HAMi-WebUI；没有成本归集。 |
| 性能开销 | `soft` 不设限时与原生相差 1% 以内（T4，vLLM / ONNX Runtime / TorchBench）。API 远程化（`hard`、远程）随工作负载变化。 | 上游基准：A100 上的 vLLM，v2.9 延迟比原生高约 1–3%。 |
| 兼容性 | 可与 NVIDIA GPU Operator 共存；可接管申请 `nvidia.com/gpu` 的 Pod。 | 在其管理的节点上取代 NVIDIA device plugin。 |
| 许可与支持 | controller、调度器、hypervisor 为 Apache 2.0；各厂商 limiter 与远程 client/worker 不开源，10 卡以下免费。NexusGPU 提供支持。 | 全部组件 Apache 2.0；2026 年 7 月起为 CNCF 孵化项目；Dynamia 提供企业版。 |

## 功能清单

| 功能 | TensorFusion | HAMi |
| --- | --- | --- |
| GPU 切分：显存与算力限额 | ✅ | ✅ |
| 请求与限额分开 | ✅ | ❌ |
| Pod 运行中调整限额 | ✅ | ❌ |
| 进程级隔离 | ✅ `hard` | ❌ |
| 硬件分区 | ✅ MIG、昇腾 vNPU | ✅ 动态 MIG、厂商模板 |
| 超额分配 | ✅ 算力和显存 | 部分，显存缩放（实验特性） |
| 远程 GPU（GPU-over-IP） | ✅ 以 NVIDIA 为主 | ❌ |
| 虚拟机使用宿主机 GPU | ✅ 计算类 API | ❌ |
| Gang 调度 | ✅ | ✅ PodGroup（v2.10），或 Volcano |
| 命名空间 GPU 配额 | ✅ | ✅ `ResourceQuota` |
| DRA | ❌ | ✅ HAMi-DRA |
| GPU 节点自动伸缩（Karpenter、云 API） | ✅ | ❌ |
| 节点压缩 | ✅ | ❌ |
| 按用量调整规格 | ✅ | ❌ |
| 按工作负载的成本归集 | ✅ | ❌ |
| Web 控制台 | ✅ 可选云端控制台 | ✅ HAMi-WebUI |
| GPU 热迁移 | 商业版 | ❌ |
| NVIDIA 以外的厂商 | 部分，三家 | ✅ 十多家 |
| 完全开源 | 部分 | ✅ |

## 申请 GPU 的写法

```yaml
# HAMi
spec:
  containers:
    - name: app
      resources:
        limits:
          nvidia.com/gpu: 1        # GPU 数量
          nvidia.com/gpumem: 4096  # 每张卡的显存，单位 MiB
          nvidia.com/gpucores: 30  # 每张卡的算力百分比
```

```yaml
# TensorFusion
metadata:
  labels:
    tensor-fusion.ai/enabled: "true"
  annotations:
    tensor-fusion.ai/tflops-request: "10"
    tensor-fusion.ai/tflops-limit: "20"
    tensor-fusion.ai/vram-request: "4Gi"
    tensor-fusion.ai/vram-limit: "4Gi"
```

## 如何选择

以下情况选 HAMi：使用 TensorFusion 尚未支持的加速卡；要求全部组件开源并由 CNCF 治理；已经在用 Volcano、Kueue、Koordinator 或 KAI Scheduler；或者只需要固定限额的本地 GPU 切分，并希望组件尽量少。

以下情况选 TensorFusion：在云上希望少用 GPU 节点（紧凑装箱、Karpenter 节点自动伸缩、释放空节点）；希望按实际用量调整 GPU 限额且不重启 Pod；需要带 QoS 等级的请求与限额；Pod 或虚拟机需要使用其他机器上的 GPU；或者需要按工作负载的成本数据做内部分摊。
