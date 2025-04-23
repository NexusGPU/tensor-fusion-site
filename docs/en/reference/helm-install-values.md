---
pageClass: home
---
# Helm Values

Schema for the values.yaml file for the tensor-fusion Helm chart

<div class="crd-navigation">
  <div class="crd-search">
    <input type="text" id="helm-values-property-search" placeholder="Search properties..." @input="filterProperties('helm-values')">
  </div>
  <div class="crd-actions">
    <button @click="expandAll('helm-values')">Expand All</button>
    <button @click="collapseAll('helm-values')">Collapse All</button>
  </div>
</div>

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-imagePullSecrets-details')">imagePullSecrets</b> <span id="property-helm-values-imagePullSecrets" class="expandable-property" data-uid="property-helm-values-imagePullSecrets" @click="toggleExpand('property-helm-values-imagePullSecrets-details')">↓</span> | array |   | List of secrets for pulling images from private repositories. See: https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/ |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-nameOverride-details')">nameOverride</b> | string |   | Override for the chart name |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-fullnameOverride-details')">fullnameOverride</b> | string |   | Override for the full name of resources created by this chart |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-namespaceOverride-details')">namespaceOverride</b> | string |   | Override for the namespace where resources will be deployed |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-serviceAccount-details')">serviceAccount</b> <span id="property-helm-values-serviceAccount" class="expandable-property" data-uid="property-helm-values-serviceAccount" @click="toggleExpand('property-helm-values-serviceAccount-details')">↓</span> | object |   | Configuration for the service account. See: https://kubernetes.io/docs/concepts/security/service-accounts/ |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-initialGpuNodeLabelSelector-details')">initialGpuNodeLabelSelector</b> | string |   | Label selector used to identify GPU nodes in the cluster Default: `nvidia.com/gpu.present=true` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-controller-details')">controller</b> <span id="property-helm-values-controller" class="expandable-property" data-uid="property-helm-values-controller" @click="toggleExpand('property-helm-values-controller-details')">↓</span> | object |   | Configuration for the tensor-fusion controller component |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-greptime-details')">greptime</b> <span id="property-helm-values-greptime" class="expandable-property" data-uid="property-helm-values-greptime" @click="toggleExpand('property-helm-values-greptime-details')">↓</span> | object |   | Configuration for GreptimeDB integration |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-agent-details')">agent</b> <span id="property-helm-values-agent" class="expandable-property" data-uid="property-helm-values-agent" @click="toggleExpand('property-helm-values-agent-details')">↓</span> | object |   | Configuration for the tensor-fusion agent component |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-cloudVendorCredentials-details')">cloudVendorCredentials</b> <span id="property-helm-values-cloudVendorCredentials" class="expandable-property" data-uid="property-helm-values-cloudVendorCredentials" @click="toggleExpand('property-helm-values-cloudVendorCredentials-details')">↓</span> | object |   | Cloud vendor credentials for pools running in Provisioned mode without IRSA or zero-credential auth |

<div id="property-helm-values-imagePullSecrets-details" class="nested-properties expanded">

### imagePullSecrets (items) {#property-helm-values-imagePullSecrets-heading-items}

List of secrets for pulling images from private repositories. See: https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/

### Properties {#properties-helm-values-imagePullSecrets-items}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-imagePullSecrets-items-name-details')">name</b> | string |   | Name of the secret containing the registry credentials |

</div>

<div id="property-helm-values-serviceAccount-details" class="nested-properties expanded">

### serviceAccount {#property-helm-values-serviceAccount-heading}

Configuration for the service account. See: https://kubernetes.io/docs/concepts/security/service-accounts/

### Properties {#properties-helm-values-serviceAccount}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-serviceAccount-create-details')">create</b> | boolean |   | Specifies whether a service account should be created Default: `true` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-serviceAccount-automount-details')">automount</b> | boolean |   | Automatically mount a ServiceAccount&#39;s API credentials Default: `true` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-serviceAccount-annotations-details')">annotations</b> | object |   | Annotations to add to the service account |

</div>

<div id="property-helm-values-controller-details" class="nested-properties expanded">

### controller {#property-helm-values-controller-heading}

Configuration for the tensor-fusion controller component

