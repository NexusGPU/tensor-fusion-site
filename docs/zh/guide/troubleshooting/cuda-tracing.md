
# CUDA链路追踪

🚧 Under Construction

## Step 1. Enable Logging


Add the following environment variable to both business container and worker:

```yaml
- name: TF_ENABLE_LOG
  value: '1'
- name: TF_LOG_PATH
  value: '/tmp/tensor-fusion/debug.log'
# Log level, 0: error, 1: info, 2: tracing
- name: TF_LOG_LEVEL
  value: '1'
```

Logs will be output to the container and collected by vector, sink to TSDB.

