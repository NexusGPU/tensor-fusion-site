export const Guide = (lang: string) => [
  {
    text: 'Overview',
    collapsed: false,
    items: [
      {
        text: match(lang, {
          en: 'Overview',
          zh: '概览'
        }),
        link: 'overview'
      },
    ]
  }, 
  {
    text: 'Getting Started',
    collapsed: false,
    items: [
      {
        text: match(lang, {
          en: 'Quick Start',
          zh: '快速开始'
        }),
        link: 'get-started'
      },
    ]
  },
  {
    text: 'Recipes',
    collapsed: false,
    items: [
      {
        text: match(lang, {
          en: 'Kubernetes Deployment',
          zh: 'Kubernetes部署'
        }),
        link: 'deployment-k8s'
      },
      {
        text: match(lang, {
          en: 'VM/BareMetal Deployment',
          zh: 'VM/BareMetal部署'
        }),
        link: 'deployment-vm'
      },
    ]
  }
]
export const Reference = (lang: string) => [
  {
    text: 'Reference',
    collapsed: false,
    items: [
      {
        text: match(lang, {
          en: 'Cli Reference',
          zh: 'Cli 参考'
        }),
        link: 'cli-params'
      },
    ]
  }
]

function match(lang: string, dict: Record<string, string>): string {
  return dict[lang] ?? dict.en ?? 'wording not set'
}