### Properties {#properties-helm-values-controller}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-controller-replicaCount-details')">replicaCount</b> | integer | <span class="constraint-tag">min: 1</span>  | Number of replicas for the controller deployment Default: `1` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-controller-image-details')">image</b><span class="required-tag"></span> <span id="property-helm-values-controller-image" class="expandable-property" data-uid="property-helm-values-controller-image" @click="toggleExpand('property-helm-values-controller-image-details')">↓</span> | object |   | Container image configuration for the controller |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-controller-podAnnotations-details')">podAnnotations</b> | object |   | Annotations to add to the controller pods |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-controller-tolerations-details')">tolerations</b> | array |   | Tolerations for the controller pods |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-controller-affinity-details')">affinity</b> | object |   | Affinity rules for the controller pods |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-controller-livenessProbe-details')">livenessProbe</b> | object |   | Liveness probe configuration for the controller pods |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-controller-readinessProbe-details')">readinessProbe</b> | object |   | Readiness probe configuration for the controller pods |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-controller-resources-details')">resources</b> <span id="property-helm-values-controller-resources" class="expandable-property" data-uid="property-helm-values-controller-resources" @click="toggleExpand('property-helm-values-controller-resources-details')">↓</span> | object |   | Resource requirements for the controller |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-controller-admissionWebhooks-details')">admissionWebhooks</b> <span id="property-helm-values-controller-admissionWebhooks" class="expandable-property" data-uid="property-helm-values-controller-admissionWebhooks" @click="toggleExpand('property-helm-values-controller-admissionWebhooks-details')">↓</span> | object |   | Configuration for the admission webhooks |

<div id="property-helm-values-controller-image-details" class="nested-properties expanded">

### image {#property-helm-values-controller-image-heading}

Container image configuration for the controller

#### Properties {#properties-helm-values-controller-image}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-controller-image-repository-details')">repository</b><span class="required-tag"></span> | string |   | Repository for the controller image Default: `tensorfusion/tensor-fusion-operator` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-controller-image-tag-details')">tag</b> | string |   | Tag for the controller image Default: `latest` |

</div>

<div id="property-helm-values-controller-resources-details" class="nested-properties expanded">

### resources {#property-helm-values-controller-resources-heading}

Resource requirements for the controller

#### Properties {#properties-helm-values-controller-resources}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-controller-resources-requests-details')">requests</b> <span id="property-helm-values-controller-resources-requests" class="expandable-property" data-uid="property-helm-values-controller-resources-requests" @click="toggleExpand('property-helm-values-controller-resources-requests-details')">↓</span> | object |   | Resource requests for the controller |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-controller-resources-limits-details')">limits</b> <span id="property-helm-values-controller-resources-limits" class="expandable-property" data-uid="property-helm-values-controller-resources-limits" @click="toggleExpand('property-helm-values-controller-resources-limits-details')">↓</span> | object |   | Resource limits for the controller |

<div id="property-helm-values-controller-resources-requests-details" class="nested-properties expanded">

### requests {#property-helm-values-controller-resources-requests-heading}

Resource requests for the controller

##### Properties {#properties-helm-values-controller-resources-requests}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-controller-resources-requests-cpu-details')">cpu</b> | string |   | CPU request for the controller |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-controller-resources-requests-memory-details')">memory</b> | string |   | Memory request for the controller |

</div>

<div id="property-helm-values-controller-resources-limits-details" class="nested-properties expanded">

### limits {#property-helm-values-controller-resources-limits-heading}

Resource limits for the controller

##### Properties {#properties-helm-values-controller-resources-limits}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-controller-resources-limits-cpu-details')">cpu</b> | string |   | CPU limit for the controller |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-controller-resources-limits-memory-details')">memory</b> | string |   | Memory limit for the controller |

</div>

</div>

<div id="property-helm-values-controller-admissionWebhooks-details" class="nested-properties expanded">

### admissionWebhooks {#property-helm-values-controller-admissionWebhooks-heading}

Configuration for the admission webhooks

#### Properties {#properties-helm-values-controller-admissionWebhooks}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-controller-admissionWebhooks-failurePolicy-details')">failurePolicy</b> | string |  <span class="enum-tag">Fail</span> <span class="enum-tag">Ignore</span> | Failure policy for the admission webhooks Default: `Fail` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-controller-admissionWebhooks-secretName-details')">secretName</b> | string |   | Name of the secret containing the webhook certificates Default: `tensor-fusion-webhook-secret` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-controller-admissionWebhooks-patch-details')">patch</b> <span id="property-helm-values-controller-admissionWebhooks-patch" class="expandable-property" data-uid="property-helm-values-controller-admissionWebhooks-patch" @click="toggleExpand('property-helm-values-controller-admissionWebhooks-patch-details')">↓</span> | object |   | Configuration for patching the webhook certificates |

