---
pageClass: home
---
# TensorFusionCluster

TensorFusionCluster is the Schema for the tensorfusionclusters API.

<div class="crd-navigation">
  <div class="crd-search">
    <input type="text" id="tensor-fusion-cluster-property-search" placeholder="Search properties..." @input="filterProperties('tensor-fusion-cluster')">
  </div>
  <div class="crd-actions">
    <button @click="expandAll('tensor-fusion-cluster')">Expand All</button>
    <button @click="collapseAll('tensor-fusion-cluster')">Collapse All</button>
  </div>
</div>

## Kubernetes Resource Information

| Field | Value |
|-------|-------|
| API Version | tensor-fusion.ai/v1 |
| Kind | TensorFusionCluster |
| Scope | Cluster |

## Table of Contents

- [API Information](#api-information)
- [Spec](#spec)
- [Status](#status)
- [Example](#example)

## Spec

TensorFusionClusterSpec defines the desired state of TensorFusionCluster.

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-computingVendor-details')">computingVendor</b> <span id="property-tensor-fusion-cluster-computingVendor" class="expandable-property" data-uid="property-tensor-fusion-cluster-computingVendor" @click="toggleExpand('property-tensor-fusion-cluster-computingVendor-details')">↓</span> | object |   | ComputingVendorConfig defines the Cloud vendor connection such as AWS, GCP, Azure etc. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-dataPipelines-details')">dataPipelines</b> <span id="property-tensor-fusion-cluster-dataPipelines" class="expandable-property" data-uid="property-tensor-fusion-cluster-dataPipelines" @click="toggleExpand('property-tensor-fusion-cluster-dataPipelines-details')">↓</span> | object |   | DataPipelinesConfig defines the aggregation jobs that can make statistics on the data and then report to cloud if configured. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-details')">gpuPools</b> <span id="property-tensor-fusion-cluster-gpuPools" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-details')">↓</span> | array |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-storageVendor-details')">storageVendor</b> <span id="property-tensor-fusion-cluster-storageVendor" class="expandable-property" data-uid="property-tensor-fusion-cluster-storageVendor" @click="toggleExpand('property-tensor-fusion-cluster-storageVendor-details')">↓</span> | object |   | StorageVendorConfig defines Postgres database with extensions for timeseries storage and other resource aggregation results, system events and diagnostics reports etc. |

<div id="property-tensor-fusion-cluster-computingVendor-details" class="nested-properties expanded">

### computingVendor {#property-tensor-fusion-cluster-computingVendor-heading}

ComputingVendorConfig defines the Cloud vendor connection such as AWS, GCP, Azure etc.

### Properties {#properties-tensor-fusion-cluster-computingVendor}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-computingVendor-authType-details')">authType</b> | string |  <span class="enum-tag">accessKey</span> <span class="enum-tag">serviceAccountRole</span> |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-computingVendor-enable-details')">enable</b> | boolean |   |  Default: `true` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-computingVendor-name-details')">name</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-computingVendor-params-details')">params</b> <span id="property-tensor-fusion-cluster-computingVendor-params" class="expandable-property" data-uid="property-tensor-fusion-cluster-computingVendor-params" @click="toggleExpand('property-tensor-fusion-cluster-computingVendor-params-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-computingVendor-type-details')">type</b> | string |  <span class="enum-tag">aws</span> <span class="enum-tag">lambda-labs</span> <span class="enum-tag">gcp</span> <span class="enum-tag">azure</span> <span class="enum-tag">oracle-oci</span> <span class="enum-tag">ibm</span> <span class="enum-tag">openshift</span> <span class="enum-tag">vultr</span> <span class="enum-tag">together-ai</span> <span class="enum-tag">alibaba</span> <span class="enum-tag">nvidia</span> <span class="enum-tag">tencent</span> <span class="enum-tag">runpod</span> <span class="enum-tag">mock</span> | support popular cloud providers |

<div id="property-tensor-fusion-cluster-computingVendor-params-details" class="nested-properties expanded">

### params {#property-tensor-fusion-cluster-computingVendor-params-heading}

#### Properties {#properties-tensor-fusion-cluster-computingVendor-params}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-computingVendor-params-accessKeyPath-details')">accessKeyPath</b> | string |   | the secret of access key and secret key or config file, must be mounted as file path |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-computingVendor-params-configFile-details')">configFile</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-computingVendor-params-defaultRegion-details')">defaultRegion</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-computingVendor-params-extraParams-details')">extraParams</b> | object |   | User can set extra cloud vendor params, eg.<br />in ali cloud:&quot; spotPriceLimit, spotDuration, spotInterruptionBehavior, systemDiskCategory, systemDiskSize, dataDiskPerformanceLevel<br />in aws cloud: TODO |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-computingVendor-params-iamRole-details')">iamRole</b> | string |   | preferred IAM role since it&#39;s more secure |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-computingVendor-params-secretKeyPath-details')">secretKeyPath</b> | string |   |  |

</div>

</div>

<div id="property-tensor-fusion-cluster-dataPipelines-details" class="nested-properties expanded">

### dataPipelines {#property-tensor-fusion-cluster-dataPipelines-heading}

DataPipelinesConfig defines the aggregation jobs that can make statistics on the data and then report to cloud if configured.

### Properties {#properties-tensor-fusion-cluster-dataPipelines}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-dataPipelines-resources-details')">resources</b> <span id="property-tensor-fusion-cluster-dataPipelines-resources" class="expandable-property" data-uid="property-tensor-fusion-cluster-dataPipelines-resources" @click="toggleExpand('property-tensor-fusion-cluster-dataPipelines-resources-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-dataPipelines-timeseries-details')">timeseries</b> <span id="property-tensor-fusion-cluster-dataPipelines-timeseries" class="expandable-property" data-uid="property-tensor-fusion-cluster-dataPipelines-timeseries" @click="toggleExpand('property-tensor-fusion-cluster-dataPipelines-timeseries-details')">↓</span> | object |   |  |

<div id="property-tensor-fusion-cluster-dataPipelines-resources-details" class="nested-properties expanded">

### resources {#property-tensor-fusion-cluster-dataPipelines-resources-heading}

#### Properties {#properties-tensor-fusion-cluster-dataPipelines-resources}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-dataPipelines-resources-syncPeriod-details')">syncPeriod</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-dataPipelines-resources-syncToCloud-details')">syncToCloud</b> | boolean |   |  |

</div>

<div id="property-tensor-fusion-cluster-dataPipelines-timeseries-details" class="nested-properties expanded">

### timeseries {#property-tensor-fusion-cluster-dataPipelines-timeseries-heading}

#### Properties {#properties-tensor-fusion-cluster-dataPipelines-timeseries}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-dataPipelines-timeseries-aggregationDataRetention-details')">aggregationDataRetention</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-dataPipelines-timeseries-aggregationPeriods-details')">aggregationPeriods</b> | array |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-dataPipelines-timeseries-rawDataRetention-details')">rawDataRetention</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-dataPipelines-timeseries-remoteWrite-details')">remoteWrite</b> <span id="property-tensor-fusion-cluster-dataPipelines-timeseries-remoteWrite" class="expandable-property" data-uid="property-tensor-fusion-cluster-dataPipelines-timeseries-remoteWrite" @click="toggleExpand('property-tensor-fusion-cluster-dataPipelines-timeseries-remoteWrite-details')">↓</span> | object |   | RemoteWriteConfig represents the configuration for remote write. |

<div id="property-tensor-fusion-cluster-dataPipelines-timeseries-remoteWrite-details" class="nested-properties expanded">

### remoteWrite {#property-tensor-fusion-cluster-dataPipelines-timeseries-remoteWrite-heading}

RemoteWriteConfig represents the configuration for remote write.

##### Properties {#properties-tensor-fusion-cluster-dataPipelines-timeseries-remoteWrite}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-dataPipelines-timeseries-remoteWrite-connection-details')">connection</b> <span id="property-tensor-fusion-cluster-dataPipelines-timeseries-remoteWrite-connection" class="expandable-property" data-uid="property-tensor-fusion-cluster-dataPipelines-timeseries-remoteWrite-connection" @click="toggleExpand('property-tensor-fusion-cluster-dataPipelines-timeseries-remoteWrite-connection-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-dataPipelines-timeseries-remoteWrite-metrics-details')">metrics</b> | array |   |  |

<div id="property-tensor-fusion-cluster-dataPipelines-timeseries-remoteWrite-connection-details" class="nested-properties expanded">

### connection {#property-tensor-fusion-cluster-dataPipelines-timeseries-remoteWrite-connection-heading}

###### Properties {#properties-tensor-fusion-cluster-dataPipelines-timeseries-remoteWrite-connection}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-dataPipelines-timeseries-remoteWrite-connection-type-details')">type</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-dataPipelines-timeseries-remoteWrite-connection-url-details')">url</b> | string |   |  |

</div>

</div>

</div>

</div>

<div id="property-tensor-fusion-cluster-gpuPools-details" class="nested-properties expanded">

### gpuPools (items) {#property-tensor-fusion-cluster-gpuPools-heading-items}

### Properties {#properties-tensor-fusion-cluster-gpuPools-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-name-details')">name</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-details')">specTemplate</b><span class="required-tag"></span> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-details')">↓</span> | object |   | GPUPoolSpec defines the desired state of GPUPool. |

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-details" class="nested-properties expanded">

### specTemplate {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-heading}

GPUPoolSpec defines the desired state of GPUPool.

#### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-details')">capacityConfig</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig-details')">componentConfig</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig-details')">↓</span> | object |   | Customize system components for seamless onboarding. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-details')">nodeManagerConfig</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-observabilityConfig-details')">observabilityConfig</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-observabilityConfig" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-observabilityConfig" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-observabilityConfig-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-qosConfig-details')">qosConfig</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-qosConfig" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-qosConfig" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-qosConfig-details')">↓</span> | object |   | Define different QoS and their price. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-details')">schedulingConfig</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-details')">↓</span> | object |   | Place the workload to right nodes and scale smart. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfigTemplate-details')">schedulingConfigTemplate</b> | string |   |  |

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-details" class="nested-properties expanded">

### capacityConfig {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-heading}

##### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-maxResources-details')">maxResources</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-maxResources" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-maxResources" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-maxResources-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-minResources-details')">minResources</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-minResources" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-minResources" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-minResources-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-oversubscription-details')">oversubscription</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-oversubscription" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-oversubscription" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-oversubscription-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-warmResources-details')">warmResources</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-warmResources" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-warmResources" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-warmResources-details')">↓</span> | object |   |  |

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-maxResources-details" class="nested-properties expanded">

### maxResources {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-maxResources-heading}

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-maxResources}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-maxResources-cpu-details')">cpu</b> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  | CPU/Memory is only available when CloudVendor connection is enabled |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-maxResources-memory-details')">memory</b> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-maxResources-tflops-details')">tflops</b> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-maxResources-vram-details')">vram</b> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |

