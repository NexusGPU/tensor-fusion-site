<p align="center"><a href="javascript:void(0);" target="_blank" rel="noreferrer"><img width="300" src="https://filecdn.code2life.top/tensor-fusion.png" alt="Logo"></a></p>

# Tensor Fusion

Tensor Fusion is a AI infra solution focusing on maximizing GPU usage with pooling and intelligent scheduling. It's based on a cutting-edge API-remoting GPU virtualization.

**Less GPUs, More AI Apps**. 

## Documents

<a id="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://tensor-fusion.ai) -->

[Tensor Fusion Docs](https://tensor-fusion.ai/guide/overview)

## Getting Started

::warn:: **This project is currently in heavy development.**

Onboard your GPU cluster to Tensor Fusion in minutes.

### Installation

- [Installation on Kubernetes](https://docs.tensor-fusion.ai/guide/deployment-k8s)
- [Installation on Kubernetes](https://docs.tensor-fusion.ai/guide/deployment-k8s)

<!-- ## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources. -->

## Roadmap

### Core Features

- [x] NVIDIA GPU pooling
- [x] Pytorch support
- [ ] Seamless CUDA Context migration
- [ ] QoS levels
- [ ] Autoscaling policies
- [ ] TensorFlow and other framework support
- [ ] Compression, multiplexing & RDMA
- [ ] Support multiple GPU/NPU vendors based on [ZLUDA](https://github.com/vosen/ZLUDA)

### Scheduling & Management

- [ ] Metrics & tracing of CUDA calls
- [ ] Advanced scheduling, super burst mode
- [ ] Hybrid scheduling, auto move communication intensive models schedule to local GPU
- [ ] Management dashboard

### Platform Support

- [x] Run on VM/BareMetal
- [x] Run on Kubernetes clusters
- [ ] Run on ARM chips

See the [open issues](https://github.com/NexusGPU/tensor-fusion-site/issues) for a full list of proposed features (and known issues).

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Top contributors

<a href="https://github.com/NexusGPU/tensor-fusion-site/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=NexusGPU/docs" alt="contrib.rocks image" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

TensorFusion is not open sourced as of now. It will be open after GA with BSL license.

## Support & Contact

- Discord channel: [https://discord.gg/2bybv9yQNk](https://discord.gg/2bybv9yQNk)
- Email address: [@support@tensor-fusion.com](mailto:support@tensor-fusion.com)
- Project link: [https://github.com/NexsusGPU/TensorFusion](https://github.com/NexsusGPU/TensorFusion)

## Acknowledgments

* [GPU Less](https://choosealicense.com)
* [rCUDA](https://www.webpagefx.com/tools/emoji-cheat-sheet)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/NexusGPU/tensor-fusion-site.svg?style=for-the-badge
[contributors-url]: https://github.com/NexusGPU/tensor-fusion-site/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/NexusGPU/tensor-fusion-site.svg?style=for-the-badge
[forks-url]: https://github.com/NexusGPU/tensor-fusion-site/network/members
[stars-shield]: https://img.shields.io/github/stars/NexusGPU/tensor-fusion-site.svg?style=for-the-badge
[stars-url]: https://github.com/NexusGPU/tensor-fusion-site/stargazers
[issues-shield]: https://img.shields.io/github/issues/NexusGPU/tensor-fusion-site.svg?style=for-the-badge
[issues-url]: https://github.com/NexusGPU/tensor-fusion-site/issues
[license-shield]: https://img.shields.io/github/license/NexusGPU/tensor-fusion-site.svg?style=for-the-badge
[license-url]: https://github.com/NexusGPU/tensor-fusion-site/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/company/tensor-fusion/about
[product-screenshot]: images/screenshot.png