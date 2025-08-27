---
outline: deep
---

# Tensor Fusion Host + VM Deployment Guide
Run tensor-fusion-worker on the host and deploy tensor-fusion-client inside a virtual machine (VM) to use the host’s physical GPUs from VMs without GPU passthrough.

## Terminology
1. Tensor-fusion-worker (worker): A standalone binary. You can run multiple worker instances on the same host. It receives compute requests from clients and executes the tasks.
2. Tensor-fusion-client (client): A set of shared libraries that fully export CUDA and NVML APIs. It runs inside your application environment and forwards compute requests to the worker on the host.

> [!NOTE]
> Multiple clients can connect to one worker instance. For production, we recommend one client per worker instance for easier resource isolation and management.

## Prerequisites

1. A Linux host with NVIDIA GPUs. Recommended NVIDIA driver version: 570.xx or newer.
2. One or more VMs (QEMU/MVisor/VMware/Hyper‑V, etc.) that can reach the host either over the network or via shared memory.

## Step 1: Download Tensor Fusion

1. Download the latest release: https://cdn.tensor-fusion.ai/archive-lastest.zip
2. Unzip the archive:
```bash
unzip archive-lastest.zip
```

## Step 2: Install tensor-fusion-worker on the host

Check the worker binary options:
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

> [!NOTE]
> 1) Worker supports two protocols: NATIVE and SHMEM. 
> 2) NATIVE uses TCP, simple to deploy; recommended when VMs and host are in the same network with ping <= ~0.8 ms. 
> 3) SHMEM uses shared memory, lowest latency; best for latency-sensitive workloads.

Start with NATIVE protocol on port 12345:
```bash
TF_ENABLE_LOG=1 ./tensor-fusion-worker -n native -p 12345
```

Start with SHMEM protocol, creating shared memory at /my_shm with size 256 MB:
```bash
TF_ENABLE_LOG=1 ./tensor-fusion-worker -n shmem -m /my_shm -M 256
```

> [!NOTE] Environment variables
> - TF_ENABLE_LOG: Enable logging (default: off)
> - TF_LOG_LEVEL: trace|debug|info|warn|error (default: info)
> - TF_LOG_PATH: Log file path (default: empty, i.e., stdout)
> - TF_CUDA_MEMORY_LIMIT: CUDA memory limit in MB (default: unlimited)

## Step 3: Install tensor-fusion-client in the VM

1. Get the tensor-fusion-client directory from the extracted package.

### Windows
Place files from tensor-fusion-client/windows (nvcuda.dll, nvml.dll, teleport.dll) either in the system PATH or alongside your application so they can be loaded.

### Linux
Use LD_LIBRARY_PATH or LD_PRELOAD to inject the shared libraries from tensor-fusion-client/linux (libcuda.so, libnvidia-ml.so, libteleport.so) into your application process.

> [!TIP]
> OS environments vary. Please ensure the client libraries are actually loaded by your application.

> [!NOTE] Environment variables
> - TF_ENABLE_LOG: Enable logging (default: off)
> - TF_LOG_LEVEL: trace|debug|info|warn|error (default: info)
> - TF_LOG_PATH: Log file path (default: empty; on Linux logs to console, on Windows view with DebugView)
> - TENSOR_FUSION_OPERATOR_GET_CONNECTION_URL: An HTTP GET endpoint that returns connection info (optional)
> - TENSOR_FUSION_OPERATOR_CONNECTION_INFO: Connection info in the format protocol+param1+param2+version (version is currently 0)

> [!TIP]
> You can set the connection info directly via TENSOR_FUSION_OPERATOR_CONNECTION_INFO, or provide a GET endpoint via TENSOR_FUSION_OPERATOR_GET_CONNECTION_URL that returns it.

## Step 4: Verify the setup

We’ll verify inside a Linux VM using Python with PyTorch CUDA.

### Prepare the environment
Enable logs and inject the client libraries
```bash
export TF_ENABLE_LOG=1
export LD_PRELOAD=/opt/tensor-fusion-client/linux/libteleport.so:/opt/tensor-fusion-client/linux/libcuda.so:/opt/tensor-fusion-client/linux/libnvidia-ml.so
```

> [!NOTE]
> Assuming the client is installed under /opt/tensor-fusion-client. Adjust paths as needed.

#### NATIVE protocol
If the worker runs with NATIVE at host IP 192.168.1.100 and port 12345:

1) Set the connection info (format: native+[host-ip]+[port]+[version]):
```bash
export TENSOR_FUSION_OPERATOR_CONNECTION_INFO=native+192.168.1.100+12345+0
```

> [!TIP]
> Ensure the VM can reach the host IP and port.

#### SHMEM protocol
If the worker runs with SHMEM, creates /my_shm and sets size to 256 MB, start your VM with QEMU and attach the shared memory via IVSHMEM:

> [!NOTE] QEMU command example
> ```bash
> qemu-system-x86_64 \
>   -m 8192 \
>   -hda centos8.4.qcow2 \
>   -vnc :1 \
>   -enable-kvm \
>   -cpu host \
>   -object memory-backend-file,id=shm0,mem-path=/dev/shm/my_shm,size=256M,share=on \
>   -device ivshmem-plain,memdev=shm0 \
>   -smp 4
> ```

1) Locate the IVSHMEM device inside the VM:
```bash
lspci -vv | grep -i Inter-VM
```

Possible output:
```bash
00:04.0 RAM memory: Red Hat, Inc. Inter-VM shared memory (rev 01)
```
Hence the device BDF is 00:04.0.

2) Set the connection info. (format: shmem+[resource]+[size]+[version]) Use the device resource file (e.g., resource2), match the size (MB), and version 0:
```bash
export TENSOR_FUSION_OPERATOR_CONNECTION_INFO=shmem+/sys/devices/pci0000:00/0000:00:04.0/resource2+256+0
```

> [!TIP]
> 1) The shared-memory size must match the worker’s setting. 
> 2) Root privileges are typically required to mmap the IVSHMEM BAR resource.

### PyTorch validation example
Once the environment variables are set, run the following (PyTorch + Qwen3‑0.6B) in the VM:

```bash
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

Validation criteria:
- The VM prints normal model outputs.
- On the host, nvidia-smi shows the corresponding inference process and GPU memory usage.

