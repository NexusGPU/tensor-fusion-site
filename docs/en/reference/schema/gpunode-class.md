---
pageClass: home
---
# GPUNodeClass

GPUNodeClass is the Schema for the gpunodeclasses API.

<div class="crd-navigation">
  <div class="crd-search">
    <input type="text" id="gpunode-class-property-search" placeholder="Search properties..." @input="filterProperties('gpunode-class')">
  </div>
  <div class="crd-actions">
    <button @click="expandAll('gpunode-class')">Expand All</button>
    <button @click="collapseAll('gpunode-class')">Collapse All</button>
  </div>
</div>

## Kubernetes Resource Information

| Field | Value |
|-------|-------|
| API Version | tensor-fusion.ai/v1 |
| Kind | GPUNodeClass |
| Scope | Cluster |

## Table of Contents

- [API Information](#api-information)
- [Spec](#spec)
- [Status](#status)
- [Example](#example)

## Spec

GPUNodeClassSpec defines the desired state of GPUNodeClass.

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-class-blockDeviceMappings-details')">blockDeviceMappings</b> <span id="property-gpunode-class-blockDeviceMappings" class="expandable-property" data-uid="property-gpunode-class-blockDeviceMappings" @click="toggleExpand('property-gpunode-class-blockDeviceMappings-details')">↓</span> | array |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-class-instanceProfile-details')">instanceProfile</b> | string |   | The instance profile to use, assign IAM role and permissions for EC2 instances |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-class-launchTemplate-details')">launchTemplate</b> <span id="property-gpunode-class-launchTemplate" class="expandable-property" data-uid="property-gpunode-class-launchTemplate" @click="toggleExpand('property-gpunode-class-launchTemplate-details')">↓</span> | object |   | The launch template to use for VM instances, if set, all other fields could be skipped |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-class-metadataOptions-details')">metadataOptions</b> <span id="property-gpunode-class-metadataOptions" class="expandable-property" data-uid="property-gpunode-class-metadataOptions" @click="toggleExpand('property-gpunode-class-metadataOptions-details')">↓</span> | object |   | for AWS only, IMDSv2 metadata service options |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-class-osImageSelectorTerms-details')">osImageSelectorTerms</b> <span id="property-gpunode-class-osImageSelectorTerms" class="expandable-property" data-uid="property-gpunode-class-osImageSelectorTerms" @click="toggleExpand('property-gpunode-class-osImageSelectorTerms-details')">↓</span> | array |   | the OS image identifier string, default to use first one, if not found, fallback to others |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-class-osImageType-details')">osImageType</b> | string |  <span class="enum-tag">Private</span> <span class="enum-tag">Public</span> <span class="enum-tag">System</span> | Could be private or public, varies in different cloud vendor, define where to query the OSImageID Default: `Private` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-class-securityGroupSelectorTerms-details')">securityGroupSelectorTerms</b> <span id="property-gpunode-class-securityGroupSelectorTerms" class="expandable-property" data-uid="property-gpunode-class-securityGroupSelectorTerms" @click="toggleExpand('property-gpunode-class-securityGroupSelectorTerms-details')">↓</span> | array |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-class-subnetSelectorTerms-details')">subnetSelectorTerms</b> <span id="property-gpunode-class-subnetSelectorTerms" class="expandable-property" data-uid="property-gpunode-class-subnetSelectorTerms" @click="toggleExpand('property-gpunode-class-subnetSelectorTerms-details')">↓</span> | array |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-class-tags-details')">tags</b> | object |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-class-userData-details')">userData</b> | string |   |  |

<div id="property-gpunode-class-blockDeviceMappings-details" class="nested-properties expanded">

### blockDeviceMappings (items) {#property-gpunode-class-blockDeviceMappings-heading-items}

### Properties {#properties-gpunode-class-blockDeviceMappings-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-class-blockDeviceMappings-items-deviceName-details')">deviceName</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-class-blockDeviceMappings-items-ebs-details')">ebs</b> <span id="property-gpunode-class-blockDeviceMappings-items-ebs" class="expandable-property" data-uid="property-gpunode-class-blockDeviceMappings-items-ebs" @click="toggleExpand('property-gpunode-class-blockDeviceMappings-items-ebs-details')">↓</span> | object |   |  |

<div id="property-gpunode-class-blockDeviceMappings-items-ebs-details" class="nested-properties expanded">

### ebs {#property-gpunode-class-blockDeviceMappings-items-ebs-heading}

#### Properties {#properties-gpunode-class-blockDeviceMappings-items-ebs}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-class-blockDeviceMappings-items-ebs-deleteOnTermination-details')">deleteOnTermination</b> | boolean |   |  Default: `true` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-class-blockDeviceMappings-items-ebs-encrypted-details')">encrypted</b> | boolean |   |  Default: `true` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-class-blockDeviceMappings-items-ebs-volumeSize-details')">volumeSize</b> | string |   |  |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-class-blockDeviceMappings-items-ebs-volumeType-details')">volumeType</b> | string |   | Default value would varies based on the cloud vendor<br />For AWS it&#39;s gp3, for Alicloud it&#39;s cloud&#95;essd |

</div>

</div>

<div id="property-gpunode-class-launchTemplate-details" class="nested-properties expanded">

### launchTemplate {#property-gpunode-class-launchTemplate-heading}

The launch template to use for VM instances, if set, all other fields could be skipped

### Properties {#properties-gpunode-class-launchTemplate}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-class-launchTemplate-id-details')">id</b> | string |   | The item ID |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-class-launchTemplate-name-details')">name</b> | string |   | The item name |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-class-launchTemplate-tags-details')">tags</b> | object |   | Query by tags |

</div>

<div id="property-gpunode-class-metadataOptions-details" class="nested-properties expanded">

### metadataOptions {#property-gpunode-class-metadataOptions-heading}

for AWS only, IMDSv2 metadata service options

### Properties {#properties-gpunode-class-metadataOptions}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-class-metadataOptions-httpEndpoint-details')">httpEndpoint</b> | boolean |   |  Default: `true` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-class-metadataOptions-httpProtocolIPv6-details')">httpProtocolIPv6</b> | boolean |   |  Default: `false` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-class-metadataOptions-httpPutResponseHopLimit-details')">httpPutResponseHopLimit</b> | integer |   |  Default: `1` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-class-metadataOptions-httpTokens-details')">httpTokens</b> | string |   |  Default: `required` |

</div>

<div id="property-gpunode-class-osImageSelectorTerms-details" class="nested-properties expanded">

### osImageSelectorTerms (items) {#property-gpunode-class-osImageSelectorTerms-heading-items}

the OS image identifier string, default to use first one, if not found, fallback to others

### Properties {#properties-gpunode-class-osImageSelectorTerms-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-class-osImageSelectorTerms-items-id-details')">id</b> | string |   | The item ID |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-class-osImageSelectorTerms-items-name-details')">name</b> | string |   | The item name |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-class-osImageSelectorTerms-items-tags-details')">tags</b> | object |   | Query by tags |

</div>

<div id="property-gpunode-class-securityGroupSelectorTerms-details" class="nested-properties expanded">

### securityGroupSelectorTerms (items) {#property-gpunode-class-securityGroupSelectorTerms-heading-items}

### Properties {#properties-gpunode-class-securityGroupSelectorTerms-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-class-securityGroupSelectorTerms-items-id-details')">id</b> | string |   | The item ID |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-class-securityGroupSelectorTerms-items-name-details')">name</b> | string |   | The item name |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-class-securityGroupSelectorTerms-items-tags-details')">tags</b> | object |   | Query by tags |

</div>

<div id="property-gpunode-class-subnetSelectorTerms-details" class="nested-properties expanded">

### subnetSelectorTerms (items) {#property-gpunode-class-subnetSelectorTerms-heading-items}

### Properties {#properties-gpunode-class-subnetSelectorTerms-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-class-subnetSelectorTerms-items-id-details')">id</b> | string |   | The item ID |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-class-subnetSelectorTerms-items-name-details')">name</b> | string |   | The item name |
| <b style="cursor: pointer;" @click="scrollToDetail('property-gpunode-class-subnetSelectorTerms-items-tags-details')">tags</b> | object |   | Query by tags |

</div>

## Status

GPUNodeClassStatus defines the observed state of GPUNodeClass.

## Example

```yaml
apiVersion: tensor-fusion.ai/v1
kind: GPUNodeClass
metadata:
  name: example-gpunode-class
spec:
  blockDeviceMappings: []
  instanceProfile: example-instanceProfile
  launchTemplate: {}
  metadataOptions: {}
  osImageSelectorTerms: []
  osImageType: example-osImageType
  securityGroupSelectorTerms: []
  subnetSelectorTerms: []
  tags: {}
  userData: example-userData
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
