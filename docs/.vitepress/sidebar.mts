export const Guide = (lang: string) => [
  {
    text: match(lang, {
      en: 'Getting Started',
      zh: '快速开始'
    }),
    collapsed: false,
    items: [
      {
        text: match(lang, {
          en: 'Overview',
          zh: 'TensorFusion概览'
        }),
        link: 'overview'
      },
      {
        text: match(lang, {
          en: 'Kubernetes Deployment',
          zh: 'Kubernetes部署'
        }),
        link: 'getting-started/deployment-k8s'
      },
      {
        text: match(lang, {
          en: 'VM Kubernetes Deployment',
          zh: 'VM Kubernetes部署'
        }),
        link: 'getting-started/deployment-vm-k8s'
      },
      {
        text: match(lang, {
          en: 'VM Deployment',
          zh: 'VM部署'
        }),
        link: 'getting-started/deployment-vm'
      },
      {
        text: match(lang, {
          en: 'TensorFusion Architecture',
          zh: 'TensorFusion架构和原理'
        }),
        link: 'getting-started/architecture'
      },
    ]
  },
  {
    text: match(lang, {
      en: 'Recipes',
      zh: '任务指南'
    }),
    collapsed: false,
    items: [
      {
        text: match(lang, {
          en: 'Application Operations',
          zh: '应用运维'
        }),
        items: [
          {
            text: match(lang, {
              en: 'Create Workload',
              zh: '创建工作负载'
            }), link: 'recipes/create-workload'
          },
          {
            text: match(lang, {
              en: 'Configure Autoscaling',
              zh: '配置自动扩缩容'
            }), link: 'recipes/configure-autoscaling'
          },
          {
            text: match(lang, {
              en: 'Migrate Existing Apps',
              zh: '迁移现有应用'
            }), link: 'recipes/migrate-existing'
          },
          {
            text: match(lang, {
              en: 'Manage License',
              zh: '管理许可证'
            }), link: 'recipes/license-mgmt'
          }
        ]
      },
      {
        text: match(lang, {
          en: 'Customize AI Infra',
          zh: '自定义AI Infra'
        }),
        items: [
          {
            text: match(lang, {
              en: 'Configure QoS & Pricing',
              zh: '配置QoS级别和计费'
            }), link: 'recipes/configure-qos-and-pricing'
          },
          {
            text: match(lang, {
              en: 'Integrate with Cloud Vendor',
              zh: '集成云厂商'
            }), link: 'recipes/integrate-with-cloud-vendor'
          },
          {
            text: match(lang, {
              en: 'Production-Grade Deployment',
              zh: '生产级高可用部署'
            }), link: 'recipes/production-grade-deployment'
          },
          {
            text: match(lang, {
              en: 'On-prem Deployment',
              zh: '纯本地部署模式'
            }), link: 'recipes/deploy-k8s-local-mode'
          }
        ]
      },
      {
        text: match(lang, {
          en: 'Maintenance & Optimization',
          zh: '系统维护和优化'
        }),
        items: [
          {
            text: match(lang, {
              en: 'Rolling Update',
              zh: '系统更新'
            }), link: 'recipes/rolling-update'
          },
          {
            text: match(lang, {
              en: 'Setup Alerts',
              zh: '设置告警'
            }), link: 'recipes/setup-alerts'
          },
          {
            text: match(lang, {
              en: 'GPU Live Migration',
              zh: 'GPU热迁移'
            }), link: 'recipes/gpu-live-migration'
          },
          {
            text: match(lang, {
              en: 'Preload Model',
              zh: '预加载模型'
            }), link: 'recipes/preload-model'
          },
          {
            text: match(lang, {
              en: 'Optimize GPU Efficiency',
              zh: '优化GPU效率'
            }), link: 'recipes/optimize-gpu-efficiency'
          },
        ]
      },
      {
        text: match(lang, {
          en: 'Troubleshooting',
          zh: '问题排查'
        }),
        collapsed: false,
        items: [
          {
            text: match(lang, {
              en: 'CUDA Call Tracing/Profiling',
              zh: 'CUDA调用追踪/性能分析'
            }),
            link: 'troubleshooting/cuda-tracing'
          },
          {
            text: match(lang, {
              en: 'Query Raw Metrics',
              zh: '查询原始指标'
            }),
            link: 'troubleshooting/query-raw-tsdb-data'
          },
          {
            text: match(lang, {
              en: 'Issue Handbook',
              zh: '问题处理手册'
            }),
            link: 'troubleshooting/handbook'
          },
        ]
      },
    ]
  },
  {
    text: match(lang, {
      en: 'Case Studies',
      zh: '成功案例'
    }),
    collapsed: false,
    items: [
      {
        text: match(lang, {
          en: 'TenClass Tech',
          zh: '十方融海'
        }),
        link: 'case-study/ten-class'
      },
    ]
  },
  {
    text: match(lang, {
      en: 'Comparison',
      zh: '方案对比'
    }),
    collapsed: false,
    items: [
      {
        text: match(lang, {
          en: 'Comparison with HAMi',
          zh: '与HAMi对比'
        }),
        link: 'comparison/compare-with-hami'
      },
      {
        text: match(lang, {
          en: 'Comparison with MIG/MPS',
          zh: '与MIG/MPS/Timeslicing对比'
        }),
        link: 'comparison/compare-with-mig-mps'
      }, {
        text: match(lang, {
          en: 'Comparison with Run.AI',
          zh: '与Run.AI对比'
        }),
        link: 'comparison/compare-with-run-ai'
      }, {
        text: match(lang, {
          en: 'Comparison with NVIDIA vGPU',
          zh: '与NVIDIA vGPU对比'
        }),
        link: 'comparison/compare-with-vgpu'
      },
      {
        text: match(lang, {
          en: 'Comparison with VirtAI OrionX',
          zh: '与趋动科技OrionX对比'
        }),
        link: 'comparison/compare-with-virtai'
      },
    ]
  }
]
export const Reference = (lang: string) => [
  {
    text: match(lang, {
      en: 'For End Users',
      zh: '终端用户参考'
    }),
    collapsed: false,
    items: [
      {
        text: match(lang, {
          en: 'Kubernetes Annotations',
          zh: 'Kubernetes 注解'
        }),
        items: [
          {
            text: match(lang, {
              en: 'Use vGPU by Annotations',
              zh: '添加Pod注解使用vGPU'
            }),
            link: 'workload-annotation'
          },
        ]
      },
      {
        text: match(lang, {
          en: 'Kubernetes Resources',
          zh: 'Kubernetes 资源'
        }),
        items: [
          {
            text: match(lang, {
              en: 'TensorFusionWorkload',
              zh: 'TensorFusionWorkload'
            }),
            link: 'schema/tensor-fusion-workload.md'
          },
          {
            text: match(lang, {
              en: 'TensorFusionConnection',
              zh: 'TensorFusionConnection'
            }),
            link: 'schema/tensor-fusion-connection.md'
          },
          {
            text: match(lang, {
              en: 'WorkloadProfile',
              zh: 'WorkloadProfile'
            }),
            link: 'schema/workload-profile.md'
          },
        ]
      },
      
    ]
  },
  {
    text: match(lang, {
      en: 'For System Admins',
      zh: '系统管理员参考'
    }),
    collapsed: false,
    items: [
      {
        text: match(lang, {
          en: 'Kubernetes Resources',
          zh: 'Kubernetes 资源'
        }),
        items: [
          {
            text: match(lang, {
              en: 'TensorFusionCluster',
              zh: 'TensorFusionCluster'
            }),
            link: 'schema/tensor-fusion-cluster.md'
          },
          {
            text: match(lang, {
              en: 'GPUPool',
              zh: 'GPUPool'
            }),
            link: 'schema/gpupool.md'
          },
          {
            text: match(lang, {
              en: 'GPUNode',
              zh: 'GPUNode'
            }),
            link: 'schema/gpunode.md'
          },
          {
            text: match(lang, {
              en: 'GPU',
              zh: 'GPU'
            }),
            link: 'schema/gpu.md'
          },
          {
            text: match(lang, {
              en: 'GPUNodeClass',
              zh: 'GPUNodeClass'
            }),
            link: 'schema/gpunode-class.md'
          },
          {
            text: match(lang, {
              en: 'SchedulingConfigTemplate',
              zh: 'SchedulingConfigTemplate'
            }),
            link: 'schema/scheduling-config-template.md'
          },
          {
            text: match(lang, {
              en: 'GPUResourceQuota',
              zh: 'GPUResourceQuota'
            }),
            link: 'schema/gpuresource-quota.md'
          }
        ]
      },
      {
        text: match(lang, {
          en: 'CLI Reference',
          zh: '命令行参考'
        }),
        link: 'cli-reference'
      },
      {
        text: match(lang, {
          en: 'Helm Chart Values',
          zh: 'Helm Chart配置参数'
        }),
        link: 'helm-install-values'
      },
      {
        text: match(lang, {
          en: 'System Metrics',
          zh: '系统监控指标'
        }),
        link: 'metrics'
      },
      {
        text: match(lang, {
          en: 'Kubernetes Events',
          zh: 'Kubernetes事件'
        }),
        link: 'events'
      },
      {
        text: match(lang, {
          en: 'Benchmark Report',
          zh: '性能测试报告'
        }),
        link: 'benchmark'
      },
      {
        text: match(lang, {
          en: 'GPU/Driver/OS Support Matrix',
          zh: 'GPU/驱动/OS支持矩阵'
        }),
        link: 'support-matrix'
      },
      {
        text: match(lang, {
          en: 'Security Whitepaper',
          zh: '安全白皮书'
        }),
        link: 'security-whitepaper'
      }
    ]
  },
  {
    text: match(lang, {
      en: 'For Developers',
      zh: '开发者参考'
    }),
    collapsed: false,
    items: [
      {
        text: match(lang, {
          en: 'Kubernetes Resource Schema',
          zh: 'Kubernetes 资源定义'
        }),
        link: 'crd-schema'
      },
      {
        text: match(lang, {
          en: 'OpenAPI Schema',
          zh: 'OpenAPI参考'
        }),
        link: 'api-schema'
      },
      
    ]
  },
]

function match(lang: string, dict: Record<string, string>): string {
  return dict[lang] ?? dict.en ?? 'wording not set'
}