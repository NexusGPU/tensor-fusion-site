---
outline: deep
---

# Tensor Fusion Deployment for VM/BareMetal

## Files

https://r2-upload.code2life.top/CUDA-Fusion.tar

## Client

**Environment**: Ubuntu 24.04 or Rocky Linux 9.0

**Dependencies**:
1. Install CUDA 12.1 official package [Download Link](https://r2-upload.code2life.top/cuda_12.1.0_530.30.02_linux.run)
    During installation, select to install CUDA Toolkit only, do not install the NVIDIA driver;
2. Install Tensor Fusion client part
    Extract CUDA-Fusion.tar, copy all files from `CUDA-Fusion/client/libs` to the CUDA installation directory `/usr/local/cuda-12.1/lib64/`
3. Install PyTorch, [Download Link](https://r2-upload.code2life.top/torch-2.1.0a0+gita8e7c98-cp312-cp312-linux_x86_64.whl)
    This version uses PyTorch code tag-v2.1.2 and dynamically links to the CUDA runtime.

**Startup Command**:
```sh
./vcuda-client [Node ID] [Server IP] [Protocol Type] [Send Port] [Receive Port] [Register Port] [GPU ID]
```

**Example**:
```sh
./vcuda-client 0 192.168.2.129 native 9998 9997 9999 0
```

**Parameter Explanation**:
- **Node ID**: Numeric ID defined for each server
- **Protocol Type**: `native`/`light` transmission protocol, must be consistent between client and server
- **GPU ID**: The ID of the GPU used by this configuration on the server

**Note**:
- The send port corresponds to the server's receive port, the receive port corresponds to the server's send port, and the register port must be consistent between client and server.
- After the `vcuda-client` successfully establishes a connection with the server, the `vcuda-client` can take over all CUDA requests of the current system.

## Server

**Environment**: Ubuntu 24.04 or Rocky Linux 9.0

**Dependencies**:
1. Install the official NVIDIA driver:
     ```sh
     apt install nvidia-driver-535
     ```
2. Install CUDA 12.1 official package [Download Link](https://r2-upload.code2life.top/cuda_12.1.0_530.30.02_linux.run)
    During installation, select to install CUDA Toolkit only, do not install the NVIDIA driver.
3. Install CUDNN, [Download Link](https://r2-upload.code2life.top/cudnn-linux-x86_64-8.8.1.3_cuda12-archive.tar.xz)
    Extract and place it in the `/usr/local/` directory.

**Startup Command**:
```sh
LD_LIBRARY_PATH=/usr/local/cudnn-linux-x86_64-8.8.1.3_cuda12-archive/lib/ ./vcuda -n native -s 9997 -r 9998 -p 9999 -a 0x1129 -k 0x298
```

**Parameter Explanation**:
- `-n`: `native`/`light` transmission protocol, must be consistent between client and server
- `-s`: Send port
- `-r`: Receive port
- `-p`: Register port
- `-a`: Memory tag
- `-k`: Kernel parameter offset (related to the server's NVIDIA driver and CUDA version)