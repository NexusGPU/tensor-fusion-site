---
outline: deep
---

# 虚拟机/物理机部署方案

TensorFusion GPU资源池基于Kubernetes运行，按步骤完成轻量级Kubernetes K3S集群搭建后，将GPU服务器作为节点接入集群即可。**该部署方式不会影响您现有的虚拟机/物理机环境以及非容器化服务**，K3S对现有环境侵入性小，稳定性也满足生产环境需求。


<!-- TensorFusion提供了一键安装脚本，若由于操作系统差异运行出错，请逐步按照本文档后续内容手动安装。

::: code-group

```bash [云端控制台模式]
# 先注册登录TensorFusion，选择VM部署方式复制命令
curl -sfL https://download.tensor-fusion.ai/install-vm.sh | \
  ENROLL_TOKEN="copied-from-tensor-fusion-cloud" \
  AGENT_ID="copied-from-tensor-fusion-cloud" \
  sh -
```

```bash [无控制台模式]
curl -sfL https://download.tensor-fusion.ai/install-vm.sh | sh -
```

```bash [私有化部署控制台模式]
curl -sfL https://download.tensor-fusion.ai/install-vm.sh | \
  ENROLL_TOKEN="copied-from-tensor-fusion-cloud" \
  AGENT_ID="copied-from-tensor-fusion-cloud" \
  CLOUD_ENDPOINT="your-own.domain" \
  sh -
```

::: -->

## 手动部署前置条件

- 至少一台运行Linux的虚拟机或物理机，已安装GPU
- 访问DockerHub网络，或每台机器用以下命令提前设置容器镜像仓库的拉取地址

> [!NOTE]
> 指南中的安装过程大约需要3-7分钟完成

执行以下命令配置中国大陆网络环境镜像加速（可选）

```bash
mkdir -p /etc/rancher/k3s/
cat > /etc/rancher/k3s/registries.yaml << 'EOF'
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
      "^docker.io/tensorfusion/(.*)": "registry.cn-hangzhou.aliyuncs.com/tensorfusion/$1"
EOF
```

## 步骤1：安装K3S控制节点


选择一台VM/BareMetal来安装K3S，以提供一个简单的Kubernetes环境。您也可以使用其他方式来初始化Kubernetes。


::: code-group

```bash [中国大陆网络]
curl -sfL https://rancher-mirror.rancher.cn/k3s/k3s-install.sh | INSTALL_K3S_MIRROR=cn sh -s - server --tls-san $(curl -s https://ifconfig.me)
```

```bash [国际网络]
curl -sfL https://get.k3s.io | sh -s - server --tls-san $(curl -s https://ifconfig.me)
```

:::

如果K3S Control Plane节点也有GPU设备，并且希望TensorFusion纳管，请**在先完成第二步**, 再来运行以下命令

::: code-group

```bash [中国大陆网络]
curl -sfL https://rancher-mirror.rancher.cn/k3s/k3s-install.sh | INSTALL_K3S_MIRROR=cn INSTALL_K3S_EXEC="--node-label nvidia.com/gpu.present=true --node-label feature.node.kubernetes.io/cpu-model.vendor_id=NVIDIA --node-label feature.node.kubernetes.io/pci-10de.present=true" sh -s - server --tls-san $(curl -s https://ifconfig.me)
```

```bash [国际网络]
curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="--node-label nvidia.com/gpu.present=true \
  --node-label feature.node.kubernetes.io/cpu-model.vendor_id=NVIDIA \
  --node-label feature.node.kubernetes.io/pci-10de.present=true" \
  sh -s - server --tls-san $(curl -s https://ifconfig.me)
```

:::

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

对于国内用户，推荐使用中科大镜像源，安装方法参考[NVIDIA Container 运行时库安装](https://mirrors.ustc.edu.cn/help/libnvidia-container.html)。有国际网络的用户可参考NVIDIA官方[安装指南](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html)。

::: code-group 

```bash [Debian/Ubuntu]
# 在每台GPU服务器上运行一次即可
curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg \
  && curl -s -L https://mirrors.ustc.edu.cn/libnvidia-container/stable/deb/nvidia-container-toolkit.list | \
    sed 's#deb https://nvidia.github.io#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://mirrors.ustc.edu.cn#g' | \
    sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list
apt update
apt install -y nvidia-container-toolkit
```

```bash [RHEL/CentOS/Fedora/AlibabaLinux]
# 在每台GPU服务器上运行一次即可
curl -s -L https://mirrors.ustc.edu.cn/libnvidia-container/stable/rpm/nvidia-container-toolkit.repo | \
  sed 's#nvidia.github.io/libnvidia-container/stable/#mirrors.ustc.edu.cn/libnvidia-container/stable/#g' |
  sed 's#nvidia.github.io/libnvidia-container/experimental/#mirrors.ustc.edu.cn/libnvidia-container/experimental/#g' |
  sudo tee /etc/yum.repos.d/nvidia-container-toolkit.repo

sudo dnf install -y nvidia-container-toolkit
# if dnf command not found, try `sudo yum install -y nvidia-container-toolkit`
```

:::

每台GPU服务器执行以下命令，添加Container Toolkit配置：

```bash
# sudo su -
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

## 步骤3：将GPU服务器加入K3S集群

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

您可以按照[Kubernetes部署](/zh/guide/getting-started/deployment-k8s.md)来安装和验证TensorFusion。

## 卸载TensorFusion和K3S

运行如下命令一键卸载所有TensorFusion组件

```bash
# 可指定 KUBECONFIG 环境变量
curl -sfL https://download.tensor-fusion.ai/uninstall.sh | sh -
```

运行命令卸载K3S所有组件

```bash
# 在GPU节点上运行
/usr/local/bin/k3s-agent-uninstall.sh
```

```bash
# 在Master节点上运行
/usr/local/bin/k3s-uninstall.sh
```


