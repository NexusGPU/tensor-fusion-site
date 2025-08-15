<template>
  <div class="pricing-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h2 class="hero-title">
            Saving <span class="highlight">50%+</span> on GPU Spend with
            <br />

          </h2>
          <div class="hero-stats" style="margin-top: 4rem;">
            <div class="stat">
              <div class="stat-number">0</div>
              <div class="stat-label">Upfront Cost. Pay-as-you-go</div>
            </div>

            <div class="stat">
              <div class="stat-number">0%-4%</div>
              <div class="stat-label">of GPU rental fee</div>
            </div>

            <div class="stat">
              <div class="stat-number">1800%+</div>
              <div class="stat-label">ROI.</div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section class="pricing-tiers-section">
      <div class="container">
        <h2 class="section-title">Transparent, Predictable Pricing</h2>
        <p class="section-subtitle">Billed by FP16 TFlops per month</p>

        <div class="pricing-tiers">
          <div v-for="tier in pricingTiers" :key="tier.range" class="pricing-tier">
            <div class="tier-header">
              <div class="tier-range">{{ tier.range }}</div>
              <div class="tier-price">
                <span class="price-value">${{ tier.price }}</span>
                <span class="price-unit">per TFlop</span>
              </div>
            </div>
            <div class="tier-features">
              <span class="tier-feature">Examples</span>
              <div v-for="example in tier.examples" :key="example" class="tier-feature">
                <span>●</span> {{ example }}
              </div>
            </div>
          </div>
        </div>
        <p class="section-subtitle" style="margin-top:2rem;margin-bottom:2rem;">While cloud vendor bills
          <strong>$1.6-$6.0</strong> per TFLOPS per month
          <br />
          TensorFusion price <strong>$0.1</strong> <b>÷</b> Typical cloud vendor price <strong>$3.0</strong> =
          <strong>3.3%</strong>
        </p>


      </div>
    </section>

    <!-- Pricing Calculator Section -->
    <section class="calculator-section">
      <div class="container">
        <h2 class="section-title" style="margin-bottom: 3rem;">Calculate Your Savings</h2>
        <div class="calculator-card">
          <div class="calculator-inputs">
            <div class="input-group">
              <label for="gpu-count">Number of GPUs</label>
              <input id="gpu-count" v-model.number="calculator.gpuCount" type="number" min="1" max="10000"
                class="input-field" />
            </div>
            <div class="input-group">
              <label for="gpu-type">GPU Model</label>
              <select id="gpu-type" v-model="calculator.gpuType" class="select-field">
                <option v-for="(gpu, index) in gpuSpecs" :key="index" :value="index">
                  {{ gpu.fullName }} ({{ gpu.tflops }} TFLOPS)
                </option>
              </select>
            </div>
            <div class="input-group">
              <label for="total-tflops">Total FP16 TFLOPS</label>
              <input id="total-tflops" v-model.number="totalTFlops" type="number" readonly class="input-field" />
            </div>
          </div>

          <div class="calculator-results">
            <div class="result-card">
              <h3>Monthly Costs</h3>
              <div class="cost-breakdown">
                <div class="cost-item">
                  <span class="cost-label">Est. GPU Rental Cost</span>
                  <span class="cost-value">${{ formatNumber(calculatedResults.gpuCostLow) }} /mo - ${{
                    formatNumber(calculatedResults.gpuCostHigh) }} /mo</span>
                </div>
                <div class="cost-item">
                  <span class="cost-label">TensorFusion Onboarding Cost</span>
                  <span class="cost-value tensor-cost" style="color: var(--vp-c-brand-1)">
                    ${{ formatNumber(calculatedResults.tensorFusionCost) }} /mo
                    <span v-if="calculatedResults.tensorFusionCost === 0" class="free-badge">FREE</span>
                  </span>
                </div>
                <div class="cost-item highlight">
                  <span class="cost-label">% of GPU Cost</span>
                  <span class="cost-value">{{ calculatedResults.percentageOfGpuCost }}%</span>
                </div>
              </div>
            </div>

            <div class="result-card">
              <h3>ROI Analysis</h3>
              <div class="roi-breakdown">
                <div class="roi-item">
                  <span class="roi-label">Est. Potential Savings</span>
                  <span class="roi-value savings">${{ formatNumber(calculatedResults.potentialSavingsLow) }} /mo - ${{
                    formatNumber(calculatedResults.potentialSavingsHigh) }} /mo</span>
                </div>
                <div class="roi-item">
                  <span class="roi-label">Final TensorFusion Cost</span>
                  <span class="roi-value" style="color: var(--vp-c-brand-1)">${{
                    formatNumber(calculatedResults.finalTensorFusionCost) }} /mo</span>
                </div>
                <div class="roi-item highlight">
                  <span class="roi-label">ROI</span>
                  <span class="roi-value roi-highlight">
                    {{ calculatedResults.roi === Infinity ? '∞' : calculatedResults.roi + '%' }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ROI Examples Section -->
    <section class="roi-examples-section">
      <div class="container">
        <h2 class="section-title" style="margin-bottom: 3rem;">Real-World Examples</h2>

        <div class="examples-grid">
          <div v-for="example in roiExampleMetrics" :key="example.title" class="example-card">
            <div class="example-header">
              <div class="example-icon">{{ example.icon }}</div>
              <div>
                <h3 class="example-title">{{ example.title }}</h3>
                <p class="example-config">{{ example.config }}</p>
              </div>
            </div>

            <div class="example-metrics">
              <div class="metric-row header">
                <span></span>
                <span style="color: var(--vp-c-text-2);font-size: 0.8rem;">On-Demand</span>
                <span style="color: var(--vp-c-text-2);font-size: 0.8rem;">3-Year Reserved</span>
              </div>
              <div class="metric-row">
                <span class="metric-name">AWS EC2 Cost</span>
                <span class="metric-value">${{ formatNumber(example.gpuCostOnD) }}/mo</span>
                <span class="metric-value">${{ formatNumber(example.gpuCostReserved) }}/mo</span>
              </div>
              <div class="metric-row">
                <span class="metric-name">TensorFusion Cost</span>
                <span class="metric-value">${{ formatNumber(example.tfCost) }}/mo</span>
                <span class="metric-value">${{ formatNumber(example.tfCost) }}/mo</span>
              </div>
              <div class="metric-row">
                <span class="metric-name">Potential Savings</span>
                <span class="metric-value">${{ formatNumber(example.gpuCostOnD / 2) }}/mo</span>
                <span class="metric-value">${{ formatNumber(example.gpuCostReserved / 2) }}/mo</span>
              </div>
              <div class="metric-row">
                <span class="metric-name">% of GPU Cost</span>
                <span class="metric-value">{{ example.percentageOfGpuCost }}%</span>
                <span class="metric-value">{{ example.percentageOfGpuCostReserved }}%</span>
              </div>
              <div class="metric-row highlight">
                <span class="metric-name">ROI</span>
                <span class="metric-value">{{ example.roiOnD == Infinity ? '∞' : example.roiOnD + "%"}}</span>
                <span class="metric-value">{{ example.roiReserved == Infinity ? '∞' : example.roiReserved + "%"}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <h2 class="section-title">Beyond Cost Savings</h2>

        <div class="features-grid">
          <div v-for="category in featureCategories" :key="category.title" class="feature-category">
            <div class="category-header">
              <div class="category-icon">{{ category.icon }}</div>
              <h3 class="category-title">{{ category.title }}</h3>
            </div>
            <ul class="category-features">
              <li v-for="feature in category.features" :key="feature.name" class="feature-item">
                <strong>{{ feature.name }}</strong>: {{ feature.description }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section"  style="margin-bottom: 2rem;margin-top: 4rem;">
      <div class="container"   style="margin-bottom: 4rem;margin-top: 4rem;">
        <div class="cta-content">
          <h2 class="cta-title">Start Transforming your AI Infra Today</h2>
          <p class="cta-subtitle">No upfront costs. No minimum commitment. Pay only for what you use.</p>

          <div class="cta-buttons">
            <a href="https://app.tensor-fusion.ai/sign-in" class="primary-button">
              <span>Start Free Trial</span>
            </a>
            <a href="/book-demo" class="secondary-button">
              <span>Book a Demo</span>
            </a>
          </div>

          <p class="disclaimer">
            *All calculations based on AWS pricing as of August 2025. Actual savings may vary based on workload
            characteristics and usage patterns.
            Currently, almost all TensorFusion customers achieved 50%+ GPU cost optimization.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Calculator reactive data
const calculator = ref({
  gpuCount: 8,
  gpuType: 'L4',
})

const totalTFlops = computed(() => {
  return calculator.value.gpuCount * gpuSpecs[calculator.value.gpuType as keyof typeof gpuSpecs].tflops
})

// GPU specifications (FP16 TFlops per GPU and cost per hour)
const gpuSpecs = {
  // Ampere Architecture Series
  A100: {
    tflops: 312,
    costPerHour: 1.89,
    fullName: "NVIDIA A100"
  },
  A10: {
    tflops: 125,
    costPerHour: 0.9,
    fullName: "NVIDIA A10"
  },
  A10G: {
    tflops: 125,
    costPerHour: 0.75,
    fullName: "NVIDIA A10G"
  },
  A40: {
    tflops: 149.7,
    costPerHour: 0.4,
    fullName: "NVIDIA A40"
  },
  // Ada Lovelace Architecture Series
  L4: {
    tflops: 121,
    costPerHour: 0.43,
    fullName: "NVIDIA L4"
  },
  L40: {
    tflops: 181,
    costPerHour: 0.7,
    fullName: "NVIDIA L40"
  },
  L40S: {
    tflops: 365,
    costPerHour: 1.4,
    fullName: "NVIDIA L40S"
  },

  // Hopper Architecture Series
  H100: {
    tflops: 989,
    costPerHour: 2.99,
    fullName: "NVIDIA H100"
  },
  H200: {
    tflops: 989,
    costPerHour: 3.99,
    fullName: "NVIDIA H200"
  },
  B200: {
    tflops: 2250,
    costPerHour: 3.99,
    fullName: "NVIDIA B200"
  },
  V100: {
    tflops: 125,
    costPerHour: 0.7,
    fullName: "Tesla V100"
  },
  // Turing Architecture Series
  T4: {
    tflops: 65,
    costPerHour: 0.3,
    fullName: "Tesla T4"
  },

  // RTX 40 Series
  RTX4060: {
    tflops: 44.0,
    costPerHour: 0.1,
    fullName: "NVIDIA GeForce RTX 4060"
  },
  RTX4070: {
    tflops: 58.0,
    costPerHour: 0.15,
    fullName: "NVIDIA GeForce RTX 4070"
  },
  RTX4080: {
    tflops: 97.48,
    costPerHour: 0.23,
    fullName: "NVIDIA GeForce RTX 4080"
  },
  RTX4090: {
    tflops: 165.16,
    costPerHour: 0.3,
    fullName: "NVIDIA GeForce RTX 4090"
  },

  // Blackwell Architecture Series
  RTX5090: {
    tflops: 419.2,
    costPerHour: 0.89,
    fullName: "NVIDIA GeForce RTX 5090"
  },
  RTX5080: {
    tflops: 225,
    costPerHour: 1.0,
    fullName: "NVIDIA GeForce RTX 5080"
  },
  RTX5070: {
    tflops: 124,
    costPerHour: 0.5,
    fullName: "NVIDIA GeForce RTX 5070"
  },
  // RTX 30 Series
  RTX3060: {
    tflops: 26.0,
    costPerHour: 0.07,
    fullName: "NVIDIA GeForce RTX 3060"
  },
  RTX3070: {
    tflops: 40.6,
    costPerHour: 0.1,
    fullName: "NVIDIA GeForce RTX 3070"
  },
  RTX3080: {
    tflops: 59.6,
    costPerHour: 0.18,
    fullName: "NVIDIA GeForce RTX 3080"
  },
  RTX3090: {
    tflops: 71.2,
    costPerHour: 0.25,
    fullName: "NVIDIA GeForce RTX 3090"
  },
  // AMD Radeon RX Series
  AMD_RX7600: {
    tflops: 43.0,
    costPerHour: 0.08,
    fullName: "AMD Radeon RX 7600"
  },
  AMD_RX7700XT: {
    tflops: 68.4,
    costPerHour: 0.12,
    fullName: "AMD Radeon RX 7700 XT"
  },
  AMD_RX7800XT: {
    tflops: 85.2,
    costPerHour: 0.15,
    fullName: "AMD Radeon RX 7800 XT"
  },
  AMD_RX7900XTX: {
    tflops: 122.8,
    costPerHour: 0.2,
    fullName: "AMD Radeon RX 7900 XTX"
  }
}

const tieredBilling = (totalTFlops: number): number => {
  if (totalTFlops <= 800) return 0
  if (totalTFlops <= 5000) return totalTFlops * 0.12
  if (totalTFlops <= 100000) return totalTFlops * 0.10
  return totalTFlops * 0.08
}

// Calculated results
const calculatedResults = computed(() => {
  // ... rest of the code remains the same ...
  const priceLow = totalTFlops.value * 1.6
  const priceHigh = totalTFlops.value * 6.0


  const tfCost = tieredBilling(totalTFlops.value)
  const roi = totalTFlops.value > 1600 ? ((priceLow + priceHigh) / 2 / tfCost / 2 * 100).toFixed(2) : Infinity

  return {
    gpuCostLow: Math.round(priceLow),
    gpuCostHigh: Math.round(priceHigh),
    tensorFusionCost: tfCost,
    percentageOfGpuCost: (tfCost / ((priceLow + priceHigh) / 2) * 100).toFixed(2),
    potentialSavingsLow: Math.round(priceLow) / 2,
    potentialSavingsHigh: Math.round(priceHigh) / 2,
    finalTensorFusionCost: totalTFlops.value > 1600 ? Math.round(tfCost * 0.5) : 0,
    roi: roi === Infinity ? Infinity : roi
  }
})

// Pricing tiers
const pricingTiers = ref([
  {
    range: '0 - 800 TFlops',
    price: '0',
    examples: ['12x NVIDIA T4', '4x RTX 4090 Ti', '6x AWS g6.xlarge', '2x A100']
  },
  {
    range: '800 - 5,000 TFlops',
    price: '0.12',
    examples: ['5x NVIDIA H100', '10x AWS g6.12xlarge', '16x A100', '40x Azure NV36ads A10']
  },
  {
    range: '5,000 - 100,000 TFlops',
    price: '0.10',
    examples: ['100x NVIDIA H100', '10x AWS g6.12xlarge', '16x A100', '800x Azure NV36ads A10']
  },
  {
    range: '100,000+ TFlops',
    price: '0.08',
    examples: ['100x NVIDIA B200', '50x AWS p5.48xlarge', '1000x L4', '2000x Azure NV36ads A10']
  }
])

// ROI Examples
const roiExamples = ref([
  {
    title: 'Small Teams: 4x L4 Setup',
    config: '4x AWS g6.xlarge ({tflops} FP16 TFlops)',
    tflops: 484,
    unitPriceOnD: 0.885,
    unitPriceReserved: 0.369,
    ec2Instances: 4,
    tensorFusionPrice: 0,
    icon: '👥',
  },
  {
    title: 'Growing Teams: 400x L4 Fleet',
    config: '100x AWS g6.12xlarge ({tflops} FP16 TFlops)',
    icon: '🏢',
    tflops: 48400,
    unitPriceOnD: 5.062,
    unitPriceReserved: 2.323,
    ec2Instances: 100,
    tensorFusionPrice: 0.1,
  },
  {
    title: 'Mid-Large Company: A100 x Unlimited',
    tflops: 2496,
    unitPriceOnD: 21.958,
    unitPriceReserved: 10.312,
    ec2Instances: 1,
    tensorFusionPrice: 0.08,
    config: 'AWS P4d.24xlarge ({tflops} FP16 TFlops)',
    icon: '💼',
  },
  {
    title: 'Enterprise Scale: H100/H200 x Unlimited',
    config: 'AWS P5.48xlarge ({tflops} FP16 TFlops)',
    icon: '🚀',
    tflops: 7912,
    unitPriceOnD: 60.544,
    unitPriceReserved: 26.155,
    ec2Instances: 1,
    tensorFusionPrice: 0.08,
   
  }
])

const roiExampleMetrics = computed(() => {  
  return roiExamples.value.map(example => {
    const gpuCostOnD = Math.round(example.ec2Instances * example.unitPriceOnD * 730.5)
    const gpuCostReserved = Math.round(example.ec2Instances * example.unitPriceReserved * 730.5)
    const tfCost = Math.round(example.tflops * example.tensorFusionPrice)
    
    const roiOnD = (gpuCostOnD /2) / (tfCost/2) * 100
    const roiReserved = (gpuCostReserved /2) / (tfCost/2) * 100
    return {
      ...example,
      gpuCostOnD,
      gpuCostReserved,
      tfCost,
      roiOnD: Math.round(roiOnD),
      roiReserved: Math.round(roiReserved),
      percentageOfGpuCost: (tfCost / gpuCostOnD * 100).toFixed(2),
      percentageOfGpuCostReserved: (tfCost / gpuCostReserved * 100).toFixed(2),
    }
  })
})

// Feature categories
const featureCategories = ref([
  {
    title: 'Simplified AI Infrastructure',
    icon: '🎯',
    features: [
      { name: 'Unified Control Plane', description: 'Manage all GPU resources from a single interface' },
      { name: 'Enhanced Observability', description: 'Real-time monitoring and analytics' },
      { name: 'Improved Stability', description: 'Automatic failover and resource optimization' }
    ]
  },
  {
    title: 'Superior Performance',
    icon: '⚡',
    features: [
      { name: 'GPU-First Auto-scaling', description: 'Scale based on actual GPU utilization, not CPU metrics' },
      { name: 'Elastic Resource Allocation', description: 'Dynamically adjust resources across workloads' },
      { name: 'Increased Throughput', description: 'Eliminate GPU idle time with intelligent scheduling' }
    ]
  },
  {
    title: 'Operational Excellence',
    icon: '🔧',
    features: [
      { name: 'Zero-downtime Updates', description: 'Seamlessly migrate workloads during maintenance' },
      { name: 'Multi-model Optimization', description: 'Run multiple models on the same GPU efficiently' },
      { name: 'Resource Isolation', description: 'Ensure predictable performance across teams' }
    ]
  }
])

// Utility function
const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('en-US').format(num)
}
</script>

<style scoped>
/* Global Styles */
.pricing-page {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: var(--vp-c-text-1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: var(--vp-c-text-1);
}

.section-subtitle {
  font-size: 1.25rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--vp-c-text-2);
}

/* Hero Section */
.hero-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--vp-c-bg) 0%, var(--vp-c-bg-soft) 100%);
  text-align: center;
}

