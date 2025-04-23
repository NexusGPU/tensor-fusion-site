# CUDA Call Tracing/Profiling
🚧 Under Construction

## Step 1. Enable Logging


Add the following environment variable to both business container and worker:

```yaml
- name: TF_ENABLE_LOG
  value: '1'
# Log into file rather than stdout
- name: TF_LOG_PATH
  value: '/tmp/tensor-fusion/debug.log'
```

Logs will be output to the container and collected by vector, sink to TSDB.

