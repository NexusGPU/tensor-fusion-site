### 无ClusterAgent模式本地安装（不推荐）

当您需要纯本地安装且不需要使用高级功能时，可以使用此选项，但无法使用[TensorFusion控制台](https://app.tensor-fusion.ai/workbench)进行集中管理。

```bash
helm upgrade --install --create-namespace --namespace tensor-fusion-sys --repo https://helm.tensor-fusion.ai --set agent.agentId="" tensor-fusion-sys tensor-fusion
```

对于无代理本地安装，使用以下命令获取并应用基本配置（仅测试）

```bash
kubectl apply -f https://app.tensor-fusion.ai/tmpl/tf-cluster-cn
# Use this if your cluster is not in China Mainland
# kubectl apply -f https://app.tensor-fusion.ai/tmpl/tf-cluster

kubectl apply -f https://app.tensor-fusion.ai/tmpl/tf-scheduling-config
```

然后运行以下命令验证，如果看到每个GPU节点上hypervisor正常运行且GPUCluster资源状态就绪，即可开始使用TensorFusion。

```bash
kubectl get pods -n tensor-fusion-sys
# 预期输出：
# NAME                                      READY   STATUS    RESTARTS   AGE
# hypervisor-<节点名称>                    1/1     Running   0          2m

kubectl get tensorfusionclusters
# 预期输出：
# NAME                                  STATUS      AGE
# shared-tensor-fusion-cluster          Ready       2m
```

### 常见问题

如果hypervisor Pod未显示，请检查GPU节点是否已添加标签`nvidia.com/gpu.present=true`

```bash
kubectl get nodes --show-labels | grep nvidia.com/gpu.present=true

# 预期找到GPU节点输出：
# gpu-node-name   Ready   <none>   42h   v1.32.1 beta.kubernetes.io/arch=amd64,...,kubernetes.io/os=linux,nvidia.com/gpu.present=true
```

解决方法：可以添加标签或修改TensorFusionCluster资源使用自定义标签识别GPU节点

```bash
# Using helm `initialGpuNodeLabelSelector` parameter to add env var `INITIAL_GPU_NODE_LABEL_SELECTOR` to tensor-fusion-operator:
helm upgrade --install --create-namespace --namespace tensor-fusion-sys --repo https://helm.tensor-fusion.ai --set agent.agentId="" --set initialGpuNodeLabelSelector="your-own-gpu-label-key=value" tensor-fusion-sys tensor-fusion
```

```bash
curl https://app.tensor-fusion.ai/tmpl/tf-cluster > tf-cluster.yaml

# 编辑tf-cluster.yaml
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
