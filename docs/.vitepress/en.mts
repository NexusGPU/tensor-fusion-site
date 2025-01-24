import { Guide, Reference } from './sidebar.mts'
import { defineConfig, type DefaultTheme } from 'vitepress'

export const en = defineConfig({
  lang: 'en-US',
  description: 'Maximize your GPU Usage with Pooling and Virtualization, Remote GPU Sharing, GPU over IP, Improve GPU cluster utilization',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': { base: '/guide/', items: Guide('en') },
      '/reference/': { base: '/reference/', items: Reference('en') },
    },

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: '',
      copyright: 'Copyright © 2024-present Tensor Fusion AI'
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Guide',
      link: '/guide/overview',
      activeMatch: '/guide/'
    },
    {
      text: 'Reference',
      link: '/reference/cli-params',
      activeMatch: '/reference/'
    },
    {
      text: "Resources",
      items: [{
        text: "Contributing",
        link: 'https://github.com/NexusGPU/tensor-fusion-site'
      }]
    }
  ]
}