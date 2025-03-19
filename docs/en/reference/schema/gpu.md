---
pageClass: home
---
# GPU

GPU is the Schema for the gpus API.

<div class="crd-navigation">
  <div class="crd-search">
    <input type="text" id="gpu-property-search" placeholder="Search properties..." @input="filterProperties('gpu')">
  </div>
  <div class="crd-actions">
    <button @click="expandAll('gpu')">Expand All</button>
    <button @click="collapseAll('gpu')">Collapse All</button>
  </div>
</div>

## Kubernetes Resource Information

| Field | Value |
|-------|-------|
| API Version | tensor-fusion.ai/v1 |
| Kind | GPU |
| Scope | Cluster |

## Table of Contents

- [API Information](#api-information)
- [Status](#status)
- [Example](#example)

## Status

GPUStatus defines the observed state of GPU.

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpu-available-details')">available</b><span class="required-tag"></span> <span id="property-gpu-available" class="expandable-property" data-uid="property-gpu-available" @click="toggleExpand('property-gpu-available-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpu-capacity-details')">capacity</b><span class="required-tag"></span> <span id="property-gpu-capacity" class="expandable-property" data-uid="property-gpu-capacity" @click="toggleExpand('property-gpu-capacity-details')">↓</span> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpu-gpuModel-details')">gpuModel</b><span class="required-tag"></span> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpu-message-details')">message</b><span class="required-tag"></span> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpu-nodeSelector-details')">nodeSelector</b><span class="required-tag"></span> | object |   | The host match selector to schedule worker pods |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpu-phase-details')">phase</b><span class="required-tag"></span> | string |  <span class="enum-tag">Pending</span> <span class="enum-tag">Provisioning</span> <span class="enum-tag">Running</span> <span class="enum-tag">Unknown</span> <span class="enum-tag">Destroying</span> <span class="enum-tag">Migrating</span> |  Default: `Pending` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpu-uuid-details')">uuid</b><span class="required-tag"></span> | string |   |  |

<div id="property-gpu-available-details" class="nested-properties expanded">

### available {#property-gpu-available-heading}

### Properties {#properties-gpu-available}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpu-available-tflops-details')">tflops</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpu-available-vram-details')">vram</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |

</div>

<div id="property-gpu-capacity-details" class="nested-properties expanded">

### capacity {#property-gpu-capacity-heading}

### Properties {#properties-gpu-capacity}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpu-capacity-tflops-details')">tflops</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpu-capacity-vram-details')">vram</b><span class="required-tag"></span> | any | <span class="constraint-tag" title="^(\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))(([KMGTPE]i)&#124;[numkMGTPE]&#124;([eE](\+&#124;-)?(([0-9]+(\.[0-9]&#42;)?)&#124;(\.[0-9]+))))?$">pattern: Regex</span>  |  |

</div>

## Example

```yaml
apiVersion: tensor-fusion.ai/v1
kind: GPU
metadata:
  name: example-gpu
spec: {}
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
