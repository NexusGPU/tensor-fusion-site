---
outline: deep
---

# 在VM/BareMetal部署Tensor Fusion

## 文件
https://r2-upload.code2life.top/CUDA-Fusion.tar

## 客户端

**环境**：Ubuntu 24.04 or Rocky linux 9.0

**安装依赖**：
1. 安装 CUDA 12.1 官方安装包 [下载链接](https://r2-upload.code2life.top/cuda_12.1.0_530.30.02_linux.run)
安装时勾选安装 CUDA Toolkit 即可，不要安装 NVIDIA 驱动；
2. 安装 Tensor Fusion 客户端部分
解压CUDA-Fusion.tar，将 `CUDA-Fusion/client/libs` 下的所有文件覆盖拷贝至 CUDA 安装目录 `/usr/local/cuda-12.1/lib64/`
3. 安装pytorch，[下载链接](https://r2-upload.code2life.top/torch-2.1.0a0+gita8e7c98-cp312-cp312-linux_x86_64.whl)
该版本使用pytorch代码tag-v2.1.2，且动态链接cuda runtime library

**启动命令**：
```sh
./vcuda-client [节点编号] [服务端 IP] [协议类型] [发送端口] [接收端口] [注册端口] [显卡编号]
```

**示例**：
```sh
./vcuda-client 0 192.168.2.129 native 9998 9997 9999 0
```

**参数解析**：
- **节点编号**：每台服务器定义的数字编号
- **协议类型**：`native`/`light` 传输协议，客户端需要和服务端保持一致
- **显卡编号**：本条配置所使用的显卡在该服务器的编号

**注意**：
- 发送端口对应服务端接收端口，接收端口对应服务端发送端口，注册端口客户端与服务端保持一致
- 在vcuda-client与server端成功建立连接后，vcuda-client即可接管当前系统的所有cuda请求

## 服务端

**环境**：Ubuntu 24.04 or Rocky linux 9.0

**安装依赖**：
1. 安装 NVIDIA 官方驱动：
    ```sh
    apt install nvidia-driver-535
    ```
2. 安装 CUDA 12.1 官方安装包 [下载链接](https://r2-upload.code2life.top/cuda_12.1.0_530.30.02_linux.run)
安装时勾选安装 CUDA Toolkit 即可，不要安装 NVIDIA 驱动
3. 安装 CUDNN，[下载链接](https://r2-upload.code2life.top/cudnn-linux-x86_64-8.8.1.3_cuda12-archive.tar.xz) 
解压后放在 `/usr/local/` 目录下

**启动命令**：
```sh
LD_LIBRARY_PATH=/usr/local/cudnn-linux-x86_64-8.8.1.3_cuda12-archive/lib/ ./vcuda -n native -s 9997 -r 9998 -p 9999 -a 0x1129 -k 0x298
```

**参数解析**：
- `-n`：`native`/`light` 传输协议，客户端需要和服务端保持一致
- `-s`：发送端口
- `-r`：接收端口
- `-p`：注册端口
- `-a`：显存标记
- `-k`：内核参数偏移（与服务端nvidia驱动以及cuda版本相关）