
# Handbook

## No GPU Nodes Recognized

If you don't see any GPU nodes discovered after installing TensorFusion, check if your GPU nodes have been labeled with `nvidia.com/gpu.present=true`.

```bash
kubectl get nodes --show-labels | grep nvidia.com/gpu.present=true
```

If not, you can label them by changing `userdata` in IaC codes or manually add them.

## TensorFusion Operator Crashed

If TensorFusion operator keep restarting, check the logs and find errors:

```bash
kubectl logs -n tensor-fusion-sys -l app.kubernetes.io/component=controller
```

If the error indicates any configuration issue, check the TensorFusion Custom Resource reference to fix it. Otherwise please seek support from TensorFusion support team in Discord.

## GPU Worker Crashed

If TensorFusion GPU Worker Pod keep restarting, you can check the logs, if it's not verbose enough, set `TF_ENABLE_LOG=1` worker Pod template inside TensorFusionCluster custom resource config.

Seek support from TensorFusion support team in Discord with the crash logs.

## "Invalid Memory Address" Issue

TensorFusion's underlying virtualization technology implements special-MMIO for GPUs, CUDA `cuMemMap` API causes some tricky behavior, thus TensorFusion developed a GPU memory manager, but may cause "Invalid Memory Address" issue in very rare cases.

You can mitigate this issue by disabling the memory manager.

To disable TensorFusion memory manager, set the following environment variable in GPU Worker Pod Template inside cluster config:

```bash
TF_DISABLE_MEMORY_MANAGER=1
```

Once this option enabled, freeze memory and VRAM expansion/tiering will not work. The team will keep working on this issue.

## Image Pull Timeout Issue

If your Kubernetes cluster can not access DockerHub or public registries, check if the mirrors are added, refer https://docs.k3s.io/installation/private-registry

```bash
# Check current working mirrors when using k3s
ll /var/lib/rancher/k3s/agent/etc/containerd/certs.d
```

## Can not use native NVIDIA GPU scheduling way like request `nvidia.com/gpu`

If you wanna preserve NVIDIA native device count based scheduling, you can install NVIDIA Device Plugin in Kubernetes.

```bash
helm upgrade --install --create-namespace  --namespace nvidia-device-plugin --repo https://nvidia.github.io/k8s-device-plugin/  nvdp nvidia-device-plugin
```

## Pod stuck in starting status after enabling TensorFusion

**There are two possible causes:**
1. No available GPU resource
2. TensorFusion runtime libs injection failed

You can identify the root cause by running `kubectl get po -A --show-labels | grep tensor-fusion.ai/workload`, when TensorFusion worker Pod is not running, it indicates issue #1, otherwise it indicates issue #2.

**Address and solve issue #1:** 

Check TensorFusionWorkload custom resource event by `kubectl describe tensorfusionworkload <workload-name>`, if there are errors like `Failed to schedule GPU`, it means there are no available GPU resources. Then check `kubectl get gpu` to check if the available resources is greater than computing you are requesting.

If the total GPU resources is 0 or some GPUs not listed, **it indicates some GPU cards are not discovered by TensorFusion**. Check `kubectl get jobs -n tensor-fusion-sys` to make sure all the NodeDiscovery job succeeded, and the `tensor-fusion-sys-public-gpu-info` configMap contains your GPU model, correct them and then delete NodeDiscovery job to trigger GPU resource refresh.

**Address and solve issue #2:**

There will be worker running and ready, it means client side injection may not work, there is a known issue that `LD_PRELOAD` maybe ignored by bash/zsh, use `sh -c "bash/zsh ..."` to run bash or just use `sh`

For example, when using `kubectl exec`, you can use with `sh -c` even you wanna use bash:

```bash
kubectl exec -it <pod> -- sh -c "bash ..."

echo $PATH
# expected result should be:
# /tensor-fusion:/root/.local/bin/:/usr/local/nvidia/bin:...

# then run `nvidia-smi`
# TensorFusion will take effect after PATH/LD_LIBRARY_PATH/LD_PRELOAD contains `/tensor-fusion`
```

When your application is spawned by another process, you can use `strace` to debug it.

```bash
# apt/apk/dnf/yum/pacman install strace
strace -e execve -s 99999 <your_program> <your_program_args>
```

## Device Count Assertion Error

If you encounter errors like following, it indicates that the TensorFusion client did not inject the runtime environment correctly, the same as issue #2 in last section👆🏻.

```
DeferredCudaCallError('CUDA call failed lazily at initialization with error: device >= 0 && device < num_gpus INTERNAL ASSERT FAILED 
at "../aten/src/ATen/cuda/CUDAContext.cpp":50, please report a bug to PyTorch.
```

Solution: you can print `LD_PRELOAD`、`LD_LIBRARY_PATH`、`PATH` environment variables to confirm whether they all contain `/tensor-fusion`, if not injected, please check if the container uses a special Entrypoint or Command to start, causing the environment variables to not be passed to the child process, you can also debug it `strace` command like last section.


## Can not found libnvidia-ml.so.1 in Hypervisor Pod

If hypervisor Pod not started and error log contains following error message, it indicates that NVIDIA Container Toolkit is not installed or properly configured. Refer [NVIDIA's install guide](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html) to resolve it.

```
Error: a libloading error occurred: libnvidia-ml.so.1: cannot open shared object file: No such file or directory

Caused by:
    libnvidia-ml.so.1: cannot open shared object file: No such file or directory
```

If you encounter `libcuda.so not found` related errors, please check if NVIDIA Driver is installed correctly.

```bash
lsmod | grep nvidia
```

## How to avoid TensorFlow allocates all available GPU memory ?

TensorFlow will occupy all GPU memory by default, to switch to on-demand mode, please set environment variable `TF_FORCE_GPU_ALLOW_GROWTH` to `true` in your workload, refer [https://www.tensorflow.org/guide/gpu](https://www.tensorflow.org/guide/gpu)
