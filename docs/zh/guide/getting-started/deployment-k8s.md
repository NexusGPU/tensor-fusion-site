---
outline: deep
---

# Tensor Fusion Kubernetes 部署指南

> 部署TensorFusion集群大约需要2-5分钟时间。

## 前提条件

1. 创建包含NVIDIA GPU节点的Kubernetes集群
2. 安装[Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html#configuring-containerd-for-kubernetes)，一般云厂商的Kubernetes发行版可能已经内置

## 步骤一：安装TensorFusion

[注册](https://accounts.tensor-fusion.ai/sign-up)账号后访问[TensorFusion控制台](https://app.tensor-fusion.ai/workbench)

复制一键接入命令，在Kubernetes集群中运行，如果需要定制Helm Chart的变量，参考此文档：[Helm Chart Reference](/zh/reference/helm-install-values.md)：

![](https://cdn.tensor-fusion.ai/install-tf.png)

## 步骤二：应用定制资源

当agent就绪后，在控制台点击"预览"并"部署"按钮，一键应用云端的资源配置清单：

![](https://cdn.tensor-fusion.ai/tf-apply-cr.png)

## 步骤三：部署验证

当状态显示就绪时，点击"Deploy Inference App"启动PyTorch容器进行验证：

![](https://cdn.tensor-fusion.ai/verify-tf-cluster.png)

示例部署清单（已启用TensorFusion vGPU资源配置）：

```yaml
# simple-pytorch.yaml
# kubectl apply -f simple-pytorch.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: pytorch-example
  namespace: default
  labels:
    app: pytorch-example
    tensor-fusion.ai/enabled: 'true'
spec:
  replicas: 1
  selector:
    matchLabels:
      app: pytorch-example
  template:
    metadata:
      labels:
        app: pytorch-example
        tensor-fusion.ai/enabled: 'true'
      annotations:
        tensor-fusion.ai/generate-workload: 'true'
        tensor-fusion.ai/gpupool: shared-tensor-fusion-cluster-shared
        tensor-fusion.ai/inject-container: python
        tensor-fusion.ai/replicas: '1'
        tensor-fusion.ai/tflops-limit: '10'
        tensor-fusion.ai/tflops-request: '20'
        tensor-fusion.ai/vram-limit: 4Gi
        tensor-fusion.ai/vram-request: 4Gi
        tensor-fusion.ai/workload: pytorch-example
    spec:
      containers:
        - name: python
          image: pytorch/pytorch:2.6.0-cuda12.4-cudnn9-runtime
          command:
            - sh
            - '-c'
            - sleep 1d
      restartPolicy: Always
      terminationGracePeriodSeconds: 0
      dnsPolicy: ClusterFirst
```

执行以下命令验证GPU资源分配：

```bash
nvidia-smi

# 预期显存为4Gi，而不是显卡的总显存数量
```

运行Python REPL测试T5模型推断，测试简答的英译德任务：

```python
from transformers import pipeline
pipe = pipeline("translation_en_to_de", model="google-t5/t5-base", device="cuda:0")
pipe("Hello")
```

## 方案二：纯本地化部署

如需完全本地化部署（不使用高级功能），可参考[纯本地部署方案](/zh/guide/recipes/deploy-k8s-local-mode.md)，但此模式无法使用[TensorFusion控制台](https://app.tensor-fusion.ai/workbench)的管控台功能。

## 后续步骤

- [现有AI工作负载迁移指南](/zh/guide/recipes/migrate-existing.md)
- [集群与GPU资源池定制配置](/zh/guide/recipes/configure-qos-and-pricing.md)
- [生产级高可用集群部署方案](/zh/guide/recipes/production-grade-deployment.md)
