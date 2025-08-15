# TensorFusion Metrics Reference

TensorFusion collects comprehensive metrics for monitoring GPU infrastructure, workloads, and system performance. All metrics are stored in GreptimeDB with time-series indexing.

## System Metrics

**Measurement:** `tf_system_metrics`

Cluster-wide system statistics and operational counters.

#### Tags

| Tag | Description |
|-------|-------------|
| `pool` | GPU pool identifier |

#### Fields

| Field | Type | Description |
|-------|------|-------------|
| `total_workers_cnt` | int64 | Total active workers |
| `total_nodes_cnt` | int64 | Total nodes in cluster |
| `total_allocation_fail_cnt` | int64 | Cumulative allocation failures |
| `total_allocation_success_cnt` | int64 | Cumulative successful allocations |
| `total_scale_up_cnt` | int64 | Cumulative scale-up events |
| `total_scale_down_cnt` | int64 | Cumulative scale-down events |
| `ts` | timestamp | Record timestamp |

## Worker Resource Metrics

**Measurement:** `tf_worker_resources`

Resource allocation and usage per worker.

#### Tags

| Tag | Description |
|-------|-------------|
| `worker` | Worker identifier |
| `workload` | Associated workload |
| `pool` | GPU pool identifier |
| `namespace` | Kubernetes namespace |
| `qos` | Quality of Service class |

#### Fields

| Field | Type | Description |
|-------|------|-------------|
| `tflops_request` | float64 | Requested TFLOPS |
| `tflops_limit` | float64 | TFLOPS limit |
| `vram_bytes_request` | float64 | Requested VRAM in bytes |
| `vram_bytes_limit` | float64 | VRAM limit in bytes |
| `gpu_count` | int | Number of GPUs allocated |
| `raw_cost` | float64 | Raw compute cost |
| `ready` | bool | Worker readiness status |
| `ts` | timestamp | Record timestamp |

## Node Resource Metrics

**Measurement:** `tf_node_resources`

Resource allocation and utilization per node.

#### Tags

| Tag | Description |
|-------|-------------|
| `node` | Node identifier |
| `pool` | GPU pool identifier |
| `phase` | Node phase/status |

#### Fields

| Field | Type | Description |
|-------|------|-------------|
| `allocated_tflops` | float64 | Allocated TFLOPS |
| `allocated_tflops_percent` | float64 | TFLOPS utilization percentage |
| `allocated_vram_bytes` | float64 | Allocated VRAM in bytes |
| `allocated_vram_percent` | float64 | VRAM utilization percentage |
| `allocated_tflops_percent_virtual` | float64 | TFLOPS vs virtual capacity |
| `allocated_vram_percent_virtual` | float64 | VRAM vs virtual capacity |
| `raw_cost` | float64 | Node compute cost |
| `gpu_count` | int | Number of GPUs on node |
| `ts` | timestamp | Record timestamp |

## Worker Usage Metrics

**Measurement:** `tf_worker_usage`

Real-time worker resource usage from hypervisor.

#### Tags

| Tag | Description |
|-------|-------------|
| `workload` | Associated workload |
| `worker_name` | Worker identifier |
| `namespace` | Kubernetes namespace |
| `pool_name` | GPU pool identifier |
| `node_name` | Host node name |
| `uuid` | GPU UUID |

#### Fields

| Field | Type | Description |
|-------|------|-------------|
| `compute_percentage` | float64 | GPU compute utilization |
| `compute_tflops` | float64 | Actual TFLOPS usage |
| `memory_percentage` | float64 | VRAM utilization percentage |
| `memory_bytes` | uint64 | VRAM usage in bytes |
| `ts` | timestamp | Record timestamp |

## GPU Usage Metrics

**Measurement:** `tf_gpu_usage`

Detailed GPU hardware metrics from hypervisor.

#### Tags

| Tag | Description |
|-------|-------------|
| `node` | Host node name |
| `pool` | GPU pool identifier |
| `uuid` | GPU UUID |

#### Fields

| Field | Type | Description |
|-------|------|-------------|
| `compute_percentage` | float64 | GPU compute utilization |
| `memory_percentage` | float64 | VRAM utilization percentage |
| `memory_bytes` | uint64 | VRAM usage in bytes |
| `compute_tflops` | float64 | Actual TFLOPS usage |
| `rx` | float64 | PCIe receive KB/s |
| `tx` | float64 | PCIe transmit KB/s |
| `temperature` | float64 | GPU temperature (°C) |
| `graphics_clock_mhz` | float64 | Graphics clock frequency |
| `sm_clock_mhz` | float64 | SM clock frequency |
| `memory_clock_mhz` | float64 | Memory clock frequency |
| `video_clock_mhz` | float64 | Video clock frequency |
| `power_usage` | float64 | Power consumption (W) |
| `nvlink_rx` | float64 | NVLink receive throughput |
| `nvlink_tx` | float64 | NVLink transmit throughput |
| `ts` | timestamp | Record timestamp |
