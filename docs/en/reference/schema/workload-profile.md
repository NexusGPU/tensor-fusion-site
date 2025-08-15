---
pageClass: home
---
# WorkloadProfile

WorkloadProfile is the Schema for the workloadprofiles API.

<div class="crd-navigation">
  <div class="crd-search">
    <input type="text" id="workload-profile-property-search" placeholder="Search properties..." @input="filterProperties('workload-profile')">
  </div>
  <div class="crd-actions">
    <button @click="expandAll('workload-profile')">Expand All</button>
    <button @click="collapseAll('workload-profile')">Collapse All</button>
  </div>
</div>

## Kubernetes Resource Information

| Field | Value |
|-------|-------|
| API Version | tensor-fusion.ai/v1 |
| Kind | WorkloadProfile |
| Scope | Namespaced |

## Table of Contents

- [API Information](#api-information)
- [Spec](#spec)
- [Status](#status)
## Spec

WorkloadProfileSpec defines the desired state of WorkloadProfile.

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-autoScalingConfig-details')">autoScalingConfig</b> <span id="property-workload-profile-autoScalingConfig" class="expandable-property" data-uid="property-workload-profile-autoScalingConfig" @click="toggleExpand('property-workload-profile-autoScalingConfig-details')">↓</span> | object |   | AutoScalingConfig configured here will override Pool&#39;s schedulingConfig<br />This field can not be fully supported in annotation, if user want to enable auto-scaling in annotation,<br />user can set tensor-fusion.ai/auto-limits&#124;requests&#124;replicas: &#39;true&#39; |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-gpuCount-details')">gpuCount</b> | integer&lt;int32&gt; |   | The number of GPUs to be used by the workload, default to 1 |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-gpuModel-details')">gpuModel</b> | string |   | GPUModel specifies the required GPU model (e.g., &quot;A100&quot;, &quot;H100&quot;) |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-isLocalGPU-details')">isLocalGPU</b> | boolean |   | Schedule the workload to the same GPU server that runs vGPU worker for best performance, default to false |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-nodeAffinity-details')">nodeAffinity</b> <span id="property-workload-profile-nodeAffinity" class="expandable-property" data-uid="property-workload-profile-nodeAffinity" @click="toggleExpand('property-workload-profile-nodeAffinity-details')">↓</span> | object |   | NodeAffinity specifies the node affinity requirements for the workload |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-poolName-details')">poolName</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-qos-details')">qos</b> | string |  <span class="enum-tag">low</span> <span class="enum-tag">medium</span> <span class="enum-tag">high</span> <span class="enum-tag">critical</span> | Qos defines the quality of service level for the client. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-replicas-details')">replicas</b> | integer&lt;int32&gt; |   | If replicas not set, it will be dynamic based on pending Pod<br />If isLocalGPU set to true, replicas must be dynamic, and this field will be ignored |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-resources-details')">resources</b> <span id="property-workload-profile-resources" class="expandable-property" data-uid="property-workload-profile-resources" @click="toggleExpand('property-workload-profile-resources-details')">↓</span> | object |   |  |

<div id="property-workload-profile-autoScalingConfig-details" class="nested-properties expanded">

### autoScalingConfig {#property-workload-profile-autoScalingConfig-heading}

AutoScalingConfig configured here will override Pool&#39;s schedulingConfig<br />This field can not be fully supported in annotation, if user want to enable auto-scaling in annotation,<br />user can set tensor-fusion.ai/auto-limits&#124;requests&#124;replicas: &#39;true&#39;

### Properties {#properties-workload-profile-autoScalingConfig}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-autoScalingConfig-autoSetLimits-details')">autoSetLimits</b> <span id="property-workload-profile-autoScalingConfig-autoSetLimits" class="expandable-property" data-uid="property-workload-profile-autoScalingConfig-autoSetLimits" @click="toggleExpand('property-workload-profile-autoScalingConfig-autoSetLimits-details')">↓</span> | object |   | layer 1 vertical auto-scaling, turbo burst to existing GPU cards quickly<br />VPA-like, aggregate metrics data &lt;1m |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-autoScalingConfig-autoSetReplicas-details')">autoSetReplicas</b> <span id="property-workload-profile-autoScalingConfig-autoSetReplicas" class="expandable-property" data-uid="property-workload-profile-autoScalingConfig-autoSetReplicas" @click="toggleExpand('property-workload-profile-autoScalingConfig-autoSetReplicas-details')">↓</span> | object |   | layer 2 horizontal auto-scaling, scale up to more GPU cards if max limits threshold hit<br />HPA-like, aggregate metrics data 1m-1h (when tf-worker scaled-up, should also trigger client pod&#39;s owner[Deployment etc.]&#39;s replica increasing, check if KNative works) |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-autoScalingConfig-autoSetRequests-details')">autoSetRequests</b> <span id="property-workload-profile-autoScalingConfig-autoSetRequests" class="expandable-property" data-uid="property-workload-profile-autoScalingConfig-autoSetRequests" @click="toggleExpand('property-workload-profile-autoScalingConfig-autoSetRequests-details')">↓</span> | object |   | layer 3 adjusting, to match the actual usage in the long run, only for N:M remote vGPU mode, not impl yet<br />Adjust baseline requests to match the actual usage in longer period, such as 1day - 2weeks |

