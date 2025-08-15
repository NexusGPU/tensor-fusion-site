---
pageClass: home
---
# SchedulingConfigTemplate

SchedulingConfigTemplate is the Schema for the schedulingconfigtemplates API.

<div class="crd-navigation">
  <div class="crd-search">
    <input type="text" id="scheduling-config-template-property-search" placeholder="Search properties..." @input="filterProperties('scheduling-config-template')">
  </div>
  <div class="crd-actions">
    <button @click="expandAll('scheduling-config-template')">Expand All</button>
    <button @click="collapseAll('scheduling-config-template')">Collapse All</button>
  </div>
</div>

## Kubernetes Resource Information

| Field | Value |
|-------|-------|
| API Version | tensor-fusion.ai/v1 |
| Kind | SchedulingConfigTemplate |
| Scope | Cluster |

## Table of Contents

- [API Information](#api-information)
- [Spec](#spec)
- [Status](#status)
## Spec

Place the workload to right nodes and scale smart.

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-autoScaling-details')">autoScaling</b> <span id="property-scheduling-config-template-autoScaling" class="expandable-property" data-uid="property-scheduling-config-template-autoScaling" @click="toggleExpand('property-scheduling-config-template-autoScaling-details')">↓</span> | object |   | scale the workload based on the usage and traffic |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-hypervisor-details')">hypervisor</b> <span id="property-scheduling-config-template-hypervisor" class="expandable-property" data-uid="property-scheduling-config-template-hypervisor" @click="toggleExpand('property-scheduling-config-template-hypervisor-details')">↓</span> | object |   | single GPU device multi-process queuing and fair scheduling with QoS constraint |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-placement-details')">placement</b><span class="required-tag"></span> <span id="property-scheduling-config-template-placement" class="expandable-property" data-uid="property-scheduling-config-template-placement" @click="toggleExpand('property-scheduling-config-template-placement-details')">↓</span> | object |   | place the client or worker to best matched nodes |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-reBalancer-details')">reBalancer</b> <span id="property-scheduling-config-template-reBalancer" class="expandable-property" data-uid="property-scheduling-config-template-reBalancer" @click="toggleExpand('property-scheduling-config-template-reBalancer-details')">↓</span> | object |   | avoid hot GPU devices and continuously balance the workload<br />implemented by trigger a simulation scheduling and advise better GPU nodes for scheduler |

<div id="property-scheduling-config-template-autoScaling-details" class="nested-properties expanded">

### autoScaling {#property-scheduling-config-template-autoScaling-heading}

scale the workload based on the usage and traffic

### Properties {#properties-scheduling-config-template-autoScaling}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-autoScaling-autoSetLimits-details')">autoSetLimits</b> <span id="property-scheduling-config-template-autoScaling-autoSetLimits" class="expandable-property" data-uid="property-scheduling-config-template-autoScaling-autoSetLimits" @click="toggleExpand('property-scheduling-config-template-autoScaling-autoSetLimits-details')">↓</span> | object |   | layer 1 vertical auto-scaling, turbo burst to existing GPU cards quickly<br />VPA-like, aggregate metrics data &lt;1m |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-autoScaling-autoSetReplicas-details')">autoSetReplicas</b> <span id="property-scheduling-config-template-autoScaling-autoSetReplicas" class="expandable-property" data-uid="property-scheduling-config-template-autoScaling-autoSetReplicas" @click="toggleExpand('property-scheduling-config-template-autoScaling-autoSetReplicas-details')">↓</span> | object |   | layer 2 horizontal auto-scaling, scale up to more GPU cards if max limits threshold hit<br />HPA-like, aggregate metrics data 1m-1h (when tf-worker scaled-up, should also trigger client pod&#39;s owner[Deployment etc.]&#39;s replica increasing, check if KNative works) |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-autoScaling-autoSetRequests-details')">autoSetRequests</b> <span id="property-scheduling-config-template-autoScaling-autoSetRequests" class="expandable-property" data-uid="property-scheduling-config-template-autoScaling-autoSetRequests" @click="toggleExpand('property-scheduling-config-template-autoScaling-autoSetRequests-details')">↓</span> | object |   | layer 3 adjusting, to match the actual usage in the long run, only for N:M remote vGPU mode, not impl yet<br />Adjust baseline requests to match the actual usage in longer period, such as 1day - 2weeks |

<div id="property-scheduling-config-template-autoScaling-autoSetLimits-details" class="nested-properties expanded">

### autoSetLimits {#property-scheduling-config-template-autoScaling-autoSetLimits-heading}

layer 1 vertical auto-scaling, turbo burst to existing GPU cards quickly<br />VPA-like, aggregate metrics data &lt;1m

#### Properties {#properties-scheduling-config-template-autoScaling-autoSetLimits}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-autoScaling-autoSetLimits-enable-details')">enable</b> | boolean |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-autoScaling-autoSetLimits-evaluationPeriod-details')">evaluationPeriod</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-autoScaling-autoSetLimits-extraTFlopsBufferRatio-details')">extraTFlopsBufferRatio</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-autoScaling-autoSetLimits-ignoredDeltaRange-details')">ignoredDeltaRange</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-autoScaling-autoSetLimits-maxRatioToRequests-details')">maxRatioToRequests</b> | string |   | the multiplier of requests, to avoid limit set too high, like 5.0 |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-autoScaling-autoSetLimits-prediction-details')">prediction</b> <span id="property-scheduling-config-template-autoScaling-autoSetLimits-prediction" class="expandable-property" data-uid="property-scheduling-config-template-autoScaling-autoSetLimits-prediction" @click="toggleExpand('property-scheduling-config-template-autoScaling-autoSetLimits-prediction-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-autoScaling-autoSetLimits-scaleUpStep-details')">scaleUpStep</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-autoScaling-autoSetLimits-targetResource-details')">targetResource</b> | string |   | target resource to scale limits, such as &quot;tflops&quot;, &quot;vram&quot;, or &quot;all&quot; by default |

<div id="property-scheduling-config-template-autoScaling-autoSetLimits-prediction-details" class="nested-properties expanded">

### prediction {#property-scheduling-config-template-autoScaling-autoSetLimits-prediction-heading}

##### Properties {#properties-scheduling-config-template-autoScaling-autoSetLimits-prediction}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-autoScaling-autoSetLimits-prediction-enable-details')">enable</b> | boolean |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-autoScaling-autoSetLimits-prediction-historyDataPeriod-details')">historyDataPeriod</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-autoScaling-autoSetLimits-prediction-model-details')">model</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-autoScaling-autoSetLimits-prediction-predictionPeriod-details')">predictionPeriod</b> | string |   |  |

</div>

</div>

<div id="property-scheduling-config-template-autoScaling-autoSetReplicas-details" class="nested-properties expanded">

### autoSetReplicas {#property-scheduling-config-template-autoScaling-autoSetReplicas-heading}

layer 2 horizontal auto-scaling, scale up to more GPU cards if max limits threshold hit<br />HPA-like, aggregate metrics data 1m-1h (when tf-worker scaled-up, should also trigger client pod&#39;s owner[Deployment etc.]&#39;s replica increasing, check if KNative works)

#### Properties {#properties-scheduling-config-template-autoScaling-autoSetReplicas}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-autoScaling-autoSetReplicas-enable-details')">enable</b> | boolean |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-autoScaling-autoSetReplicas-evaluationPeriod-details')">evaluationPeriod</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-autoScaling-autoSetReplicas-scaleDownCoolDownTime-details')">scaleDownCoolDownTime</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-autoScaling-autoSetReplicas-scaleDownStep-details')">scaleDownStep</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-autoScaling-autoSetReplicas-scaleUpCoolDownTime-details')">scaleUpCoolDownTime</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-autoScaling-autoSetReplicas-scaleUpStep-details')">scaleUpStep</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-autoScaling-autoSetReplicas-targetTFlopsOfLimits-details')">targetTFlopsOfLimits</b> | string |   |  |

</div>

<div id="property-scheduling-config-template-autoScaling-autoSetRequests-details" class="nested-properties expanded">

### autoSetRequests {#property-scheduling-config-template-autoScaling-autoSetRequests-heading}

layer 3 adjusting, to match the actual usage in the long run, only for N:M remote vGPU mode, not impl yet<br />Adjust baseline requests to match the actual usage in longer period, such as 1day - 2weeks

#### Properties {#properties-scheduling-config-template-autoScaling-autoSetRequests}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-autoScaling-autoSetRequests-aggregationPeriod-details')">aggregationPeriod</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-autoScaling-autoSetRequests-enable-details')">enable</b> | boolean |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-autoScaling-autoSetRequests-evaluationPeriod-details')">evaluationPeriod</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-autoScaling-autoSetRequests-extraBufferRatio-details')">extraBufferRatio</b> | string |   | the request buffer ratio, for example actual usage is 1.0, 10% buffer will be 1.1 as final preferred requests |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-autoScaling-autoSetRequests-percentileForAutoRequests-details')">percentileForAutoRequests</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-autoScaling-autoSetRequests-prediction-details')">prediction</b> <span id="property-scheduling-config-template-autoScaling-autoSetRequests-prediction" class="expandable-property" data-uid="property-scheduling-config-template-autoScaling-autoSetRequests-prediction" @click="toggleExpand('property-scheduling-config-template-autoScaling-autoSetRequests-prediction-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-autoScaling-autoSetRequests-targetResource-details')">targetResource</b> | string |   | target resource to scale requests, such as &quot;tflops&quot;, &quot;vram&quot;, or &quot;all&quot; by default |

<div id="property-scheduling-config-template-autoScaling-autoSetRequests-prediction-details" class="nested-properties expanded">

### prediction {#property-scheduling-config-template-autoScaling-autoSetRequests-prediction-heading}

##### Properties {#properties-scheduling-config-template-autoScaling-autoSetRequests-prediction}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-autoScaling-autoSetRequests-prediction-enable-details')">enable</b> | boolean |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-autoScaling-autoSetRequests-prediction-historyDataPeriod-details')">historyDataPeriod</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-autoScaling-autoSetRequests-prediction-model-details')">model</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-autoScaling-autoSetRequests-prediction-predictionPeriod-details')">predictionPeriod</b> | string |   |  |

</div>

</div>

</div>

<div id="property-scheduling-config-template-hypervisor-details" class="nested-properties expanded">

### hypervisor {#property-scheduling-config-template-hypervisor-heading}

single GPU device multi-process queuing and fair scheduling with QoS constraint

### Properties {#properties-scheduling-config-template-hypervisor}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-hypervisor-autoFreezeAndResume-details')">autoFreezeAndResume</b> <span id="property-scheduling-config-template-hypervisor-autoFreezeAndResume" class="expandable-property" data-uid="property-scheduling-config-template-hypervisor-autoFreezeAndResume" @click="toggleExpand('property-scheduling-config-template-hypervisor-autoFreezeAndResume-details')">↓</span> | object |   | additional layer to save VRAM, auto-freeze memory and cool down to RAM and Disk<br />Hypervisor will monitor and trigger freeze of inactive workers, Operator should mark them as scaled-to-zero and release the GPU pool resources, don&#39;t scale down CPU client part, so that they can continue to serve the traffic or scale down by other auto-scaling solutions like KEDA/KNative |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-hypervisor-multiProcessQueuing-details')">multiProcessQueuing</b> <span id="property-scheduling-config-template-hypervisor-multiProcessQueuing" class="expandable-property" data-uid="property-scheduling-config-template-hypervisor-multiProcessQueuing" @click="toggleExpand('property-scheduling-config-template-hypervisor-multiProcessQueuing-details')">↓</span> | object |   | Hypervisor will move low priority jobs to pending queue if GPU is full<br />This config can adjust hypervisor&#39;s queueing behavior to balance the co-scheduling CUDA calls |

<div id="property-scheduling-config-template-hypervisor-autoFreezeAndResume-details" class="nested-properties expanded">

### autoFreezeAndResume {#property-scheduling-config-template-hypervisor-autoFreezeAndResume-heading}

additional layer to save VRAM, auto-freeze memory and cool down to RAM and Disk<br />Hypervisor will monitor and trigger freeze of inactive workers, Operator should mark them as scaled-to-zero and release the GPU pool resources, don&#39;t scale down CPU client part, so that they can continue to serve the traffic or scale down by other auto-scaling solutions like KEDA/KNative

#### Properties {#properties-scheduling-config-template-hypervisor-autoFreezeAndResume}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-hypervisor-autoFreezeAndResume-autoFreeze-details')">autoFreeze</b> <span id="property-scheduling-config-template-hypervisor-autoFreezeAndResume-autoFreeze" class="expandable-property" data-uid="property-scheduling-config-template-hypervisor-autoFreezeAndResume-autoFreeze" @click="toggleExpand('property-scheduling-config-template-hypervisor-autoFreezeAndResume-autoFreeze-details')">↓</span> | array |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-hypervisor-autoFreezeAndResume-intelligenceWarmup-details')">intelligenceWarmup</b> <span id="property-scheduling-config-template-hypervisor-autoFreezeAndResume-intelligenceWarmup" class="expandable-property" data-uid="property-scheduling-config-template-hypervisor-autoFreezeAndResume-intelligenceWarmup" @click="toggleExpand('property-scheduling-config-template-hypervisor-autoFreezeAndResume-intelligenceWarmup-details')">↓</span> | object |   |  |

<div id="property-scheduling-config-template-hypervisor-autoFreezeAndResume-autoFreeze-details" class="nested-properties expanded">

### autoFreeze (items) {#property-scheduling-config-template-hypervisor-autoFreezeAndResume-autoFreeze-heading-items}

##### Properties {#properties-scheduling-config-template-hypervisor-autoFreezeAndResume-autoFreeze-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-hypervisor-autoFreezeAndResume-autoFreeze-items-enable-details')">enable</b> | boolean |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-hypervisor-autoFreezeAndResume-autoFreeze-items-freezeToDiskTTL-details')">freezeToDiskTTL</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-hypervisor-autoFreezeAndResume-autoFreeze-items-freezeToMemTTL-details')">freezeToMemTTL</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-hypervisor-autoFreezeAndResume-autoFreeze-items-qos-details')">qos</b> | string |  <span class="enum-tag">low</span> <span class="enum-tag">medium</span> <span class="enum-tag">high</span> <span class="enum-tag">critical</span> |  |

</div>

<div id="property-scheduling-config-template-hypervisor-autoFreezeAndResume-intelligenceWarmup-details" class="nested-properties expanded">

### intelligenceWarmup {#property-scheduling-config-template-hypervisor-autoFreezeAndResume-intelligenceWarmup-heading}

##### Properties {#properties-scheduling-config-template-hypervisor-autoFreezeAndResume-intelligenceWarmup}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-hypervisor-autoFreezeAndResume-intelligenceWarmup-enable-details')">enable</b> | boolean |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-hypervisor-autoFreezeAndResume-intelligenceWarmup-historyDataPeriod-details')">historyDataPeriod</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-hypervisor-autoFreezeAndResume-intelligenceWarmup-model-details')">model</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-hypervisor-autoFreezeAndResume-intelligenceWarmup-predictionPeriod-details')">predictionPeriod</b> | string |   |  |

</div>

</div>

<div id="property-scheduling-config-template-hypervisor-multiProcessQueuing-details" class="nested-properties expanded">

### multiProcessQueuing {#property-scheduling-config-template-hypervisor-multiProcessQueuing-heading}

Hypervisor will move low priority jobs to pending queue if GPU is full<br />This config can adjust hypervisor&#39;s queueing behavior to balance the co-scheduling CUDA calls

#### Properties {#properties-scheduling-config-template-hypervisor-multiProcessQueuing}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-hypervisor-multiProcessQueuing-enable-details')">enable</b> | boolean |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-hypervisor-multiProcessQueuing-interval-details')">interval</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-hypervisor-multiProcessQueuing-queueLevelTimeSlices-details')">queueLevelTimeSlices</b> | array |   |  |

</div>

</div>

<div id="property-scheduling-config-template-placement-details" class="nested-properties expanded">

### placement {#property-scheduling-config-template-placement-heading}

place the client or worker to best matched nodes

### Properties {#properties-scheduling-config-template-placement}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-placement-allowUsingLocalGPU-details')">allowUsingLocalGPU</b> | boolean |   |  Default: `true` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-placement-gpuFilters-details')">gpuFilters</b> <span id="property-scheduling-config-template-placement-gpuFilters" class="expandable-property" data-uid="property-scheduling-config-template-placement-gpuFilters" @click="toggleExpand('property-scheduling-config-template-placement-gpuFilters-details')">↓</span> | array |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-placement-mode-details')">mode</b><span class="required-tag"></span> | string |  <span class="enum-tag">CompactFirst</span> <span class="enum-tag">LowLoadFirst</span> |  Default: `CompactFirst` |

<div id="property-scheduling-config-template-placement-gpuFilters-details" class="nested-properties expanded">

### gpuFilters (items) {#property-scheduling-config-template-placement-gpuFilters-heading-items}

#### Properties {#properties-scheduling-config-template-placement-gpuFilters-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-placement-gpuFilters-items-params-details')">params</b> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-placement-gpuFilters-items-type-details')">type</b> | string |   |  |

</div>

</div>

<div id="property-scheduling-config-template-reBalancer-details" class="nested-properties expanded">

### reBalancer {#property-scheduling-config-template-reBalancer-heading}

avoid hot GPU devices and continuously balance the workload<br />implemented by trigger a simulation scheduling and advise better GPU nodes for scheduler

### Properties {#properties-scheduling-config-template-reBalancer}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-reBalancer-enable-details')">enable</b> | boolean |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-reBalancer-interval-details')">interval</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-reBalancer-reBalanceCoolDownTime-details')">reBalanceCoolDownTime</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-reBalancer-threshold-details')">threshold</b> <span id="property-scheduling-config-template-reBalancer-threshold" class="expandable-property" data-uid="property-scheduling-config-template-reBalancer-threshold" @click="toggleExpand('property-scheduling-config-template-reBalancer-threshold-details')">↓</span> | object |   |  |

<div id="property-scheduling-config-template-reBalancer-threshold-details" class="nested-properties expanded">

### threshold {#property-scheduling-config-template-reBalancer-threshold-heading}

#### Properties {#properties-scheduling-config-template-reBalancer-threshold}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-scheduling-config-template-reBalancer-threshold-matchAny-details')">matchAny</b> | object |   |  |

</div>

</div>

## Status

SchedulingConfigTemplateStatus defines the observed state of SchedulingConfigTemplate.

<script setup>
function toggleExpand(id) {
  const element = document.getElementById(id);
  if (element) {
    element.classList.toggle('expanded');
    
    // Update URL with property ID when expanded, remove when collapsed
    if (element.classList.contains('expanded')) {
      // Do nothing
    } else if (window.location.hash === '#' + id) {
      // Remove hash if it's matching the current element and we're collapsing
      history.pushState('', document.title, window.location.pathname + window.location.search);
    }
  }
}

function scrollToDetail(id) {
  // Add property ID to URL hash without triggering navigation
  history.pushState(null, document.title, window.location.pathname + window.location.search + '#' + id);
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function expandAll(schemaPrefix) {
  document.querySelectorAll('.nested-properties').forEach(el => {
    if (el.id.startsWith('property-' + schemaPrefix + '-')) {
      el.classList.add('expanded');
    }
  });
}

function collapseAll(schemaPrefix) {
  document.querySelectorAll('.nested-properties').forEach(el => {
    if (el.id.startsWith('property-' + schemaPrefix + '-')) {
      el.classList.remove('expanded');
    }
  });
}

function filterProperties(schemaPrefix) {
  const searchText = document.getElementById(schemaPrefix + '-property-search').value.toLowerCase();
  const allTables = document.querySelectorAll('table');
  
  allTables.forEach(table => {
    // Only process tables that belong to this schema
    const rows = table.querySelectorAll('tr');
    
    rows.forEach(row => {
      const text = row.textContent.toLowerCase();
      if (text.includes(searchText)) {
        row.style.display = '';
        
        // If this row has an expandable property and matches the search
        const expandLink = row.querySelector('.expandable-property');
        if (expandLink) {
          const detailsId = expandLink.getAttribute('data-uid') + '-details';
          const detailsElement = document.getElementById(detailsId);
          if (detailsElement) {
            detailsElement.classList.add('expanded');
          }
        }
      } else {
        row.style.display = 'none';
      }
    });
  });
}

function handleUrlHash() {
  if (window.location.hash) {
    const id = window.location.hash.substring(1); // Remove the # character
    const element = document.getElementById(id);
    if (element) {
      // Expand the element
      element.classList.add('expanded');
      
      // Scroll to the element
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100); // Small delay to ensure DOM is ready
    }
  }
}

// Run when the DOM is fully loaded
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', handleUrlHash);
  // Also handle when hash changes in the URL
  window.addEventListener('hashchange', handleUrlHash);
}
</script>
