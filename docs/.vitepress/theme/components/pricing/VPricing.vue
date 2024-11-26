<template>
   <section>
        <div class="padding-global">
            <div class="w-layout-blockcontainer container w-container">
                <div class="hero-wrapper"  style="margin-top: 15vh;">
                    <div class="hero-component">
                        <div data-w-id="980a8621-76b9-aff7-a87c-734266717f1c" style="opacity:0" class="max-width-90ch">
                            <div class="heading-3 text-weight-bold">Unleash Your GPU Potential</div>
                        </div>
                    </div>
                    <div data-w-id="eedf3d47-80d0-df4e-60d4-07d023f7177e" style="opacity:0"
                        class="pricing-grid-wrapper">
                        <div class="pricing-grid">
                            <div v-for="plan in plans" :key="plan.id" :id="plan.id" :class="['price-card']">
                                <div class="price-card-content">
                                    <div class="price-icon"><img loading="lazy" src="https://cdn.prod.website-files.com/66d7569e04e345dd50a3517d/66d892f44dbb976defe58569_Price%20Icon.svg" alt="" class="contain">
                                    </div>
                                    <div class="price-card-heading">
                                        <div class="price">
                                            <div class="heading-3 text-weight-bold">{{ plan.price }}</div>
                                            <div class="margin-bottom-05">
                                                <div class="text-size-medium">{{ plan.period }}</div>
                                            </div>
                                        </div>
                                        <div class="product-title">
                                            <div class="heading-6 text-weight-medium">{{ plan.name }}</div>
                                        </div>
                                    </div>
                                    <div class="price-features-wrap">
                                        <div class="opacity-80">
                                            <div class="text-size-small text-weight-medium">{{ plan.desc }}</div>
                                        </div>
                                        <div class="price-features">
                                            <div class="price-check-list">
                                                <div v-for="feature in plan.features" :key="feature" class="price-check-item">
                                                    <div class="price-check-icon"><img width="13.996087074279785"
                                                            height="12.25517749786377" alt="Check Icon"
                                                            src="https://cdn.prod.website-files.com/66f30c8d2ac082d2aee64be2/66f30c8d2ac082d2aee64c73_Check%20Icon.svg"
                                                            loading="lazy" class="price-check" /></div>
                                                    <div class="text-size-medium">{{ feature }}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <a href="/book-demo" class="enterprise-banner w-inline-block">
                            <div class="enterprise-content">
                                <div class="price-icon black"><img loading="lazy"
                                        src="https://cdn.prod.website-files.com/66f30c8d2ac082d2aee64be2/66f30c8d2ac082d2aee64c71_Price%20Icon.svg"
                                        alt="Icon" class="contain" /></div>
                                <div class="heading-6 text-weight-bold">Enterprise Plan</div>
                                <div class="enterprise-text">
                                    <div class="text-weight-medium">For companies with more than 1,000 GPUs</div>
                                </div>
                            </div>
                            <div class="price-button enterprise">
                                <div class="primary-button">
                                    <div class="relative">
                                        <div class="text-size-small text-weight-bold">Contact Us</div>
                                    </div>
                                    <div class="button-elipse"></div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface PricePlan {
  id: string
  name: string
  price: string
  period: string
  desc: string
  features: string[]
}

const plans = ref<PricePlan[]>([
  {
    id: 'free',
    name: 'Community Plan',
    price: '$0',
    period: 'per month',
    desc: 'For personal use or education. No commercial use',
    features: [
      'Up to 10 GPUs',
      'GPU Pool & Virtualization',
      'Smart Scheduling',
      'Auto Bin-packing',
      'Auto Stop/Start GPU Nodes',
      'Community Support'
    ]
  },
  {
    id: 'team',
    name: 'Team Plan',
    price: '$18.9',
    period: 'per month per GPU',
    desc: 'For small business or startups',
    features: [
      'Up to 100 GPUs',
      'Everything in Community Plan',
      'Smart Burst',
      'Multi-Cloud Support',
      'Advanced Dashboard',
      'Alerts & Notifications',
      'Working Hours Support',
      '99.99% Availability SLA'
    ]
  },
  {
    id: 'pro',
    name: 'Pro Plan',
    price: '$27.9',
    period: 'per month per GPU',
    desc: 'For medium-sized organizations',
    features: [
      'Up to 1000 GPUs',
      'Everything in Team Plan',
      'Enterprise SSO',
      'Advanced Diagnostic Report',
      'Compliance Report & Audit',
      '24 x 7 Premier Support',
      '99.999% Availability SLA'
    ]
  }
])

</script>