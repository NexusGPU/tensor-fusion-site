---
outline: deep
---

# Tensor Fusion Deployment for VM/BareMetal

## Prerequisites

- At least one Linux VM or BareMetal with GPU card mounted.
- Global Internet access 

## Step 1. Install K3S Master

Since TensorFusion is based on Kubernetes, you need install K3S to offer a simple Kubernetes environment. You can also use other ways to initialize a Kubernetes.

Prefer none GPU nodes for the K3S Master.

```bash
curl -sfL https://get.k3s.io | sh -s - server
```

## Step 2. Add GPU Server as K3S Nodes

```bash
with node-label nvidia.com/gpu.present=true
```

## Step 3. Install TensorFusion

```bash
helm install 
```
