import { defineConfig, type DefaultTheme } from 'vitepress'
import { Guide, Reference } from './sidebar.mts'

export const zh = defineConfig({
  lang: 'zh-Hans',
  description: '基于Vitepress的全功能技术文档最佳实践模板',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/zh/guide/': { base: '/zh/guide/', items: Guide('zh') },
      '/zh/reference/': { base: '/zh/reference/', items: Reference('zh') },
    },

    editLink: {
      pattern: 'https://github.com/NexusGPU/tensor-fusion-site/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      copyright: `版权所有 © 2024-${new Date().getFullYear()} Tensor Fusion AI`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '💡 用户指南',
      link: '/zh/guide/overview',
      activeMatch: '/zh/guide/'
    },
    {
      text: '📚 参考文档',
      link: '/zh/reference/crd-schema',
      activeMatch: '/zh/reference/'
    },
    {
      text: "⭐ 点颗星",
      link: 'https://github.com/NexusGPU/tensor-fusion'
    },
    {
      text: "🔖 资源",
      items: [{
        text: "贡献 TensorFusion",
        link: 'https://github.com/NexusGPU/tensor-fusion'
      },
      {
        text: "贡献 TensorFusion Docs",
        link: 'https://github.com/NexusGPU/tensor-fusion-site'
      }]
    }
  ]
}
