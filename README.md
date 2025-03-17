<p align="center"><a href="javascript:void(0);" target="_blank" rel="noreferrer"><img width="300" src="https://cdn.tensor-fusion.ai/tensor-fusion.png" alt="Logo"></a></p>

<p align="center">
    <strong><a href="https://tensor-fusion.ai" target="_blank">TensorFusion.AI</a></strong><br/>Next-Generation GPU Virtualization and Pooling for Enterprises<br><b>Less GPUs, More AI Apps.</b>
    <br />
    <a href="https://tensor-fusion.ai/guide/overview"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://tensor-fusion.ai/guide/overview">View Demo</a>
    |
    <a href="https://github.com/NexusGPU/tensor-fusion/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    |
    <a href="https://github.com/NexusGPU/tensor-fusion/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>


# ♾️ Tensor Fusion

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

Tensor Fusion is a state-of-the-art **GPU virtualization and pooling solution** designed to optimize GPU cluster utilization to its fullest potential.

This repo is for TensorFusion official website and documentation. Check out the main repo for further information: [NexusGPU/tensor-fusion](https://github.com/NexusGPU/tensor-fusion)

## 🚀 Quick Start

### Onboard Your Own AI Infra

- [Getting Started on Kubernetes](https://tensor-fusion.ai/guide/deployment-k8s)
- [Getting Started on VM](https://tensor-fusion.ai/guide/deployment-vm)
- [Deploy Self-hosted Community Edition](https://tensor-fusion.ai/guide/self-host)

### Try it out

- Explore the demo account: [Demo Console - Working in progress](https://app.tensor-fusion.ai?hint=demo)

- Run following command to try TensorFusion out in 3 minutes

```bash
# Step 1: Install TensorFusion in Kubernetes
helm install --repo https://nexusgpu.github.io/tensor-fusion/ --create-namespace

# Step 2. Onboard GPU nodes into TensorFusion cluster
kubectl apply -f https://raw.githubusercontent.com/NexusGPU/tensor-fusion/main/manifests/gpu-node.yaml

# Step 3. Check if cluster and pool is ready
kubectl get gpupools -o wide && kubectl get gpunodes -o wide

# Step3. Create an inference app using virtual, remote GPU resources in TensorFusion cluster
kubectl apply -f https://raw.githubusercontent.com/NexusGPU/tensor-fusion/main/manifests/inference-app.yaml

# Then you can forward the port to test inference, or exec shell
```

### 💬 Discussion

- Discord channel: [https://discord.gg/2bybv9yQNk](https://discord.gg/2bybv9yQNk)
- Discuss anything about TensorFusion: [Github Discussions](https://github.com/NexusGPU/tensor-fusion/discussions)
- Contact us with WeCom for Greater China region: [企业微信](https://work.weixin.qq.com/ca/cawcde42751d9f6a29) 
- Email us: [support@tensor-fusion.com](mailto:support@tensor-fusion.com)
- Schedule [1:1 meeting with TensorFusion founders](https://tensor-fusion.ai/book-demo)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/NexusGPU/tensor-fusion.svg?style=for-the-badge
[contributors-url]: https://github.com/NexusGPU/tensor-fusion/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/NexusGPU/tensor-fusion.svg?style=for-the-badge
[forks-url]: https://github.com/NexusGPU/tensor-fusion/network/members
[stars-shield]: https://img.shields.io/github/stars/NexusGPU/tensor-fusion.svg?style=for-the-badge
[stars-url]: https://github.com/NexusGPU/tensor-fusion/stargazers
[issues-shield]: https://img.shields.io/github/issues/NexusGPU/tensor-fusion.svg?style=for-the-badge
[issues-url]: https://github.com/NexusGPU/tensor-fusion/issues
[license-shield]: https://img.shields.io/github/license/NexusGPU/tensor-fusion.svg?style=for-the-badge
[license-url]: https://github.com/NexusGPU/tensor-fusion/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/company/tensor-fusion/about