.hero-title {
  margin-top: 5rem;
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: var(--vp-c-text-1);
}

.hero-title .highlight {
  color: var(--vp-c-brand-1);
  background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 3rem;
  color: var(--vp-c-text-2);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.stat {
  text-align: center;
}

.stat-number {
  font-size: 3rem;
  font-weight: 800;
  color: var(--vp-c-brand-1);
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  font-weight: 500;
}

/* Calculator Section */
.calculator-section {
  padding: 4rem 0;
  background: var(--vp-c-bg-soft);
}

.calculator-card {
  background: var(--vp-c-bg);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--vp-c-divider);
}

.calculator-inputs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.input-group {
  display: flex;
  flex-direction: column;
}

.input-group label {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
}

.input-field,
.select-field {
  padding: 12px 16px;
  border: 2px solid var(--vp-c-divider);
  border-radius: 8px;
  font-size: 1rem;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  transition: border-color 0.3s ease;
}

.input-field:focus,
.select-field:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
}

.input-wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
}

.percent-suffix {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--vp-c-text-1);
  font-size: 1rem;
  font-weight: 500;
  pointer-events: none;
  z-index: 1;
}

.calculator-results {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.result-card {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
}

.result-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--vp-c-text-1);
}

.cost-breakdown,
.roi-breakdown {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.cost-item,
.roi-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--vp-c-divider-light);
}

