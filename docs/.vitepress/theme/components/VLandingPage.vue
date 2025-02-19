<template>
  <div v-cloak style="background-color: #111;color: wheat;">
    <div class="vp-doc"></div>
    <VNavBar></VNavBar>

    <!-- landing page home -->
    <template v-if="currentRoute === '/'">
      <VHero></VHero>
      <VFeatures></VFeatures>
      <VCustomerVoice></VCustomerVoice>
      <VScenario></VScenario>
    </template>

    <template v-else-if="currentRoute === '/pricing'">
      <VPricing></VPricing>
    </template>

    <template v-else-if="currentRoute === '/features'">
      <VFeatures></VFeatures>
    </template>

    <template v-else-if="currentRoute === '/help'">
      <VHelp></VHelp>
    </template>

    <!-- landing page markdown doc -->
    <div class="padding-global">
      <div class="w-layout-blockcontainer container w-container">
        <div class="hero-wrapper">
          <Content class="vp-doc" style="width: 80%;" />
        </div>
      </div>
    </div>


    <VFooter />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useRoute } from "vitepress";
import VFooter from './landing/VFooter.vue'
import VNavBar from './landing/VNavBar.vue'
import VHelp from './help/VHelp.vue'
import VHero from './VHero.vue'
import VPricing from './pricing/VPricing.vue'
import VFeatures from './landing/VFeatures.vue'
import VCustomerVoice from './landing/VCustomerVoice.vue'
import VScenario from './landing/VScenario.vue'

const route = useRoute()

const currentRoute = ref(route.path)

watch(route, (newRoute) => {
  currentRoute.value = newRoute.path
  location.reload()
})

onMounted(() => {
  // @ts-expect-error Dynamic import
  import("../landing.css")

  const pageKey = {
    '/': '66f30c8d2ac082d2aee64be3',
    '/about': '66f30c8d2ac082d2aee64be4',
    '/features': '66f30c8d2ac082d2aee64be5',
    '/pricing': '66f30c8d2ac082d2aee64c49',
    '/help': '66f30c8d2ac082d2aee64c31',
    '/contact': '66f30c8d2ac082d2aee64c4f'
  }
  if (route.path in pageKey) {
    document.documentElement.setAttribute('data-wf-page', pageKey[route.path as keyof typeof pageKey])
  }

  document.documentElement.classList.add('w-mod-js', 'w-mod-ix')
  document.documentElement.setAttribute('data-wf-domain', 'tensor-fusion.ai')
  document.documentElement.setAttribute('data-wf-site', '66f30c8d2ac082d2aee64be2')

  const wf = document.createElement('script')
  wf.src = 'https://cdn.tensor-fusion.ai/wf.min.js'
  wf.type = 'text/javascript'
  document.head.appendChild(wf)

})

</script>

<style>
.v-cloak {
  display: none;
}

.wf-force-outline-none[tabindex="-1"]:focus {
  outline: none;
}

:root {
  --text-size--regular: 1rem;
  --heading--h2: 5rem;
  --heading--h6: 2rem;
  --text-size--large: 1.5rem;
  --text-size--tiny: .75rem;
  --text-size--medium-2\<deleted\|variable-227de73e-b343-2d71-c2df-405ddac14c51\>: 1.125rem;
  --heading--h1: 10.5rem;
  --heading--h4: 3rem;
  --heading--h5: 2.5rem;
  --text-size--small: .875rem;
  --color--orange: #ed5145;
  --color--dark-grey: #1f1f1f;
  --color--grey: #353535;
  --heading--h3: 4rem;
  --text-size--medium: 1.125rem;
}

@media (max-width:479px) {
  html.w-mod-js:not(.w-mod-ix) [data-w-id="16b69460-66f0-c83d-2c5f-5e56a35c1393"] {
    opacity: 0;
  }

  html.w-mod-js:not(.w-mod-ix) [data-w-id="16b69460-66f0-c83d-2c5f-5e56a35c1395"] {
    opacity: 0;
  }

  html.w-mod-js:not(.w-mod-ix) [data-w-id="16b69460-66f0-c83d-2c5f-5e56a35c1397"] {
    opacity: 0;
  }
}

.integrations-image {
  height: 13em !important;
}

.integrations-block {
  padding: 3em 1.6em !important;

}
</style>
