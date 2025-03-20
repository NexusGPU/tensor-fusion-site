# Deployment Locally without Cluster Agent (Not Recommended)

### Installation

When you need pure local installation and don't want to use advanced features, you can use this option, but you can not use [TensorFusion Console](https://app.tensor-fusion.ai/workbench) for centralized management.

```bash
helm upgrade --install --create-namespace --namespace tensor-fusion-sys --repo https://helm.tensor-fusion.ai --set agent.agentId="" tensor-fusion-sys tensor-fusion
```

For none-agent local installation, using the following command to get and apply a basic configuration (Not recommended, only for test)

```bash
kubectl apply -f https://app.tensor-fusion.ai/tmpl/tf-cluster
kubectl apply -f https://app.tensor-fusion.ai/tmpl/tf-scheduling-config
```

Then, run the following command to verify, if you see the hypervisor is running in each GPU node and GPUCluster resource is in ready status, you can start using TensorFusion.

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

### Potential Issues

If hypervisor Pods are not showing up, check if your GPU nodes has been labeled with `nvidia.com/gpu.present=true`

```bash
kubectl get nodes --show-labels | grep nvidia.com/gpu.present=true

# Expected GPU nodes found in output:
# gpu-node-name   Ready   <none>   42h   v1.32.1 beta.kubernetes.io/arch=amd64,...,kubernetes.io/os=linux,nvidia.com/gpu.present=true
```

To resolve this issue, you can neither add the label or change the TensorFusionCluster resource to use your own labels to find GPU nodes.

```bash
# Using helm `initialGpuNodeLabelSelector` parameter to add env var `INITIAL_GPU_NODE_LABEL_SELECTOR` to tensor-fusion-operator:
helm upgrade --install --create-namespace --namespace tensor-fusion-sys --repo https://helm.tensor-fusion.ai --set agent.agentId="" --set initialGpuNodeLabelSelector="your-own-gpu-label-key=value" tensor-fusion-sys tensor-fusion
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

