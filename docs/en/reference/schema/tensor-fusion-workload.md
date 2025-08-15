---
pageClass: home
---
# TensorFusionWorkload

TensorFusionWorkload is the Schema for the tensorfusionworkloads API.

<div class="crd-navigation">
  <div class="crd-search">
    <input type="text" id="tensor-fusion-workload-property-search" placeholder="Search properties..." @input="filterProperties('tensor-fusion-workload')">
  </div>
  <div class="crd-actions">
    <button @click="expandAll('tensor-fusion-workload')">Expand All</button>
    <button @click="collapseAll('tensor-fusion-workload')">Collapse All</button>
  </div>
</div>

## Kubernetes Resource Information

| Field | Value |
|-------|-------|
| API Version | tensor-fusion.ai/v1 |
| Kind | TensorFusionWorkload |
| Scope | Namespaced |

## Table of Contents

- [API Information](#api-information)
- [Spec](#spec)
- [Status](#status)
## Spec

WorkloadProfileSpec defines the desired state of WorkloadProfile.

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-autoScalingConfig-details')">autoScalingConfig</b> <span id="property-tensor-fusion-workload-autoScalingConfig" class="expandable-property" data-uid="property-tensor-fusion-workload-autoScalingConfig" @click="toggleExpand('property-tensor-fusion-workload-autoScalingConfig-details')">↓</span> | object |   | AutoScalingConfig configured here will override Pool&#39;s schedulingConfig<br />This field can not be fully supported in annotation, if user want to enable auto-scaling in annotation,<br />user can set tensor-fusion.ai/auto-limits&#124;requests&#124;replicas: &#39;true&#39; |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-gpuCount-details')">gpuCount</b> | integer&lt;int32&gt; |   | The number of GPUs to be used by the workload, default to 1 |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-gpuModel-details')">gpuModel</b> | string |   | GPUModel specifies the required GPU model (e.g., &quot;A100&quot;, &quot;H100&quot;) |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-isLocalGPU-details')">isLocalGPU</b> | boolean |   | Schedule the workload to the same GPU server that runs vGPU worker for best performance, default to false |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-nodeAffinity-details')">nodeAffinity</b> <span id="property-tensor-fusion-workload-nodeAffinity" class="expandable-property" data-uid="property-tensor-fusion-workload-nodeAffinity" @click="toggleExpand('property-tensor-fusion-workload-nodeAffinity-details')">↓</span> | object |   | NodeAffinity specifies the node affinity requirements for the workload |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-poolName-details')">poolName</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-qos-details')">qos</b> | string |  <span class="enum-tag">low</span> <span class="enum-tag">medium</span> <span class="enum-tag">high</span> <span class="enum-tag">critical</span> | Qos defines the quality of service level for the client. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-replicas-details')">replicas</b> | integer&lt;int32&gt; |   | If replicas not set, it will be dynamic based on pending Pod<br />If isLocalGPU set to true, replicas must be dynamic, and this field will be ignored |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-resources-details')">resources</b> <span id="property-tensor-fusion-workload-resources" class="expandable-property" data-uid="property-tensor-fusion-workload-resources" @click="toggleExpand('property-tensor-fusion-workload-resources-details')">↓</span> | object |   |  |

<div id="property-tensor-fusion-workload-autoScalingConfig-details" class="nested-properties expanded">

### autoScalingConfig {#property-tensor-fusion-workload-autoScalingConfig-heading}

AutoScalingConfig configured here will override Pool&#39;s schedulingConfig<br />This field can not be fully supported in annotation, if user want to enable auto-scaling in annotation,<br />user can set tensor-fusion.ai/auto-limits&#124;requests&#124;replicas: &#39;true&#39;

