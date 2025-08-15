---
pageClass: home
---
# GPUPool

<div class="crd-navigation">
  <div class="crd-search">
    <input type="text" id="gpupool-property-search" placeholder="Search properties..." @input="filterProperties('gpupool')">
  </div>
  <div class="crd-actions">
    <button @click="expandAll('gpupool')">Expand All</button>
    <button @click="collapseAll('gpupool')">Collapse All</button>
  </div>
</div>

## Kubernetes Resource Information

| Field | Value |
|-------|-------|
| API Version | tensor-fusion.ai/v1 |
| Kind | GPUPool |
| Scope | Cluster |

## Table of Contents

- [API Information](#api-information)
- [Spec](#spec)
- [Status](#status)
## Spec

GPUPoolSpec defines the desired state of GPUPool.

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-capacityConfig-details')">capacityConfig</b> <span id="property-gpupool-capacityConfig" class="expandable-property" data-uid="property-gpupool-capacityConfig" @click="toggleExpand('property-gpupool-capacityConfig-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-componentConfig-details')">componentConfig</b> <span id="property-gpupool-componentConfig" class="expandable-property" data-uid="property-gpupool-componentConfig" @click="toggleExpand('property-gpupool-componentConfig-details')">↓</span> | object |   | Customize system components for seamless onboarding. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-details')">nodeManagerConfig</b> <span id="property-gpupool-nodeManagerConfig" class="expandable-property" data-uid="property-gpupool-nodeManagerConfig" @click="toggleExpand('property-gpupool-nodeManagerConfig-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-qosConfig-details')">qosConfig</b> <span id="property-gpupool-qosConfig" class="expandable-property" data-uid="property-gpupool-qosConfig" @click="toggleExpand('property-gpupool-qosConfig-details')">↓</span> | object |   | Define different QoS and their price. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-schedulingConfigTemplate-details')">schedulingConfigTemplate</b> | string |   |  |

<div id="property-gpupool-capacityConfig-details" class="nested-properties expanded">

### capacityConfig {#property-gpupool-capacityConfig-heading}

### Properties {#properties-gpupool-capacityConfig}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-capacityConfig-maxResources-details')">maxResources</b> <span id="property-gpupool-capacityConfig-maxResources" class="expandable-property" data-uid="property-gpupool-capacityConfig-maxResources" @click="toggleExpand('property-gpupool-capacityConfig-maxResources-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-capacityConfig-minResources-details')">minResources</b> <span id="property-gpupool-capacityConfig-minResources" class="expandable-property" data-uid="property-gpupool-capacityConfig-minResources" @click="toggleExpand('property-gpupool-capacityConfig-minResources-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-capacityConfig-oversubscription-details')">oversubscription</b> <span id="property-gpupool-capacityConfig-oversubscription" class="expandable-property" data-uid="property-gpupool-capacityConfig-oversubscription" @click="toggleExpand('property-gpupool-capacityConfig-oversubscription-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-capacityConfig-warmResources-details')">warmResources</b> <span id="property-gpupool-capacityConfig-warmResources" class="expandable-property" data-uid="property-gpupool-capacityConfig-warmResources" @click="toggleExpand('property-gpupool-capacityConfig-warmResources-details')">↓</span> | object |   |  |

<div id="property-gpupool-capacityConfig-maxResources-details" class="nested-properties expanded">

### maxResources {#property-gpupool-capacityConfig-maxResources-heading}

#### Properties {#properties-gpupool-capacityConfig-maxResources}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-capacityConfig-maxResources-cpu-details')">cpu</b> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  | CPU/Memory is only available when CloudVendor connection is enabled |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-capacityConfig-maxResources-memory-details')">memory</b> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-capacityConfig-maxResources-tflops-details')">tflops</b> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-capacityConfig-maxResources-vram-details')">vram</b> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |

</div>

<div id="property-gpupool-capacityConfig-minResources-details" class="nested-properties expanded">

### minResources {#property-gpupool-capacityConfig-minResources-heading}

#### Properties {#properties-gpupool-capacityConfig-minResources}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-capacityConfig-minResources-cpu-details')">cpu</b> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  | CPU/Memory is only available when CloudVendor connection is enabled |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-capacityConfig-minResources-memory-details')">memory</b> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-capacityConfig-minResources-tflops-details')">tflops</b> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-capacityConfig-minResources-vram-details')">vram</b> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |

</div>

<div id="property-gpupool-capacityConfig-oversubscription-details" class="nested-properties expanded">

### oversubscription {#property-gpupool-capacityConfig-oversubscription-heading}

#### Properties {#properties-gpupool-capacityConfig-oversubscription}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-capacityConfig-oversubscription-tflopsOversellRatio-details')">tflopsOversellRatio</b> | integer&lt;int32&gt; | <span class="constraint-tag">min: 100</span> <span class="constraint-tag">max: 100000</span>  | The multi of TFlops to oversell, default to 500%, indicates 5 times oversell Default: `500` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-capacityConfig-oversubscription-vramExpandToHostDisk-details')">vramExpandToHostDisk</b> | integer&lt;int32&gt; | <span class="constraint-tag">min: 0</span> <span class="constraint-tag">max: 100</span>  | the percentage of Host Disk appending to GPU VRAM, default to 70% Default: `70` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-capacityConfig-oversubscription-vramExpandToHostMem-details')">vramExpandToHostMem</b> | integer&lt;int32&gt; | <span class="constraint-tag">min: 0</span> <span class="constraint-tag">max: 100</span>  | the percentage of Host RAM appending to GPU VRAM, default to 50% Default: `50` |

</div>

<div id="property-gpupool-capacityConfig-warmResources-details" class="nested-properties expanded">

### warmResources {#property-gpupool-capacityConfig-warmResources-heading}

#### Properties {#properties-gpupool-capacityConfig-warmResources}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-capacityConfig-warmResources-cpu-details')">cpu</b> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  | CPU/Memory is only available when CloudVendor connection is enabled |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-capacityConfig-warmResources-memory-details')">memory</b> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-capacityConfig-warmResources-tflops-details')">tflops</b> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-capacityConfig-warmResources-vram-details')">vram</b> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |

</div>

</div>

<div id="property-gpupool-componentConfig-details" class="nested-properties expanded">

### componentConfig {#property-gpupool-componentConfig-heading}

Customize system components for seamless onboarding.

### Properties {#properties-gpupool-componentConfig}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-componentConfig-client-details')">client</b> <span id="property-gpupool-componentConfig-client" class="expandable-property" data-uid="property-gpupool-componentConfig-client" @click="toggleExpand('property-gpupool-componentConfig-client-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-componentConfig-hypervisor-details')">hypervisor</b> <span id="property-gpupool-componentConfig-hypervisor" class="expandable-property" data-uid="property-gpupool-componentConfig-hypervisor" @click="toggleExpand('property-gpupool-componentConfig-hypervisor-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-componentConfig-nodeDiscovery-details')">nodeDiscovery</b> <span id="property-gpupool-componentConfig-nodeDiscovery" class="expandable-property" data-uid="property-gpupool-componentConfig-nodeDiscovery" @click="toggleExpand('property-gpupool-componentConfig-nodeDiscovery-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-componentConfig-worker-details')">worker</b> <span id="property-gpupool-componentConfig-worker" class="expandable-property" data-uid="property-gpupool-componentConfig-worker" @click="toggleExpand('property-gpupool-componentConfig-worker-details')">↓</span> | object |   |  |

<div id="property-gpupool-componentConfig-client-details" class="nested-properties expanded">

### client {#property-gpupool-componentConfig-client-heading}

#### Properties {#properties-gpupool-componentConfig-client}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-componentConfig-client-embeddedModeImage-details')">embeddedModeImage</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-componentConfig-client-operatorEndpoint-details')">operatorEndpoint</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-componentConfig-client-patchEmbeddedWorkerToPod-details')">patchEmbeddedWorkerToPod</b> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-componentConfig-client-patchToContainer-details')">patchToContainer</b> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-componentConfig-client-patchToEmbeddedWorkerContainer-details')">patchToEmbeddedWorkerContainer</b> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-componentConfig-client-patchToPod-details')">patchToPod</b> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-componentConfig-client-remoteModeImage-details')">remoteModeImage</b> | string |   |  |

</div>

<div id="property-gpupool-componentConfig-hypervisor-details" class="nested-properties expanded">

### hypervisor {#property-gpupool-componentConfig-hypervisor-heading}

#### Properties {#properties-gpupool-componentConfig-hypervisor}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-componentConfig-hypervisor-enableVector-details')">enableVector</b> | boolean |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-componentConfig-hypervisor-image-details')">image</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-componentConfig-hypervisor-podTemplate-details')">podTemplate</b> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-componentConfig-hypervisor-portNumber-details')">portNumber</b> | integer&lt;int32&gt; | <span class="constraint-tag">min: 0</span> <span class="constraint-tag">max: 65535</span>  |  Default: `8000` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-componentConfig-hypervisor-vectorImage-details')">vectorImage</b> | string |   |  |

</div>

<div id="property-gpupool-componentConfig-nodeDiscovery-details" class="nested-properties expanded">

### nodeDiscovery {#property-gpupool-componentConfig-nodeDiscovery-heading}

#### Properties {#properties-gpupool-componentConfig-nodeDiscovery}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-componentConfig-nodeDiscovery-image-details')">image</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-componentConfig-nodeDiscovery-podTemplate-details')">podTemplate</b> | object |   |  |

</div>

<div id="property-gpupool-componentConfig-worker-details" class="nested-properties expanded">

### worker {#property-gpupool-componentConfig-worker-heading}

#### Properties {#properties-gpupool-componentConfig-worker}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-componentConfig-worker-image-details')">image</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-componentConfig-worker-podTemplate-details')">podTemplate</b> | object |   |  |

</div>

</div>

<div id="property-gpupool-nodeManagerConfig-details" class="nested-properties expanded">

### nodeManagerConfig {#property-gpupool-nodeManagerConfig-heading}

### Properties {#properties-gpupool-nodeManagerConfig}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeCompaction-details')">nodeCompaction</b> <span id="property-gpupool-nodeManagerConfig-nodeCompaction" class="expandable-property" data-uid="property-gpupool-nodeManagerConfig-nodeCompaction" @click="toggleExpand('property-gpupool-nodeManagerConfig-nodeCompaction-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodePoolRollingUpdatePolicy-details')">nodePoolRollingUpdatePolicy</b> <span id="property-gpupool-nodeManagerConfig-nodePoolRollingUpdatePolicy" class="expandable-property" data-uid="property-gpupool-nodeManagerConfig-nodePoolRollingUpdatePolicy" @click="toggleExpand('property-gpupool-nodeManagerConfig-nodePoolRollingUpdatePolicy-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeProvisioner-details')">nodeProvisioner</b> <span id="property-gpupool-nodeManagerConfig-nodeProvisioner" class="expandable-property" data-uid="property-gpupool-nodeManagerConfig-nodeProvisioner" @click="toggleExpand('property-gpupool-nodeManagerConfig-nodeProvisioner-details')">↓</span> | object |   | NodeProvisioner or NodeSelector, they are exclusive.<br />NodeSelector is for existing GPUs, NodeProvisioner is for Karpenter-like auto management. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeSelector-details')">nodeSelector</b> <span id="property-gpupool-nodeManagerConfig-nodeSelector" class="expandable-property" data-uid="property-gpupool-nodeManagerConfig-nodeSelector" @click="toggleExpand('property-gpupool-nodeManagerConfig-nodeSelector-details')">↓</span> | object |   | A node selector represents the union of the results of one or more label queries<br />over a set of nodes; that is, it represents the OR of the selectors represented<br />by the node selector terms. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-provisioningMode-details')">provisioningMode</b> | string |  <span class="enum-tag">Provisioned</span> <span class="enum-tag">AutoSelect</span> <span class="enum-tag">Karpenter</span> |  Default: `AutoSelect` |

<div id="property-gpupool-nodeManagerConfig-nodeCompaction-details" class="nested-properties expanded">

### nodeCompaction {#property-gpupool-nodeManagerConfig-nodeCompaction-heading}

#### Properties {#properties-gpupool-nodeManagerConfig-nodeCompaction}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeCompaction-period-details')">period</b> | string |   |  Default: `5m` |

</div>

<div id="property-gpupool-nodeManagerConfig-nodePoolRollingUpdatePolicy-details" class="nested-properties expanded">

### nodePoolRollingUpdatePolicy {#property-gpupool-nodeManagerConfig-nodePoolRollingUpdatePolicy-heading}

#### Properties {#properties-gpupool-nodeManagerConfig-nodePoolRollingUpdatePolicy}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodePoolRollingUpdatePolicy-autoUpdate-details')">autoUpdate</b> | boolean |   |  Default: `true` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodePoolRollingUpdatePolicy-batchInterval-details')">batchInterval</b> | string |   |  Default: `10m` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodePoolRollingUpdatePolicy-batchPercentage-details')">batchPercentage</b> | integer&lt;int32&gt; | <span class="constraint-tag">min: 0</span> <span class="constraint-tag">max: 100</span>  |  Default: `100` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodePoolRollingUpdatePolicy-maintenanceWindow-details')">maintenanceWindow</b> <span id="property-gpupool-nodeManagerConfig-nodePoolRollingUpdatePolicy-maintenanceWindow" class="expandable-property" data-uid="property-gpupool-nodeManagerConfig-nodePoolRollingUpdatePolicy-maintenanceWindow" @click="toggleExpand('property-gpupool-nodeManagerConfig-nodePoolRollingUpdatePolicy-maintenanceWindow-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodePoolRollingUpdatePolicy-maxDuration-details')">maxDuration</b> | string |   |  Default: `10m` |

<div id="property-gpupool-nodeManagerConfig-nodePoolRollingUpdatePolicy-maintenanceWindow-details" class="nested-properties expanded">

### maintenanceWindow {#property-gpupool-nodeManagerConfig-nodePoolRollingUpdatePolicy-maintenanceWindow-heading}

##### Properties {#properties-gpupool-nodeManagerConfig-nodePoolRollingUpdatePolicy-maintenanceWindow}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodePoolRollingUpdatePolicy-maintenanceWindow-includes-details')">includes</b> | array |   | crontab syntax. |

</div>

</div>

<div id="property-gpupool-nodeManagerConfig-nodeProvisioner-details" class="nested-properties expanded">

### nodeProvisioner {#property-gpupool-nodeManagerConfig-nodeProvisioner-heading}

NodeProvisioner or NodeSelector, they are exclusive.<br />NodeSelector is for existing GPUs, NodeProvisioner is for Karpenter-like auto management.

#### Properties {#properties-gpupool-nodeManagerConfig-nodeProvisioner}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeProvisioner-budget-details')">budget</b> <span id="property-gpupool-nodeManagerConfig-nodeProvisioner-budget" class="expandable-property" data-uid="property-gpupool-nodeManagerConfig-nodeProvisioner-budget" @click="toggleExpand('property-gpupool-nodeManagerConfig-nodeProvisioner-budget-details')">↓</span> | object |   | NodeProvisioner will start an virtual billing based on public pricing or customized pricing, if the VM&#39;s costs exceeded any budget constraints, the new VM will not be created, and alerts will be generated |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeProvisioner-cpuNodeLabels-details')">cpuNodeLabels</b> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeProvisioner-cpuRequirements-details')">cpuRequirements</b> <span id="property-gpupool-nodeManagerConfig-nodeProvisioner-cpuRequirements" class="expandable-property" data-uid="property-gpupool-nodeManagerConfig-nodeProvisioner-cpuRequirements" @click="toggleExpand('property-gpupool-nodeManagerConfig-nodeProvisioner-cpuRequirements-details')">↓</span> | array |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeProvisioner-cpuTaints-details')">cpuTaints</b> <span id="property-gpupool-nodeManagerConfig-nodeProvisioner-cpuTaints" class="expandable-property" data-uid="property-gpupool-nodeManagerConfig-nodeProvisioner-cpuTaints" @click="toggleExpand('property-gpupool-nodeManagerConfig-nodeProvisioner-cpuTaints-details')">↓</span> | array |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeProvisioner-gpuNodeAnnotations-details')">gpuNodeAnnotations</b> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeProvisioner-gpuNodeLabels-details')">gpuNodeLabels</b> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeProvisioner-gpuRequirements-details')">gpuRequirements</b> <span id="property-gpupool-nodeManagerConfig-nodeProvisioner-gpuRequirements" class="expandable-property" data-uid="property-gpupool-nodeManagerConfig-nodeProvisioner-gpuRequirements" @click="toggleExpand('property-gpupool-nodeManagerConfig-nodeProvisioner-gpuRequirements-details')">↓</span> | array |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeProvisioner-gpuTaints-details')">gpuTaints</b> <span id="property-gpupool-nodeManagerConfig-nodeProvisioner-gpuTaints" class="expandable-property" data-uid="property-gpupool-nodeManagerConfig-nodeProvisioner-gpuTaints" @click="toggleExpand('property-gpupool-nodeManagerConfig-nodeProvisioner-gpuTaints-details')">↓</span> | array |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeProvisioner-karpenterNodeClassRef-details')">karpenterNodeClassRef</b> <span id="property-gpupool-nodeManagerConfig-nodeProvisioner-karpenterNodeClassRef" class="expandable-property" data-uid="property-gpupool-nodeManagerConfig-nodeProvisioner-karpenterNodeClassRef" @click="toggleExpand('property-gpupool-nodeManagerConfig-nodeProvisioner-karpenterNodeClassRef-details')">↓</span> | object |   | Karpenter NodeClass name |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeProvisioner-nodeClass-details')">nodeClass</b> | string |   | TensorFusion GPUNodeClass name |

<div id="property-gpupool-nodeManagerConfig-nodeProvisioner-budget-details" class="nested-properties expanded">

### budget {#property-gpupool-nodeManagerConfig-nodeProvisioner-budget-heading}

NodeProvisioner will start an virtual billing based on public pricing or customized pricing, if the VM&#39;s costs exceeded any budget constraints, the new VM will not be created, and alerts will be generated

##### Properties {#properties-gpupool-nodeManagerConfig-nodeProvisioner-budget}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeProvisioner-budget-budgetExceedStrategy-details')">budgetExceedStrategy</b> | string |  <span class="enum-tag">AlertOnly</span> <span class="enum-tag">AlertAndTerminateVM</span> |  Default: `AlertOnly` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeProvisioner-budget-budgetPerDay-details')">budgetPerDay</b> | string |   |  Default: `100` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeProvisioner-budget-budgetPerMonth-details')">budgetPerMonth</b> | string |   |  Default: `1000` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeProvisioner-budget-budgetPerQuarter-details')">budgetPerQuarter</b> | string |   |  Default: `3000` |

</div>

<div id="property-gpupool-nodeManagerConfig-nodeProvisioner-cpuRequirements-details" class="nested-properties expanded">

### cpuRequirements (items) {#property-gpupool-nodeManagerConfig-nodeProvisioner-cpuRequirements-heading-items}

##### Properties {#properties-gpupool-nodeManagerConfig-nodeProvisioner-cpuRequirements-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeProvisioner-cpuRequirements-items-key-details')">key</b> | string |  <span class="enum-tag">node.kubernetes.io/instance-type</span> <span class="enum-tag">kubernetes.io/arch</span> <span class="enum-tag">kubernetes.io/os</span> <span class="enum-tag">topology.kubernetes.io/region</span> <span class="enum-tag">topology.kubernetes.io/zone</span> <span class="enum-tag">karpenter.sh/capacity-type</span> <span class="enum-tag">tensor-fusion.ai/gpu-vendor</span> <span class="enum-tag">tensor-fusion.ai/gpu-instance-family</span> <span class="enum-tag">tensor-fusion.ai/gpu-instance-size</span> |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeProvisioner-cpuRequirements-items-operator-details')">operator</b> | string |  <span class="enum-tag">In</span> <span class="enum-tag">Exists</span> <span class="enum-tag">DoesNotExist</span> <span class="enum-tag">Gt</span> <span class="enum-tag">Lt</span> | A node selector operator is the set of operators that can be used in<br />a node selector requirement. Default: `In` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeProvisioner-cpuRequirements-items-values-details')">values</b> | array |   |  |

</div>

<div id="property-gpupool-nodeManagerConfig-nodeProvisioner-cpuTaints-details" class="nested-properties expanded">

### cpuTaints (items) {#property-gpupool-nodeManagerConfig-nodeProvisioner-cpuTaints-heading-items}

##### Properties {#properties-gpupool-nodeManagerConfig-nodeProvisioner-cpuTaints-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeProvisioner-cpuTaints-items-effect-details')">effect</b> | string |  <span class="enum-tag">NoSchedule</span> <span class="enum-tag">NoExecute</span> <span class="enum-tag">PreferNoSchedule</span> |  Default: `NoSchedule` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeProvisioner-cpuTaints-items-key-details')">key</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeProvisioner-cpuTaints-items-value-details')">value</b> | string |   |  |

</div>

<div id="property-gpupool-nodeManagerConfig-nodeProvisioner-gpuRequirements-details" class="nested-properties expanded">

### gpuRequirements (items) {#property-gpupool-nodeManagerConfig-nodeProvisioner-gpuRequirements-heading-items}

##### Properties {#properties-gpupool-nodeManagerConfig-nodeProvisioner-gpuRequirements-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeProvisioner-gpuRequirements-items-key-details')">key</b> | string |  <span class="enum-tag">node.kubernetes.io/instance-type</span> <span class="enum-tag">kubernetes.io/arch</span> <span class="enum-tag">kubernetes.io/os</span> <span class="enum-tag">topology.kubernetes.io/region</span> <span class="enum-tag">topology.kubernetes.io/zone</span> <span class="enum-tag">karpenter.sh/capacity-type</span> <span class="enum-tag">tensor-fusion.ai/gpu-vendor</span> <span class="enum-tag">tensor-fusion.ai/gpu-instance-family</span> <span class="enum-tag">tensor-fusion.ai/gpu-instance-size</span> |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeProvisioner-gpuRequirements-items-operator-details')">operator</b> | string |  <span class="enum-tag">In</span> <span class="enum-tag">Exists</span> <span class="enum-tag">DoesNotExist</span> <span class="enum-tag">Gt</span> <span class="enum-tag">Lt</span> | A node selector operator is the set of operators that can be used in<br />a node selector requirement. Default: `In` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeProvisioner-gpuRequirements-items-values-details')">values</b> | array |   |  |

</div>

<div id="property-gpupool-nodeManagerConfig-nodeProvisioner-gpuTaints-details" class="nested-properties expanded">

### gpuTaints (items) {#property-gpupool-nodeManagerConfig-nodeProvisioner-gpuTaints-heading-items}

##### Properties {#properties-gpupool-nodeManagerConfig-nodeProvisioner-gpuTaints-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeProvisioner-gpuTaints-items-effect-details')">effect</b> | string |  <span class="enum-tag">NoSchedule</span> <span class="enum-tag">NoExecute</span> <span class="enum-tag">PreferNoSchedule</span> |  Default: `NoSchedule` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeProvisioner-gpuTaints-items-key-details')">key</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeProvisioner-gpuTaints-items-value-details')">value</b> | string |   |  |

</div>

<div id="property-gpupool-nodeManagerConfig-nodeProvisioner-karpenterNodeClassRef-details" class="nested-properties expanded">

### karpenterNodeClassRef {#property-gpupool-nodeManagerConfig-nodeProvisioner-karpenterNodeClassRef-heading}

Karpenter NodeClass name

##### Properties {#properties-gpupool-nodeManagerConfig-nodeProvisioner-karpenterNodeClassRef}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeProvisioner-karpenterNodeClassRef-group-details')">group</b><span class="required-tag"></span> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeProvisioner-karpenterNodeClassRef-kind-details')">kind</b><span class="required-tag"></span> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeProvisioner-karpenterNodeClassRef-name-details')">name</b><span class="required-tag"></span> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeProvisioner-karpenterNodeClassRef-version-details')">version</b><span class="required-tag"></span> | string |   |  |

</div>

</div>

<div id="property-gpupool-nodeManagerConfig-nodeSelector-details" class="nested-properties expanded">

### nodeSelector {#property-gpupool-nodeManagerConfig-nodeSelector-heading}

A node selector represents the union of the results of one or more label queries<br />over a set of nodes; that is, it represents the OR of the selectors represented<br />by the node selector terms.

#### Properties {#properties-gpupool-nodeManagerConfig-nodeSelector}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeSelector-nodeSelectorTerms-details')">nodeSelectorTerms</b><span class="required-tag"></span> <span id="property-gpupool-nodeManagerConfig-nodeSelector-nodeSelectorTerms" class="expandable-property" data-uid="property-gpupool-nodeManagerConfig-nodeSelector-nodeSelectorTerms" @click="toggleExpand('property-gpupool-nodeManagerConfig-nodeSelector-nodeSelectorTerms-details')">↓</span> | array |   | Required. A list of node selector terms. The terms are ORed. |

<div id="property-gpupool-nodeManagerConfig-nodeSelector-nodeSelectorTerms-details" class="nested-properties expanded">

### nodeSelectorTerms (items) {#property-gpupool-nodeManagerConfig-nodeSelector-nodeSelectorTerms-heading-items}

Required. A list of node selector terms. The terms are ORed.

##### Properties {#properties-gpupool-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items-matchExpressions-details')">matchExpressions</b> <span id="property-gpupool-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items-matchExpressions" class="expandable-property" data-uid="property-gpupool-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items-matchExpressions" @click="toggleExpand('property-gpupool-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items-matchExpressions-details')">↓</span> | array |   | A list of node selector requirements by node&#39;s labels. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items-matchFields-details')">matchFields</b> <span id="property-gpupool-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items-matchFields" class="expandable-property" data-uid="property-gpupool-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items-matchFields" @click="toggleExpand('property-gpupool-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items-matchFields-details')">↓</span> | array |   | A list of node selector requirements by node&#39;s fields. |

<div id="property-gpupool-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items-matchExpressions-details" class="nested-properties expanded">

### matchExpressions (items) {#property-gpupool-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items-matchExpressions-heading-items}

A list of node selector requirements by node&#39;s labels.

###### Properties {#properties-gpupool-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items-matchExpressions-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items-matchExpressions-items-key-details')">key</b><span class="required-tag"></span> | string |   | The label key that the selector applies to. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items-matchExpressions-items-operator-details')">operator</b><span class="required-tag"></span> | string |   | Represents a key&#39;s relationship to a set of values.<br />Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items-matchExpressions-items-values-details')">values</b> | array |   | An array of string values. If the operator is In or NotIn,<br />the values array must be non-empty. If the operator is Exists or DoesNotExist,<br />the values array must be empty. If the operator is Gt or Lt, the values<br />array must have a single element, which will be interpreted as an integer.<br />This array is replaced during a strategic merge patch. |

</div>

<div id="property-gpupool-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items-matchFields-details" class="nested-properties expanded">

### matchFields (items) {#property-gpupool-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items-matchFields-heading-items}

A list of node selector requirements by node&#39;s fields.

###### Properties {#properties-gpupool-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items-matchFields-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items-matchFields-items-key-details')">key</b><span class="required-tag"></span> | string |   | The label key that the selector applies to. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items-matchFields-items-operator-details')">operator</b><span class="required-tag"></span> | string |   | Represents a key&#39;s relationship to a set of values.<br />Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items-matchFields-items-values-details')">values</b> | array |   | An array of string values. If the operator is In or NotIn,<br />the values array must be non-empty. If the operator is Exists or DoesNotExist,<br />the values array must be empty. If the operator is Gt or Lt, the values<br />array must have a single element, which will be interpreted as an integer.<br />This array is replaced during a strategic merge patch. |

</div>

</div>

</div>

</div>

<div id="property-gpupool-qosConfig-details" class="nested-properties expanded">

### qosConfig {#property-gpupool-qosConfig-heading}

Define different QoS and their price.

### Properties {#properties-gpupool-qosConfig}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-qosConfig-defaultQoS-details')">defaultQoS</b> | string |  <span class="enum-tag">low</span> <span class="enum-tag">medium</span> <span class="enum-tag">high</span> <span class="enum-tag">critical</span> |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-qosConfig-definitions-details')">definitions</b> <span id="property-gpupool-qosConfig-definitions" class="expandable-property" data-uid="property-gpupool-qosConfig-definitions" @click="toggleExpand('property-gpupool-qosConfig-definitions-details')">↓</span> | array |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-qosConfig-pricing-details')">pricing</b> <span id="property-gpupool-qosConfig-pricing" class="expandable-property" data-uid="property-gpupool-qosConfig-pricing" @click="toggleExpand('property-gpupool-qosConfig-pricing-details')">↓</span> | array |   |  |

<div id="property-gpupool-qosConfig-definitions-details" class="nested-properties expanded">

### definitions (items) {#property-gpupool-qosConfig-definitions-heading-items}

#### Properties {#properties-gpupool-qosConfig-definitions-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-qosConfig-definitions-items-description-details')">description</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-qosConfig-definitions-items-name-details')">name</b> | string |  <span class="enum-tag">low</span> <span class="enum-tag">medium</span> <span class="enum-tag">high</span> <span class="enum-tag">critical</span> |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-qosConfig-definitions-items-priority-details')">priority</b> | integer |   |  |

</div>

<div id="property-gpupool-qosConfig-pricing-details" class="nested-properties expanded">

### pricing (items) {#property-gpupool-qosConfig-pricing-heading-items}

#### Properties {#properties-gpupool-qosConfig-pricing-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-qosConfig-pricing-items-limitsOverRequests-details')">limitsOverRequests</b> | string |   | Default requests and limitsOverRequests are same, indicates normal on-demand serverless GPU usage, in hands-on lab low QoS case, limitsOverRequests should be lower, so that user can get burstable GPU resources with very low cost Default: `1` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-qosConfig-pricing-items-qos-details')">qos</b> | string |  <span class="enum-tag">low</span> <span class="enum-tag">medium</span> <span class="enum-tag">high</span> <span class="enum-tag">critical</span> |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-qosConfig-pricing-items-requests-details')">requests</b> <span id="property-gpupool-qosConfig-pricing-items-requests" class="expandable-property" data-uid="property-gpupool-qosConfig-pricing-items-requests" @click="toggleExpand('property-gpupool-qosConfig-pricing-items-requests-details')">↓</span> | object |   | The default pricing based on second level pricing from https://modal.com/pricing<br />with Tensor/CUDA Core : HBM = 2:1 |

<div id="property-gpupool-qosConfig-pricing-items-requests-details" class="nested-properties expanded">

### requests {#property-gpupool-qosConfig-pricing-items-requests-heading}

The default pricing based on second level pricing from https://modal.com/pricing<br />with Tensor/CUDA Core : HBM = 2:1

##### Properties {#properties-gpupool-qosConfig-pricing-items-requests}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-qosConfig-pricing-items-requests-perFP16TFlopsPerHour-details')">perFP16TFlopsPerHour</b> | string |   |  Default: `$0.0069228` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-qosConfig-pricing-items-requests-perGBOfVRAMPerHour-details')">perGBOfVRAMPerHour</b> | string |   |  Default: `$0.01548` |

</div>

</div>

</div>

## Status

GPUPoolStatus defines the observed state of GPUPool.

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-allocatedTFlopsPercent-details')">allocatedTFlopsPercent</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-allocatedVRAMPercent-details')">allocatedVRAMPercent</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-availableTFlops-details')">availableTFlops</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-availableVRAM-details')">availableVRAM</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-budgetExceeded-details')">budgetExceeded</b> | string |   | If the budget is exceeded, the set value in comma separated string to indicate which period caused the exceeding.<br />If this field is not empty, scheduler will not schedule new AI workloads and stop scaling-up check. Default: `` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-cluster-details')">cluster</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-componentStatus-details')">componentStatus</b><span class="required-tag"></span> <span id="property-gpupool-componentStatus" class="expandable-property" data-uid="property-gpupool-componentStatus" @click="toggleExpand('property-gpupool-componentStatus-details')">↓</span> | object |   | when updating any component version or config, pool controller will perform rolling update.<br />the status will be updated periodically, default to 5s, progress will be 0-100.<br />when the progress is 100, the component version or config is fully updated. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-conditions-details')">conditions</b> <span id="property-gpupool-conditions" class="expandable-property" data-uid="property-gpupool-conditions" @click="toggleExpand('property-gpupool-conditions-details')">↓</span> | array |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-lastCompactionTime-details')">lastCompactionTime</b> | string&lt;date-time&gt; |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-notReadyNodes-details')">notReadyNodes</b><span class="required-tag"></span> | integer&lt;int32&gt; |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-phase-details')">phase</b><span class="required-tag"></span> | string |  <span class="enum-tag">Pending</span> <span class="enum-tag">Running</span> <span class="enum-tag">Updating</span> <span class="enum-tag">Destroying</span> <span class="enum-tag">Unknown</span> |  Default: `Pending` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-potentialSavingsPerMonth-details')">potentialSavingsPerMonth</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-provisioningPhase-details')">provisioningPhase</b> | string |  <span class="enum-tag">None</span> <span class="enum-tag">Initializing</span> <span class="enum-tag">Provisioning</span> <span class="enum-tag">Completed</span> |  Default: `None` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-readyNodes-details')">readyNodes</b><span class="required-tag"></span> | integer&lt;int32&gt; |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-runningAppsCnt-details')">runningAppsCnt</b> | integer&lt;int32&gt; |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-savedCostsPerMonth-details')">savedCostsPerMonth</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-totalGPUs-details')">totalGPUs</b> | integer&lt;int32&gt; |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-totalNodes-details')">totalNodes</b> | integer&lt;int32&gt; |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-totalTFlops-details')">totalTFlops</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-totalVRAM-details')">totalVRAM</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-utilizedTFlopsPercent-details')">utilizedTFlopsPercent</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-utilizedVRAMPercent-details')">utilizedVRAMPercent</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-virtualAvailableTFlops-details')">virtualAvailableTFlops</b> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-virtualAvailableVRAM-details')">virtualAvailableVRAM</b> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-virtualTFlops-details')">virtualTFlops</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-virtualVRAM-details')">virtualVRAM</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |

