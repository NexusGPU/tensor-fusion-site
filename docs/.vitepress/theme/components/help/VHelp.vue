<template>
  <section class="faq">
    <div class="padding-global">
      <div class="w-layout-blockcontainer container small w-container">
        <div class="faq-component">
          <div role="list" class="faq-list">
            <div v-for="(item, index) in faqItems" :key="index" role="listitem" class="faq-item">
              <div class="faq-top">
                <div class="faq-title-wrapper">
                  <div class="text-size-medium">{{ item.question }}</div>
                </div>
                <div class="faq-action-wrapper">
                  <img loading="lazy"
                    src="https://cdn.prod.website-files.com/66f30c8d2ac082d2aee64be2/66f30c8d2ac082d2aee64c70_FAQ%20Arrow.svg"
                    alt="Arrow" class="arrow" />
                </div>
              </div>
              <div class="faq-bottom">
                <div class="faq-bottom-content">
                  <p>{{ item.answer }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const faqItems = [
  {
    question: "What is Tensor Fusion and how does it work?",
    answer: "Tensor Fusion is a GPU virtualization and management platform that allows you to access and share GPUs across your network as easily as using NFS. It creates a remote GPU pool that can be dynamically allocated to any CPU node in your LAN, enabling efficient GPU resource utilization."
  },
  {
    question: "How does Tensor Fusion's dynamic scheduling work?",
    answer: "Tensor Fusion uses intelligent bin-packing algorithms to automatically schedule and optimize GPU connections. It analyzes workload patterns and resource requirements to maximize GPU utilization while minimizing costs, ensuring your GPU resources are used efficiently."
  },
  {
    question: "What makes Tensor Fusion's GPU cluster management 'zero-touch'?",
    answer: "Our AI-powered infrastructure management system automates all aspects of GPU cluster operations. From resource allocation to workload distribution, Tensor Fusion handles everything automatically, eliminating the need for manual intervention and complex configuration."
  },
  {
    question: "What is Super-burst Mode and when should I use it?",
    answer: "Super-burst Mode is Tensor Fusion's unique feature that enables millisecond-level GPU scaling. It allows you to instantly scale up to use your entire GPU pool or scale down to zero, making it perfect for workloads with varying GPU demands or when you need maximum resource flexibility."
  },
  {
    question: "How does Tensor Fusion help reduce GPU costs?",
    answer: "Tensor Fusion optimizes GPU costs through several mechanisms: intelligent bin-packing for maximum utilization, dynamic scaling to avoid idle resources, and efficient resource sharing across your network. This means you can do more with fewer GPUs and only use what you need, when you need it."
  }
]
</script>
