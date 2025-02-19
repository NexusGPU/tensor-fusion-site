<template>
    <section>
        <div class="padding-global">
            <div class="w-layout-blockcontainer container w-container">
                <div class="hero-wrapper">
                    <div class="hero-component"><a href="/blog" class="read-more-tag w-inline-block">
                            <div class="text-size-small text-weight-bold">What's new ?</div>
                            <div class="vertical-line-tag"></div>
                            <div class="read-more-button">
                                <div class="opacity-50">
                                    <div class="text-size-small text-weight-bold">Read blogs</div>
                                </div><img loading="lazy"
                                    src="https://cdn.prod.website-files.com/66f30c8d2ac082d2aee64be2/66f30c8d2ac082d2aee64c3f_Read%20More%20Arrow.svg"
                                    alt="Arrow" class="arrow" />
                            </div>
                        </a>
                        <div data-w-id="aa42755f-aac4-abbd-e604-8f2924a89a23" style="opacity:0" class="max-width-90ch">
                            <div class="heading-2 text-weight-bold">Tensor Fusion</div>
                            <div class="heading-3 text-weight-bold">Less GPUs, More AI Apps</div>
                        </div>
                    </div>
                    <div data-w-id="aa42755f-aac4-abbd-e604-8f2924a89a26" style="opacity:0"
                        class="double-button-component margin-top-button-hero"><a href="/guide/get-started"
                            class="primary-button w-inline-block">
                            <div class="relative">
                                <div class="text-size-small text-weight-bold">Get Started</div>
                            </div>
                            <div class="button-elipse"></div>
                        </a><a href="/guide/compare-with" class="secondary-button w-inline-block">
                            <div class="button-wrapper">
                                <div class="secondary-button-text">
                                    <div class="text-weight-bold text-size-small">Compare with</div>
                                </div>
                                <div class="button-icon">
                                    <div class="icon-wrapper"><img loading="lazy"
                                            src="https://cdn.prod.website-files.com/66f30c8d2ac082d2aee64be2/66f30c8d2ac082d2aee64ccb_Arrow.svg"
                                            alt="Arrow" class="icon" /><img loading="lazy"
                                            src="https://cdn.prod.website-files.com/66f30c8d2ac082d2aee64be2/66f30c8d2ac082d2aee64ccb_Arrow.svg"
                                            alt="Arrow" class="icon" /></div>
                                </div>
                                <div class="button-icon absolute"></div>
                            </div>
                        </a></div>
                    <div data-w-id="aa42755f-aac4-abbd-e604-8f2924a89a30" style="opacity:0"
                        class="trusted-by-component">
                        <div class="opacity-60">
                            <div class="text-size-small">Trusted by AI infra teams at</div>
                        </div>
                        <div class="logos-container marquee">
                            <ul class="trusted-by-hero-logos marquee-content">
                                <li v-for="(logo, index) in logos" :key="index" class="logos"><img loading="lazy"
                                        :src="logo" alt="Logo" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="demo-for-mobile">
        <VideoPlayer class="vjs-fluid vjs-16-9" src="https://cdn.tensor-fusion.ai/TensorFusion-demo.mp4" poster="https://cdn.tensor-fusion.ai/tfs-poster-center.png" :controls="true">
        </VideoPlayer>
    </div>
    <div class="demo-for-desktop overflow-hidden">
        <section>
            <div data-w-id="16b69460-66f0-c83d-2c5f-5e56a35c1391" style="opacity:0" class="about-hero-interaction">
                <div class="hero-sticky-component">
                   
                    <div data-w-id="16b69460-66f0-c83d-2c5f-5e56a35c1393" class="sticky-images left"><img
                            srcset="/cpu-chips.png" alt="Slider Image" class="image" /></div>
                    <div data-w-id="16b69460-66f0-c83d-2c5f-5e56a35c1395" class="sticky-images middle center-image">
                        <div class="video-container" style="height: 100%;" @click="toggleVideo">
                            <img v-if="!isPlaying" src="https://cdn.tensor-fusion.ai/tfs-poster-center.png"
                                alt="Hero Image" class="image" />
                            <VideoPlayer class="vjs-fluid vjs-16-9" :style="{
                                'display': isPlaying ? 'block' : 'none',
                                'opacity': isPlaying ? 1 : 0,
                                'transition': 'opacity 1.5s ease-in-out'
                            }" src="https://cdn.tensor-fusion.ai/TensorFusion-demo.mp4" :controls="true"
                                @mounted="onPlayerMounted">
                            </VideoPlayer>
                        </div>
                    </div>
                    <div data-w-id="16b69460-66f0-c83d-2c5f-5e56a35c1397" class="sticky-images right">
                        <img srcset="/gpu-cards.png" alt="Hero Image" class="image" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref, nextTick, onMounted } from 'vue'
