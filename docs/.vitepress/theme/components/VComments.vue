<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter, title, isDark } = useData()
</script>

<template>
  <!--
    The `class="giscus"` ensures that the comment section is inserted in the right place,
    so that `v-if` can unload the comment section precisely.
  -->
  <div v-if="frontmatter.comments !== false" :key="title" class="giscus">
    <!--
      It doesn't make sense to use `v-if` to unmount `script` here,
      what needs to be uninstalled is the giscus comment section that has been inserted into the DOM.
    -->
    <ClientOnly>
      <component :is="'script'" src="https://giscus.app/client.js" 
        data-repo="NexusGPU/docs"
        data-repo-id="R_kgDONFJmVA"
        data-category="General"
        data-category-id="DIC_kwDONFJmVM4Cjqv7"
        data-mapping="pathname" data-strict="0" 
        :data-theme="isDark ? 'dark' : 'light'"
        data-reactions-enabled="1" data-emit-metadata="0"
        crossorigin="anonymous"
        data-input-position="top" data-lang="en"  data-loading="lazy" async />
    </ClientOnly>

  </div>
</template>
