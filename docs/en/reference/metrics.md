# TensorFusion System Metrics

TensorFusion provides comprehensive metrics to monitor the performance, utilization, and health of your GPU infrastructure. This reference documents all available metrics for monitoring and troubleshooting your TensorFusion deployment.

## Table of Contents

- [GPU Metrics](#gpu-metrics)
  - [Computing & VRAM](#computing--vram)
  - [Network](#network)
  - [Temperature](#temperature)
- [GPU Scheduler Metrics](#gpu-scheduler-metrics)
- [GPU Worker Metrics](#gpu-worker-metrics)

## GPU Metrics

These metrics provide insights into the performance and utilization of individual GPUs inside TensorFusion cluster.

### Computing & VRAM

| Metric Name | Description | Fields | Use Case |
|-------------|-------------|--------|----------|
| `tf_gpu_metrics_avg_compute_percentage` | Average GPU compute utilization percentage over the collection interval | `uuid` | Monitor GPU computational load and identify potential bottlenecks |
| `tf_gpu_metrics_avg_memory_bytes` | Average GPU memory (VRAM) usage in bytes | `uuid` | Track memory consumption patterns and detect memory leaks or inefficient usage |

**Common Fields:**
- `uuid`: Unique identifier of the GPU
- `greptime_timestamp`: Time when the metric was collected
- `greptime_value`: The metric value (percentage for compute, bytes for memory)

### Network

| Metric Name | Description | Fields | Use Case |
|-------------|-------------|--------|----------|
| `tf_gpu_metrics_avg_rx` | Average GPU receive network throughput in bytes per second | `uuid` | Monitor data transfer to the GPU for distributed workloads |
| `tf_gpu_metrics_avg_tx` | Average GPU transmit network throughput in bytes per second | `uuid` | Monitor data transfer from the GPU for distributed workloads |

**Common Fields:**
- `uuid`: Unique identifier of the GPU
- `greptime_timestamp`: Time when the metric was collected
- `greptime_value`: Network throughput in bytes/second

### Temperature

| Metric Name | Description | Fields | Use Case |
|-------------|-------------|--------|----------|
| `tf_gpu_metrics_avg_temperature` | Average GPU temperature in degrees Celsius | `uuid` | Monitor thermal conditions to prevent overheating and ensure optimal performance |

**Common Fields:**
- `uuid`: Unique identifier of the GPU
- `greptime_timestamp`: Time when the metric was collected
- `greptime_value`: Temperature in degrees Celsius

## GPU Scheduler Metrics

These metrics provide insights into the GPU resource allocation and scheduling decisions.

| Metric Name | Description | Fields | Use Case |
|-------------|-------------|--------|----------|
| `tf_gpu_tflops_limit` | Maximum TFLOPS (Trillion Floating Point Operations Per Second) capacity of the GPU | `namespace`, `pool`, `worker` | Understand the theoretical computational limits of available GPUs |
| `tf_gpu_tflops_request` | Requested TFLOPS for the GPU by workloads | `namespace`, `pool`, `worker` | Track computational resource requests and allocation efficiency |
| `tf_vram_bytes_limit` | Maximum VRAM capacity in bytes available on the GPU | `namespace`, `pool`, `worker` | Understand memory constraints for workload planning |
| `tf_vram_bytes_request` | Requested VRAM in bytes by workloads | `namespace`, `pool`, `worker` | Track memory resource requests and allocation efficiency |

**Common Fields:**
- `namespace`: Kubernetes namespace
- `pool`: GPU pool identifier
- `worker`: Worker node identifier
- `greptime_timestamp`: Time when the metric was collected
- `greptime_value`: The metric value (TFLOPS or bytes depending on the metric)

## GPU Worker Metrics

These metrics provide insights into the performance and utilization at each TensorFusion GPU worker level.

| Metric Name | Description | Fields | Use Case |
|-------------|-------------|--------|----------|
| `tf_worker_metrics_avg_compute_percentage` | Average worker compute utilization percentage across all GPUs on the node | `worker`, `uuid` | Monitor overall worker node computational load and balance |
| `tf_worker_metrics_avg_memory_bytes` | Average worker memory usage in bytes across all GPUs on the node | `worker`, `uuid` | Track overall worker node memory consumption patterns |

**Common Fields:**
- `worker`: Worker node identifier
- `uuid`: Unique identifier of the GPU
- `greptime_timestamp`: Time when the metric was collected
- `greptime_value`: The metric value (percentage for compute, bytes for memory)