### Properties {#properties-tensor-fusion-workload-autoScalingConfig}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-autoScalingConfig-autoSetLimits-details')">autoSetLimits</b> <span id="property-tensor-fusion-workload-autoScalingConfig-autoSetLimits" class="expandable-property" data-uid="property-tensor-fusion-workload-autoScalingConfig-autoSetLimits" @click="toggleExpand('property-tensor-fusion-workload-autoScalingConfig-autoSetLimits-details')">↓</span> | object |   | layer 1 vertical auto-scaling, turbo burst to existing GPU cards quickly<br />VPA-like, aggregate metrics data &lt;1m |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-autoScalingConfig-autoSetReplicas-details')">autoSetReplicas</b> <span id="property-tensor-fusion-workload-autoScalingConfig-autoSetReplicas" class="expandable-property" data-uid="property-tensor-fusion-workload-autoScalingConfig-autoSetReplicas" @click="toggleExpand('property-tensor-fusion-workload-autoScalingConfig-autoSetReplicas-details')">↓</span> | object |   | layer 2 horizontal auto-scaling, scale up to more GPU cards if max limits threshold hit<br />HPA-like, aggregate metrics data 1m-1h (when tf-worker scaled-up, should also trigger client pod&#39;s owner[Deployment etc.]&#39;s replica increasing, check if KNative works) |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-autoScalingConfig-autoSetRequests-details')">autoSetRequests</b> <span id="property-tensor-fusion-workload-autoScalingConfig-autoSetRequests" class="expandable-property" data-uid="property-tensor-fusion-workload-autoScalingConfig-autoSetRequests" @click="toggleExpand('property-tensor-fusion-workload-autoScalingConfig-autoSetRequests-details')">↓</span> | object |   | layer 3 adjusting, to match the actual usage in the long run, only for N:M remote vGPU mode, not impl yet<br />Adjust baseline requests to match the actual usage in longer period, such as 1day - 2weeks |

<div id="property-tensor-fusion-workload-autoScalingConfig-autoSetLimits-details" class="nested-properties expanded">

### autoSetLimits {#property-tensor-fusion-workload-autoScalingConfig-autoSetLimits-heading}

layer 1 vertical auto-scaling, turbo burst to existing GPU cards quickly<br />VPA-like, aggregate metrics data &lt;1m

#### Properties {#properties-tensor-fusion-workload-autoScalingConfig-autoSetLimits}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-autoScalingConfig-autoSetLimits-enable-details')">enable</b> | boolean |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-autoScalingConfig-autoSetLimits-evaluationPeriod-details')">evaluationPeriod</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-autoScalingConfig-autoSetLimits-extraTFlopsBufferRatio-details')">extraTFlopsBufferRatio</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-autoScalingConfig-autoSetLimits-ignoredDeltaRange-details')">ignoredDeltaRange</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-autoScalingConfig-autoSetLimits-maxRatioToRequests-details')">maxRatioToRequests</b> | string |   | the multiplier of requests, to avoid limit set too high, like 5.0 |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-autoScalingConfig-autoSetLimits-prediction-details')">prediction</b> <span id="property-tensor-fusion-workload-autoScalingConfig-autoSetLimits-prediction" class="expandable-property" data-uid="property-tensor-fusion-workload-autoScalingConfig-autoSetLimits-prediction" @click="toggleExpand('property-tensor-fusion-workload-autoScalingConfig-autoSetLimits-prediction-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-autoScalingConfig-autoSetLimits-scaleUpStep-details')">scaleUpStep</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-autoScalingConfig-autoSetLimits-targetResource-details')">targetResource</b> | string |   | target resource to scale limits, such as &quot;tflops&quot;, &quot;vram&quot;, or &quot;all&quot; by default |

<div id="property-tensor-fusion-workload-autoScalingConfig-autoSetLimits-prediction-details" class="nested-properties expanded">

### prediction {#property-tensor-fusion-workload-autoScalingConfig-autoSetLimits-prediction-heading}

##### Properties {#properties-tensor-fusion-workload-autoScalingConfig-autoSetLimits-prediction}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-autoScalingConfig-autoSetLimits-prediction-enable-details')">enable</b> | boolean |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-autoScalingConfig-autoSetLimits-prediction-historyDataPeriod-details')">historyDataPeriod</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-autoScalingConfig-autoSetLimits-prediction-model-details')">model</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-autoScalingConfig-autoSetLimits-prediction-predictionPeriod-details')">predictionPeriod</b> | string |   |  |

</div>

</div>

<div id="property-tensor-fusion-workload-autoScalingConfig-autoSetReplicas-details" class="nested-properties expanded">

### autoSetReplicas {#property-tensor-fusion-workload-autoScalingConfig-autoSetReplicas-heading}