<div id="property-helm-values-controller-admissionWebhooks-patch-details" class="nested-properties expanded">

### patch {#property-helm-values-controller-admissionWebhooks-patch-heading}

Configuration for patching the webhook certificates

##### Properties {#properties-helm-values-controller-admissionWebhooks-patch}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-controller-admissionWebhooks-patch-image-details')">image</b> | string |   | Image for the webhook certificate generator Default: `registry.k8s.io/ingress-nginx/kube-webhook-certgen:v1.5.0` |

</div>

</div>

</div>

<div id="property-helm-values-greptime-details" class="nested-properties expanded">

### greptime {#property-helm-values-greptime-heading}

Configuration for GreptimeDB integration

### Properties {#properties-helm-values-greptime}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-greptime-isCloud-details')">isCloud</b> | boolean |   | Whether to use GreptimeDB Cloud Default: `false` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-greptime-host-details')">host</b><span class="required-tag"></span> | string |   | Hostname of the GreptimeDB server Default: `greptimedb-standalone.greptimedb.svc.cluster.local` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-greptime-port-details')">port</b><span class="required-tag"></span> | integer |   | Port of the GreptimeDB server Default: `4001` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-greptime-image-details')">image</b> <span id="property-helm-values-greptime-image" class="expandable-property" data-uid="property-helm-values-greptime-image" @click="toggleExpand('property-helm-values-greptime-image-details')">↓</span> | object |   | Container image configuration for GreptimeDB |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-greptime-resources-details')">resources</b> <span id="property-helm-values-greptime-resources" class="expandable-property" data-uid="property-helm-values-greptime-resources" @click="toggleExpand('property-helm-values-greptime-resources-details')">↓</span> | object |   | Resource requirements for GreptimeDB |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-greptime-installStandalone-details')">installStandalone</b> | boolean |   | Whether to install a standalone GreptimeDB instance Default: `true` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-greptime-user-details')">user</b> | string |   | Username for GreptimeDB authentication |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-greptime-db-details')">db</b> | string |   | Database name in GreptimeDB |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-greptime-password-details')">password</b> | string |   | Password for GreptimeDB authentication |

<div id="property-helm-values-greptime-image-details" class="nested-properties expanded">

### image {#property-helm-values-greptime-image-heading}

Container image configuration for GreptimeDB

#### Properties {#properties-helm-values-greptime-image}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-greptime-image-repository-details')">repository</b> | string |   | Repository for the GreptimeDB image, for China mainland users, should change &#39;greptime.image.repository&#39; value to &#39;greptime-registry.cn-hangzhou.cr.aliyuncs.com/greptime/greptimedb&#39; Default: `docker.io/greptime/greptimedb` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-greptime-image-tag-details')">tag</b> | string |   | Tag for the GreptimeDB image Default: `latest` |

</div>

<div id="property-helm-values-greptime-resources-details" class="nested-properties expanded">

### resources {#property-helm-values-greptime-resources-heading}

Resource requirements for GreptimeDB

#### Properties {#properties-helm-values-greptime-resources}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-greptime-resources-requests-details')">requests</b> <span id="property-helm-values-greptime-resources-requests" class="expandable-property" data-uid="property-helm-values-greptime-resources-requests" @click="toggleExpand('property-helm-values-greptime-resources-requests-details')">↓</span> | object |   | Resource requests for GreptimeDB |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-greptime-resources-limits-details')">limits</b> <span id="property-helm-values-greptime-resources-limits" class="expandable-property" data-uid="property-helm-values-greptime-resources-limits" @click="toggleExpand('property-helm-values-greptime-resources-limits-details')">↓</span> | object |   | Resource limits for GreptimeDB |

<div id="property-helm-values-greptime-resources-requests-details" class="nested-properties expanded">

### requests {#property-helm-values-greptime-resources-requests-heading}

Resource requests for GreptimeDB

##### Properties {#properties-helm-values-greptime-resources-requests}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-greptime-resources-requests-cpu-details')">cpu</b> | string |   | CPU request for GreptimeDB |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-greptime-resources-requests-memory-details')">memory</b> | string |   | Memory request for GreptimeDB |

</div>

<div id="property-helm-values-greptime-resources-limits-details" class="nested-properties expanded">

### limits {#property-helm-values-greptime-resources-limits-heading}

Resource limits for GreptimeDB

##### Properties {#properties-helm-values-greptime-resources-limits}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-greptime-resources-limits-cpu-details')">cpu</b> | string |   | CPU limit for GreptimeDB |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-greptime-resources-limits-memory-details')">memory</b> | string |   | Memory limit for GreptimeDB |

