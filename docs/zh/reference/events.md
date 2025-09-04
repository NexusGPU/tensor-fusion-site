# Kubernetes 事件

## GPUPool 事件

- `ManagedNodeCreated`： Normal, 从云厂商创建了GPU节点，以满足容量要求
- `Compaction`: Normal, GPU节点自动缩容
- `MaxResourceConstraintReached`: Warning, GPU池资源达到预设最大值，无法继续扩容

## Pod 事件

- `GPUQuotaOrCapacityNotEnough`: Warning, 表示算力资源或配额不足，Pod无法成功调度
- `GPUDeviceAllocatedFailed`: Warning, 在调度计算之后的BindingCycle报错，无法将GPU信息写入Pod的Annotation
- `PreScheduleDone`: Normal, 调度的SchedulingCycle成功，资源预留成功
- `ScheduleWithNativeGPU`: Normal, 在兼容现有Device Plugin的情况下可能出现，让未迁移到TensorFusion的Pod使用物理GPU模式运行
- `GPUDeviceAllocated`: Normal, 表示TensorFusion调度器完成了BindingCycle，Pod即将开始使用vGPU运行
