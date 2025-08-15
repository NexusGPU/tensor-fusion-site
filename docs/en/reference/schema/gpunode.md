---
pageClass: home
---
# GPUNode

GPUNode is the Schema for the gpunodes API.

<div class="crd-navigation">
  <div class="crd-search">
    <input type="text" id="gpunode-property-search" placeholder="Search properties..." @input="filterProperties('gpunode')">
  </div>
  <div class="crd-actions">
    <button @click="expandAll('gpunode')">Expand All</button>
    <button @click="collapseAll('gpunode')">Collapse All</button>
  </div>
</div>

## Kubernetes Resource Information

| Field | Value |
|-------|-------|
| API Version | tensor-fusion.ai/v1 |
| Kind | GPUNode |
| Scope | Cluster |

## Table of Contents

- [API Information](#api-information)
- [Spec](#spec)
- [Status](#status)
## Spec

GPUNodeSpec defines the desired state of GPUNode.

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-cloudVendorParam-details')">cloudVendorParam</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-costPerHour-details')">costPerHour</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-gpuCardIndices-details')">gpuCardIndices</b> | array |   | if not all GPU cards should be used, specify the GPU card indices, default to empty,<br />onboard all GPU cards to the pool |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-manageMode-details')">manageMode</b> | string |  <span class="enum-tag">Manual</span> <span class="enum-tag">AutoSelect</span> <span class="enum-tag">Provisioned</span> |  Default: `AutoSelect` |

## Status

GPUNodeStatus defines the observed state of GPUNode.

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-allocationInfo-details')">allocationInfo</b> <span id="property-gpunode-allocationInfo" class="expandable-property" data-uid="property-gpunode-allocationInfo" @click="toggleExpand('property-gpunode-allocationInfo-details')">↓</span> | array |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-availableTFlops-details')">availableTFlops</b> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-availableVRAM-details')">availableVRAM</b> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-conditions-details')">conditions</b> <span id="property-gpunode-conditions" class="expandable-property" data-uid="property-gpunode-conditions" @click="toggleExpand('property-gpunode-conditions-details')">↓</span> | array |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-hypervisorStatus-details')">hypervisorStatus</b> <span id="property-gpunode-hypervisorStatus" class="expandable-property" data-uid="property-gpunode-hypervisorStatus" @click="toggleExpand('property-gpunode-hypervisorStatus-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-loadedModels-details')">loadedModels</b> | array |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-managedGPUDeviceIDs-details')">managedGPUDeviceIDs</b> | array |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-managedGPUs-details')">managedGPUs</b><span class="required-tag"></span> | integer&lt;int32&gt; |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-nodeInfo-details')">nodeInfo</b> <span id="property-gpunode-nodeInfo" class="expandable-property" data-uid="property-gpunode-nodeInfo" @click="toggleExpand('property-gpunode-nodeInfo-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-observedGeneration-details')">observedGeneration</b> | integer&lt;int64&gt; |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-phase-details')">phase</b><span class="required-tag"></span> | string |  <span class="enum-tag">Pending</span> <span class="enum-tag">Provisioning</span> <span class="enum-tag">Migrating</span> <span class="enum-tag">Running</span> <span class="enum-tag">Succeeded</span> <span class="enum-tag">Failed</span> <span class="enum-tag">Unknown</span> <span class="enum-tag">Destroying</span> |  Default: `Pending` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-totalGPUs-details')">totalGPUs</b><span class="required-tag"></span> | integer&lt;int32&gt; |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-totalTFlops-details')">totalTFlops</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-totalVRAM-details')">totalVRAM</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-virtualAvailableTFlops-details')">virtualAvailableTFlops</b> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-virtualAvailableVRAM-details')">virtualAvailableVRAM</b> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-virtualTFlops-details')">virtualTFlops</b> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-virtualVRAM-details')">virtualVRAM</b> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |

<div id="property-gpunode-allocationInfo-details" class="nested-properties expanded">

### allocationInfo (items) {#property-gpunode-allocationInfo-heading-items}

### Properties {#properties-gpunode-allocationInfo-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-allocationInfo-items-count-details')">count</b><span class="required-tag"></span> | integer |   | Worker count |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-allocationInfo-items-name-details')">name</b> | string |   | Workload name namespace |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-allocationInfo-items-namespace-details')">namespace</b> | string |   |  |

</div>

<div id="property-gpunode-conditions-details" class="nested-properties expanded">

### conditions (items) {#property-gpunode-conditions-heading-items}

### Properties {#properties-gpunode-conditions-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-conditions-items-lastTransitionTime-details')">lastTransitionTime</b><span class="required-tag"></span> | string&lt;date-time&gt; |   | lastTransitionTime is the last time the condition transitioned from one status to another.<br />This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-conditions-items-message-details')">message</b><span class="required-tag"></span> | string | <span class="constraint-tag">maxLength: 32768</span>  | message is a human readable message indicating details about the transition.<br />This may be an empty string. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-conditions-items-observedGeneration-details')">observedGeneration</b> | integer&lt;int64&gt; | <span class="constraint-tag">min: 0</span>  | observedGeneration represents the .metadata.generation that the condition was set based upon.<br />For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date<br />with respect to the current state of the instance. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-conditions-items-reason-details')">reason</b><span class="required-tag"></span> | string | <span class="constraint-tag">minLength: 1</span> <span class="constraint-tag">maxLength: 1024</span> <span class="constraint-tag" title="^[A-Za-z]([A-Za-z0-9&#95;,:]&#42;[A-Za-z0-9&#95;])?$">pattern: Regex</span>  | reason contains a programmatic identifier indicating the reason for the condition&#39;s last transition.<br />Producers of specific condition types may define expected values and meanings for this field,<br />and whether the values are considered a guaranteed API.<br />The value should be a CamelCase string.<br />This field may not be empty. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-conditions-items-status-details')">status</b><span class="required-tag"></span> | string |  <span class="enum-tag">True</span> <span class="enum-tag">False</span> <span class="enum-tag">Unknown</span> | status of the condition, one of True, False, Unknown. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-conditions-items-type-details')">type</b><span class="required-tag"></span> | string | <span class="constraint-tag">maxLength: 316</span> <span class="constraint-tag" title="^([a-z0-9]([-a-z0-9]&#42;[a-z0-9])?(\.[a-z0-9]([-a-z0-9]&#42;[a-z0-9])?)&#42;/)?(([A-Za-z0-9][-A-Za-z0-9&#95;.]&#42;)?[A-Za-z0-9])$">pattern: Regex</span>  | type of condition in CamelCase or in foo.example.com/CamelCase. |

</div>

<div id="property-gpunode-hypervisorStatus-details" class="nested-properties expanded">

### hypervisorStatus {#property-gpunode-hypervisorStatus-heading}

### Properties {#properties-gpunode-hypervisorStatus}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-hypervisorStatus-hypervisorState-details')">hypervisorState</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-hypervisorStatus-hypervisorVersion-details')">hypervisorVersion</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-hypervisorStatus-lastHeartbeatTime-details')">lastHeartbeatTime</b> | string&lt;date-time&gt; |   |  |

</div>

<div id="property-gpunode-nodeInfo-details" class="nested-properties expanded">

### nodeInfo {#property-gpunode-nodeInfo-heading}

### Properties {#properties-gpunode-nodeInfo}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-nodeInfo-dataDiskSize-details')">dataDiskSize</b> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-nodeInfo-ramSize-details')">ramSize</b> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  | Additional space for L1/L2 VRAM buffer |

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