</div>

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-minResources-details" class="nested-properties expanded">

### minResources {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-minResources-heading}

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-minResources}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-minResources-cpu-details')">cpu</b> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  | CPU/Memory is only available when CloudVendor connection is enabled |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-minResources-memory-details')">memory</b> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-minResources-tflops-details')">tflops</b> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-minResources-vram-details')">vram</b> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |

</div>

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-oversubscription-details" class="nested-properties expanded">

### oversubscription {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-oversubscription-heading}

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-oversubscription}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-oversubscription-tflopsOversellRatio-details')">tflopsOversellRatio</b> | integer&lt;int32&gt; | <span class="constraint-tag">min: 100</span> <span class="constraint-tag">max: 100000</span>  | The multi of TFlops to oversell, default to 500%, indicates 5 times oversell Default: `500` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-oversubscription-vramExpandToHostDisk-details')">vramExpandToHostDisk</b> | integer&lt;int32&gt; | <span class="constraint-tag">min: 0</span> <span class="constraint-tag">max: 100</span>  | the percentage of Host Disk appending to GPU VRAM, default to 70% Default: `70` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-oversubscription-vramExpandToHostMem-details')">vramExpandToHostMem</b> | integer&lt;int32&gt; | <span class="constraint-tag">min: 0</span> <span class="constraint-tag">max: 100</span>  | the percentage of Host RAM appending to GPU VRAM, default to 50% Default: `50` |

