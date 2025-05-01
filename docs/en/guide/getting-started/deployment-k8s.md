---
outline: deep
---

# Tensor Fusion Deployment for Kubernetes

> The installation would take 2-5 minutes to complete.

## Prerequisites

1. Create a Kubernetes cluster with NVIDIA GPU nodes added
2. Install [Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html#configuring-containerd-for-kubernetes), this step is optional for most cloud vendors' Kubernetes distribution, they are built-in.

## Step 1. Install TensorFusion

[Sign-up](https://accounts.tensor-fusion.ai/sign-up) your account and then goto [TensorFusion Console](https://app.tensor-fusion.ai/workbench).

Then, copy and run the command to onboard existing Kubernetes cluster, if you wanna customize Helm Chart values, see [Helm Chart Reference](/reference/helm-install-values.md)

![](https://cdn.tensor-fusion.ai/install-tf.png)

## Step 2. Apply the Custom Resources

For TensorFusion cloud installation, when agent is ready, click Preview and then Deploy button to one-click apply the manifests from cloud

![](https://cdn.tensor-fusion.ai/tf-apply-cr.png)

## Step 3. Deploy and Verify TensorFusion

When status is ready, click "Deploy an Inference App" to start a simple pytorch container to verify TensorFusion.

![](https://cdn.tensor-fusion.ai/verify-tf-cluster.png)

Here is the simple pytorch deployment with TensorFusion enabled and GPU resources specified.
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

Then, you would see a pytorch pod and the corresponding shadow GPU worker Pod started (Don't worry, it's super lightweight). Run "kubectl exec" into the pytorch pod, you can run nvidia-smi to see the limited GPU memory and utilization.

```bash
nvidia-smi
```

Finally, and run `python3` to start python REPL console and test a simple Google T5 model inference, the following codes should translate English "Hello" to German "Hallo" in seconds.

```python
from transformers import pipeline
pipe = pipeline("translation_en_to_de", model="google-t5/t5-base", device="cuda:0")
pipe("Hello")
```
## Option #2 None Cloud Installation

When you need pure local installation and don't want to use advanced features, you can try [pure local installation](/guide/recipes/deploy-k8s-local-mode.md), but you can not use [TensorFusion Console](https://app.tensor-fusion.ai/workbench) for centralized management in this mode.

## Next Steps

- [Migrate existing AI Workloads to TensorFusion](/guide/recipes/migrate-existing.md)
- [Customize your cluster and GPU pool settings](/guide/recipes/configure-qos-and-pricing.md)
- [Deploy production grade high availability cluster](/guide/recipes/production-grade-deployment.md)
