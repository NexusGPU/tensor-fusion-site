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
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-isLocalGPU-details')">isLocalGPU</b><span class="required-tag"></span> | boolean |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-poolName-details')">poolName</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-qos-details')">qos</b> | string |  <span class="enum-tag">low</span> <span class="enum-tag">medium</span> <span class="enum-tag">high</span> <span class="enum-tag">critical</span> | Qos defines the quality of service level for the client. |
| <b style="cursor: pointer;" @click="scrollToDetail('property-workload-profile-resources-details')">resources</b> <span id="property-workload-profile-resources" class="expandable-property" data-uid="property-workload-profile-resources" @click="toggleExpand('property-workload-profile-resources-details')">↓</span> | object |   |  |

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
