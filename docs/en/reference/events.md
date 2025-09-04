# Kubernetes Events

## GPUPool Events

- `ManagedNodeCreated`： Normal, Managed nodes created from cloud provider, to meet the capacity requirements
- `Compaction`: Normal, GPU nodes auto-compaction and node termination
- `MaxResourceConstraintReached`: Warning, GPU pool resources reach the preset maximum, unable to continue scaling

## Pod Events

- `GPUQuotaOrCapacityNotEnough`: Warning, unable to continue scheduling because of not enough GPU resources or not enough GPU quota
- `GPUDeviceAllocatedFailed`: Warning, BindingCycle error after scheduling computation, unable to write GPU information to Pod's Annotation
- `PreScheduleDone`: Normal, SchedulingCycle completed successfully, resource reservation successful
- `ScheduleWithNativeGPU`: Normal, may occur when maintaining compatibility with existing Device Plugin, allows Pods not yet migrated to TensorFusion to run using physical GPU mode
- `GPUDeviceAllocated`: Normal, indicates that TensorFusion scheduler has completed the BindingCycle, Pod is about to start running with vGPU
