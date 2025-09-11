# Deployment Locally without Cluster Agent

### Installation

When you need fully local installation and don't want to use advanced features, you can use this option, but you can not use [TensorFusion Console](https://app.tensor-fusion.ai/workbench) for centralized management.

Step 1, deploy TensorFusion cluster with Helm command.

::: code-group

```bash [No Agent Mode]
helm upgrade --install --create-namespace --namespace tensor-fusion-sys \
  --repo https://download.tensor-fusion.ai --set agent.agentId="" \
  tensor-fusion-sys tensor-fusion

# Note: helm.tensor-fusion.ai is alternative to download.tensor-fusion.ai, both domain works
```

```bash [On-premises Console Mode(For Enterprise)]
helm upgrade --install --create-namespace --namespace tensor-fusion-sys \
  --repo https://download.tensor-fusion.ai \
  --set agent.enrollToken=xxx --set agent.agentId=xxx \
  --set agent.cloudEndpoint=wss://your-own.domain/_ws \
  tensor-fusion-sys tensor-fusion
```

:::

Step 2, apply the TensorFusion cluster configuration in to Kubernetes.

```bash
kubectl apply -f https://app.tensor-fusion.ai/tmpl/tf-cluster
kubectl apply -f https://app.tensor-fusion.ai/tmpl/tf-scheduling-config
```

Step 3, verify the TensorFusion cluster is ready.

```bash
kubectl get pods -n tensor-fusion-sys
# Expected output:
# NAME                                      READY   STATUS    RESTARTS   AGE
# hypervisor-<node-name>                    1/1     Running   0          2m

kubectl get tensorfusionclusters
# Expected output:
# NAME                                  STATUS      AGE
# shared-tensor-fusion-cluster          Ready       2m
```

Finally, deploy an application to verify TensorFusion is working. Apply the following YAML to create a simple PyTorch deployment with TensorFusion remote vGPU.

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
        tensor-fusion.ai/inject-container: python
        tensor-fusion.ai/tflops-limit: '10'
        tensor-fusion.ai/tflops-request: '20'
        tensor-fusion.ai/vram-limit: 4Gi
        tensor-fusion.ai/vram-request: 4Gi
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

Then, you would see a pytorch pod and the corresponding vGPU worker Pod started (Don't worry, it's super lightweight). Run "kubectl exec" into the pytorch pod, you can run nvidia-smi to see the limited GPU memory and utilization.

```bash
nvidia-smi
```

Finally, run `python3` to start python REPL console and test a simple Google T5 model inference, the following codes should translate English "Hello" to German "Hallo" in seconds.

```python
from transformers import pipeline
pipe = pipeline("translation_en_to_de", model="google-t5/t5-base", device="cuda:0")
pipe("Hello")
```

refer to [Deploy and Verify](/zh/guide/getting-started/deployment-k8s#step-3-deploy-and-verify-tensorfusion) for end-to-end testing by running a PyTorch model inference with TensorFusion virtual remote GPU.

### Uninstall TensorFusion

Run the following command to uninstall all components and custom resources

```bash
# export KUBECONFIG if needed
curl -sfL https://download.tensor-fusion.ai/uninstall.sh | sh -
```


### Issues and Troubleshooting

If your TensorFusion hypervisor Pods are not showing up, check if your GPU nodes has been labeled with `nvidia.com/gpu.present=true`

```bash
kubectl get nodes --show-labels | grep nvidia.com/gpu.present=true

# Expected GPU nodes found in output:
# gpu-node-name   Ready   <none>   42h   v1.32.1 beta.kubernetes.io/arch=amd64,...,kubernetes.io/os=linux,nvidia.com/gpu.present=true
```

To resolve this issue, you can neither add the label or change the TensorFusionCluster resource to use your own labels to find GPU nodes.

```bash
# Using helm `initialGpuNodeLabelSelector` parameter to add env var `INITIAL_GPU_NODE_LABEL_SELECTOR` to tensor-fusion-operator:
helm upgrade --install --create-namespace --namespace tensor-fusion-sys --repo https://download.tensor-fusion.ai --set agent.agentId="" --set initialGpuNodeLabelSelector="your-own-gpu-label-key=value" tensor-fusion-sys tensor-fusion
```

```bash
curl https://app.tensor-fusion.ai/tmpl/tf-cluster > tf-cluster.yaml

# Edit tf-cluster.yaml
# nodeManagerConfig:
#   nodeSelector:
#    nodeSelectorTerms: 
#     - matchExpressions:
#       - key: nvidia.com/gpu.present  // [!code highlight]  TODO -/+
#         operator: In
#         values:
#           - "true"

kubectl apply -f tf-cluster.yaml
```