.cost-item:last-child,
.roi-item:last-child {
  border-bottom: none;
}

.cost-item.highlight,
.roi-item.highlight {
  background: var(--vp-c-brand-soft);
  margin: 0 -0.75rem;
  padding: 0.75rem;
  border-radius: 8px;
  border-bottom: none;
}

.cost-label,
.roi-label {
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.cost-value,
.roi-value {
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.tensor-cost {
  position: relative;
}

.free-badge {
  background: var(--vp-c-green);
  color: white;
  font-size: 0.75rem;
  padding: 2px 6px;
  border-radius: 4px;
  margin-left: 8px;
  font-weight: 700;
}

.savings {
  color: var(--vp-c-green);
}

.roi-highlight {
  color: var(--vp-c-brand-1);
  font-size: 1.1rem;
  font-weight: 700;
}

/* Pricing Tiers Section */
.pricing-tiers-section {
  padding: 4rem 0;
}

.pricing-tiers {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1.5rem;
}

.pricing-tier {
  background: var(--vp-c-bg);
  border: 2px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.pricing-tier:hover {
  transform: translateY(-4px);
  border-color: var(--vp-c-brand-1);
}

.tier-header {
  margin-bottom: 1.5rem;
}

.tier-range {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 0.5rem;
}

.tier-price {
  margin-bottom: 1rem;
}

.price-value {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--vp-c-brand-1);
}

.price-unit {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin-left: 0.5rem;
}

.tier-features {
  text-align: left;
}

.tier-feature {
  padding: 0.5rem 0;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

/* ROI Examples Section */
.roi-examples-section {
  padding: 4rem 0;
  background: var(--vp-c-bg-soft);
}

.examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
}

.example-card {
  background: var(--vp-c-bg);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid var(--vp-c-divider);
}

.example-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.example-icon {
  font-size: 2rem;
  margin-right: 1rem;
}

.example-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 0.25rem;
}

.example-config {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin: 0;
}

.example-metrics {
  display: flex;
  flex-direction: column;
}

.metric-row {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 1rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--vp-c-divider-light);
  align-items: center;
}

