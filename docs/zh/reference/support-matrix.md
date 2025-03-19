# GPU/驱动/操作系统支持矩阵

TensorFusion 支持从 Volta 架构开始的所有系列 NVIDIA GPU，NVIDIA 驱动版本从 470.x 开始到最新版本

对于NVIDIA CUDA运行时，支持版本范围从CUDA 11.8 到最新版本。

| GPU厂商 | GPU架构 | 产品线 | 驱动版本 |
|------------|------------------|------------|----------------|
| NVIDIA     | Volta            | V100, Tesla V100 | 470.x - Latest |
|            | Turing           | RTX 20 Series, Quadro RTX Series  | 470.x - Latest |
|            | Ampere           | A100, A40, A10, A10G, A800, RTX 30 Series, RTX A Series | 470.x - Latest |
|            | Hopper           | H100, H200, H800, H20 | 470.x - Latest |
|            | Ada Lovelace     | L40, L40S, L4, RTX 40 Series, RTX Ada Series | 470.x - Latest |
|            | Blackwell        | B100, B40, RTX 50 Series | 470.x - Latest |
| AMD        | RDNA             | RX 6000 Series, RX 7000 Series | Planned    |
|            | CDNA             | MI200 Series, MI300 Series | Planned    |


### 操作系统支持

TensorFusion 控制端和Worker端支持所有主要的 Linux 发行版，包括：

- Ubuntu
- Red Hat
- SUSE
- Amazon Linux
- CentOS
- ...

对于使用算力的GPU客户端应用，AI 工作负载可以在以下环境中运行：

- Linux 内核 4.x 及以上版本
- Windows 10 及以上版本（64位）
- MacOS (开发中)

### CPU架构支持

- TensorFusion 控制端和Worker端支持 x86_64 和 ARM64，x86_64 经过充分测试，ARM64 目前正在测试中。
- TensorFusion GPU客户端支持 x86_64, ARM64。