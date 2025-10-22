---
outline: deep
---

# Tensor Fusion 宿主机 + 虚拟机部署指南
在宿主机（Host）运行 tensor-fusion-worker，在虚拟机（VM）内部署tensor-fusion-client，实现无需直通 GPU 的虚拟机使用物理机 GPU 资源。

## 名词解释
1. Tensor-fusion-worker: 以下简称worker，是一个独立的二进制程序，每台宿主机上可以同时运行多个worker实例，负责接收来自client的计算请求，并执行计算任务。
2. Tensor-fusion-client: 以下简称client，包含若干相关动态链接库文件，完整导出CUDA和NVML相关API，运行在独立的业务环境内，负责将计算请求发送至宿主机上的worker。

> [!NOTE]注意: 多个client可以连接到同一个worker实例, 但是建议生产环境中每个client对应一个worker实例，便于管理和资源分配。

## 前提条件

1. 一台拥有NVIDIA GPU的Linux宿主机，建议GPU驱动版本 570.XX 及以上
3. 一台或多台虚拟机（QEMU/MVisor/VMware/Hyper-V 等均可），与宿主机能够通过<b>网络或共享内存进行互通</b>

## 步骤一：下载tensor-fusion

1. 下载最新版本

### 客户端
-  [libcuda.so](https://cdn.tensor-fusion.ai/archive/tensor-fusion-client/latest/libcuda.so)
-  [libnvidia-ml.so](https://cdn.tensor-fusion.ai/archive/tensor-fusion-client/latest/libnvidia-ml.so)
-  [libteleport.so](https://cdn.tensor-fusion.ai/archive/tensor-fusion-client/latest/libteleport.so)
> [!NOTE]注意：如需Windows版本，请联系我们获取（support@tensor-fusion.com）

### 服务端
-  [tensor-fusion-worker](https://cdn.tensor-fusion.ai/archive/tensor-fusion-worker/latest/tensor-fusion-worker)

## 步骤二：在宿主机安装 tensor-fusion-worker

```bash
./tensor-fusion-worker -h
Usage: tensor-fusion-worker [option]
Options
  -h, --help            Display this information.
  -v, --version         Display version information.
  -n, --net             Specified network protocol.
  -p, --port            Specified the port for server.
  -l, --load            Specified the file path of snapshot.
  -m, --shmem-file      Specified the file path of shared memory.
  -M, --shmem-size      Specified the size(MB) of shared memory.
```
> [!NOTE]注意
> 1. 目前worker支持两种协议，分别是NATIVE和SHMEM
> 2. NATIVE: 直接通过tcp网络进行通信，部署简单，建议在内网并且ping值保持在0.8ms以内时使用
> 3. SHMEM: 通过共享内存进行通信，效率最高，适合对延迟敏感的场景。

使用NATIVE协议启动，绑定端口号12345：
```bash
TF_ENABLE_LOG=1 ./tensor-fusion-worker -n native -p 12345
```

使用SHMEM协议启动，创建共享内存/my_shm， 并设置共享内存大小为256MB：
```bash
TF_ENABLE_LOG=1 ./tensor-fusion-worker -n shmem -m /my_shm -M 256
```

> [!NOTE]环境变量
> - TF_ENABLE_LOG: 启用日志记录，默认为禁用
> - TF_LOG_LEVEL: 日志级别，支持值为trace/debug/info/warn/error，默认为info
> - TF_LOG_PATH: 日志文件路径，默认为空（即输出到标准输出）
> - TF_CUDA_MEMORY_LIMIT: CUDA内存限制，单位为MB，默认为不限制

## 步骤三：在VM中安装 tensor-fusion-client

### Windows 系统
将文件（nvcuda.dll、nvml.dll、teleport.dll）放置在系统路径中，或与业务程序在同一目录下，确保业务程序能正常引用。
### Linux 系统
将文件（libcuda.so、libnvidia-ml.so、libteleport.so）通过LD_LIBRARY_PATH或LD_PRELOAD将动态链接库文件注入到业务程序中。

> [!TIP]注意: 由于用户操作系统环境复杂，请确保client相关动态链接库被业务进程成功加载并使用

> [!NOTE]环境变量
> - TF_ENABLE_LOG: 启用日志记录，默认为禁用
> - TF_LOG_LEVEL: 日志级别，支持值为trace/debug/info/warn/error，默认为info
> - TF_LOG_PATH: 日志文件路径，默认为空（在Linux环境下输出到控制台，在Windows中可通过DebugView查看）
> - TENSOR_FUSION_OPERATOR_GET_CONNECTION_URL: 获取连接URL，默认为空
> - TENSOR_FUSION_OPERATOR_CONNECTION_INFO: 获取连接调试信息，格式:协议+参数1+参数2+连接版本号(目前固定为0)，默认为空
> - TF_MAX_CACHE_REQUEST_COUNT: 最大缓存请求数量，默认为100

> [!TIP]注意
> 可以通过TENSOR_FUSION_OPERATOR_CONNECTION_INFO直接设置worker连接信息，也可以在TENSOR_FUSION_OPERATOR_GET_CONNECTION_URL中设置一个GET请求地址，返回连接信息

## 步骤四：验证

我们可以使用python结合pytorch-cuda在Linux VM中进行验证。

#### NATIVE协议
如果worker以NATIVE协议启动，所在宿主机IP地址192.168.1.100，绑定端口号12345；

1. 设置worker连接信息，格式：native+[宿主机IP地址]+[端口号]+[连接版本号]
```bash
export TENSOR_FUSION_OPERATOR_CONNECTION_INFO=native+192.168.1.100+12345+0
```

> [!TIP]注意: 确保VM中能够正常访问宿主机的IP地址和端口

#### SHMEM协议
如果worker以SHMEM协议启动，创建共享内存/my_shm，并设置共享内存大小为256MB：

> [!NOTE]
> QEMU启动VM命令并连接共享内存的示例：
> ```bash
> qemu-system-x86_64   \
>    -m 8192   \
>    -hda centos8.4.qcow2   \
>    -vnc :1   \
>    -enable-kvm   \
>    -cpu host   \
>    -object memory-backend-file,id=shm0,mem-path=/dev/shm/my_shm,size=256M  \
>    -device ivshmem-plain,memdev=shm0   \
>    -smp 4
> ```

1. 在VM中找到IVSHMEM设备地址
```bash
lspci -vv | grep -i Inter-VM
```

可能得到的输出如下：
```bash 
00:04.0 RAM memory: Red Hat, Inc. Inter-VM shared memory (rev 01)
```
可以得出ivshmem设备地址是<b>00:04.0</b>

2. 设置worker连接信息，格式：shmem+[ivshmem设备地址]+[共享内存大小(MB)]+[连接版本号]
```bash
export TENSOR_FUSION_OPERATOR_CONNECTION_INFO=shmem+/sys/devices/pci0000:00/0000:00:04.0/resource2+256+0
```bash
export TENSOR_FUSION_OPERATOR_CONNECTION_INFO=shmem+/sys/devices/pci0000:00/0000:00:04.0/resource2+256+0
```
> [!TIP]注意
> 1. 设置的共享内存大小必须与worker保持一致
> 2. 需要root权限才能成功映射ivshmem设备提供的共享内存

### 注入动态链接库
```bash
export LD_PRELOAD=/opt/tensor-fusion-client/linux/libcuda.so:/opt/tensor-fusion-client/linux/libnvidia-ml.so
```

> [!NOTE]注意: 假设tensor-fusion-client路径为/opt/tensor-fusion-client，可根据实际情况进行调整

### PyTorch 验证示例
成功设置环境变量后，输入以下代码（PyTorch + Qwen3 0.6B）进行验证

```bash
pip config set global.index-url https://pypi.mirrors.ustc.edu.cn/simple
pip install modelscope packaging transformers accelerate

cat << 'EOF' >> test-qwen.py
from modelscope import AutoModelForCausalLM, AutoTokenizer

model_name = "Qwen/Qwen3-0.6B"

tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(
    model_name,
    torch_dtype="auto",
    device_map="cuda:0"
)

prompt = "Give me a short introduction to large language model."
messages = [
    {"role": "user", "content": prompt}
]
text = tokenizer.apply_chat_template(
    messages,
    tokenize=False,
    add_generation_prompt=True,
    enable_thinking=True
)
model_inputs = tokenizer([text], return_tensors="pt").to(model.device)
generated_ids = model.generate(
    **model_inputs,
    max_new_tokens=32768
)
output_ids = generated_ids[0][len(model_inputs.input_ids[0]):].tolist() 
try:
    # rindex finding 151668 (</think>)
    index = len(output_ids) - output_ids[::-1].index(151668)
except ValueError:
    index = 0

thinking_content = tokenizer.decode(output_ids[:index], skip_special_tokens=True).strip("\n")
content = tokenizer.decode(output_ids[index:], skip_special_tokens=True).strip("\n")

print("thinking content:", thinking_content)
print("content:", content)
EOF

python3 test-qwen.py
```

验证方式：
- 在 VM 内看到模型正常生成输出
- 在宿主机上运行 `nvidia-smi` 可以看到对应的推理进程与显存占用
