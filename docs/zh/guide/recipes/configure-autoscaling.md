# 配置AI应用自动扩缩容

## 步骤 1. 开启自动扩缩容

### 添加Pod自动扩缩容注解

> 需配合工作负载注解使用：[创建工作负载](/zh/guide/recipes/create-workload#添加pod注解)

```yaml
  # 开启垂直扩缩容
  tensor-fusion.ai/auto-resources: 'true'
  # 配置目标资源, 可填all|tflops|vram，若为空则只推荐不更新
  tensor-fusion.ai/auto-scale-target-resource: all 
  # 开启水平扩缩容
  tensor-fusion.ai/auto-replicas: 'true'
```

### 使用工作负载配置文件进行详细配置

* 垂直扩缩容: 基于GPU资源历史使用量数据，采用社区VPA Histogram算法实现。
 VPA算法生成的估算值由Target、LowerBound、UpperBound组成，默认对应P90、P50、P95用量。
 若当前资源用量在LowerBound和UpperBound范围外，则生成推荐值。

>[!NOTE] 注意：若enable不为true，或者targetResource为空，则只推荐资源值，不会实际应用资源推荐值

* 定时扩缩容: 基于标准的cron表达式，当`enable`为`true`，并且在`start`和`end`范围内生效，超出时间范围则恢复至添加工作负载时指定的资源值，[Cron表达式参考](https://en.wikipedia.org/wiki/Cron)

```yaml
autoScalingConfig:
    # 垂直扩缩容配置
    autoSetResources:
      # 是否开启
      enable: true
      # 目标资源
      targetResource: all
      # 计算TFLOPS目标值百分位， 默认值：0.9
      targetTflopsPercentile: 0.9
      # 计算TFLOPS下边界值百分位，默认值：0.5
      lowerBoundTflopsPercentile: 0.5
      # 计算TFLOPS上边界值百分位，默认值：0.95
      upperBoundTflopsPercentile: 0.95
      # 计算VRAM目标值百分位，默认值：0.9
      targetVramPercentile: 0.9
      # 计算VRAM下边界值百分位，默认值：0.5
      lowerBoundVramPercentile: 0.5
      # 计算VRAM上边界值百分位，默认值：0.95
      upperBoundVramPercentile: 0.95
      # 请求估算值扩大系数 默认值：0.15
      requestMarginFraction: 0.15
      # 计算上下边界估算值信心倍数的时间间隔 默认值：24小时
      confidenceInterval: 24h
    autoSetReplicas: {}
    # 定时扩缩容配置
    cronScalingRules:
        # 是否启用该规则
      - enable: true
        # 规则名称
        name: "test"
        # 规则生效起始时间
        start: "0 0 * * Thu"
        # 规则生效结束时间
        end: "59 23 * * Thu"
        # 期望设置的GPU资源值
        desiredResources:
          limits:
            tflops: "99"
            vram: 10Gi
          requests:
            tflops: "44"
            vram: 5Gi
```

## 步骤 2. 观测扩缩容状态

> 工作负载会生成对应的`TensorFusionWorkload`资源对象，`Status`中的字段会实时反应当前扩缩容状态

```yaml
status:
  conditions:
    # GPU资源推荐值产生的原因
    - lastTransitionTime: '2025-10-09T09:16:46Z'
      message: TFLOPS scaled up due to (1) below lower bound (2)
      reason: OutOfEstimatedBound
      status: 'True'
      type: RecommendationProvided
  # 当前GPU资源推荐值
  recommendation:
    limits:
      tflops: '13'
      vram: 1Gi
    requests:
      tflops: '13'
      vram: 1Gi
  # 当前已应用GPU资源推荐值的副本数
  appliedRecommendedReplicas: 3
  # 当前生效的定时扩缩容规则
  activeCronScalingRule: <...>
```