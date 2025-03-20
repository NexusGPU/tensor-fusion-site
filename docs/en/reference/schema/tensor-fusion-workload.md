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

TensorFusionWorkloadSpec defines the desired state of TensorFusionWorkload.

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-isLocalGPU-details')">isLocalGPU</b> | boolean |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-poolName-details')">poolName</b><span class="required-tag"></span> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-qos-details')">qos</b> | string |  <span class="enum-tag">low</span> <span class="enum-tag">medium</span> <span class="enum-tag">high</span> <span class="enum-tag">critical</span> |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-replicas-details')">replicas</b> | integer&lt;int32&gt; |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-resources-details')">resources</b> <span id="property-tensor-fusion-workload-resources" class="expandable-property" data-uid="property-tensor-fusion-workload-resources" @click="toggleExpand('property-tensor-fusion-workload-resources-details')">↓</span> | object |   |  |

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
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-podTemplateHash-details')">podTemplateHash</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-readyReplicas-details')">readyReplicas</b> | integer&lt;int32&gt; |   | readyReplicas is the number of pods created for this Workload with a Ready Condition. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-replicas-details')">replicas</b><span class="required-tag"></span> | integer&lt;int32&gt; |   | replicas is the number of Pods created by the Workload controller. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-workerStatuses-details')">workerStatuses</b> <span id="property-tensor-fusion-workload-workerStatuses" class="expandable-property" data-uid="property-tensor-fusion-workload-workerStatuses" @click="toggleExpand('property-tensor-fusion-workload-workerStatuses-details')">↓</span> | array |   |  |

<div id="property-tensor-fusion-workload-workerStatuses-details" class="nested-properties expanded">

### workerStatuses (items) {#property-tensor-fusion-workload-workerStatuses-heading-items}

### Properties {#properties-tensor-fusion-workload-workerStatuses-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-workerStatuses-items-nodeSelector-details')">nodeSelector</b> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-workerStatuses-items-resourceVersion-details')">resourceVersion</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-workerStatuses-items-workerIp-details')">workerIp</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-workerStatuses-items-workerName-details')">workerName</b><span class="required-tag"></span> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-workerStatuses-items-workerPhase-details')">workerPhase</b><span class="required-tag"></span> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-tensor-fusion-workload-workerStatuses-items-workerPort-details')">workerPort</b> | integer |   |  |

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
