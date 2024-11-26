---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Tensor Fusion"
  text: Less GPUs<br />More AI Apps
  tagline: TensorFusion GPU虚拟化和池化解决方案
  actions:
    - theme: brand
      text: 概览
      link: /zh/guide/overview
    - theme: alt
      text: 用户手册
      link: /zh/guide/get-started
    - theme: alt
      text: 参考
      link: /zh/reference/cli-params
  image:
    src: https://filecdn.code2life.top/tensor-fusion.png
    alt: Tensor Fusion Logo
features:
  - title: GPU池化和虚拟化
    icon: 📤
    details: 像用NFS一样在局域网任何机器用GPU
  - title: 自动扩缩容
    icon: 🔄
    details: 自动扩缩推理应用，让任意应用利用到全池资源更低成本实现更高吞吐
  - title: 智能调度
    icon: 🌈
    details: 通过背压整流和多级反馈队列调度，最大化GPU使用率，最小化推理请求任务等待时长
  - title: 管理 & 可观测性
    icon: 📊
    details: 开箱即用的GPU池化管理、监控告警
  - title: 高性能
    icon: ⚡
    details: 对CUDA API底层优化，使得大部分模型应用在局域网使用池化GPU性能损失<5%
  - title: 云中立
    icon: 🌥️
    details: 支持Kubernetes、裸金属、边缘云等各种环境
---