</div>

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-warmResources-details" class="nested-properties expanded">

### warmResources {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-warmResources-heading}

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-warmResources}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-warmResources-cpu-details')">cpu</b> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  | CPU/Memory is only available when CloudVendor connection is enabled |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-warmResources-memory-details')">memory</b> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-warmResources-tflops-details')">tflops</b> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-capacityConfig-warmResources-vram-details')">vram</b> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |

</div>

</div>

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig-details" class="nested-properties expanded">

### componentConfig {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig-heading}

Customize system components for seamless onboarding.

##### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig-client-details')">client</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig-client" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig-client" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig-client-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig-hypervisor-details')">hypervisor</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig-hypervisor" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig-hypervisor" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig-hypervisor-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig-nodeDiscovery-details')">nodeDiscovery</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig-nodeDiscovery" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig-nodeDiscovery" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig-nodeDiscovery-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig-worker-details')">worker</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig-worker" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig-worker" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig-worker-details')">↓</span> | object |   |  |

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig-client-details" class="nested-properties expanded">

### client {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig-client-heading}

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig-client}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig-client-operatorEndpoint-details')">operatorEndpoint</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig-client-patchToContainer-details')">patchToContainer</b> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig-client-patchToPod-details')">patchToPod</b> | object |   |  |

</div>

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig-hypervisor-details" class="nested-properties expanded">

### hypervisor {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig-hypervisor-heading}

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig-hypervisor}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig-hypervisor-podTemplate-details')">podTemplate</b> | object |   |  |

</div>

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig-nodeDiscovery-details" class="nested-properties expanded">

### nodeDiscovery {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig-nodeDiscovery-heading}

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig-nodeDiscovery}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig-nodeDiscovery-podTemplate-details')">podTemplate</b> | object |   |  |

</div>

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig-worker-details" class="nested-properties expanded">

### worker {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig-worker-heading}

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig-worker}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-componentConfig-worker-podTemplate-details')">podTemplate</b> | object |   |  |

</div>

</div>

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-details" class="nested-properties expanded">

### nodeManagerConfig {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-heading}

##### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeCompaction-details')">nodeCompaction</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeCompaction" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeCompaction" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeCompaction-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodePoolRollingUpdatePolicy-details')">nodePoolRollingUpdatePolicy</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodePoolRollingUpdatePolicy" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodePoolRollingUpdatePolicy" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodePoolRollingUpdatePolicy-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-details')">nodeProvisioner</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-details')">↓</span> | object |   | NodeProvisioner or NodeSelector, they are exclusive.<br />NodeSelector is for existing GPUs, NodeProvisioner is for Karpenter-like auto management. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeSelector-details')">nodeSelector</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeSelector" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeSelector" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeSelector-details')">↓</span> | object |   | A node selector represents the union of the results of one or more label queries<br />over a set of nodes; that is, it represents the OR of the selectors represented<br />by the node selector terms. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-provisioningMode-details')">provisioningMode</b> | string |  <span class="enum-tag">Provisioned</span> <span class="enum-tag">AutoSelect</span> |  Default: `AutoSelect` |

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeCompaction-details" class="nested-properties expanded">

### nodeCompaction {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeCompaction-heading}

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeCompaction}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeCompaction-period-details')">period</b> | string |   |  Default: `5m` |

</div>

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodePoolRollingUpdatePolicy-details" class="nested-properties expanded">

### nodePoolRollingUpdatePolicy {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodePoolRollingUpdatePolicy-heading}

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodePoolRollingUpdatePolicy}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodePoolRollingUpdatePolicy-autoUpdate-details')">autoUpdate</b> | boolean |   |  Default: `true` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodePoolRollingUpdatePolicy-batchInterval-details')">batchInterval</b> | string |   |  Default: `10m` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodePoolRollingUpdatePolicy-batchPercentage-details')">batchPercentage</b> | integer&lt;int32&gt; | <span class="constraint-tag">min: 0</span> <span class="constraint-tag">max: 100</span>  |  Default: `100` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodePoolRollingUpdatePolicy-maintenanceWindow-details')">maintenanceWindow</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodePoolRollingUpdatePolicy-maintenanceWindow" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodePoolRollingUpdatePolicy-maintenanceWindow" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodePoolRollingUpdatePolicy-maintenanceWindow-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodePoolRollingUpdatePolicy-maxDuration-details')">maxDuration</b> | string |   |  Default: `10m` |

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodePoolRollingUpdatePolicy-maintenanceWindow-details" class="nested-properties expanded">

### maintenanceWindow {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodePoolRollingUpdatePolicy-maintenanceWindow-heading}

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodePoolRollingUpdatePolicy-maintenanceWindow}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodePoolRollingUpdatePolicy-maintenanceWindow-includes-details')">includes</b> | array |   | crontab syntax. |