.metric-row:last-child {
  border-bottom: none;
}

.metric-row.header {
  font-weight: 600;
  color: var(--vp-c-text-1);
  border-bottom: 2px solid var(--vp-c-divider);
}

.metric-row.highlight {
  background: var(--vp-c-brand-soft);
  margin: 0 -1rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border-bottom: none;
}

.metric-name {
  font-weight: 500;
}

.metric-value {
  text-align: center;
  font-weight: 600;
}

/* Features Section */
.features-section {
  padding: 4rem 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.feature-category {
  background: var(--vp-c-bg);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid var(--vp-c-divider);
}

.category-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.category-icon {
  font-size: 2rem;
  margin-right: 1rem;
}

.category-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0;
}

.category-features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-item {
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--vp-c-divider-light);
  color: var(--vp-c-text-2);
}

.feature-item:last-child {
  border-bottom: none;
}

/* CTA Section */
.cta-section {
  padding: 4rem 0;
  background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  text-align: center;
  color: white;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
}

.cta-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.primary-button,
.secondary-button {
  display: inline-flex;
  align-items: center;
  padding: 16px 32px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.primary-button {
  background: white;
  color: var(--vp-c-brand-1);
}

.primary-button:hover {
  background: var(--vp-c-bg-soft);
  transform: translateY(-2px);
}

.secondary-button {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.secondary-button:hover {
  background: white;
  color: var(--vp-c-brand-1);
  transform: translateY(-2px);
}

.disclaimer {
  font-size: 0.9rem;
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.5;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .calculator-inputs {
    grid-template-columns: 1fr;
  }

  .calculator-results {
    grid-template-columns: 1fr;
  }

  .pricing-tiers {
    grid-template-columns: 1fr;
  }

  .examples-grid {
    grid-template-columns: 1fr;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .metric-row {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    text-align: center;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .container {
    padding: 0 16px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .calculator-card {
    padding: 1.5rem;
  }

  .pricing-tier {
    padding: 1.5rem;
  }

  .example-card {
    padding: 1.5rem;
  }

  .feature-category {
    padding: 1.5rem;
  }
}
</style>
