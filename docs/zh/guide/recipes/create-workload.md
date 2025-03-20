## 创建工作负载配置文件

## 步骤 1. 分析计算资源需求与QoS等级

### 计算初始资源请求

您可以使用TensorFusion云服务获取资源推荐，或通过以下方法估算TFlops/显存需求：

显存估算：
- FP8精度推理情况下，每10亿参数需要约1GiB显存
- 大语言模型的每1K上下文窗口需要为每个并发用户预留1GB以上额外显存

TFlops估算较为复杂，因不同训练/推理框架及模型类型差异较大。建议先在单GPU上运行基准测试并监控利用率，再按用户数/数据量线性扩展，最后通过自动扩缩功能调整。

参考：[常见GPU信息](https://en.wikipedia.org/wiki/List_of_Nvidia_graphics_processing_units)

### 选择QoS等级

- **低优先级**：适合训练和实验任务。保证资源容量但不保证延迟，空闲时可积累突发额度。显存冷却速度快。
- **中优先级**：适合离线任务（如嵌入生成）。保证容量并允许突发，可抢占低优先级任务。无延迟保证，显存冷却速度中等。
- **高优先级**：适合非延迟敏感的在线任务（如推理）。保证容量并优先抢占中优先级任务，显存保持请求水平。
- **关键优先级**：适合实时延迟敏感任务（如实时翻译）。保证容量和低延迟，可抢占大多数任务，显存严格保持请求水平。

## 步骤 2. 添加工作负载注解

### 添加Pod注解

```yaml
tensor-fusion.ai/generate-workload: 'true'
tensor-fusion.ai/gpupool: default-pool
tensor-fusion.ai/inject-container: python
tensor-fusion.ai/replicas: '1'
tensor-fusion.ai/tflops-limit: '20'
tensor-fusion.ai/tflops-request: '10'
tensor-fusion.ai/vram-limit: 4Gi
tensor-fusion.ai/vram-request: 4Gi
tensor-fusion.ai/qos: medium
tensor-fusion.ai/workload: pytorch-example
```

### 使用工作负载配置文件

您也可以创建`WorkloadProfile`并通过注解引用：`tensor-fusion.ai/workload-profile: default-profile`

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: <...>
spec:
  template:
    metadata:
      labels:
        tensor-fusion.ai/enabled: 'true'
      annotations:
        tensor-fusion.ai/workload-profile: template-for-small-model
```

完整配置选项参见：[工作负载配置](/reference/workload-annotation)

## 步骤 3. 验证应用状态

[WIP]