</div>

</div>

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-details" class="nested-properties expanded">

### nodeProvisioner {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-heading}

NodeProvisioner or NodeSelector, they are exclusive.<br />NodeSelector is for existing GPUs, NodeProvisioner is for Karpenter-like auto management.

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-budget-details')">budget</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-budget" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-budget" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-budget-details')">↓</span> | object |   | NodeProvisioner will start an virtual billing based on public pricing or customized pricing, if the VM&#39;s costs exceeded any budget constraints, the new VM will not be created, and alerts will be generated |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-cpuNodeLabels-details')">cpuNodeLabels</b> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-cpuRequirements-details')">cpuRequirements</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-cpuRequirements" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-cpuRequirements" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-cpuRequirements-details')">↓</span> | array |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-cpuTaints-details')">cpuTaints</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-cpuTaints" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-cpuTaints" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-cpuTaints-details')">↓</span> | array |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-gpuNodeLabels-details')">gpuNodeLabels</b> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-gpuRequirements-details')">gpuRequirements</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-gpuRequirements" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-gpuRequirements" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-gpuRequirements-details')">↓</span> | array |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-gpuTaints-details')">gpuTaints</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-gpuTaints" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-gpuTaints" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-gpuTaints-details')">↓</span> | array |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-mode-details')">mode</b> | string |  <span class="enum-tag">Native</span> <span class="enum-tag">Karpenter</span> | Mode could be Karpenter or Native, for Karpenter mode, node provisioner will start dummy nodes to provision and warmup GPU nodes, do nothing for CPU nodes, for Native mode, provisioner will create or compact GPU &amp; CPU nodes based on current pods Default: `Native` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-nodeClass-details')">nodeClass</b> | string |   |  |

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-budget-details" class="nested-properties expanded">

### budget {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-budget-heading}

NodeProvisioner will start an virtual billing based on public pricing or customized pricing, if the VM&#39;s costs exceeded any budget constraints, the new VM will not be created, and alerts will be generated

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-budget}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-budget-budgetExceedStrategy-details')">budgetExceedStrategy</b> | string |  <span class="enum-tag">AlertOnly</span> <span class="enum-tag">AlertAndTerminateVM</span> |  Default: `AlertOnly` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-budget-budgetPerDay-details')">budgetPerDay</b> | string |   |  Default: `100` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-budget-budgetPerMonth-details')">budgetPerMonth</b> | string |   |  Default: `1000` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-budget-budgetPerQuarter-details')">budgetPerQuarter</b> | string |   |  Default: `3000` |

</div>

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-cpuRequirements-details" class="nested-properties expanded">

### cpuRequirements (items) {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-cpuRequirements-heading-items}

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-cpuRequirements-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-cpuRequirements-items-key-details')">key</b> | string |  <span class="enum-tag">node.kubernetes.io/instance-type</span> <span class="enum-tag">kubernetes.io/arch</span> <span class="enum-tag">kubernetes.io/os</span> <span class="enum-tag">topology.kubernetes.io/region</span> <span class="enum-tag">topology.kubernetes.io/zone</span> <span class="enum-tag">karpenter.sh/capacity-type</span> <span class="enum-tag">tensor-fusion.ai/gpu-arch</span> <span class="enum-tag">tensor-fusion.ai/gpu-instance-family</span> <span class="enum-tag">tensor-fusion.ai/gpu-instance-size</span> |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-cpuRequirements-items-operator-details')">operator</b> | string |  <span class="enum-tag">In</span> <span class="enum-tag">Exists</span> <span class="enum-tag">DoesNotExist</span> <span class="enum-tag">Gt</span> <span class="enum-tag">Lt</span> | A node selector operator is the set of operators that can be used in<br />a node selector requirement. Default: `In` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-cpuRequirements-items-values-details')">values</b> | array |   |  |

</div>

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-cpuTaints-details" class="nested-properties expanded">

### cpuTaints (items) {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-cpuTaints-heading-items}

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-cpuTaints-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-cpuTaints-items-effect-details')">effect</b> | string |  <span class="enum-tag">NoSchedule</span> <span class="enum-tag">NoExecute</span> <span class="enum-tag">PreferNoSchedule</span> |  Default: `NoSchedule` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-cpuTaints-items-key-details')">key</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-cpuTaints-items-value-details')">value</b> | string |   |  |

</div>

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-gpuRequirements-details" class="nested-properties expanded">

### gpuRequirements (items) {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-gpuRequirements-heading-items}

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-gpuRequirements-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-gpuRequirements-items-key-details')">key</b> | string |  <span class="enum-tag">node.kubernetes.io/instance-type</span> <span class="enum-tag">kubernetes.io/arch</span> <span class="enum-tag">kubernetes.io/os</span> <span class="enum-tag">topology.kubernetes.io/region</span> <span class="enum-tag">topology.kubernetes.io/zone</span> <span class="enum-tag">karpenter.sh/capacity-type</span> <span class="enum-tag">tensor-fusion.ai/gpu-arch</span> <span class="enum-tag">tensor-fusion.ai/gpu-instance-family</span> <span class="enum-tag">tensor-fusion.ai/gpu-instance-size</span> |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-gpuRequirements-items-operator-details')">operator</b> | string |  <span class="enum-tag">In</span> <span class="enum-tag">Exists</span> <span class="enum-tag">DoesNotExist</span> <span class="enum-tag">Gt</span> <span class="enum-tag">Lt</span> | A node selector operator is the set of operators that can be used in<br />a node selector requirement. Default: `In` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-gpuRequirements-items-values-details')">values</b> | array |   |  |

</div>

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-gpuTaints-details" class="nested-properties expanded">

