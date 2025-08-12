# GPU/Driver/OS Support Matrix

TensorFusion supports all series of NVIDIA GPUs from Volta architecture and above, with NVIDIA driver versions starting from 530.x, and CUDA versions range from 12.1 to the latest.

| GPU Vendor | GPU Architecture | GPU Series | Driver Version |
|------------|------------------|------------|----------------|
| NVIDIA     | Volta            | V100, Tesla V100 | 530.x - Latest |
|            | Turing           | RTX 20 Series, Quadro RTX Series  | 530.x - Latest |
|            | Ampere           | A100, A40, A10, A10G, A800, RTX 30 Series, RTX A Series | 530.x - Latest |
|            | Hopper           | H100, H200, H800, H20 | 530.x - Latest |
|            | Ada Lovelace     | L40, L40S, L4, RTX 40 Series, RTX Ada Series | 530.x - Latest |
|            | Blackwell        | B100, B40, RTX 50 Series | 530.x - Latest |
| AMD        | RDNA             | RX 6000 Series, RX 7000 Series | Planned    |
|            | CDNA             | MI200 Series, MI300 Series | Planned    |


### Operation System Support

TensorFusion ControlPlane and Worker supports all major Linux distributions, including:

- Ubuntu
- Red Hat
- SUSE
- Amazon Linux
- CentOS
- ...

For GPU Client side, you can run in following OS:

- Linux Kernel 4.x and above
- Windows 10 and above (64-bit)
- MacOS (WIP)

### CPU Architecture Support

- TensorFusion Worker & ControlPlane supports x86_64 and ARM64, x86_64 is battle-tested and ARM64 is currently under testing
- TensorFusion GPU Client side supports x86_64 and ARM64