<div id="property-workload-profile-autoScalingConfig-autoSetLimits-details" class="nested-properties expanded">

### autoSetLimits {#property-workload-profile-autoScalingConfig-autoSetLimits-heading}

layer 1 vertical auto-scaling, turbo burst to existing GPU cards quickly<br />VPA-like, aggregate metrics data &lt;1m

#### Properties {#properties-workload-profile-autoScalingConfig-autoSetLimits}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-autoScalingConfig-autoSetLimits-enable-details')">enable</b> | boolean |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-autoScalingConfig-autoSetLimits-evaluationPeriod-details')">evaluationPeriod</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-autoScalingConfig-autoSetLimits-extraTFlopsBufferRatio-details')">extraTFlopsBufferRatio</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-autoScalingConfig-autoSetLimits-ignoredDeltaRange-details')">ignoredDeltaRange</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-autoScalingConfig-autoSetLimits-maxRatioToRequests-details')">maxRatioToRequests</b> | string |   | the multiplier of requests, to avoid limit set too high, like 5.0 |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-autoScalingConfig-autoSetLimits-prediction-details')">prediction</b> <span id="property-workload-profile-autoScalingConfig-autoSetLimits-prediction" class="expandable-property" data-uid="property-workload-profile-autoScalingConfig-autoSetLimits-prediction" @click="toggleExpand('property-workload-profile-autoScalingConfig-autoSetLimits-prediction-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-autoScalingConfig-autoSetLimits-scaleUpStep-details')">scaleUpStep</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-autoScalingConfig-autoSetLimits-targetResource-details')">targetResource</b> | string |   | target resource to scale limits, such as &quot;tflops&quot;, &quot;vram&quot;, or &quot;all&quot; by default |

<div id="property-workload-profile-autoScalingConfig-autoSetLimits-prediction-details" class="nested-properties expanded">

### prediction {#property-workload-profile-autoScalingConfig-autoSetLimits-prediction-heading}

##### Properties {#properties-workload-profile-autoScalingConfig-autoSetLimits-prediction}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-autoScalingConfig-autoSetLimits-prediction-enable-details')">enable</b> | boolean |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-autoScalingConfig-autoSetLimits-prediction-historyDataPeriod-details')">historyDataPeriod</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-autoScalingConfig-autoSetLimits-prediction-model-details')">model</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-autoScalingConfig-autoSetLimits-prediction-predictionPeriod-details')">predictionPeriod</b> | string |   |  |

</div>

</div>

<div id="property-workload-profile-autoScalingConfig-autoSetReplicas-details" class="nested-properties expanded">

### autoSetReplicas {#property-workload-profile-autoScalingConfig-autoSetReplicas-heading}

