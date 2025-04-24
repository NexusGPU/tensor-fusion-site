
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