layer 2 horizontal auto-scaling, scale up to more GPU cards if max limits threshold hit<br />HPA-like, aggregate metrics data 1m-1h (when tf-worker scaled-up, should also trigger client pod&#39;s owner[Deployment etc.]&#39;s replica increasing, check if KNative works)

#### Properties {#properties-tensor-fusion-workload-autoScalingConfig-autoSetReplicas}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-autoScalingConfig-autoSetReplicas-enable-details')">enable</b> | boolean |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-autoScalingConfig-autoSetReplicas-evaluationPeriod-details')">evaluationPeriod</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-autoScalingConfig-autoSetReplicas-scaleDownCoolDownTime-details')">scaleDownCoolDownTime</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-autoScalingConfig-autoSetReplicas-scaleDownStep-details')">scaleDownStep</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-autoScalingConfig-autoSetReplicas-scaleUpCoolDownTime-details')">scaleUpCoolDownTime</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-autoScalingConfig-autoSetReplicas-scaleUpStep-details')">scaleUpStep</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-autoScalingConfig-autoSetReplicas-targetTFlopsOfLimits-details')">targetTFlopsOfLimits</b> | string |   |  |

</div>

<div id="property-tensor-fusion-workload-autoScalingConfig-autoSetRequests-details" class="nested-properties expanded">

### autoSetRequests {#property-tensor-fusion-workload-autoScalingConfig-autoSetRequests-heading}

layer 3 adjusting, to match the actual usage in the long run, only for N:M remote vGPU mode, not impl yet<br />Adjust baseline requests to match the actual usage in longer period, such as 1day - 2weeks

#### Properties {#properties-tensor-fusion-workload-autoScalingConfig-autoSetRequests}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-autoScalingConfig-autoSetRequests-aggregationPeriod-details')">aggregationPeriod</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-autoScalingConfig-autoSetRequests-enable-details')">enable</b> | boolean |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-autoScalingConfig-autoSetRequests-evaluationPeriod-details')">evaluationPeriod</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-autoScalingConfig-autoSetRequests-extraBufferRatio-details')">extraBufferRatio</b> | string |   | the request buffer ratio, for example actual usage is 1.0, 10% buffer will be 1.1 as final preferred requests |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-autoScalingConfig-autoSetRequests-percentileForAutoRequests-details')">percentileForAutoRequests</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-autoScalingConfig-autoSetRequests-prediction-details')">prediction</b> <span id="property-tensor-fusion-workload-autoScalingConfig-autoSetRequests-prediction" class="expandable-property" data-uid="property-tensor-fusion-workload-autoScalingConfig-autoSetRequests-prediction" @click="toggleExpand('property-tensor-fusion-workload-autoScalingConfig-autoSetRequests-prediction-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-autoScalingConfig-autoSetRequests-targetResource-details')">targetResource</b> | string |   | target resource to scale requests, such as &quot;tflops&quot;, &quot;vram&quot;, or &quot;all&quot; by default |

<div id="property-tensor-fusion-workload-autoScalingConfig-autoSetRequests-prediction-details" class="nested-properties expanded">

### prediction {#property-tensor-fusion-workload-autoScalingConfig-autoSetRequests-prediction-heading}

##### Properties {#properties-tensor-fusion-workload-autoScalingConfig-autoSetRequests-prediction}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-autoScalingConfig-autoSetRequests-prediction-enable-details')">enable</b> | boolean |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-autoScalingConfig-autoSetRequests-prediction-historyDataPeriod-details')">historyDataPeriod</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-autoScalingConfig-autoSetRequests-prediction-model-details')">model</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-autoScalingConfig-autoSetRequests-prediction-predictionPeriod-details')">predictionPeriod</b> | string |   |  |

</div>

</div>

</div>

<div id="property-tensor-fusion-workload-nodeAffinity-details" class="nested-properties expanded">

### nodeAffinity {#property-tensor-fusion-workload-nodeAffinity-heading}

NodeAffinity specifies the node affinity requirements for the workload

### Properties {#properties-tensor-fusion-workload-nodeAffinity}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-details')">preferredDuringSchedulingIgnoredDuringExecution</b> <span id="property-tensor-fusion-workload-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution" class="expandable-property" data-uid="property-tensor-fusion-workload-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution" @click="toggleExpand('property-tensor-fusion-workload-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-details')">↓</span> | array |   | The scheduler will prefer to schedule pods to nodes that satisfy<br />the affinity expressions specified by this field, but it may choose<br />a node that violates one or more of the expressions. The node that is<br />most preferred is the one with the greatest sum of weights, i.e.<br />for each node that meets all of the scheduling requirements (resource<br />request, requiredDuringScheduling affinity expressions, etc.),<br />compute a sum by iterating through the elements of this field and adding<br />&quot;weight&quot; to the sum if the node matches the corresponding matchExpressions; the<br />node(s) with the highest sum are the most preferred. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-details')">requiredDuringSchedulingIgnoredDuringExecution</b> <span id="property-tensor-fusion-workload-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution" class="expandable-property" data-uid="property-tensor-fusion-workload-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution" @click="toggleExpand('property-tensor-fusion-workload-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-details')">↓</span> | object |   | If the affinity requirements specified by this field are not met at<br />scheduling time, the pod will not be scheduled onto the node.<br />If the affinity requirements specified by this field cease to be met<br />at some point during pod execution (e.g. due to an update), the system<br />may or may not try to eventually evict the pod from its node. |

<div id="property-tensor-fusion-workload-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-details" class="nested-properties expanded">

### preferredDuringSchedulingIgnoredDuringExecution (items) {#property-tensor-fusion-workload-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-heading-items}

The scheduler will prefer to schedule pods to nodes that satisfy<br />the affinity expressions specified by this field, but it may choose<br />a node that violates one or more of the expressions. The node that is<br />most preferred is the one with the greatest sum of weights, i.e.<br />for each node that meets all of the scheduling requirements (resource<br />request, requiredDuringScheduling affinity expressions, etc.),<br />compute a sum by iterating through the elements of this field and adding<br />&quot;weight&quot; to the sum if the node matches the corresponding matchExpressions; the<br />node(s) with the highest sum are the most preferred.

#### Properties {#properties-tensor-fusion-workload-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-details')">preference</b><span class="required-tag"></span> <span id="property-tensor-fusion-workload-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference" class="expandable-property" data-uid="property-tensor-fusion-workload-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference" @click="toggleExpand('property-tensor-fusion-workload-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-details')">↓</span> | object |   | A node selector term, associated with the corresponding weight. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-weight-details')">weight</b><span class="required-tag"></span> | integer&lt;int32&gt; |   | Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100. |

<div id="property-tensor-fusion-workload-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-details" class="nested-properties expanded">

### preference {#property-tensor-fusion-workload-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-heading}

A node selector term, associated with the corresponding weight.

##### Properties {#properties-tensor-fusion-workload-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-matchExpressions-details')">matchExpressions</b> <span id="property-tensor-fusion-workload-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-matchExpressions" class="expandable-property" data-uid="property-tensor-fusion-workload-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-matchExpressions" @click="toggleExpand('property-tensor-fusion-workload-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-matchExpressions-details')">↓</span> | array |   | A list of node selector requirements by node&#39;s labels. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-matchFields-details')">matchFields</b> <span id="property-tensor-fusion-workload-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-matchFields" class="expandable-property" data-uid="property-tensor-fusion-workload-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-matchFields" @click="toggleExpand('property-tensor-fusion-workload-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-matchFields-details')">↓</span> | array |   | A list of node selector requirements by node&#39;s fields. |

<div id="property-tensor-fusion-workload-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-matchExpressions-details" class="nested-properties expanded">

### matchExpressions (items) {#property-tensor-fusion-workload-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-matchExpressions-heading-items}

A list of node selector requirements by node&#39;s labels.

###### Properties {#properties-tensor-fusion-workload-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-matchExpressions-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-matchExpressions-items-key-details')">key</b><span class="required-tag"></span> | string |   | The label key that the selector applies to. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-matchExpressions-items-operator-details')">operator</b><span class="required-tag"></span> | string |   | Represents a key&#39;s relationship to a set of values.<br />Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-matchExpressions-items-values-details')">values</b> | array |   | An array of string values. If the operator is In or NotIn,<br />the values array must be non-empty. If the operator is Exists or DoesNotExist,<br />the values array must be empty. If the operator is Gt or Lt, the values<br />array must have a single element, which will be interpreted as an integer.<br />This array is replaced during a strategic merge patch. |

</div>

<div id="property-tensor-fusion-workload-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-matchFields-details" class="nested-properties expanded">

### matchFields (items) {#property-tensor-fusion-workload-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-matchFields-heading-items}

A list of node selector requirements by node&#39;s fields.

###### Properties {#properties-tensor-fusion-workload-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-matchFields-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-matchFields-items-key-details')">key</b><span class="required-tag"></span> | string |   | The label key that the selector applies to. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-matchFields-items-operator-details')">operator</b><span class="required-tag"></span> | string |   | Represents a key&#39;s relationship to a set of values.<br />Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-matchFields-items-values-details')">values</b> | array |   | An array of string values. If the operator is In or NotIn,<br />the values array must be non-empty. If the operator is Exists or DoesNotExist,<br />the values array must be empty. If the operator is Gt or Lt, the values<br />array must have a single element, which will be interpreted as an integer.<br />This array is replaced during a strategic merge patch. |

</div>

</div>

</div>

<div id="property-tensor-fusion-workload-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-details" class="nested-properties expanded">

### requiredDuringSchedulingIgnoredDuringExecution {#property-tensor-fusion-workload-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-heading}

If the affinity requirements specified by this field are not met at<br />scheduling time, the pod will not be scheduled onto the node.<br />If the affinity requirements specified by this field cease to be met<br />at some point during pod execution (e.g. due to an update), the system<br />may or may not try to eventually evict the pod from its node.

#### Properties {#properties-tensor-fusion-workload-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-details')">nodeSelectorTerms</b><span class="required-tag"></span> <span id="property-tensor-fusion-workload-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms" class="expandable-property" data-uid="property-tensor-fusion-workload-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms" @click="toggleExpand('property-tensor-fusion-workload-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-details')">↓</span> | array |   | Required. A list of node selector terms. The terms are ORed. |

<div id="property-tensor-fusion-workload-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-details" class="nested-properties expanded">

### nodeSelectorTerms (items) {#property-tensor-fusion-workload-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-heading-items}

Required. A list of node selector terms. The terms are ORed.

##### Properties {#properties-tensor-fusion-workload-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items-matchExpressions-details')">matchExpressions</b> <span id="property-tensor-fusion-workload-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items-matchExpressions" class="expandable-property" data-uid="property-tensor-fusion-workload-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items-matchExpressions" @click="toggleExpand('property-tensor-fusion-workload-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items-matchExpressions-details')">↓</span> | array |   | A list of node selector requirements by node&#39;s labels. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items-matchFields-details')">matchFields</b> <span id="property-tensor-fusion-workload-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items-matchFields" class="expandable-property" data-uid="property-tensor-fusion-workload-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items-matchFields" @click="toggleExpand('property-tensor-fusion-workload-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items-matchFields-details')">↓</span> | array |   | A list of node selector requirements by node&#39;s fields. |

<div id="property-tensor-fusion-workload-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items-matchExpressions-details" class="nested-properties expanded">

### matchExpressions (items) {#property-tensor-fusion-workload-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items-matchExpressions-heading-items}

A list of node selector requirements by node&#39;s labels.

###### Properties {#properties-tensor-fusion-workload-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items-matchExpressions-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items-matchExpressions-items-key-details')">key</b><span class="required-tag"></span> | string |   | The label key that the selector applies to. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items-matchExpressions-items-operator-details')">operator</b><span class="required-tag"></span> | string |   | Represents a key&#39;s relationship to a set of values.<br />Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items-matchExpressions-items-values-details')">values</b> | array |   | An array of string values. If the operator is In or NotIn,<br />the values array must be non-empty. If the operator is Exists or DoesNotExist,<br />the values array must be empty. If the operator is Gt or Lt, the values<br />array must have a single element, which will be interpreted as an integer.<br />This array is replaced during a strategic merge patch. |

</div>

<div id="property-tensor-fusion-workload-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items-matchFields-details" class="nested-properties expanded">

### matchFields (items) {#property-tensor-fusion-workload-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items-matchFields-heading-items}

A list of node selector requirements by node&#39;s fields.

###### Properties {#properties-tensor-fusion-workload-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items-matchFields-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items-matchFields-items-key-details')">key</b><span class="required-tag"></span> | string |   | The label key that the selector applies to. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items-matchFields-items-operator-details')">operator</b><span class="required-tag"></span> | string |   | Represents a key&#39;s relationship to a set of values.<br />Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items-matchFields-items-values-details')">values</b> | array |   | An array of string values. If the operator is In or NotIn,<br />the values array must be non-empty. If the operator is Exists or DoesNotExist,<br />the values array must be empty. If the operator is Gt or Lt, the values<br />array must have a single element, which will be interpreted as an integer.<br />This array is replaced during a strategic merge patch. |

</div>

</div>

</div>

</div>

<div id="property-tensor-fusion-workload-resources-details" class="nested-properties expanded">

### resources {#property-tensor-fusion-workload-resources-heading}

### Properties {#properties-tensor-fusion-workload-resources}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-resources-limits-details')">limits</b><span class="required-tag"></span> <span id="property-tensor-fusion-workload-resources-limits" class="expandable-property" data-uid="property-tensor-fusion-workload-resources-limits" @click="toggleExpand('property-tensor-fusion-workload-resources-limits-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-resources-requests-details')">requests</b><span class="required-tag"></span> <span id="property-tensor-fusion-workload-resources-requests" class="expandable-property" data-uid="property-tensor-fusion-workload-resources-requests" @click="toggleExpand('property-tensor-fusion-workload-resources-requests-details')">↓</span> | object |   |  |

<div id="property-tensor-fusion-workload-resources-limits-details" class="nested-properties expanded">

### limits {#property-tensor-fusion-workload-resources-limits-heading}

#### Properties {#properties-tensor-fusion-workload-resources-limits}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-resources-limits-tflops-details')">tflops</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-resources-limits-vram-details')">vram</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |

</div>

<div id="property-tensor-fusion-workload-resources-requests-details" class="nested-properties expanded">

### requests {#property-tensor-fusion-workload-resources-requests-heading}

#### Properties {#properties-tensor-fusion-workload-resources-requests}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-resources-requests-tflops-details')">tflops</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-resources-requests-vram-details')">vram</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |

</div>

</div>

## Status

TensorFusionWorkloadStatus defines the observed state of TensorFusionWorkload.

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-conditions-details')">conditions</b> <span id="property-tensor-fusion-workload-conditions" class="expandable-property" data-uid="property-tensor-fusion-workload-conditions" @click="toggleExpand('property-tensor-fusion-workload-conditions-details')">↓</span> | array |   | Represents the latest available observations of the workload&#39;s current state. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-phase-details')">phase</b> | string |  <span class="enum-tag">Pending</span> <span class="enum-tag">Running</span> <span class="enum-tag">Failed</span> <span class="enum-tag">Unknown</span> |  Default: `Pending` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-podTemplateHash-details')">podTemplateHash</b> | string |   | Hash of the pod template used to create worker pods |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-readyWorkers-details')">readyWorkers</b> | integer&lt;int32&gt; |   | readyWorkers is the number of vGPU workers ready |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-workerCount-details')">workerCount</b><span class="required-tag"></span> | integer&lt;int32&gt; |   | workerCount is the number of vGPU workers |