### gpuTaints (items) {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-gpuTaints-heading-items}

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-gpuTaints-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-gpuTaints-items-effect-details')">effect</b> | string |  <span class="enum-tag">NoSchedule</span> <span class="enum-tag">NoExecute</span> <span class="enum-tag">PreferNoSchedule</span> |  Default: `NoSchedule` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-gpuTaints-items-key-details')">key</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeProvisioner-gpuTaints-items-value-details')">value</b> | string |   |  |

</div>

</div>

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeSelector-details" class="nested-properties expanded">

### nodeSelector {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeSelector-heading}

A node selector represents the union of the results of one or more label queries<br />over a set of nodes; that is, it represents the OR of the selectors represented<br />by the node selector terms.

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeSelector}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeSelector-nodeSelectorTerms-details')">nodeSelectorTerms</b><span class="required-tag"></span> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeSelector-nodeSelectorTerms" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeSelector-nodeSelectorTerms" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeSelector-nodeSelectorTerms-details')">↓</span> | array |   | Required. A list of node selector terms. The terms are ORed. |

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeSelector-nodeSelectorTerms-details" class="nested-properties expanded">

### nodeSelectorTerms (items) {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeSelector-nodeSelectorTerms-heading-items}

Required. A list of node selector terms. The terms are ORed.

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items-matchExpressions-details')">matchExpressions</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items-matchExpressions" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items-matchExpressions" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items-matchExpressions-details')">↓</span> | array |   | A list of node selector requirements by node&#39;s labels. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items-matchFields-details')">matchFields</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items-matchFields" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items-matchFields" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items-matchFields-details')">↓</span> | array |   | A list of node selector requirements by node&#39;s fields. |

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items-matchExpressions-details" class="nested-properties expanded">

### matchExpressions (items) {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items-matchExpressions-heading-items}

A list of node selector requirements by node&#39;s labels.

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items-matchExpressions-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items-matchExpressions-items-key-details')">key</b><span class="required-tag"></span> | string |   | The label key that the selector applies to. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items-matchExpressions-items-operator-details')">operator</b><span class="required-tag"></span> | string |   | Represents a key&#39;s relationship to a set of values.<br />Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items-matchExpressions-items-values-details')">values</b> | array |   | An array of string values. If the operator is In or NotIn,<br />the values array must be non-empty. If the operator is Exists or DoesNotExist,<br />the values array must be empty. If the operator is Gt or Lt, the values<br />array must have a single element, which will be interpreted as an integer.<br />This array is replaced during a strategic merge patch. |

</div>

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items-matchFields-details" class="nested-properties expanded">

### matchFields (items) {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items-matchFields-heading-items}

A list of node selector requirements by node&#39;s fields.

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items-matchFields-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items-matchFields-items-key-details')">key</b><span class="required-tag"></span> | string |   | The label key that the selector applies to. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items-matchFields-items-operator-details')">operator</b><span class="required-tag"></span> | string |   | Represents a key&#39;s relationship to a set of values.<br />Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-nodeManagerConfig-nodeSelector-nodeSelectorTerms-items-matchFields-items-values-details')">values</b> | array |   | An array of string values. If the operator is In or NotIn,<br />the values array must be non-empty. If the operator is Exists or DoesNotExist,<br />the values array must be empty. If the operator is Gt or Lt, the values<br />array must have a single element, which will be interpreted as an integer.<br />This array is replaced during a strategic merge patch. |

</div>

</div>

</div>

</div>

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-observabilityConfig-details" class="nested-properties expanded">

### observabilityConfig {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-observabilityConfig-heading}

##### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-observabilityConfig}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-observabilityConfig-alert-details')">alert</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-observabilityConfig-alert" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-observabilityConfig-alert" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-observabilityConfig-alert-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-observabilityConfig-monitor-details')">monitor</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-observabilityConfig-monitor" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-observabilityConfig-monitor" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-observabilityConfig-monitor-details')">↓</span> | object |   |  |

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-observabilityConfig-alert-details" class="nested-properties expanded">

### alert {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-observabilityConfig-alert-heading}

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-observabilityConfig-alert}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-observabilityConfig-alert-expression-details')">expression</b> | object |   |  |

</div>

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-observabilityConfig-monitor-details" class="nested-properties expanded">

### monitor {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-observabilityConfig-monitor-heading}

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-observabilityConfig-monitor}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-observabilityConfig-monitor-interval-details')">interval</b> | string |   |  |

</div>

</div>

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-qosConfig-details" class="nested-properties expanded">

### qosConfig {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-qosConfig-heading}

Define different QoS and their price.

##### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-qosConfig}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-qosConfig-defaultQoS-details')">defaultQoS</b> | string |  <span class="enum-tag">low</span> <span class="enum-tag">medium</span> <span class="enum-tag">high</span> <span class="enum-tag">critical</span> |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-qosConfig-definitions-details')">definitions</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-qosConfig-definitions" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-qosConfig-definitions" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-qosConfig-definitions-details')">↓</span> | array |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-qosConfig-pricing-details')">pricing</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-qosConfig-pricing" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-qosConfig-pricing" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-qosConfig-pricing-details')">↓</span> | array |   |  |

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-qosConfig-definitions-details" class="nested-properties expanded">

### definitions (items) {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-qosConfig-definitions-heading-items}

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-qosConfig-definitions-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-qosConfig-definitions-items-description-details')">description</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-qosConfig-definitions-items-name-details')">name</b> | string |  <span class="enum-tag">low</span> <span class="enum-tag">medium</span> <span class="enum-tag">high</span> <span class="enum-tag">critical</span> |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-qosConfig-definitions-items-priority-details')">priority</b> | integer |   |  |

</div>

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-qosConfig-pricing-details" class="nested-properties expanded">

