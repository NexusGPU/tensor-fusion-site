# CUDA Call Tracing/Profiling
🚧 Under Construction

## Step 1. Enable Logging


Add the following environment variable to both business container and worker:

```yaml
- name: TF_ENABLE_LOG
  value: '1'
# Log level, error/warn/info/trace
- name: TF_LOG_LEVEL
  value: 'warn'

# Log into file rather than stdout
- name: TF_LOG_PATH
  value: '/tmp/tensor-fusion/tf.log'
```

Logs will be output to the container and collected by vector, sink to TSDB.

## Tracing with NCU Tool

```bash
/usr/local/cuda-12.8/nsight-compute-2025.1.1/target/linux-desktop-glibc_2_11_3-x64/ncu --config-file off --export profile-$(date +%Y%m%d-%H%M%S) --call-stack --force-overwrite python3 main.py --batch_size=1 --num_synth_data=10 --num_epochs=2
```