<div id="property-gpupool-componentStatus-details" class="nested-properties expanded">

### componentStatus {#property-gpupool-componentStatus-heading}

when updating any component version or config, pool controller will perform rolling update.<br />the status will be updated periodically, default to 5s, progress will be 0-100.<br />when the progress is 100, the component version or config is fully updated.

### Properties {#properties-gpupool-componentStatus}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-componentStatus-client-details')">client</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-componentStatus-clientConfigSynced-details')">clientConfigSynced</b> | boolean |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-componentStatus-clientUpdateProgress-details')">clientUpdateProgress</b> | integer&lt;int32&gt; |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-componentStatus-hypervisor-details')">hypervisor</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-componentStatus-hypervisorConfigSynced-details')">hypervisorConfigSynced</b> | boolean |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-componentStatus-hypervisorUpdateProgress-details')">hypervisorUpdateProgress</b> | integer&lt;int32&gt; |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-componentStatus-worker-details')">worker</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-componentStatus-workerConfigSynced-details')">workerConfigSynced</b> | boolean |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-componentStatus-workerUpdateProgress-details')">workerUpdateProgress</b> | integer&lt;int32&gt; |   |  |

</div>

<div id="property-gpupool-conditions-details" class="nested-properties expanded">

### conditions (items) {#property-gpupool-conditions-heading-items}