### pricing (items) {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-qosConfig-pricing-heading-items}

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-qosConfig-pricing-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-qosConfig-pricing-items-limitsOverRequests-details')">limitsOverRequests</b> | string |   | Default requests and limitsOverRequests are same, indicates normal on-demand serverless GPU usage, in hands-on lab low QoS case, limitsOverRequests should be cheaper, for example Low QoS, ratio should be 0.5 Default: `1` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-qosConfig-pricing-items-qos-details')">qos</b> | string |  <span class="enum-tag">low</span> <span class="enum-tag">medium</span> <span class="enum-tag">high</span> <span class="enum-tag">critical</span> |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-qosConfig-pricing-items-requests-details')">requests</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-qosConfig-pricing-items-requests" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-qosConfig-pricing-items-requests" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-qosConfig-pricing-items-requests-details')">↓</span> | object |   | The default pricing based on second level pricing from https://modal.com/pricing<br />with Tensor/CUDA Core : HBM = 2:1 |

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-qosConfig-pricing-items-requests-details" class="nested-properties expanded">

### requests {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-qosConfig-pricing-items-requests-heading}

The default pricing based on second level pricing from https://modal.com/pricing<br />with Tensor/CUDA Core : HBM = 2:1

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-qosConfig-pricing-items-requests}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-qosConfig-pricing-items-requests-perFP16TFlopsPerHour-details')">perFP16TFlopsPerHour</b> | string |   |  Default: `$0.0069228` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-qosConfig-pricing-items-requests-perGBOfVRAMPerHour-details')">perGBOfVRAMPerHour</b> | string |   |  Default: `$0.01548` |

</div>

</div>

</div>

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-details" class="nested-properties expanded">

### schedulingConfig {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-heading}

Place the workload to right nodes and scale smart.

##### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-details')">autoScaling</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-details')">↓</span> | object |   | scale the workload based on the usage and traffic |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-hypervisor-details')">hypervisor</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-hypervisor" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-hypervisor" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-hypervisor-details')">↓</span> | object |   | single GPU device multi-process queuing and fair scheduling with QoS constraint |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-placement-details')">placement</b><span class="required-tag"></span> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-placement" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-placement" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-placement-details')">↓</span> | object |   | place the client or worker to best matched nodes |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-reBalancer-details')">reBalancer</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-reBalancer" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-reBalancer" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-reBalancer-details')">↓</span> | object |   | avoid hot GPU devices and continuously balance the workload<br />implemented by trigger a simulation scheduling and advise better GPU nodes for scheduler |

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-details" class="nested-properties expanded">

### autoScaling {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-heading}

scale the workload based on the usage and traffic

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetLimits-details')">autoSetLimits</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetLimits" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetLimits" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetLimits-details')">↓</span> | object |   | layer 1 vertical auto-scaling, turbo burst to existing GPU cards quickly |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetReplicas-details')">autoSetReplicas</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetReplicas" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetReplicas" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetReplicas-details')">↓</span> | object |   | layer 2 horizontal auto-scaling, scale up to more GPU cards if max limits threshold hit |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetRequests-details')">autoSetRequests</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetRequests" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetRequests" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetRequests-details')">↓</span> | object |   | layer 3 adjusting, to match the actual usage in the long run |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-scaleToZero-details')">scaleToZero</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-scaleToZero" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-scaleToZero" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-scaleToZero-details')">↓</span> | object |   | additional layer to save VRAM, auto-freeze memory and cool down to RAM and Disk |

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetLimits-details" class="nested-properties expanded">

### autoSetLimits {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetLimits-heading}

layer 1 vertical auto-scaling, turbo burst to existing GPU cards quickly

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetLimits}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetLimits-evaluationPeriod-details')">evaluationPeriod</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetLimits-extraTFlopsBufferRatio-details')">extraTFlopsBufferRatio</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetLimits-ignoredDeltaRange-details')">ignoredDeltaRange</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetLimits-maxRatioToRequests-details')">maxRatioToRequests</b> | string |   | the multiplier of requests, to avoid limit set too high, like 5.0 |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetLimits-prediction-details')">prediction</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetLimits-prediction" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetLimits-prediction" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetLimits-prediction-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetLimits-scaleUpStep-details')">scaleUpStep</b> | string |   |  |

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetLimits-prediction-details" class="nested-properties expanded">

### prediction {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetLimits-prediction-heading}

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetLimits-prediction}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetLimits-prediction-enable-details')">enable</b> | boolean |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetLimits-prediction-historyDataPeriod-details')">historyDataPeriod</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetLimits-prediction-model-details')">model</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetLimits-prediction-predictionPeriod-details')">predictionPeriod</b> | string |   |  |

</div>

</div>

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetReplicas-details" class="nested-properties expanded">

### autoSetReplicas {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetReplicas-heading}

layer 2 horizontal auto-scaling, scale up to more GPU cards if max limits threshold hit

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetReplicas}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetReplicas-enable-details')">enable</b> | boolean |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetReplicas-evaluationPeriod-details')">evaluationPeriod</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetReplicas-scaleDownCoolDownTime-details')">scaleDownCoolDownTime</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetReplicas-scaleDownStep-details')">scaleDownStep</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetReplicas-scaleUpCoolDownTime-details')">scaleUpCoolDownTime</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetReplicas-scaleUpStep-details')">scaleUpStep</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetReplicas-targetTFlopsOfLimits-details')">targetTFlopsOfLimits</b> | string |   |  |

</div>

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetRequests-details" class="nested-properties expanded">

### autoSetRequests {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetRequests-heading}

layer 3 adjusting, to match the actual usage in the long run

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetRequests}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetRequests-aggregationPeriod-details')">aggregationPeriod</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetRequests-evaluationPeriod-details')">evaluationPeriod</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetRequests-extraBufferRatio-details')">extraBufferRatio</b> | string |   | the request buffer ratio, for example actual usage is 1.0, 10% buffer will be 1.1 as final preferred requests |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetRequests-percentileForAutoRequests-details')">percentileForAutoRequests</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetRequests-prediction-details')">prediction</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetRequests-prediction" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetRequests-prediction" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetRequests-prediction-details')">↓</span> | object |   |  |

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetRequests-prediction-details" class="nested-properties expanded">