import { VideoPlayer } from "@videojs-player/vue/dist/videojs-player.cjs.js";

const logos = ref([
    'https://cdn.prod.website-files.com/66f30c8d2ac082d2aee64be2/66f30c8d2ac082d2aee64c98_Logos%20Grid%2002.svg',
    'https://cdn.prod.website-files.com/66f30c8d2ac082d2aee64be2/66f30c8d2ac082d2aee64c97_Logos%20Grid%2007.svg',
    'https://cdn.prod.website-files.com/66f30c8d2ac082d2aee64be2/66f30c8d2ac082d2aee64c96_Logos%20Grid%2009.svg',
    'https://cdn.prod.website-files.com/66f30c8d2ac082d2aee64be2/66f30c8d2ac082d2aee64c95_Logos%20Grid%2006.svg',
    'https://cdn.prod.website-files.com/66f30c8d2ac082d2aee64be2/66f30c8d2ac082d2aee64c94_Logos%20Grid%2010.svg',
    'https://cdn.prod.website-files.com/66f30c8d2ac082d2aee64be2/66f30c8d2ac082d2aee64c8f_Logos%20Grid%2003.svg',
    'https://cdn.prod.website-files.com/66f30c8d2ac082d2aee64be2/66f30c8d2ac082d2aee64ce6_Logos03.svg'
])

const isPlaying = ref(false)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const videoPlayer = ref<any>(null)

onMounted(() => {
    const root = document.documentElement;
    const marqueeElementsDisplayed = parseInt(getComputedStyle(root).getPropertyValue("--marquee-elements-displayed"));
    const marqueeContent = document.querySelector("ul.marquee-content");

    if (marqueeContent) {
        root.style.setProperty("--marquee-elements", marqueeContent.children.length + "");

        for (let i = 0; i < marqueeElementsDisplayed; i++) {
            if (marqueeContent.children[i]) {
                marqueeContent.appendChild(marqueeContent.children[i]!.cloneNode(true) ?? "");
            }
            
        }
    } else {
        console.warn("No marquee content found");
    }
});

const toggleVideo = () => {
    isPlaying.value = !isPlaying.value
    if (isPlaying.value) {
        nextTick(() => {
            const player = videoPlayer.value?.player
            const container = document.querySelector('.video-container')
            container?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            window.scrollTo({
                top: (container?.getBoundingClientRect().top ?? 0) + window.innerHeight * 0.91,
                behavior: 'smooth'
            })
            if (player) {
                player.play()
            }
        })
    } else {
        const player = videoPlayer.value?.player
        if (player) {
            player.pause()
        }
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onPlayerMounted = ({ player }: { player: any }) => {
    videoPlayer.value = { player }
}
</script>

<style>
/* marquee */
:root {
  --marquee-width: 80vw;
  --marquee-elements-displayed: 8;
  --marquee-element-width: calc(var(--marquee-width) / var(--marquee-elements-displayed));
  --marquee-animation-duration: calc(var(--marquee-elements) * 3s);
}

.marquee {
  width: var(--marquee-width);
  background-color: #111;
  color: #eee;
  overflow: hidden;
  position: relative;
}
.marquee:before, .marquee:after {
  position: absolute;
  top: 0;
  width: 8rem;
  height: 3rem;
  content: "";
  z-index: 1;
}
.marquee:before {
  left: 0;
  background: linear-gradient(to right, #111 0%, transparent 100%);
}
.marquee:after {
  right: 0;
  background: linear-gradient(to left, #111 0%, transparent 100%);
}
.marquee-content {
  list-style: none;
  display: flex;
  animation: scrolling var(--marquee-animation-duration) linear infinite;
}
/* .marquee-content:hover {
  animation-play-state: paused;
} */
@keyframes scrolling {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-1 * var(--marquee-element-width) * var(--marquee-elements))); }
}
.marquee-content li {
  display: flex;
  justify-content: center;
  align-items: center;
  /* text-align: center; */
  flex-shrink: 0;
  width: var(--marquee-element-width);
  max-height: 100%;
  white-space: nowrap;
}

.marquee-content li img {
  width: 100%;
  /* height: 100%; */
}

.demo-for-desktop {
  display: block;
}
.demo-for-mobile {
  display: none;
}


@media (max-width: 991px) {
  
  html { font-size: 12px; }
  :root {
    --marquee-width: 90vw;
    --marquee-elements-displayed: 3;
  }
  .marquee:before, .marquee:after { width: 2rem; }

  .sticky-images.left {
    display: none;
  }
  .sticky-images.right {
    display: none;
  }

  .demo-for-mobile {
    margin-top: 5rem;
    display: block;
  }
  .demo-for-desktop {
    display: none;
  }
}
</style>