</div>

</div>

</div>

<div id="property-helm-values-agent-details" class="nested-properties expanded">

### agent {#property-helm-values-agent-heading}

Configuration for the tensor-fusion agent component

### Properties {#properties-helm-values-agent}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-agent-enrollToken-details')">enrollToken</b><span class="required-tag"></span> | string |   | Token used for agent enrollment with the cloud service Default: `token-from-cloud` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-agent-agentId-details')">agentId</b><span class="required-tag"></span> | string |   | Unique identifier for the agent in the format &#39;org:env&#39; Default: `org-from-cloud:env` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-agent-cloudEndpoint-details')">cloudEndpoint</b><span class="required-tag"></span> | string |   | WebSocket endpoint for cloud communication Default: `wss://app.tensor-fusion.ai/&#95;ws` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-agent-image-details')">image</b><span class="required-tag"></span> <span id="property-helm-values-agent-image" class="expandable-property" data-uid="property-helm-values-agent-image" @click="toggleExpand('property-helm-values-agent-image-details')">↓</span> | object |   | Container image configuration for the agent |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-agent-resources-details')">resources</b> <span id="property-helm-values-agent-resources" class="expandable-property" data-uid="property-helm-values-agent-resources" @click="toggleExpand('property-helm-values-agent-resources-details')">↓</span> | object |   | Resource requirements for the agent |

<div id="property-helm-values-agent-image-details" class="nested-properties expanded">

### image {#property-helm-values-agent-image-heading}

Container image configuration for the agent

#### Properties {#properties-helm-values-agent-image}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-agent-image-repository-details')">repository</b><span class="required-tag"></span> | string |   | Repository for the agent image Default: `tensorfusion/tensor-fusion-agent` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-agent-image-tag-details')">tag</b> | string |   | Tag for the agent image Default: `latest` |

</div>

<div id="property-helm-values-agent-resources-details" class="nested-properties expanded">

### resources {#property-helm-values-agent-resources-heading}

Resource requirements for the agent

#### Properties {#properties-helm-values-agent-resources}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-agent-resources-requests-details')">requests</b> <span id="property-helm-values-agent-resources-requests" class="expandable-property" data-uid="property-helm-values-agent-resources-requests" @click="toggleExpand('property-helm-values-agent-resources-requests-details')">↓</span> | object |   | Resource requests for the agent |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-agent-resources-limits-details')">limits</b> <span id="property-helm-values-agent-resources-limits" class="expandable-property" data-uid="property-helm-values-agent-resources-limits" @click="toggleExpand('property-helm-values-agent-resources-limits-details')">↓</span> | object |   | Resource limits for the cluster agent |

<div id="property-helm-values-agent-resources-requests-details" class="nested-properties expanded">

### requests {#property-helm-values-agent-resources-requests-heading}

Resource requests for the agent

##### Properties {#properties-helm-values-agent-resources-requests}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-agent-resources-requests-cpu-details')">cpu</b> | string |   | CPU request for the agent Default: `50m` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-agent-resources-requests-memory-details')">memory</b> | string |   | Memory request for the cluster agent Default: `64Mi` |

</div>

<div id="property-helm-values-agent-resources-limits-details" class="nested-properties expanded">

### limits {#property-helm-values-agent-resources-limits-heading}

Resource limits for the cluster agent

##### Properties {#properties-helm-values-agent-resources-limits}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-agent-resources-limits-cpu-details')">cpu</b> | string |   | CPU limit for the cluster agent Default: `1000m` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-agent-resources-limits-memory-details')">memory</b> | string |   | Memory limit for the cluster agent Default: `512Mi` |

</div>

</div>

</div>

<div id="property-helm-values-cloudVendorCredentials-details" class="nested-properties expanded">

### cloudVendorCredentials {#property-helm-values-cloudVendorCredentials-heading}

Cloud vendor credentials for pools running in Provisioned mode without IRSA or zero-credential auth

### Properties {#properties-helm-values-cloudVendorCredentials}

| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |
|----------|------|------------|-------------|
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-cloudVendorCredentials-accessKey-details')">accessKey</b><span class="required-tag"></span> | string |   | Access key for cloud vendor authentication Default: `dummy` |
| <b style="cursor: pointer;" @click="scrollToDetail('property-helm-values-cloudVendorCredentials-secretKey-details')">secretKey</b><span class="required-tag"></span> | string |   | Secret key for cloud vendor authentication Default: `dummy` |

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
