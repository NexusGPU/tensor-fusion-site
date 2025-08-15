---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Tensor Fusion"
  text: Less GPUs<br />More AI Apps
  tagline: 行业领先的GPU虚拟化和池化解决方案
  actions:
    - theme: brand
      text: 概览
      link: /zh/guide/overview
    - theme: alt
      text: 用户手册
      link: /zh/guide/overview#%F0%9F%9A%80-quick-start
    - theme: alt
      text: 参考
      link: /zh/reference/cli-params
  image:
    src: https://cdn.tensor-fusion.ai/logo.round.png
    alt: Tensor Fusion Logo
features:
  - title: GPU池化和虚拟化
    icon: 📤
    details: 像用NFS一样在局域网使用任何GPU服务器
  - title: 自动扩缩容
    icon: 🔄
    details: 自动扩缩AI应用，更低成本实现更高吞吐、高弹性
  - title: 智能调度
    icon: 🌈
    details: 通过智能调度，最大化GPU使用率，大幅减少AI Infra成本
  - title: 管理 & 可观测性
    icon: 📊
    details: 开箱即用的GPU池化管理、监控告警
  - title: 高性能
    icon: ⚡
    details: 对CUDA API底层优化，使得大部分模型应用在局域网使用池化GPU性能损失<5%
  - title: 云中立、硬件厂商中立
    icon: 🌥️
    details: 支持Kubernetes、裸金属、边缘云等各种环境，未来会支持除NVIDIA之外的更多厂商
---
