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

```bash
# K3S中查询已经生效的的镜像仓库
ll /var/lib/rancher/k3s/agent/etc/containerd/certs.d
```