---
layout: landing-page
title: Tensor Fusion - Book Demo
titleTemplate: Maximize GPU Usage with Remote GPU Pool

---

<script setup lang="ts">
import { onMounted, ref } from 'vue';
onMounted(() => {
  const cal = document.createElement('script')
  cal.src = 'https://assets.calendly.com/assets/external/widget.js'
  cal.type = 'text/javascript'
  document.head.appendChild(cal)
})    
</script>

<div class="calendly-inline-widget" data-url="https://calendly.com/code2life/30min?hide_gdpr_banner=1&background_color=1f1f1f&text_color=ffffff&primary_color=ed5145"
    style="width:80vw;height:80vh">
</div>