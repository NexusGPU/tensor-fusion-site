<template>
  <section>
    <div class="padding-global">
      <div class="w-layout-blockcontainer container w-container">
        <div class="testimonial-wrapper">
          <div class="testimonial-component">
            <div class="header"
              style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
              <div class="heading-4 text-weight-medium">Impactful Results,<br />Driving Success</div>
              <div class="opacity-60">
                <div class="max-width-40ch">
                  <div>Hear directly from our clients about their experiences and the impact of Tensor Fusion</div>
                </div>
              </div>
            </div>
          </div>
          <div class="testimonial-grid">
            <div v-for="(testimonial, index) in testimonials" 
                 :key="testimonial.id"
                 :id="testimonial.nodeId"
                 :data-w-id="testimonial.dataId"
                 :style="testimonial.style"
                 :class="['testimonial-card', { 'hide-landscape': testimonial.hideOnLandscape }]">
              <div class="quote-icon"><img loading="lazy"
                  src="https://cdn.prod.website-files.com/66f30c8d2ac082d2aee64be2/66f30c8d2ac082d2aee64c45_Quote%20Icon.svg"
                  :alt="testimonial.alt" :class="{ 'icon': index > 0 }"></div>
              <div class="testimonial-content">
                <div class="testimonial-quote">
                  <div class="text-size-medium">{{ testimonial.quote }}</div>
                </div>
                <div class="testimonial-person-info">
                  <div class="testimonial-image"><img loading="lazy"
                      :src="testimonial.image"
                      alt="Image"></div>
                  <div class="testimonial-info">
                    <div class="text-size-small text-weight-bold">{{ testimonial.name }}</div>
                    <div class="opacity-60">
                      <div class="text-size-small">{{ testimonial.position }}</div>
                    </div>
                  </div>
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
const testimonials = [
  {
    id: 1,
    nodeId: "w-node-_525f333e-16b4-a716-1c03-a45f2fadfa63-aee64be3",
    dataId: "525f333e-16b4-a716-1c03-a45f2fadfa63",
    quote: "Tensor Fusion has been transformative for our AI infrastructure. We've seen an 87% reduction in our GPU costs while maintaining the same throughput.",
    name: "Dr. Sarah Chen",
    position: "Chief Technology Officer, AI Scale Labs",
    image: "https://cdn.prod.website-files.com/66f30c8d2ac082d2aee64be2/66f30c8d2ac082d2aee64cd9_Testimonial%2001.jpg",
    alt: "Quote Icon",
    hideOnLandscape: false
  },
  {
    id: 2,
    nodeId: "w-node-_525f333e-16b4-a716-1c03-a45f2fadfa73-aee64be3",
    dataId: "525f333e-16b4-a716-1c03-a45f2fadfa73",
    
    quote: "OMG! Our GPU utilization jumped from 23% to 91% after implementing Tensor Fusion! The automated resource allocation is pure magic - no more GPU usage headaches!",
    name: "Mike Rodriguez",
    position: "Co-founder & Head of AI, NextGen ML",
    image: "https://cdn.prod.website-files.com/66f30c8d2ac082d2aee64be2/66f30c8d2ac082d2aee64cd6_Testimonial%2003.jpg",
    alt: "Quote Icon",
    hideOnLandscape: false
  },
  {
    id: 3,
    nodeId: "w-node-_525f333e-16b4-a716-1c03-a45f2fadfa83-aee64be3",
    dataId: "525f333e-16b4-a716-1c03-a45f2fadfa83",
    
    quote: "The complexity of managing our GPU cluster was becoming untenable. Tensor Fusion's solution reduced our operational overhead by 75% and increased our inference throughput by 3.2x.",
    name: "Dr. James Mitchell",
    position: "Chief Scientist, Quantum AI Research",
    image: "https://cdn.prod.website-files.com/66f30c8d2ac082d2aee64be2/66f30c8d2ac082d2aee64cd8_Testimonial%2004.jpg",
    alt: "Quote Icon",
    hideOnLandscape: false
  },
  {
    id: 4,
    nodeId: "w-node-_525f333e-16b4-a716-1c03-a45f2fadfa93-aee64be3",
    dataId: "525f333e-16b4-a716-1c03-a45f2fadfa93",
    quote: "Tensor Fusion's intelligent GPU pooling allowed us to consolidate our resources across three data centers. We've achieved 94% utilization and saved $2.1M annually in infrastructure costs.",
    name: "Lisa Chang",
    position: "Head of AI Infrastructure, Enterprise AI Solutions",
    image: "https://cdn.prod.website-files.com/66f30c8d2ac082d2aee64be2/66f30c8d2ac082d2aee64cd7_Testimonial%2002.jpg",
    alt: "Quote Icon",
    hideOnLandscape: false
  },
  {
    id: 5,
    nodeId: "w-node-_525f333e-16b4-a716-1c03-a45f2fadfaa3-aee64be3",
    dataId: "525f333e-16b4-a716-1c03-a45f2fadfaa3",
    quote: "Simply brilliant! Our ML engineers can now focus on model development instead of resource management. Training times dropped by 65% and we've eliminated GPU queuing bottlenecks completely.",
    name: "Alex Thompson",
    position: "Founder & CEO, ML Operations Inc",
    image: "https://cdn.prod.website-files.com/66f30c8d2ac082d2aee64be2/66f30c8d2ac082d2aee64cd8_Testimonial%2004.jpg",
    alt: "Quote Icon",
    hideOnLandscape: false
  },
  {
    id: 6,
    nodeId: "w-node-_525f333e-16b4-a716-1c03-a45f2fadfab3-aee64be3",
    dataId: "525f333e-16b4-a716-1c03-a45f2fadfab3",
    quote: "Tensor Fusion's scalability is unmatched. We seamlessly expanded our AI operations from 50 to 500 GPUs without a hitch. The cost savings and efficiency gains have been astronomical.",
    name: "Joe Doe",
    position: "VP of Engineering, Global AI Solutions",
    image: "https://cdn.prod.website-files.com/66f30c8d2ac082d2aee64be2/66f30c8d2ac082d2aee64cda_Testimonial%2005.jpg",
    alt: "Quote Icon",
    hideOnLandscape: false
  }
]
</script>