<div id="property-tensor-fusion-workload-conditions-details" class="nested-properties expanded">

### conditions (items) {#property-tensor-fusion-workload-conditions-heading-items}

Represents the latest available observations of the workload&#39;s current state.

### Properties {#properties-tensor-fusion-workload-conditions-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-conditions-items-lastTransitionTime-details')">lastTransitionTime</b><span class="required-tag"></span> | string&lt;date-time&gt; |   | lastTransitionTime is the last time the condition transitioned from one status to another.<br />This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-conditions-items-message-details')">message</b><span class="required-tag"></span> | string | <span class="constraint-tag">maxLength: 32768</span>  | message is a human readable message indicating details about the transition.<br />This may be an empty string. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-conditions-items-observedGeneration-details')">observedGeneration</b> | integer&lt;int64&gt; | <span class="constraint-tag">min: 0</span>  | observedGeneration represents the .metadata.generation that the condition was set based upon.<br />For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date<br />with respect to the current state of the instance. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-conditions-items-reason-details')">reason</b><span class="required-tag"></span> | string | <span class="constraint-tag">minLength: 1</span> <span class="constraint-tag">maxLength: 1024</span> <span class="constraint-tag" title="^[A-Za-z]([A-Za-z0-9&#95;,:]&#42;[A-Za-z0-9&#95;])?$">pattern: Regex</span>  | reason contains a programmatic identifier indicating the reason for the condition&#39;s last transition.<br />Producers of specific condition types may define expected values and meanings for this field,<br />and whether the values are considered a guaranteed API.<br />The value should be a CamelCase string.<br />This field may not be empty. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-conditions-items-status-details')">status</b><span class="required-tag"></span> | string |  <span class="enum-tag">True</span> <span class="enum-tag">False</span> <span class="enum-tag">Unknown</span> | status of the condition, one of True, False, Unknown. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-conditions-items-type-details')">type</b><span class="required-tag"></span> | string | <span class="constraint-tag">maxLength: 316</span> <span class="constraint-tag" title="^([a-z0-9]([-a-z0-9]&#42;[a-z0-9])?(\.[a-z0-9]([-a-z0-9]&#42;[a-z0-9])?)&#42;/)?(([A-Za-z0-9][-A-Za-z0-9&#95;.]&#42;)?[A-Za-z0-9])$">pattern: Regex</span>  | type of condition in CamelCase or in foo.example.com/CamelCase. |

</div>

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
