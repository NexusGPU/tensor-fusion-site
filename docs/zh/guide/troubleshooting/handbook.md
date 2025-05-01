# 问题处理手册

## 未识别GPU节点

安装TensorFusion后，如果未发现任何GPU节点，请检查您的GPU节点是否已标记为 `nvidia.com/gpu.present=true`。

```bash
kubectl get nodes --show-labels | grep nvidia.com/gpu.present=true
```

如果没有标记，您可以通过修改IaC代码中的 `userdata` 或手动添加标记。

## TensorFusion Operator持续重启

如果TensorFusion operator持续重启，请检查日志并查找错误：

```bash
kubectl logs -n tensor-fusion-sys -l app.kubernetes.io/component=controller
```

如果错误指示任何配置问题，请参考TensorFusion Custom Resource文档进行修复。否则，请在Discord中寻求TensorFusion支持团队的帮助。

## GPU Worker无法工作

如果TensorFusion GPU Worker Pod持续重启，您可以检查日志。如果日志信息不够详细，请在TensorFusionCluster自定义资源配置中的worker Pod模板中设置 `TF_ENABLE_LOG=1`。

请将崩溃日志发送给TensorFusion支持团队以寻求帮助。

## "Invalid Memory Address"问题

TensorFusion的底层虚拟化技术实现了针对GPU的特殊MMIO，CUDA `cuMemMap` API在某些情况下会导致复杂行为。为此，TensorFusion开发了GPU内存管理器，但在极少数情况下可能导致"Invalid Memory Address"问题。

您可以通过禁用内存管理器来缓解此问题。

要禁用TensorFusion内存管理器，请在集群配置中的GPU Worker Pod模板中设置以下环境变量：

```bash
TF_DISABLE_MEMORY_MANAGER=1
```

启用此选项后，内存冻结和VRAM扩展/分层功能将无法使用。团队将继续致力于解决此问题。

## 镜像拉取问题

如果K8S集群无法拉取DockerHub, 检查是否添加了镜像仓库，参考 https://docs.k3s.io/installation/private-registry

如果是K3S + Containerd，检查K3S是否正确加载了`/etc/rancher/k3s/registries.yaml`文件
```bash
# 正确加载Mirror后会在这里创建对应host的目录
ll /var/lib/rancher/k3s/agent/etc/containerd/certs.d
```

如果仍在使用Docker作为容器云运行时，检查Docker是否正确加载了`/etc/docker/daemon.json`文件，重启Docker服务（`systemctl restart docker`）

```json
{
  "registry-mirrors": ["https://docker.m.daocloud.io", "https://docker.1ms.run"]
}
```

如果是GreptimeDB拉取不到，在helm install时添加 `--set greptime.image.repository=greptime-registry.cn-hangzhou.cr.aliyuncs.com/greptime/greptimedb`，如果是nvcr.io相关镜像拉取不到，建议自行同步到私有仓库。


## 无法使用NVIDIA原生的GPU调度方式，比如 `nvidia.com/gpu`

如果想要保留NVIDIA原生的基于设备数量的调度方式，可以安装NVIDIA Device Plugin。

```bash
helm upgrade --install --create-namespace  --namespace nvidia-device-plugin --repo https://nvidia.github.io/k8s-device-plugin/  nvdp nvidia-device-plugin
```


## Pod 在启用 TensorFusion 后卡在启动状态

**可能有两种原因：**

1. 无可用GPU资源
2. TensorFusion运行时库注入失败

可通过以下命令定位根因：`kubectl get po -A --show-labels | grep tensor-fusion.ai/workload`。若TensorFusion Worker Pod未运行，则是问题1；否则是问题2。

**定位和解决问题1** 

检查TensorFusionWorkload自定义资源事件：`kubectl describe tensorfusionworkload <workload-name>`。若出现类似 `Failed to schedule GPU` 的错误，表示没有可用的GPU资源。然后检查 `kubectl get gpu`，确认可用资源是否大于请求的计算资源，若资源不足，解决方案是**减少当前应用或其他应用的requests的GPU资源**。

若总TotalTflops为0或部分GPU未列出，表示**TensorFusion未发现某些GPU卡**。解决方案是检查 `kubectl get jobs -n tensor-fusion-sys`，确保所有NodeDiscovery Job成功，且`tensor-fusion-sys-public-gpu-info` configMap包含您的GPU型号，修改后删除NodeDiscovery Job触发GPU资源总量的自动刷新。

**定位和解决问题2**

若TensorFusion Worker Pod正在运行且状态为Ready，表示客户端注入可能失败，存在已知问题，即`LD_PRELOAD`可能被bash/zsh忽略，解决方案是使用`sh -c "bash/zsh ..."`运行bash或直接使用`sh`

例如，当使用 `kubectl exec` 时，可以使用 `sh -c` 即使您想使用 bash:

```bash
kubectl exec -it <pod> -- sh -c "bash ..."

echo $PATH
# expected result should be:
# /tensor-fusion:/root/.local/bin/:/usr/local/nvidia/bin:...

# then run `nvidia-smi`
# TensorFusion will take effect after PATH/LD_LIBRARY_PATH/LD_PRELOAD contains `/tensor-fusion`
```

当您的应用程序由另一个进程生成时，您可以使用 `strace` 进行调试。

```bash
# apt/apk/dnf/yum/pacman install strace
strace -e execve -s 99999 <your_program> <your_program_args>
```

## 设备数量断言错误

如果遇到类似以下错误，说明TensorFusion的Client端没有正确注入运行时环境，与👆🏻上一节的第二个问题相同

```
DeferredCudaCallError('CUDA call failed lazily at initialization with error: device >= 0 && device < num_gpus INTERNAL ASSERT FAILED 
at "../aten/src/ATen/cuda/CUDAContext.cpp":50, please report a bug to PyTorch.
```

解决方案：可在程序启动时打印`LD_PRELOAD`、`LD_LIBRARY_PATH`、`PATH` 三个环境变量确认是否都带有`/tensor-fusion`，如果没有注入请检查容器是否用到了特殊的Entrypoint、Command启动，导致环境变量没有透传给子进程，也可通过`strace`命令进行调试。
