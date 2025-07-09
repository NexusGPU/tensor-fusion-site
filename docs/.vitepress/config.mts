/* eslint-disable @typescript-eslint/ban-ts-comment */
import { type DefaultTheme, defineConfig, type UserConfig } from "vitepress";
import { renderSandbox } from "vitepress-plugin-sandpack";
// @ts-ignore
import { withMermaid } from "vitepress-plugin-mermaid";
// @ts-ignore
import container from "markdown-it-container";

import { en } from "./en.mts";
import { zh } from "./zh.mts";

// https://vitepress.dev/reference/site-config
export default defineConfig(
  withMermaid({
    locales: {
      root: { label: "English", ...en },
      zh: { label: "简体中文", ...zh },
    },

    vite: {
      optimizeDeps: {
        include: ["@videojs-player/vue"],
      },
    },

    title: "Tensor Fusion",
    titleTemplate: "Maximize your GPU usage, powered by GPU virtualization and pooling, fractional GPU, Remote GPU Sharing, GPU over IP",
    description: "Tensor Fusion is a AI infra solution focusing on maximizing GPU usage with pooling and intelligent scheduling. It's based on a cutting-edge API-remoting GPU virtualization. Run more AI apps, with less GPUs.",
    rewrites: {
      "en/:rest*": ":rest*",
    },
    markdown: {
      lineNumbers: true,
      config(md) {
        md.use(container, "sandbox", {
          render(tokens: unknown[], idx: number) {
            return renderSandbox(tokens, idx, "sandbox");
          },
        });
      },
    },
    lastUpdated: true,
    cleanUrls: true,
    metaChunk: true,

    sitemap: {
      hostname: "https://tensor-fusion.ai",
    },

    mermaid: {},

    vue: {
      template: {
        compilerOptions: {
          isCustomElement: (tag: string) => {
            // elements-api is API reference generator, need exclude from Vue components
            // refer https://github.com/stoplightio/elements?tab=readme-ov-file#web-component
            return tag.toLowerCase().indexOf("elements-api") === 0;
          },
        },
      },
    },

    head: [
      ["meta", { name: "color-scheme", content: "dark" }],
      ["meta", { name: "description", content: "Tensor Fusion is a real-world GPU virtualization framework that maximizes GPU usage and minimizes the cost of GPU resources." }],
      ["meta", { property: "og:title", content: "Tensor Fusion | Maximize GPU Usage with Real-world GPU Virtualization" }],
      ["meta", { property: "og:description", content: "Tensor Fusion is a real-world GPU virtualization framework that maximizes GPU usage and minimizes the cost of GPU resources." }],
      ["meta", { property: "og:image", content: "https://cdn.tensor-fusion.ai/logo.svg" }],
      ["meta", { property: "og:type", content: "website" }],
      ["meta", { property: "twitter:title", content: "Tensor Fusion | Maximize GPU Usage with Real-world GPU Virtualization" }],
      ["meta", { property: "twitter:description", content: "Tensor Fusion is a real-world GPU virtualization framework that maximizes GPU usage and minimizes the cost of GPU resources." }],
      ["meta", { property: "twitter:image", content: "https://cdn.tensor-fusion.ai/logo.svg" }],
      ["meta", { name: "twitter:card", content: "summary_large_image" }],
      ['meta', { name: 'robots', content: 'index, follow' }],
      ["link", { rel: "icon", href: "/favicon.ico" }],
      ["link", { rel: "robots", href: "/robots.txt" }],
      ["link", { rel: "apple-touch-icon", href: "https://cdn.tensor-fusion.ai/logo.svg" }],

      [
        "script",
        { src: "https://cdn.tensor-fusion.ai/jq-3.5.1.min.js" },
      ],
      [
        "script",
        { async: "true", src: "https://www.googletagmanager.com/gtag/js?id=G-1R2E7MXJFJ" },
      ],
      [
        "script",
        {},
        `window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', 'G-1R2E7MXJFJ');`
      ],
      [
        "script",
        {},
        `!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    posthog.init('phc_UjzfJtcYbnLJFdlv7kPd9B7O0V6adCGm59Ey79WbxQS',{api_host:'https://us.i.posthog.com', person_profiles: 'always'
        })`,
      ],

      // Mava Widget
      [
        "script",
        { 
          defer: "true", 
          src: "https://widget.mava.app", 
          "widget-version": "v2", 
          id: "MavaWebChat", 
          "enable-sdk": "false", 
          "data-token": "b19f2d1986b1a5525abfde0f7776d8f329bec1f9df9c690e3a752a29d8c7b6a5" 
        },
      ],
    ],

    themeConfig: {
      logo: { src: "/favicon.ico", width: 24, height: 24 },
      search: {
        provider: "local",
        options: {
          // Refer https://github.com/lucaong/minisearch/issues/201
          miniSearch: {
            options: {
              tokenize: (term: string) => {
                if (typeof term === "string") term = term.toLowerCase();
                // @ts-ignore
                const segmenter = Intl.Segmenter &&
                  new Intl.Segmenter("zh", { granularity: "word" });
                if (!segmenter) return [term];
                const tokens = [];
                for (const seg of segmenter.segment(term)) {
                  // @ts-ignore
                  tokens.push(seg.segment);
                }
                return tokens;
              },
            },
            searchOptions: {
              combineWith: "AND", // important for search chinese
              processTerm: (term: string) => {
                if (typeof term === "string") term = term.toLowerCase();
                // @ts-ignore
                const segmenter = Intl.Segmenter &&
                  new Intl.Segmenter("zh", { granularity: "word" });
                if (!segmenter) return term;
                const tokens = [];
                for (const seg of segmenter.segment(term)) {
                  // @ts-ignore
                  tokens.push(seg.segment);
                }
                return tokens;
              },
            },
          },
          locales: {
            zh: {
              // make this `root` if you want to translate the default locale
              translations: {
                button: {
                  buttonText: "搜索",
                  buttonAriaLabel: "搜索",
                },
                modal: {
                  displayDetails: "显示详细列表",
                  resetButtonTitle: "重置搜索",
                  backButtonTitle: "关闭搜索",
                  noResultsText: "没有结果",
                  footer: {
                    selectText: "选择",
                    selectKeyAriaLabel: "输入",
                    navigateText: "导航",
                    navigateUpKeyAriaLabel: "上箭头",
                    navigateDownKeyAriaLabel: "下箭头",
                    closeText: "关闭",
                    closeKeyAriaLabel: "esc",
                  },
                },
              },
            },
          },
        },
      },

      socialLinks: [
        {
          icon: "github",
          link: "https://github.com/NexusGPU/tensor-fusion",
        },
      ],
    },
  }) as unknown as UserConfig<DefaultTheme.Config> & { mermaid: unknown },
);