layer 2 horizontal auto-scaling, scale up to more GPU cards if max limits threshold hit<br />HPA-like, aggregate metrics data 1m-1h (when tf-worker scaled-up, should also trigger client pod&#39;s owner[Deployment etc.]&#39;s replica increasing, check if KNative works)

#### Properties {#properties-workload-profile-autoScalingConfig-autoSetReplicas}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-autoScalingConfig-autoSetReplicas-enable-details')">enable</b> | boolean |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-autoScalingConfig-autoSetReplicas-evaluationPeriod-details')">evaluationPeriod</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-autoScalingConfig-autoSetReplicas-scaleDownCoolDownTime-details')">scaleDownCoolDownTime</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-autoScalingConfig-autoSetReplicas-scaleDownStep-details')">scaleDownStep</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-autoScalingConfig-autoSetReplicas-scaleUpCoolDownTime-details')">scaleUpCoolDownTime</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-autoScalingConfig-autoSetReplicas-scaleUpStep-details')">scaleUpStep</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-autoScalingConfig-autoSetReplicas-targetTFlopsOfLimits-details')">targetTFlopsOfLimits</b> | string |   |  |

</div>

<div id="property-workload-profile-autoScalingConfig-autoSetRequests-details" class="nested-properties expanded">

### autoSetRequests {#property-workload-profile-autoScalingConfig-autoSetRequests-heading}

layer 3 adjusting, to match the actual usage in the long run, only for N:M remote vGPU mode, not impl yet<br />Adjust baseline requests to match the actual usage in longer period, such as 1day - 2weeks

#### Properties {#properties-workload-profile-autoScalingConfig-autoSetRequests}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-autoScalingConfig-autoSetRequests-aggregationPeriod-details')">aggregationPeriod</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-autoScalingConfig-autoSetRequests-enable-details')">enable</b> | boolean |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-autoScalingConfig-autoSetRequests-evaluationPeriod-details')">evaluationPeriod</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-autoScalingConfig-autoSetRequests-extraBufferRatio-details')">extraBufferRatio</b> | string |   | the request buffer ratio, for example actual usage is 1.0, 10% buffer will be 1.1 as final preferred requests |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-autoScalingConfig-autoSetRequests-percentileForAutoRequests-details')">percentileForAutoRequests</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-autoScalingConfig-autoSetRequests-prediction-details')">prediction</b> <span id="property-workload-profile-autoScalingConfig-autoSetRequests-prediction" class="expandable-property" data-uid="property-workload-profile-autoScalingConfig-autoSetRequests-prediction" @click="toggleExpand('property-workload-profile-autoScalingConfig-autoSetRequests-prediction-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-autoScalingConfig-autoSetRequests-targetResource-details')">targetResource</b> | string |   | target resource to scale requests, such as &quot;tflops&quot;, &quot;vram&quot;, or &quot;all&quot; by default |

<div id="property-workload-profile-autoScalingConfig-autoSetRequests-prediction-details" class="nested-properties expanded">

### prediction {#property-workload-profile-autoScalingConfig-autoSetRequests-prediction-heading}

##### Properties {#properties-workload-profile-autoScalingConfig-autoSetRequests-prediction}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-autoScalingConfig-autoSetRequests-prediction-enable-details')">enable</b> | boolean |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-autoScalingConfig-autoSetRequests-prediction-historyDataPeriod-details')">historyDataPeriod</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-autoScalingConfig-autoSetRequests-prediction-model-details')">model</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-autoScalingConfig-autoSetRequests-prediction-predictionPeriod-details')">predictionPeriod</b> | string |   |  |

</div>

</div>

</div>

<div id="property-workload-profile-nodeAffinity-details" class="nested-properties expanded">

### nodeAffinity {#property-workload-profile-nodeAffinity-heading}

NodeAffinity specifies the node affinity requirements for the workload

### Properties {#properties-workload-profile-nodeAffinity}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-details')">preferredDuringSchedulingIgnoredDuringExecution</b> <span id="property-workload-profile-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution" class="expandable-property" data-uid="property-workload-profile-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution" @click="toggleExpand('property-workload-profile-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-details')">↓</span> | array |   | The scheduler will prefer to schedule pods to nodes that satisfy<br />the affinity expressions specified by this field, but it may choose<br />a node that violates one or more of the expressions. The node that is<br />most preferred is the one with the greatest sum of weights, i.e.<br />for each node that meets all of the scheduling requirements (resource<br />request, requiredDuringScheduling affinity expressions, etc.),<br />compute a sum by iterating through the elements of this field and adding<br />&quot;weight&quot; to the sum if the node matches the corresponding matchExpressions; the<br />node(s) with the highest sum are the most preferred. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-details')">requiredDuringSchedulingIgnoredDuringExecution</b> <span id="property-workload-profile-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution" class="expandable-property" data-uid="property-workload-profile-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution" @click="toggleExpand('property-workload-profile-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-details')">↓</span> | object |   | If the affinity requirements specified by this field are not met at<br />scheduling time, the pod will not be scheduled onto the node.<br />If the affinity requirements specified by this field cease to be met<br />at some point during pod execution (e.g. due to an update), the system<br />may or may not try to eventually evict the pod from its node. |

<div id="property-workload-profile-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-details" class="nested-properties expanded">

### preferredDuringSchedulingIgnoredDuringExecution (items) {#property-workload-profile-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-heading-items}

The scheduler will prefer to schedule pods to nodes that satisfy<br />the affinity expressions specified by this field, but it may choose<br />a node that violates one or more of the expressions. The node that is<br />most preferred is the one with the greatest sum of weights, i.e.<br />for each node that meets all of the scheduling requirements (resource<br />request, requiredDuringScheduling affinity expressions, etc.),<br />compute a sum by iterating through the elements of this field and adding<br />&quot;weight&quot; to the sum if the node matches the corresponding matchExpressions; the<br />node(s) with the highest sum are the most preferred.

#### Properties {#properties-workload-profile-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-details')">preference</b><span class="required-tag"></span> <span id="property-workload-profile-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference" class="expandable-property" data-uid="property-workload-profile-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference" @click="toggleExpand('property-workload-profile-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-details')">↓</span> | object |   | A node selector term, associated with the corresponding weight. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-weight-details')">weight</b><span class="required-tag"></span> | integer&lt;int32&gt; |   | Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100. |

<div id="property-workload-profile-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-details" class="nested-properties expanded">

### preference {#property-workload-profile-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-heading}

A node selector term, associated with the corresponding weight.

##### Properties {#properties-workload-profile-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-matchExpressions-details')">matchExpressions</b> <span id="property-workload-profile-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-matchExpressions" class="expandable-property" data-uid="property-workload-profile-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-matchExpressions" @click="toggleExpand('property-workload-profile-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-matchExpressions-details')">↓</span> | array |   | A list of node selector requirements by node&#39;s labels. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-matchFields-details')">matchFields</b> <span id="property-workload-profile-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-matchFields" class="expandable-property" data-uid="property-workload-profile-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-matchFields" @click="toggleExpand('property-workload-profile-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-matchFields-details')">↓</span> | array |   | A list of node selector requirements by node&#39;s fields. |

<div id="property-workload-profile-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-matchExpressions-details" class="nested-properties expanded">

### matchExpressions (items) {#property-workload-profile-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-matchExpressions-heading-items}

A list of node selector requirements by node&#39;s labels.

###### Properties {#properties-workload-profile-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-matchExpressions-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-matchExpressions-items-key-details')">key</b><span class="required-tag"></span> | string |   | The label key that the selector applies to. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-matchExpressions-items-operator-details')">operator</b><span class="required-tag"></span> | string |   | Represents a key&#39;s relationship to a set of values.<br />Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-matchExpressions-items-values-details')">values</b> | array |   | An array of string values. If the operator is In or NotIn,<br />the values array must be non-empty. If the operator is Exists or DoesNotExist,<br />the values array must be empty. If the operator is Gt or Lt, the values<br />array must have a single element, which will be interpreted as an integer.<br />This array is replaced during a strategic merge patch. |

</div>

<div id="property-workload-profile-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-matchFields-details" class="nested-properties expanded">

### matchFields (items) {#property-workload-profile-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-matchFields-heading-items}

A list of node selector requirements by node&#39;s fields.

###### Properties {#properties-workload-profile-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-matchFields-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-matchFields-items-key-details')">key</b><span class="required-tag"></span> | string |   | The label key that the selector applies to. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-matchFields-items-operator-details')">operator</b><span class="required-tag"></span> | string |   | Represents a key&#39;s relationship to a set of values.<br />Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-nodeAffinity-preferredDuringSchedulingIgnoredDuringExecution-items-preference-matchFields-items-values-details')">values</b> | array |   | An array of string values. If the operator is In or NotIn,<br />the values array must be non-empty. If the operator is Exists or DoesNotExist,<br />the values array must be empty. If the operator is Gt or Lt, the values<br />array must have a single element, which will be interpreted as an integer.<br />This array is replaced during a strategic merge patch. |

</div>

</div>

</div>

<div id="property-workload-profile-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-details" class="nested-properties expanded">

### requiredDuringSchedulingIgnoredDuringExecution {#property-workload-profile-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-heading}

If the affinity requirements specified by this field are not met at<br />scheduling time, the pod will not be scheduled onto the node.<br />If the affinity requirements specified by this field cease to be met<br />at some point during pod execution (e.g. due to an update), the system<br />may or may not try to eventually evict the pod from its node.

#### Properties {#properties-workload-profile-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-details')">nodeSelectorTerms</b><span class="required-tag"></span> <span id="property-workload-profile-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms" class="expandable-property" data-uid="property-workload-profile-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms" @click="toggleExpand('property-workload-profile-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-details')">↓</span> | array |   | Required. A list of node selector terms. The terms are ORed. |

<div id="property-workload-profile-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-details" class="nested-properties expanded">

### nodeSelectorTerms (items) {#property-workload-profile-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-heading-items}

Required. A list of node selector terms. The terms are ORed.

##### Properties {#properties-workload-profile-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items-matchExpressions-details')">matchExpressions</b> <span id="property-workload-profile-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items-matchExpressions" class="expandable-property" data-uid="property-workload-profile-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items-matchExpressions" @click="toggleExpand('property-workload-profile-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items-matchExpressions-details')">↓</span> | array |   | A list of node selector requirements by node&#39;s labels. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items-matchFields-details')">matchFields</b> <span id="property-workload-profile-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items-matchFields" class="expandable-property" data-uid="property-workload-profile-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items-matchFields" @click="toggleExpand('property-workload-profile-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items-matchFields-details')">↓</span> | array |   | A list of node selector requirements by node&#39;s fields. |

<div id="property-workload-profile-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items-matchExpressions-details" class="nested-properties expanded">

### matchExpressions (items) {#property-workload-profile-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items-matchExpressions-heading-items}

A list of node selector requirements by node&#39;s labels.

###### Properties {#properties-workload-profile-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items-matchExpressions-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items-matchExpressions-items-key-details')">key</b><span class="required-tag"></span> | string |   | The label key that the selector applies to. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items-matchExpressions-items-operator-details')">operator</b><span class="required-tag"></span> | string |   | Represents a key&#39;s relationship to a set of values.<br />Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items-matchExpressions-items-values-details')">values</b> | array |   | An array of string values. If the operator is In or NotIn,<br />the values array must be non-empty. If the operator is Exists or DoesNotExist,<br />the values array must be empty. If the operator is Gt or Lt, the values<br />array must have a single element, which will be interpreted as an integer.<br />This array is replaced during a strategic merge patch. |

</div>

<div id="property-workload-profile-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items-matchFields-details" class="nested-properties expanded">

### matchFields (items) {#property-workload-profile-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items-matchFields-heading-items}

A list of node selector requirements by node&#39;s fields.

###### Properties {#properties-workload-profile-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items-matchFields-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items-matchFields-items-key-details')">key</b><span class="required-tag"></span> | string |   | The label key that the selector applies to. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items-matchFields-items-operator-details')">operator</b><span class="required-tag"></span> | string |   | Represents a key&#39;s relationship to a set of values.<br />Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-nodeAffinity-requiredDuringSchedulingIgnoredDuringExecution-nodeSelectorTerms-items-matchFields-items-values-details')">values</b> | array |   | An array of string values. If the operator is In or NotIn,<br />the values array must be non-empty. If the operator is Exists or DoesNotExist,<br />the values array must be empty. If the operator is Gt or Lt, the values<br />array must have a single element, which will be interpreted as an integer.<br />This array is replaced during a strategic merge patch. |

</div>

</div>

</div>

</div>

<div id="property-workload-profile-resources-details" class="nested-properties expanded">

### resources {#property-workload-profile-resources-heading}

### Properties {#properties-workload-profile-resources}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-resources-limits-details')">limits</b><span class="required-tag"></span> <span id="property-workload-profile-resources-limits" class="expandable-property" data-uid="property-workload-profile-resources-limits" @click="toggleExpand('property-workload-profile-resources-limits-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-resources-requests-details')">requests</b><span class="required-tag"></span> <span id="property-workload-profile-resources-requests" class="expandable-property" data-uid="property-workload-profile-resources-requests" @click="toggleExpand('property-workload-profile-resources-requests-details')">↓</span> | object |   |  |

<div id="property-workload-profile-resources-limits-details" class="nested-properties expanded">

### limits {#property-workload-profile-resources-limits-heading}

#### Properties {#properties-workload-profile-resources-limits}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-resources-limits-tflops-details')">tflops</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-resources-limits-vram-details')">vram</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |

</div>

<div id="property-workload-profile-resources-requests-details" class="nested-properties expanded">

### requests {#property-workload-profile-resources-requests-heading}

#### Properties {#properties-workload-profile-resources-requests}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-resources-requests-tflops-details')">tflops</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-resources-requests-vram-details')">vram</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |

</div>

</div>

## Status

WorkloadProfileStatus defines the observed state of WorkloadProfile.

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
