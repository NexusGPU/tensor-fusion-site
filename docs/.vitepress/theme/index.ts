// https://vitepress.dev/guide/custom-theme
import type { Theme } from "vitepress";
import vImageViewer from "vitepress-plugin-image-viewer/lib/vImageViewer.vue";
import imageViewer from "vitepress-plugin-image-viewer";
import { Sandbox } from "vitepress-plugin-sandpack";
import "vitepress-plugin-sandpack/dist/style.css";
import DefaultTheme from "vitepress/theme";
import LandingPage from './components/VLandingPage.vue'
import { h } from "vue";
import { useRoute } from "vitepress";
import VComments from "./components/VComments.vue";
import VPlayer from "./components/VPlayer.vue";
import "./style.css";
import "video.js/dist/video-js.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    const route = useRoute()
    // Check if the current page has landing-page layout
    if (route.data.frontmatter.layout === 'landing-page') {
      return h(LandingPage)
    }

    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      "doc-after": () => h(VComments),
    });
  },
  enhanceApp({ app, router, siteData }) {
    DefaultTheme.enhanceApp({ app, router, siteData });
    // eslint-disable-next-line vue/multi-word-component-names
    app.component("Sandbox", Sandbox);
    app.component("VImageViewer", vImageViewer);
    app.component("VideoPlayer", VPlayer);
    app.component('LandingPage', LandingPage)
  },
  setup() {
    const route = useRoute();
    imageViewer(route);
  },
} satisfies Theme;