### prediction {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetRequests-prediction-heading}

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetRequests-prediction}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetRequests-prediction-enable-details')">enable</b> | boolean |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetRequests-prediction-historyDataPeriod-details')">historyDataPeriod</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetRequests-prediction-model-details')">model</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-autoSetRequests-prediction-predictionPeriod-details')">predictionPeriod</b> | string |   |  |

</div>

</div>

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-scaleToZero-details" class="nested-properties expanded">

### scaleToZero {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-scaleToZero-heading}

additional layer to save VRAM, auto-freeze memory and cool down to RAM and Disk

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-scaleToZero}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-scaleToZero-autoFreeze-details')">autoFreeze</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-scaleToZero-autoFreeze" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-scaleToZero-autoFreeze" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-scaleToZero-autoFreeze-details')">↓</span> | array |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-scaleToZero-intelligenceWarmup-details')">intelligenceWarmup</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-scaleToZero-intelligenceWarmup" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-scaleToZero-intelligenceWarmup" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-scaleToZero-intelligenceWarmup-details')">↓</span> | object |   |  |

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-scaleToZero-autoFreeze-details" class="nested-properties expanded">

### autoFreeze (items) {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-scaleToZero-autoFreeze-heading-items}

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-scaleToZero-autoFreeze-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-scaleToZero-autoFreeze-items-enable-details')">enable</b> | boolean |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-scaleToZero-autoFreeze-items-freezeToDiskTTL-details')">freezeToDiskTTL</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-scaleToZero-autoFreeze-items-freezeToMemTTL-details')">freezeToMemTTL</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-scaleToZero-autoFreeze-items-qos-details')">qos</b> | string |  <span class="enum-tag">low</span> <span class="enum-tag">medium</span> <span class="enum-tag">high</span> <span class="enum-tag">critical</span> |  |

</div>

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-scaleToZero-intelligenceWarmup-details" class="nested-properties expanded">

### intelligenceWarmup {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-scaleToZero-intelligenceWarmup-heading}

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-scaleToZero-intelligenceWarmup}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-scaleToZero-intelligenceWarmup-enable-details')">enable</b> | boolean |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-scaleToZero-intelligenceWarmup-historyDataPeriod-details')">historyDataPeriod</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-scaleToZero-intelligenceWarmup-model-details')">model</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-autoScaling-scaleToZero-intelligenceWarmup-predictionPeriod-details')">predictionPeriod</b> | string |   |  |

</div>

</div>

</div>

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-hypervisor-details" class="nested-properties expanded">

### hypervisor {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-hypervisor-heading}

single GPU device multi-process queuing and fair scheduling with QoS constraint

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-hypervisor}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-hypervisor-multiProcessQueuing-details')">multiProcessQueuing</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-hypervisor-multiProcessQueuing" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-hypervisor-multiProcessQueuing" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-hypervisor-multiProcessQueuing-details')">↓</span> | object |   |  |

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-hypervisor-multiProcessQueuing-details" class="nested-properties expanded">

### multiProcessQueuing {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-hypervisor-multiProcessQueuing-heading}

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-hypervisor-multiProcessQueuing}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-hypervisor-multiProcessQueuing-enable-details')">enable</b> | boolean |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-hypervisor-multiProcessQueuing-interval-details')">interval</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-hypervisor-multiProcessQueuing-queueLevelTimeSlices-details')">queueLevelTimeSlices</b> | array |   |  |

</div>

</div>

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-placement-details" class="nested-properties expanded">

### placement {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-placement-heading}

place the client or worker to best matched nodes

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-placement}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-placement-allowUsingLocalGPU-details')">allowUsingLocalGPU</b> | boolean |   |  Default: `true` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-placement-gpuFilters-details')">gpuFilters</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-placement-gpuFilters" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-placement-gpuFilters" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-placement-gpuFilters-details')">↓</span> | array |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-placement-mode-details')">mode</b><span class="required-tag"></span> | string |  <span class="enum-tag">CompactFirst</span> <span class="enum-tag">LowLoadFirst</span> |  Default: `CompactFirst` |

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-placement-gpuFilters-details" class="nested-properties expanded">

### gpuFilters (items) {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-placement-gpuFilters-heading-items}

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-placement-gpuFilters-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-placement-gpuFilters-items-params-details')">params</b> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-placement-gpuFilters-items-type-details')">type</b> | string |   |  |

</div>

</div>

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-reBalancer-details" class="nested-properties expanded">

### reBalancer {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-reBalancer-heading}

avoid hot GPU devices and continuously balance the workload<br />implemented by trigger a simulation scheduling and advise better GPU nodes for scheduler

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-reBalancer}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-reBalancer-internal-details')">internal</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-reBalancer-reBalanceCoolDownTime-details')">reBalanceCoolDownTime</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-reBalancer-threshold-details')">threshold</b> <span id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-reBalancer-threshold" class="expandable-property" data-uid="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-reBalancer-threshold" @click="toggleExpand('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-reBalancer-threshold-details')">↓</span> | object |   |  |

<div id="property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-reBalancer-threshold-details" class="nested-properties expanded">

### threshold {#property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-reBalancer-threshold-heading}

###### Properties {#properties-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-reBalancer-threshold}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-gpuPools-items-specTemplate-schedulingConfig-reBalancer-threshold-matchAny-details')">matchAny</b> | object |   |  |

</div>

</div>

</div>

</div>

</div>

<div id="property-tensor-fusion-cluster-storageVendor-details" class="nested-properties expanded">

