---
outline: deep
---

# Tensor Fusion Deployment for VM/BareMetal

Note that TensorFusion GPU pool runs on Kubernetes, thus you need to choose one or more servers to install Kubernetes master and add GPU servers as Kubernetes nodes to the cluster, **it won't impact your existing VM/BareMetal environment and existing none containerized services**.

Afterwards, you can migrate existing services to use **Local or Remote** GPU workers created by TensorFusion.

## Prerequisites

- At least one Linux VM or BareMetal with GPU card mounted.
- Access to DockerHub

> [!NOTE]
> The installation would take 3-7 minutes to complete.

## Step 1. Install K3S Master

Choose one VM/BareMetal to install K3S to offer a simple Kubernetes environment. You can also use other ways to initialize a Kubernetes.

```bash
curl -sfL https://get.k3s.io | sh -s - server --tls-san $(curl -s https://ifconfig.me)
```

If your K3S master has GPU cards and want the GPU resources to be scheduled by TensorFusion, **complete step 2 on this server first**, and then run the following command

```bash
curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="--node-label nvidia.com/gpu.present=true \
  --node-label feature.node.kubernetes.io/cpu-model.vendor_id=NVIDIA \
  --node-label feature.node.kubernetes.io/pci-10de.present=true \
  --tls-san $(curl -s https://ifconfig.me)" \
  sh -s - 
```

Then get the token to add more GPU nodes

```bash
cat /var/lib/rancher/k3s/server/node-token
```

## Step 2. GPU Node Setup

Since TensorFusion system runs in containerized environment, you need configure NVIDIA Container Toolkit before install K3S Agent in GPU Nodes. Refer [NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html) for more details.

::: code-group 

```bash [Debian/Ubuntu]
# Just copy all and run them once for each node
curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg && curl -s -L https://nvidia.github.io/libnvidia-container/stable/deb/nvidia-container-toolkit.list | sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | tee /etc/apt/sources.list.d/nvidia-container-toolkit.list
sed -i -e '/experimental/ s/^#//g' /etc/apt/sources.list.d/nvidia-container-toolkit.list

apt-get update
apt-get install -y nvidia-container-toolkit
```

```bash [RHEL/CentOS/Fedora/AmazonLinux]
# Just copy all and run them once for each node
curl -s -L https://nvidia.github.io/libnvidia-container/stable/rpm/nvidia-container-toolkit.repo | \
sudo tee /etc/yum.repos.d/nvidia-container-toolkit.repo

sudo dnf install -y nvidia-container-toolkit
```

:::

Configure NVIDIA container toolkit for K3S

```bash
mkdir -p /var/lib/rancher/k3s/agent/etc/containerd/
cat << EOF >> /var/lib/rancher/k3s/agent/etc/containerd/config.toml.tmpl
version = 2

[plugins."io.containerd.internal.v1.opt"]
  path = "/var/lib/rancher/k3s/agent/containerd"
[plugins."io.containerd.grpc.v1.cri"]
  stream_server_address = "127.0.0.1"
  stream_server_port = "10010"
  enable_selinux = false
  enable_unprivileged_ports = true
  enable_unprivileged_icmp = true
  device_ownership_from_security_context = false
  sandbox_image = "rancher/mirrored-pause:3.6"

[plugins."io.containerd.grpc.v1.cri".containerd]
  snapshotter = "overlayfs"
  disable_snapshot_annotations = true

[plugins."io.containerd.grpc.v1.cri".cni]
  bin_dir = "/var/lib/rancher/k3s/data/cni"
  conf_dir = "/var/lib/rancher/k3s/agent/etc/cni/net.d"

[plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc]
  runtime_type = "io.containerd.runc.v2"

[plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc.options]
  SystemdCgroup = true
  BinaryName = "/usr/bin/nvidia-container-runtime"

[plugins."io.containerd.grpc.v1.cri".registry]
  config_path = "/var/lib/rancher/k3s/agent/etc/containerd/certs.d"
EOF
```

## Step 3. Add more GPU Server as K3S Nodes

```bash
# replace the MASTER_IP, K3S_TOKEN, and run the command on each GPU node
export MASTER_IP=<master-private-ip-from-step-1-vm>
export K3S_TOKEN=<k3s-token-from-step-1-cat-command-result>

curl -sfL https://get.k3s.io | K3S_URL=https://$MASTER_IP:6443 K3S_TOKEN=$K3S_TOKEN INSTALL_K3S_EXEC="--node-label nvidia.com/gpu.present=true --node-label feature.node.kubernetes.io/cpu-model.vendor_id=NVIDIA --node-label feature.node.kubernetes.io/pci-10de.present=true" sh -s -

# If you encountered container-selinux version issue, run it again with following env variable
export INSTALL_K3S_SKIP_SELINUX_RPM=true
```

If there isn't CUDA and NVIDIA driver on the host, eg. no nvidia-smi command or can not run it，install latest [CUDA & NVIDIA Driver here](https://developer.nvidia.com/cuda-downloads?target_os=Linux&target_arch=x86_64&Distribution=Ubuntu&target_version=24.04&target_type=runfile_local)

## Step 4. Verify if all GPU Nodes Added

```bash
# ssh in master vm/baremetal
kubectl get nodes --show-labels | grep nvidia.com/gpu.present=true
```

Expected output:

```bash
gpu-node-name   Ready   <none>   42h   v1.32.1 beta.kubernetes.io/arch=amd64,...,kubernetes.io/os=linux,nvidia.com/gpu.present=true
```

## Step 5. Install TensorFusion

You can follow the [Kubernetes Deployment](/guide/getting-started/deployment-k8s.md) to install TensorFusion.

After installation, you can use TensorFusion inside the new created lightweight Kubernetes cluster.

## Uninstall TensorFusion & K3S

Run the following command to uninstall all TensorFusion components and custom resources

```bash
# export KUBECONFIG if needed
curl -sfL https://download.tensor-fusion.ai/uninstall.sh | sh -
```

Run the following command to uninstall all K3S components

```bash
# on GPU nodes
/usr/local/bin/k3s-agent-uninstall.sh
```

```bash
# on master node
/usr/local/bin/k3s-uninstall.sh
```