### Properties {#properties-gpupool-conditions-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-conditions-items-lastTransitionTime-details')">lastTransitionTime</b><span class="required-tag"></span> | string&lt;date-time&gt; |   | lastTransitionTime is the last time the condition transitioned from one status to another.<br />This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-conditions-items-message-details')">message</b><span class="required-tag"></span> | string | <span class="constraint-tag">maxLength: 32768</span>  | message is a human readable message indicating details about the transition.<br />This may be an empty string. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-conditions-items-observedGeneration-details')">observedGeneration</b> | integer&lt;int64&gt; | <span class="constraint-tag">min: 0</span>  | observedGeneration represents the .metadata.generation that the condition was set based upon.<br />For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date<br />with respect to the current state of the instance. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-conditions-items-reason-details')">reason</b><span class="required-tag"></span> | string | <span class="constraint-tag">minLength: 1</span> <span class="constraint-tag">maxLength: 1024</span> <span class="constraint-tag" title="^[A-Za-z]([A-Za-z0-9&#95;,:]&#42;[A-Za-z0-9&#95;])?$">pattern: Regex</span>  | reason contains a programmatic identifier indicating the reason for the condition&#39;s last transition.<br />Producers of specific condition types may define expected values and meanings for this field,<br />and whether the values are considered a guaranteed API.<br />The value should be a CamelCase string.<br />This field may not be empty. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-conditions-items-status-details')">status</b><span class="required-tag"></span> | string |  <span class="enum-tag">True</span> <span class="enum-tag">False</span> <span class="enum-tag">Unknown</span> | status of the condition, one of True, False, Unknown. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpupool-conditions-items-type-details')">type</b><span class="required-tag"></span> | string | <span class="constraint-tag">maxLength: 316</span> <span class="constraint-tag" title="^([a-z0-9]([-a-z0-9]&#42;[a-z0-9])?(\.[a-z0-9]([-a-z0-9]&#42;[a-z0-9])?)&#42;/)?(([A-Za-z0-9][-A-Za-z0-9&#95;.]&#42;)?[A-Za-z0-9])$">pattern: Regex</span>  | type of condition in CamelCase or in foo.example.com/CamelCase. |

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
