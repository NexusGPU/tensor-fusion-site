---
outline: deep
---

# 虚拟机/物理机部署方案

TensorFusion GPU资源池基于Kubernetes运行，您只需选择一台或多台服务器部署Kubernetes控制平面，并将GPU服务器作为节点接入集群即可。**该部署方式不会影响您现有的虚拟机/物理机环境以及非容器化服务**。

完成集群搭建后，您可以将现有服务迁移至TensorFusion创建的本地或远程GPU工作节点。

## 前置条件

- 至少一台运行Linux的虚拟机或物理机，已安装GPU
- 访问DockerHub网络，或每台机器用以下命令提前设置容器镜像仓库的拉取地址

```bash
mkdir -p /etc/rancher/k3s/
cat > /etc/rancher/k3s/registries.yaml << EOF
mirrors:
  docker.io:
    endpoint:
      - "https://docker.m.daocloud.io"
      - "https://docker.1ms.run"
  gcr.io:
    endpoint:
      - "https://gcr.m.daocloud.io"
  ghcr.io:
    endpoint:
      - "https://ghcr.m.daocloud.io"
  k8s.gcr.io:
    endpoint:
      - "https://k8s-gcr.m.daocloud.io"
  registry.k8s.io:
    endpoint:
      - "https://k8s.m.daocloud.io"
  mcr.microsoft.com:
    endpoint:
      - "https://mcr.m.daocloud.io"
  nvcr.io:
    endpoint:
      - "https://nvcr.m.daocloud.io"
  quay.io:
    endpoint:
      - "https://quay.m.daocloud.io"
  docker.elastic.co:
    endpoint:
      - "https://elastic.m.daocloud.io"
  registry.ollama.ai:
    endpoint:
      - "https://ollama.m.daocloud.io"
configs:
  "docker.io":
    auth: {}
    tls: {}
    rewrite:
      "^docker.io/tensor-fusion/(.*)": "registry.cn-hangzhou.aliyuncs.com/tensor-fusion/$1"
EOF
```

## 步骤1：安装K3S控制节点


选择一台VM/BareMetal来安装K3S，以提供一个简单的Kubernetes环境。您也可以使用其他方式来初始化Kubernetes。

```bash
curl -sfL https://get.k3s.io | sh -s - server --tls-san $(curl -s https://ifconfig.me)

# 中国大陆用户
curl -sfL https://rancher-mirror.rancher.cn/k3s/k3s-install.sh | INSTALL_K3S_MIRROR=cn sh -s - server --tls-san $(curl -s https://ifconfig.me)
```

然后获取并保存token，用于后续添加GPU节点

```bash
cat /var/lib/rancher/k3s/server/node-token
```

运行完成后，执行`kubectl get no`命令预期可以看到一个Control Plane节点， 若输出不符预期，可能遇到的问题和解决方案如下：

```bash
# 如果遇到安装container-selinux依赖的错误，在命令中添加以下环境变量重新运行上述命令
export INSTALL_K3S_SKIP_SELINUX_RPM=true

# 如果K3S Master所在节点有GPU设备，执行以下命令，或在安装完成后用kubectl node label命令添加label：
curl -sfL https://rancher-mirror.rancher.cn/k3s/k3s-install.sh | INSTALL_K3S_MIRROR=cn INSTALL_K3S_EXEC="--node-label nvidia.com/gpu.present=true --node-label feature.node.kubernetes.io/cpu-model.vendor_id=NVIDIA --node-label feature.node.kubernetes.io/pci-10de.present=true" sh -s - server --tls-san $(curl -s https://ifconfig.me)
```

## 步骤2：配置GPU节点

由于TensorFusion系统运行在容器化环境中，您需要在GPU节点上配置NVIDIA Container Toolkit，然后安装K3S Agent。

```bash
# 只需要在每台GPU服务器上运行一次

# For Debian/Ubuntu
curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg && curl -s -L https://nvidia.github.io/libnvidia-container/stable/deb/nvidia-container-toolkit.list | sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | tee /etc/apt/sources.list.d/nvidia-container-toolkit.list

sed -i -e '/experimental/ s/^#//g' /etc/apt/sources.list.d/nvidia-container-toolkit.list
apt-get update
apt-get install -y nvidia-container-toolkit

# For RHEL/CentOS, Fedora, Amazon Linux, Alibaba Linux
curl -s -L https://nvidia.github.io/libnvidia-container/stable/rpm/nvidia-container-toolkit.repo | \
  sudo tee /etc/yum.repos.d/nvidia-container-toolkit.repo

sudo dnf install -y nvidia-container-toolkit
# if dnf command not found, try `sudo yum install -y nvidia-container-toolkit`

# Refer: https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html
```

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

## 步骤3：添加GPU服务器为K3S节点

```bash
# 替换MASTER_IP和K3S_TOKEN，然后在每台GPU服务器上运行
export MASTER_IP=<master-private-ip-from-step-1-vm>
export K3S_TOKEN=<k3s-token-from-step-1-cat-command-result>

curl -sfL https://get.k3s.io | K3S_URL=https://$MASTER_IP:6443 K3S_TOKEN=$K3S_TOKEN INSTALL_K3S_EXEC="--node-label nvidia.com/gpu.present=true --node-label feature.node.kubernetes.io/cpu-model.vendor_id=NVIDIA --node-label feature.node.kubernetes.io/pci-10de.present=true" sh -s -

# 中国大陆用户
curl -sfL https://rancher-mirror.rancher.cn/k3s/k3s-install.sh | INSTALL_K3S_SKIP_SELINUX_RPM=true INSTALL_K3S_MIRROR=cn K3S_URL=https://$MASTER_IP:6443 K3S_TOKEN=$K3S_TOKEN INSTALL_K3S_EXEC="--node-label nvidia.com/gpu.present=true --node-label feature.node.kubernetes.io/cpu-model.vendor_id=NVIDIA --node-label feature.node.kubernetes.io/pci-10de.present=true" sh -s -

# 如果遇到安装container-selinux依赖的错误，在命令中添加以下环境变量重新运行上述命令
export INSTALL_K3S_SKIP_SELINUX_RPM=true
```

如果没有安装CUDA和NVIDIA驱动（缺少nvidia-smi命令或无法运行），从这里下载并运行最新版本的[CUDA & NVIDIA Driver](https://developer.nvidia.com/cuda-downloads?target_os=Linux&target_arch=x86_64&Distribution=Ubuntu&target_version=24.04&target_type=runfile_local)

## 步骤4：验证GPU节点是否添加成功

```bash
# ssh in master vm/baremetal
kubectl get nodes --show-labels | grep nvidia.com/gpu.present=true
```

预期输出：

```bash
gpu-node-name   Ready   <none>   42h   v1.32.1 beta.kubernetes.io/arch=amd64,...,kubernetes.io/os=linux,nvidia.com/gpu.present=true
```

## 步骤5：安装TensorFusion

您可以按照[Kubernetes部署](/zh/guide/getting-started/deployment-k8s.md)来安装TensorFusion。

安装完成后，您可以在新安装的Kubernetes集群中使用TensorFusion。

## 可选项：从VM/BareMetal连接TensorFusion vGPU

如果您的工作负载运行在VM/BareMetal，您可以在TensorFusion集群中分配资源并从VM/BareMetal连接vGPU。

```bash
TODO: Linux or Windows, Local or Remote vGPU
# Download TensorFusion Libs, Add LD_PRELOAD / LD_LIBRARY_PATH env var
```