### storageVendor {#property-tensor-fusion-cluster-storageVendor-heading}

StorageVendorConfig defines Postgres database with extensions for timeseries storage and other resource aggregation results, system events and diagnostics reports etc.

### Properties {#properties-tensor-fusion-cluster-storageVendor}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-storageVendor-image-details')">image</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-storageVendor-installCloudNativePGOperator-details')">installCloudNativePGOperator</b> | boolean |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-storageVendor-mode-details')">mode</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-storageVendor-pgClusterTemplate-details')">pgClusterTemplate</b> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-storageVendor-pgExtensions-details')">pgExtensions</b> | array |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-storageVendor-storageClass-details')">storageClass</b> | string |   |  |

</div>

## Status

TensorFusionClusterStatus defines the observed state of TensorFusionCluster.

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-allocatedTFlopsPercent-details')">allocatedTFlopsPercent</b> | string |   | updated with interval |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-allocatedVRAMPercent-details')">allocatedVRAMPercent</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-availableTFlops-details')">availableTFlops</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-availableVRAM-details')">availableVRAM</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-cloudVendorConfigHash-details')">cloudVendorConfigHash</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-conditions-details')">conditions</b> <span id="property-tensor-fusion-cluster-conditions" class="expandable-property" data-uid="property-tensor-fusion-cluster-conditions" @click="toggleExpand('property-tensor-fusion-cluster-conditions-details')">↓</span> | array |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-notReadyGPUPools-details')">notReadyGPUPools</b> | array |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-phase-details')">phase</b> | string |  <span class="enum-tag">Pending</span> <span class="enum-tag">Running</span> <span class="enum-tag">Updating</span> <span class="enum-tag">Destroying</span> <span class="enum-tag">Unknown</span> | TensorFusionClusterPhase represents the phase of the TensorFusionCluster resource. Default: `Pending` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-potentialSavingsPerMonth-details')">potentialSavingsPerMonth</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-readyGPUPools-details')">readyGPUPools</b> | array |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-retryCount-details')">retryCount</b><span class="required-tag"></span> | integer&lt;int64&gt; |   |  Default: `0` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-savedCostsPerMonth-details')">savedCostsPerMonth</b> | string |   | aggregated with interval |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-totalGPUs-details')">totalGPUs</b><span class="required-tag"></span> | integer&lt;int32&gt; |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-totalNodes-details')">totalNodes</b><span class="required-tag"></span> | integer&lt;int32&gt; |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-totalPools-details')">totalPools</b><span class="required-tag"></span> | integer&lt;int32&gt; |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-totalTFlops-details')">totalTFlops</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-totalVRAM-details')">totalVRAM</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-utilizedTFlopsPercent-details')">utilizedTFlopsPercent</b> | string |   | calculated every 5m average |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-utilizedVRAMPercent-details')">utilizedVRAMPercent</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-virtualAvailableTFlops-details')">virtualAvailableTFlops</b> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-virtualAvailableVRAM-details')">virtualAvailableVRAM</b> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-virtualTFlops-details')">virtualTFlops</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-virtualVRAM-details')">virtualVRAM</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |

<div id="property-tensor-fusion-cluster-conditions-details" class="nested-properties expanded">

### conditions (items) {#property-tensor-fusion-cluster-conditions-heading-items}

### Properties {#properties-tensor-fusion-cluster-conditions-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-conditions-items-lastTransitionTime-details')">lastTransitionTime</b><span class="required-tag"></span> | string&lt;date-time&gt; |   | lastTransitionTime is the last time the condition transitioned from one status to another.<br />This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-conditions-items-message-details')">message</b><span class="required-tag"></span> | string | <span class="constraint-tag">maxLength: 32768</span>  | message is a human readable message indicating details about the transition.<br />This may be an empty string. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-conditions-items-observedGeneration-details')">observedGeneration</b> | integer&lt;int64&gt; | <span class="constraint-tag">min: 0</span>  | observedGeneration represents the .metadata.generation that the condition was set based upon.<br />For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date<br />with respect to the current state of the instance. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-conditions-items-reason-details')">reason</b><span class="required-tag"></span> | string | <span class="constraint-tag">minLength: 1</span> <span class="constraint-tag">maxLength: 1024</span> <span class="constraint-tag" title="^[A-Za-z]([A-Za-z0-9&#95;,:]&#42;[A-Za-z0-9&#95;])?$">pattern: Regex</span>  | reason contains a programmatic identifier indicating the reason for the condition&#39;s last transition.<br />Producers of specific condition types may define expected values and meanings for this field,<br />and whether the values are considered a guaranteed API.<br />The value should be a CamelCase string.<br />This field may not be empty. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-conditions-items-status-details')">status</b><span class="required-tag"></span> | string |  <span class="enum-tag">True</span> <span class="enum-tag">False</span> <span class="enum-tag">Unknown</span> | status of the condition, one of True, False, Unknown. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-cluster-conditions-items-type-details')">type</b><span class="required-tag"></span> | string | <span class="constraint-tag">maxLength: 316</span> <span class="constraint-tag" title="^([a-z0-9]([-a-z0-9]&#42;[a-z0-9])?(\.[a-z0-9]([-a-z0-9]&#42;[a-z0-9])?)&#42;/)?(([A-Za-z0-9][-A-Za-z0-9&#95;.]&#42;)?[A-Za-z0-9])$">pattern: Regex</span>  | type of condition in CamelCase or in foo.example.com/CamelCase. |

</div>

## Example

```yaml
apiVersion: tensor-fusion.ai/v1
kind: TensorFusionCluster
metadata:
  name: example-tensor-fusion-cluster
spec:
  computingVendor: {}
  dataPipelines: {}
  gpuPools: []
  storageVendor: {}
```

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
