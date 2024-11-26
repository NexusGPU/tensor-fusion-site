<template>
  <VLayout>
    <section class="hero-section">
      <div class="padding-global">
        <div class="container">
          <div class="hero-wrapper">
            <div class="hero-content">
              <h1 class="heading-large">Transform Your Business with AI</h1>
              <p class="hero-description">
                Maximize GPU utilization with our cutting-edge pooling and virtualization solution
              </p>
              <div class="hero-buttons">
                <a href="/pricing" class="primary-button">Get Started</a>
                <a href="/features" class="secondary-button">Learn More</a>
              </div>
            </div>
            <!-- Hero images section referenced from original -->
            <div class="hero-images" v-if="showHeroImages">
              <img :src="heroImage1" alt="Hero Image 1" />
              <div class="hero-video">
                <!-- Video content -->
              </div>
              <img :src="heroImage2" alt="Hero Image 2" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="features-section">
      <!-- Features content referenced from original lines 255-340 -->
    </section>

    <section class="testimonials-section">
      <!-- Testimonials content referenced from original lines 449-547 -->
    </section>
  </VLayout>
</template>

<script setup lang="ts">
import VLayout from './VLandingPage.vue'
import { ref } from 'vue'

const showHeroImages = ref(true)
const heroImage1 = "https://cdn.prod.website-files.com/66f30c8d2ac082d2aee64be2/66f30c8d2ac082d2aee64ce8_Hero%20Image.jpg"
const heroImage2 = "https://cdn.prod.website-files.com/66f30c8d2ac082d2aee64be2/66f30c8d2ac082d2aee64c7a_Hero%20Image.jpg"
</script> 