### 无ClusterAgent模式本地安装

当您需要纯本地安装且不需要使用高级功能时，可以使用此选项，但无法使用[TensorFusion控制台](https://app.tensor-fusion.ai/workbench)进行集中管理。

第一步，使用Helm命令一键安装TensorFusion。

::: code-group

```bash [中国大陆网络]
helm upgrade --install --create-namespace --namespace tensor-fusion-sys \
  --repo https://download.tensor-fusion.ai \
  --set agent.agentId="" -f https://download.tensor-fusion.ai/values-cn.yaml \
  tensor-fusion-sys tensor-fusion
```

```bash [国际网络]
helm upgrade --install --create-namespace --namespace tensor-fusion-sys \
  --repo https://download.tensor-fusion.ai \
  --set agent.agentId="" tensor-fusion-sys tensor-fusion
```

```bash [私有化部署控制台的企业用户]
helm upgrade --install --create-namespace --namespace tensor-fusion-sys \
  --repo https://download.tensor-fusion.ai \
  --set agent.enrollToken=xxx --set agent.agentId=xxx \
  --set agent.cloudEndpoint=wss://your-own.domain/_ws \
  tensor-fusion-sys tensor-fusion
```

:::

第二步，应用TensorFusion的集群配置清单。

::: code-group

```bash [中国大陆网络]
kubectl apply -f https://app.tensor-fusion.ai/tmpl/tf-cluster-cn
kubectl apply -f https://app.tensor-fusion.ai/tmpl/tf-scheduling-config
```

```bash [国际网络]
kubectl apply -f https://app.tensor-fusion.ai/tmpl/tf-cluster
kubectl apply -f https://app.tensor-fusion.ai/tmpl/tf-scheduling-config
```

:::

第三步，验证TensorFusion是否安装成功。

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

最后，部署一个Pytorch Pod来端到端验证TensorFusion远程vGPU：

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
          image: docker.m.daocloud.io/pytorch/pytorch:2.6.0-cuda12.4-cudnn9-runtime
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

执行以下脚本，可在虚拟GPU中运行Qwen3 0.6B，验证推理结果

```bash
pip config set global.index-url https://pypi.mirrors.ustc.edu.cn/simple
pip install modelscope packaging transformers accelerate

cat << EOF >> test-qwen.py
from modelscope import AutoModelForCausalLM, AutoTokenizer

model_name = "Qwen/Qwen3-0.6B"

tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(
    model_name,
    torch_dtype="auto",
    device_map="cuda:0"
)

prompt = "Give me a short introduction to large language model."
messages = [
    {"role": "user", "content": prompt}
]
text = tokenizer.apply_chat_template(
    messages,
    tokenize=False,
    add_generation_prompt=True,
    enable_thinking=True
)
model_inputs = tokenizer([text], return_tensors="pt").to(model.device)
generated_ids = model.generate(
    **model_inputs,
    max_new_tokens=32768
)
output_ids = generated_ids[0][len(model_inputs.input_ids[0]):].tolist() 
try:
    # rindex finding 151668 (</think>)
    index = len(output_ids) - output_ids[::-1].index(151668)
except ValueError:
    index = 0

thinking_content = tokenizer.decode(output_ids[:index], skip_special_tokens=True).strip("\n")
content = tokenizer.decode(output_ids[index:], skip_special_tokens=True).strip("\n")

print("thinking content:", thinking_content)
print("content:", content)
EOF

python3 test-qwen.py
```
### 卸载TensorFusion

运行如下命令一键卸载所有组件

```bash
# 可指定 KUBECONFIG 环境变量
curl -sfL https://download.tensor-fusion.ai/uninstall.sh | sh -
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
helm upgrade --install --create-namespace --namespace tensor-fusion-sys --repo https://download.tensor-fusion.ai --set agent.agentId="" --set initialGpuNodeLabelSelector="your-own-gpu-label-key=value" tensor-fusion-sys tensor-fusion
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
