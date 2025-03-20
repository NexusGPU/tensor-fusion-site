# Config GPU-Info Map

## Configure Scheduling Priority of Each QoS Level

🚧 Under Construction

## Configure Unit Price of GPU

```bash
kubectl edit configmap tensor-fusion-sys-public-gpu-info -n tensor-fusion-sys
```

```yaml
# Refer: 
#  - https://www.techpowerup.com/gpu-specs
#  - https://getdeploying.com/reference/cloud-gpu

# Field Definition:
# - 'model' is `GPUModel_BoardSlotType` to identify the GPU
# - 'costPerHour' is the average cost referring a few Cloud/Serverless GPU vendors
# - 'fp16TFlops' is the max FP16 TFlops of the GPU. For NVIDIA, it means none-sparsity performance and using Tensor Cores

# note that this sheet only contains TFlops, no VRAM, since variant GPUs have the same TFlops but different VRAM, VRAM can be easily detected from NVML lib
# TODO: this should be dynamic after user inputs their cloud vendor and discounts info, for example Azure/AWS has much higher price than this sheet

# Turing Architecture Series
- model: T4
  fullModelName: "Tesla T4"
  vendor: NVIDIA
  costPerHour: 0.53
  fp16TFlops: 65
```
