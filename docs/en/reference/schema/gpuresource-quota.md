---
pageClass: home
---
# GPUResourceQuota

GPUResourceQuota is the Schema for the gpuresourcequotas API

<div class="crd-navigation">
  <div class="crd-search">
    <input type="text" id="gpuresource-quota-property-search" placeholder="Search properties..." @input="filterProperties('gpuresource-quota')">
  </div>
  <div class="crd-actions">
    <button @click="expandAll('gpuresource-quota')">Expand All</button>
    <button @click="collapseAll('gpuresource-quota')">Collapse All</button>
  </div>
</div>

## Kubernetes Resource Information

| Field | Value |
|-------|-------|
| API Version | tensor-fusion.ai/v1 |
| Kind | GPUResourceQuota |
| Scope | Namespaced |

## Table of Contents

- [API Information](#api-information)
- [Spec](#spec)
- [Status](#status)
## Spec

GPUResourceQuotaSpec defines the desired state of GPUResourceQuota

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-single-details')">single</b> <span id="property-gpuresource-quota-single" class="expandable-property" data-uid="property-gpuresource-quota-single" @click="toggleExpand('property-gpuresource-quota-single-details')">↓</span> | object |   | Per-workload limits (similar to LimitRanges) |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-total-details')">total</b> <span id="property-gpuresource-quota-total" class="expandable-property" data-uid="property-gpuresource-quota-total" @click="toggleExpand('property-gpuresource-quota-total-details')">↓</span> | object |   | Total namespace limits (similar to ResourceQuotas) |

<div id="property-gpuresource-quota-single-details" class="nested-properties expanded">

### single {#property-gpuresource-quota-single-heading}

Per-workload limits (similar to LimitRanges)

### Properties {#properties-gpuresource-quota-single}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-single-defaultLimits-details')">defaultLimits</b> <span id="property-gpuresource-quota-single-defaultLimits" class="expandable-property" data-uid="property-gpuresource-quota-single-defaultLimits" @click="toggleExpand('property-gpuresource-quota-single-defaultLimits-details')">↓</span> | object |   | Default requests applied to workloads without explicit requests |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-single-defaultRequests-details')">defaultRequests</b> <span id="property-gpuresource-quota-single-defaultRequests" class="expandable-property" data-uid="property-gpuresource-quota-single-defaultRequests" @click="toggleExpand('property-gpuresource-quota-single-defaultRequests-details')">↓</span> | object |   | Default limits applied to workloads without explicit limits |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-single-maxGPUCount-details')">maxGPUCount</b> | integer&lt;int32&gt; |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-single-maxLimits-details')">maxLimits</b> <span id="property-gpuresource-quota-single-maxLimits" class="expandable-property" data-uid="property-gpuresource-quota-single-maxLimits" @click="toggleExpand('property-gpuresource-quota-single-maxLimits-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-single-maxRequests-details')">maxRequests</b> <span id="property-gpuresource-quota-single-maxRequests" class="expandable-property" data-uid="property-gpuresource-quota-single-maxRequests" @click="toggleExpand('property-gpuresource-quota-single-maxRequests-details')">↓</span> | object |   | Maximum resources per workload |

<div id="property-gpuresource-quota-single-defaultLimits-details" class="nested-properties expanded">

### defaultLimits {#property-gpuresource-quota-single-defaultLimits-heading}

Default requests applied to workloads without explicit requests

#### Properties {#properties-gpuresource-quota-single-defaultLimits}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-single-defaultLimits-tflops-details')">tflops</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-single-defaultLimits-vram-details')">vram</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |

</div>

<div id="property-gpuresource-quota-single-defaultRequests-details" class="nested-properties expanded">

### defaultRequests {#property-gpuresource-quota-single-defaultRequests-heading}

Default limits applied to workloads without explicit limits

#### Properties {#properties-gpuresource-quota-single-defaultRequests}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-single-defaultRequests-tflops-details')">tflops</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-single-defaultRequests-vram-details')">vram</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |

</div>

<div id="property-gpuresource-quota-single-maxLimits-details" class="nested-properties expanded">

### maxLimits {#property-gpuresource-quota-single-maxLimits-heading}

#### Properties {#properties-gpuresource-quota-single-maxLimits}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-single-maxLimits-tflops-details')">tflops</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-single-maxLimits-vram-details')">vram</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |

</div>

<div id="property-gpuresource-quota-single-maxRequests-details" class="nested-properties expanded">

### maxRequests {#property-gpuresource-quota-single-maxRequests-heading}

Maximum resources per workload

#### Properties {#properties-gpuresource-quota-single-maxRequests}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-single-maxRequests-tflops-details')">tflops</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-single-maxRequests-vram-details')">vram</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |

</div>

</div>

<div id="property-gpuresource-quota-total-details" class="nested-properties expanded">

### total {#property-gpuresource-quota-total-heading}

Total namespace limits (similar to ResourceQuotas)

### Properties {#properties-gpuresource-quota-total}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-total-alertThresholdPercent-details')">alertThresholdPercent</b> | integer&lt;int32&gt; | <span class="constraint-tag">min: 0</span> <span class="constraint-tag">max: 100</span>  | Alert threshold percentage (0-100)<br />When usage exceeds this percentage, an alert event will be triggered Default: `95` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-total-limits-details')">limits</b> <span id="property-gpuresource-quota-total-limits" class="expandable-property" data-uid="property-gpuresource-quota-total-limits" @click="toggleExpand('property-gpuresource-quota-total-limits-details')">↓</span> | object |   | Total limits for the namespace |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-total-maxWorkers-details')">maxWorkers</b> | integer&lt;int32&gt; |   | Maximum number of workers in the namespace Default: `32768` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-total-requests-details')">requests</b> <span id="property-gpuresource-quota-total-requests" class="expandable-property" data-uid="property-gpuresource-quota-total-requests" @click="toggleExpand('property-gpuresource-quota-total-requests-details')">↓</span> | object |   | Total requests limits for the namespace |

<div id="property-gpuresource-quota-total-limits-details" class="nested-properties expanded">

### limits {#property-gpuresource-quota-total-limits-heading}

Total limits for the namespace

#### Properties {#properties-gpuresource-quota-total-limits}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-total-limits-tflops-details')">tflops</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-total-limits-vram-details')">vram</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |

</div>

<div id="property-gpuresource-quota-total-requests-details" class="nested-properties expanded">

### requests {#property-gpuresource-quota-total-requests-heading}

Total requests limits for the namespace

#### Properties {#properties-gpuresource-quota-total-requests}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-total-requests-tflops-details')">tflops</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-total-requests-vram-details')">vram</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |

</div>

</div>

## Status

GPUResourceQuotaStatus defines the observed state of GPUResourceQuota

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-availablePercent-details')">availablePercent</b> <span id="property-gpuresource-quota-availablePercent" class="expandable-property" data-uid="property-gpuresource-quota-availablePercent" @click="toggleExpand('property-gpuresource-quota-availablePercent-details')">↓</span> | object |   | Available percentage for each resource type |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-conditions-details')">conditions</b> <span id="property-gpuresource-quota-conditions" class="expandable-property" data-uid="property-gpuresource-quota-conditions" @click="toggleExpand('property-gpuresource-quota-conditions-details')">↓</span> | array |   | Conditions represent the latest available observations of the quota&#39;s state |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-lastUpdateTime-details')">lastUpdateTime</b> | string&lt;date-time&gt; |   | LastUpdateTime is the last time the status was updated |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-used-details')">used</b> <span id="property-gpuresource-quota-used" class="expandable-property" data-uid="property-gpuresource-quota-used" @click="toggleExpand('property-gpuresource-quota-used-details')">↓</span> | object |   | Current resource usage in the namespace |

<div id="property-gpuresource-quota-availablePercent-details" class="nested-properties expanded">

### availablePercent {#property-gpuresource-quota-availablePercent-heading}

Available percentage for each resource type

### Properties {#properties-gpuresource-quota-availablePercent}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-availablePercent-limits-tflops-details')">limits.tflops</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-availablePercent-limits-vram-details')">limits.vram</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-availablePercent-requests-tflops-details')">requests.tflops</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-availablePercent-requests-vram-details')">requests.vram</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-availablePercent-workers-details')">workers</b> | string |   |  |

</div>

<div id="property-gpuresource-quota-conditions-details" class="nested-properties expanded">

### conditions (items) {#property-gpuresource-quota-conditions-heading-items}

Conditions represent the latest available observations of the quota&#39;s state

### Properties {#properties-gpuresource-quota-conditions-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-conditions-items-lastTransitionTime-details')">lastTransitionTime</b><span class="required-tag"></span> | string&lt;date-time&gt; |   | lastTransitionTime is the last time the condition transitioned from one status to another.<br />This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-conditions-items-message-details')">message</b><span class="required-tag"></span> | string | <span class="constraint-tag">maxLength: 32768</span>  | message is a human readable message indicating details about the transition.<br />This may be an empty string. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-conditions-items-observedGeneration-details')">observedGeneration</b> | integer&lt;int64&gt; | <span class="constraint-tag">min: 0</span>  | observedGeneration represents the .metadata.generation that the condition was set based upon.<br />For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date<br />with respect to the current state of the instance. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-conditions-items-reason-details')">reason</b><span class="required-tag"></span> | string | <span class="constraint-tag">minLength: 1</span> <span class="constraint-tag">maxLength: 1024</span> <span class="constraint-tag" title="^[A-Za-z]([A-Za-z0-9&#95;,:]&#42;[A-Za-z0-9&#95;])?$">pattern: Regex</span>  | reason contains a programmatic identifier indicating the reason for the condition&#39;s last transition.<br />Producers of specific condition types may define expected values and meanings for this field,<br />and whether the values are considered a guaranteed API.<br />The value should be a CamelCase string.<br />This field may not be empty. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-conditions-items-status-details')">status</b><span class="required-tag"></span> | string |  <span class="enum-tag">True</span> <span class="enum-tag">False</span> <span class="enum-tag">Unknown</span> | status of the condition, one of True, False, Unknown. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-conditions-items-type-details')">type</b><span class="required-tag"></span> | string | <span class="constraint-tag">maxLength: 316</span> <span class="constraint-tag" title="^([a-z0-9]([-a-z0-9]&#42;[a-z0-9])?(\.[a-z0-9]([-a-z0-9]&#42;[a-z0-9])?)&#42;/)?(([A-Za-z0-9][-A-Za-z0-9&#95;.]&#42;)?[A-Za-z0-9])$">pattern: Regex</span>  | type of condition in CamelCase or in foo.example.com/CamelCase. |

</div>

<div id="property-gpuresource-quota-used-details" class="nested-properties expanded">

### used {#property-gpuresource-quota-used-heading}

Current resource usage in the namespace

### Properties {#properties-gpuresource-quota-used}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-used-limits-details')">limits</b> <span id="property-gpuresource-quota-used-limits" class="expandable-property" data-uid="property-gpuresource-quota-used-limits" @click="toggleExpand('property-gpuresource-quota-used-limits-details')">↓</span> | object |   | Current limits usage |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-used-requests-details')">requests</b> <span id="property-gpuresource-quota-used-requests" class="expandable-property" data-uid="property-gpuresource-quota-used-requests" @click="toggleExpand('property-gpuresource-quota-used-requests-details')">↓</span> | object |   | Current requests usage |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-used-workers-details')">workers</b> | integer&lt;int32&gt; |   | Current number of workers |

<div id="property-gpuresource-quota-used-limits-details" class="nested-properties expanded">

### limits {#property-gpuresource-quota-used-limits-heading}

Current limits usage

#### Properties {#properties-gpuresource-quota-used-limits}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-used-limits-tflops-details')">tflops</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-used-limits-vram-details')">vram</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |

</div>

<div id="property-gpuresource-quota-used-requests-details" class="nested-properties expanded">

### requests {#property-gpuresource-quota-used-requests-heading}

Current requests usage

#### Properties {#properties-gpuresource-quota-used-requests}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-used-requests-tflops-details')">tflops</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpuresource-quota-used-requests-vram-details')">vram</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |

</div>

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
