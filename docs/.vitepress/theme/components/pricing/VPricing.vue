<template>
   <section>
        <div class="padding-global">
            <div class="w-layout-blockcontainer container w-container">
                <div class="hero-wrapper" style="margin-top: 15vh;">
                    <h1 class="heading-style-h1">Transparent pricing,</h1>
                    <h1 class="heading-style-h1">No hidden fees</h1>
                    <h1 class="heading-style-h1" style="margin-top: 48px;">$0/
                        <span class="heading-style-h4" >month</span>
                    </h1>
                    <p style="font-size: 1.13rem;margin-top: 16px;">Everything you need to scale your business globally from day one.</p>
                </div>
                <div style="display: flex; justify-content: center; gap: 10px;margin-top: 32px;">
                  <a href="/workbench" class="primary-button w-inline-block">
                    <div class="relative">
                      <div class="text-size-small text-weight-bold">Get Started</div>
                    </div>
                    <div class="button-elipse"></div>
                  </a>  
                  
                  <a href="/book-demo" class="secondary-button w-inline-block">
                    <div class="button-wrapper">
                        <div class="secondary-button-text">
                            <div class="text-weight-bold text-size-small">Talk to Sales</div>
                        </div>
                        <div class="button-icon">
                            <div class="icon-wrapper">
                              <img loading="lazy"
                                    src="https://cdn.prod.website-files.com/66f30c8d2ac082d2aee64be2/66f30c8d2ac082d2aee64ccb_Arrow.svg"
                                    alt="Arrow" class="icon" /><img loading="lazy"
                                    src="https://cdn.prod.website-files.com/66f30c8d2ac082d2aee64be2/66f30c8d2ac082d2aee64ccb_Arrow.svg"
                                    alt="Arrow" class="icon" /></div>
                            </div>
                        <div class="button-icon absolute"></div>
                    </div>
                </a>
              </div>
              <div style="display: flex; justify-content: center; margin-top: 64px;">
                <div style="width: 1000px;">
                  <div style="margin-top: 32px; font-size: 20px; font-weight: bold;">Features:</div>
                  <div>
                    <div v-for="(feature, index) in features" :key="feature" style="padding: 16px 24px; text-align: left;" :style="{backgroundColor: index % 2 === 0 ? 'transparent' : '#1f1f1f'}">{{feature}}</div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'




const features = ref<string[]>([
  'Up to 10 GPUs',
  'GPU Pool & Virtualization',
  'Smart Scheduling',
  'Auto Bin-packing',
  'Auto Stop/Start GPU Nodes',
  'Community Support'
])

</script>

<style scoped>
.heading-style-h1 {
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.2;
}
.heading-style-h4 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.3;
}
</style>