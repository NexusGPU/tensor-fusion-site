---
layout: doc
---

# Command Line Reference

This document provides a comprehensive reference for all command line interfaces in TensorFusion.

## Operator & Scheduler CLI

### CLI Parameters

| Parameter | Description | Default |
|-----------|-------------|---------|
| `-enable-http2` | Enables HTTP/2 for the metrics and webhook servers | - |
| `-health-probe-bind-address` | The address the probe endpoint binds to | `:8081` |
| `-kubeconfig` | Path to a kubeconfig file (only required if out-of-cluster) | - |
| `-leader-elect` | Enable leader election for controller manager to ensure only one active instance | - |
| `-metrics-bind-address` | The address the metrics endpoint binds to | `0` (disabled) |
| `-metrics-secure` | Serve metrics endpoint securely via HTTPS (use `--metrics-secure=false` for HTTP) | - |
| `-zap-devel` | Use development mode for logging | `true` |
| `-zap-encoder` | Zap log encoding format (`json` or `console`) | - |
| `-zap-log-level` | Verbosity level for logging (`debug`, `info`, `error`, or any integer value > 0) | - |
| `-zap-stacktrace-level` | Level at which stacktraces are captured (`info`, `error`, `panic`) | - |
| `-zap-time-encoding` | Time encoding format (`epoch`, `millis`, `nano`, `iso8601`, `rfc3339`, `rfc3339nano`) | `epoch` |

### Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `INITIAL_GPU_NODE_LABEL_SELECTOR` | Initial label selector for GPU nodes | `nvidia.com/gpu.present=true` |
| `ENABLE_WEBHOOKS` | Enable webhook functionality | `true` |
| `OPERATOR_NAMESPACE` | Namespace for the operator | `tensor-fusion-sys` |
| `KUBECONFIG` | Path to kubeconfig file | `<kubeconfig>` |

## Hypervisor CLI

### CLI Parameters

| Parameter | Description | Default |
|-----------|-------------|---------|
| `--sock_path` | Worker unix socket path | `/tensor-fusion/worker/sock` |
| `--gpu_metrics_file`| GPU metrics file location | `/logs/metrics.log` |
| `--scheduler` | Scheduling policy for multiple processes on single GPU node (when GPU load is high) | Options: `FIFO` for simple first-in-first-out, `MLFQ` for multi-level feedback queue |

## Node Discovery CLI



### CLI Parameters

| Parameter | Description | Example |
|-----------|-------------|---------|
| `--hostname` | Custom hostname for binding current node with GPUNode custom resource | `<hostname>` |
| `--gpu-info-config` | Path to the GPU info configuration file | See example below |

#### GPU Info Config Example

```yaml
- model: RTX5090
  fullModelName: "NVIDIA GeForce RTX 5090"
  vendor: NVIDIA
  costPerHour: 0.65
  fp16TFlops: 419
```

### Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `HOSTNAME` | Node hostname | `<hostname>` |
| `KUBECONFIG` | Path to kubeconfig file | `<kubeconfig>` |
| `NODE_DISCOVERY_REPORT_GPU_NODE` | GPU node custom resource name | `<gpu-node-custom-resource-name>` |

## Worker CLI



### CLI Parameters

| Parameter | Description | Default/Notes |
|-----------|-------------|---------------|
| `-n` | Network protocol | Currently only `native` (native TCP communication) |
| `-p` | Worker port | Random value assigned by TensorFusion Operator-Scheduler |
| `-s` | Unix socket path folder | Should be `/tensor-fusion/worker/sock/` in Kubernetes |

### Environment Variables

| Variable | Description | Value |
|----------|-------------|-------|
| `TF_ENABLE_LOG` | Enable logging | `1` |

## GPU Client Stub



The GPU Client Stub consists of two libraries that use `LD_PRELOAD` to run before every process started inside the container or server:

- `libadd_path.so`: Adds additional library paths for AI application environments (e.g., hooked NVML)
- `libcuda.so`: Hooks into CUDA runtime

Example configuration in worker template:
```yaml
env:
- name: LD_PRELOAD
  value: /tensor-fusion/libadd_path.so:/tensor-fusion/libcuda.so
```

### Environment Variables

| Variable | Description | Value/Notes |
|----------|-------------|-------------|
| `TF_PATH` | Appended to PATH environment variable | `/tensor-fusion` |
| `TF_LD_PRELOAD` | Appended to LD_PRELOAD | Varies |
| `TF_LD_LIBRARY_PATH` | Appended to LD_LIBRARY_PATH | `/tensor-fusion` |
| `TF_ENABLE_LOG` | Disable/Enable logging, default to disabled | `0` |
