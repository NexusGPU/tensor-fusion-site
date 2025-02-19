---
outline: deep
---

# Overview

## What is TensorFusion ?

TensorFusion is the real-world GPU virtualization framework.

Run more AI apps, with less GPUs.

<video-player 
                        src="https://cdn.tensor-fusion.ai/TensorFusion-demo.mp4"
                        poster="https://cdn.tensor-fusion.ai/tfs-no-play-poster.png"
                        >
                        </video-player>

- It allows multiple AI models sharing a fused distributed GPU pool and using Virtual GPU to for inference.
- It auto scales up and down AI apps at CUDA API level within milliseconds

Just Imagine Every AI app is powered by ALL GPUs !

## How it works ?

Tensor Fusion framework consists of:

- cf-client: the stub that hooks CUDA API to make inference apps running without GPU
- cf-server: replay real CUDA calls and shift VRAM/context of multiple AI models
- cf-mediator (optional): CUDA calls load-balancer
- cf-control (optional): Control plane for managing GPU cluster metadata, CUDA traces/metrics, control scheduling policies

![](https://cdn.gamma.app/2bbv2jorfkzmum4/d644830ef2ba49a78fb7e51f1b3d974f/original/CUDA-Fusion_Page-1--1728562838096.png)

## How can TensorFusion help you ?

### Saving 40%-90% of  GPU costs

Shape GPU utilization by ms level scheduling, eviction, load-balancing, get rid of periodical GPU spiking-sleeping, auto scale down to nearly zero.

### Nx faster and more scalable inference

Auto scale up AI models from CUDA API level, significantly increase inference throughput and reduce latency for hot models.

### Manage GPU nodes with ease

No GPU-operator, no drivers, device plugins or any annoying infra issues.

Just leave the auto-pilot bare metal GPU pool, use it just like a NFS !


## Motivations

There are 3 common problems in the industry.

### #1 AI models cost too much in production envs

When it comes to large scale inference of multiple models, Multiple GPUs can not be fully utilized
Ideally, it should keep steady 70% GPU usage, saving more than 50% of costs.

![](https://cdn.gamma.app/2bbv2jorfkzmum4/eeba1fce813f4a789ddca1b5892a62ae/original/image.png)

### #2 Developers are waiting for GPUs to test new AI models

When it comes to develop AI apps or learn by hands-on labs, everyone is queuing to lock GPU machines when multiple developers/students need it.

Ideally, they could reuse the same GPU without lock whole VM, use GPU resource on-demand.

![](https://cdn.gamma.app/2bbv2jorfkzmum4/635d6cff36ab4096bccccd7d19f27e2a/original/CUDA-Fusion_Page-2--1728563773207.png)

### #3 Cloud vendors don't have enough GPUs for customers

Cloud vendors sell GPU machines to customers, but they always lack of available GPU.

Ideally, they should be able to oversell the same GPU to different tenants.

![](https://cdn.gamma.app/2bbv2jorfkzmum4/3df49b34ff9a4171ba45bab3bcb31809/original/Screenshot-2024-10-10-at-20.41.13.png)

## When to use TensorFusion ?

- Serve multiple small/medium/large models, but not super large ones like Llama-3.1-70B or 405B
- When you are building AI hands-on labs for multiple learners.

## When not to use TensorFusion ? 

- Serve single super large foundation model that's bigger than 70B, it can not be loaded to single GPU, thus it's communication intensive, and remote GPU pool is not the best practice, please buy NVLink and NVSwitch to increase throughput.
- When you don't care the GPU costs.
