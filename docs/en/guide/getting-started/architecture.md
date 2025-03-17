---
outline: deep
---

# TensorFusion Architecture

## System Architecture

TensorFusion consists of three layers:

- **Virtualization Layer**: Implements fractional GPU, GPU memory address and resource isolation, oversubscription, and remote sharing. Includes Hypervisor, ResourceLimiter, GPU Worker, and GPU Client Stub.
- **Resource Pooling Layer**: Implements GPU resource pooling, distributed scheduling, monitoring, and cloud provider integration. Includes TensorFusion Operator & Scheduler and Node Discovery Job.
- **Control Layer**: Centrally manages GPU/NPU clusters in the cloud, including ClusterAgent in user Kubernetes clusters and TensorFusion Portal in the cloud.

Here is the overall system architecture:

![](https://cdn.tensor-fusion.ai/tf-architecture.png)

## Core Concepts

### Basic Concepts

- **TFLOPS**: Trillion Floating Point Operations Per Second, the fundamental unit for TensorFusion's compute allocation and scheduling, measured as FP16 non-sparse compute in TensorFusion.
- **VRAM**: GPU/NPU memory, also known as "Framebuffer" or "GPU Mem", measured, allocated, and scheduled in MiB units in TensorFusion.
- **vGPU**: Software-defined virtual GPU created through isolation and resource limitations of GPU/NPU devices, indistinguishable from physical GPU devices from the application's perspective.
- **Fractional GPU**: GPU partitioning implemented through ResourceLimiter.
- **GPU Cluster**: A collection of one or more GPU Pools, typically corresponding to a Kubernetes cluster and an Environment in the TensorFusion Console.
- **GPU Pool**: A collection of one or more GPU Nodes, forming the basic unit of distributed compute scheduling.
- **GPU Node**: Comprised of one or more GPU devices and a host server, serving as the basic unit for compute billing.

### TensorFusion System Concepts

- **GPU Worker**: Sandbox for running user GPU programs, comparable to VM instances in CPU virtualization or Pods in Kubernetes, automatically managed by TensorFusion without user intervention.
- **GPU Client Stub**: User-space virtual GPU driver library for vGPU, automatically injected by TensorFusion without user intervention.
- **TensorFusion Hypervisor**: Core component for managing GPU Workers, analogous to a Virtual Machine Monitor (VMM) in CPU virtualization or Kubelet in Kubernetes.
- **TensorFusion Controller**: Kubernetes cluster extension including Operator and Scheduler built with Kubebuilder, serving as the core component for managing AI infrastructure, comparable to controller-manager and scheduler in Kubernetes.
- **TensorFusion Workload**: AI applications using GPU compute, which can be manually managed or automatically managed by TensorFusion, comparable to Deployments in Kubernetes.
- **TensorFusion Connection**: Kubernetes extension resource for managing connections between AI application instances and GPU Workers, comparable to Service Endpoints in Kubernetes, without requiring user awareness.
- **QoS**: Compute service quality differentiated by priority, a critical configuration for ensuring compute availability for each service while maximizing overall efficiency of mixed AI workloads. High QoS applications have higher priority for compute allocation and preemption than low QoS applications.

## Deployment Topology

**After deploying TensorFusion**, the user's cluster gains these components:

- A **TensorFusion Deployment** containing three containers: controller, cluster-agent, and vector-metrics-collector.
- **Automatic deployment of Hypervisor and one-time NodeDiscovery Job for GPU information collection on each GPU node**.
- When applications requiring AI compute run on any cluster node, TensorFusion **dynamically launches corresponding GPU Worker Pods as needed**, with each Worker containing the ResourceLimiter dynamic library and each application Pod automatically injected with the GPU Stub dynamic library.

Before deploying TensorFusion, each AI application requires mounting GPU devices. The cluster topology is shown below:

![](https://cdn.tensor-fusion.ai/deploy-topo-before-tf.jpg)

**After deploying TensorFusion**, each AI application can **dynamically access partitioned GPU resources on local or remote nodes without mounting hardware devices, enabling automatic scaling of AI compute at 1 TFlops granularity**. The cluster topology is shown below:

![](https://cdn.tensor-fusion.ai/tf-deploy-topo.jpg)

### Virtualization Layer Principles

TensorFusion's virtualization layer builds upon academic research from predecessors like rCUDA and GaiaGPU, combined with the team's deep understanding of GPUs and extensive engineering optimizations, resulting in an industrial-grade solution developed in C++/Rust.

- After users add annotations to their existing Kubernetes Pods, TensorFusion's Pod MutationWebhook automatically injects required GPU stub functions through InitContainers
- The TensorFusion scheduler simultaneously allocates GPU resources, launching Workers on the most suitable GPU hosts, achieving tenant resource isolation and function/data address isolation
- When Pods call CUDA APIs, calls are forwarded to Workers through the GPU Stub, where special processing and optimizations enable secure remote or local GPU sharing
- The ResourceLimiter running on the Worker intercepts GPU driver function calls, flexibly controlling compute and VRAM resources for memory management and kernel function calls (LaunchKernel)
- The Hypervisor running on each GPU host manages multiple active Workers, implementing cold/warm/hot VRAM layering, real-time monitoring, GPU context hot migration, and model preloading capabilities

![](https://cdn.tensor-fusion.ai/vgpu-flow-tf.pic.jpg)

### Resource Pooling Layer Principles

TensorFusion is fully implemented as Kubernetes extensions, using a series of CRD definitions and state reconcilers to implement all GPU pool management functions.

![](https://cdn.tensor-fusion.ai/tf-crd.png)

The node defragmentation and automatic provisioning/termination are similar to the [Karpenter](https://github.com/kubernetes-sigs/karpenter) project, drawing inspiration from Karpenter's core processes and partial implementations.

### Control Layer Principles

After ClusterAgent starts, it establishes a secure WebSocket connection with the cloud console using the AgentID and EnrollToken, enabling secure bidirectional communication with the centralized cloud console.
