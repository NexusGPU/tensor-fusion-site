import * as fs from 'node:fs'
import consola from 'consola'
import * as process from 'node:process'
import * as yaml from 'js-yaml'
import * as path from 'node:path'

const PREFIX = `https://raw.githubusercontent.com/NexusGPU/tensor-fusion-operator/refs/heads/${process.env.GEN_BRANCH ?? 'main'}`

// Function to escape HTML special characters and certain markdown syntax
function escapeHtml(text) {
  if (typeof text !== 'string') return text
  
  const escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '|': '&#124;',
    '`': '&#96;',
    '*': '&#42;',
    '_': '&#95;'
  }

  return text.replace(/[&<>"'|`*_]/g, char => escapeMap[char])
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, url) => {
      // Preserve markdown links
      return `[${escapeHtml(text)}](${url})`
    })
    .replace(/(`+)([\s\S]*?)\1/g, (match, backticks, code) => {
      // Preserve code blocks and inline code
      return `${backticks}${code}${backticks}`
    })
    .replace(/\n/g, '<br />')
}

const schemaList = [
  {
    name: 'GPUPool',
    url: `${PREFIX}/config/crd/bases/tensor-fusion.ai_gpupools.yaml`,
    file: 'gpu-pool.json',
  },
  {
    name: 'TFCluster',
    url: `${PREFIX}/config/crd/bases/tensor-fusion.ai_tensorfusionclusters.yaml`,
    file: 'tf-cluster.json',
  },

  {
    name: 'TFClientConnection',
    url: `${PREFIX}/config/crd/bases/tensor-fusion.ai_tensorfusionconnections.yaml`,
    file: 'tf-client-connection.json',
  },

  {
    name: 'SchedulingConfigTemplate',
    url: `${PREFIX}/config/crd/bases/tensor-fusion.ai_schedulingconfigtemplates.yaml`,
    file: 'scheduling-config-template.json',
  },
  {
    name: 'GPUNode',
    url: `${PREFIX}/config/crd/bases/tensor-fusion.ai_gpunodes.yaml`,
    file: 'gpu-node.json',
  },
  {
    name: 'GPU',
    url: `${PREFIX}/config/crd/bases/tensor-fusion.ai_gpus.yaml`,
    file: 'gpu.json',
  },
  {
    name: 'GPUNodeClass',
    url: `${PREFIX}/config/crd/bases/tensor-fusion.ai_gpunodeclasses.yaml`,
    file: 'gpu-node-class.json',
  },
  {
    name: 'WorkloadProfile',
    url: `${PREFIX}/config/crd/bases/tensor-fusion.ai_workloadprofiles.yaml`,
    file: 'workload-profile.json',
  },
  {
    name: 'TensorFusionWorkload',
    url: `${PREFIX}/config/crd/bases/tensor-fusion.ai_tensorfusionworkloads.yaml`,
    file: 'workload-profile.json',
  },
]

// Create a map of kind to file name for cross-referencing
const kindToFileMap = {}
schemaList.forEach(schema => {
  kindToFileMap[schema.name] = kebabCase(schema.name) + '.md'
})

const TYPES_DIR = './types/crd'
const JSON_DIR = './public/json'
const DOCS_DIR = './docs/en/reference/schema'

// Ensure directories exist
if (!fs.existsSync(TYPES_DIR)) {
  fs.mkdirSync(TYPES_DIR, { recursive: true })
}
if (!fs.existsSync(JSON_DIR)) {
  fs.mkdirSync(JSON_DIR, { recursive: true })
}
if (!fs.existsSync(DOCS_DIR)) {
  fs.mkdirSync(DOCS_DIR, { recursive: true })
}

async function downloadYaml(url) {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Failed to fetch YAML: ${response.statusText}`)
    }
    consola.log(`YAML file ${url} downloaded successfully.`)
    return await response.text()
  }
  catch (error) {
    console.error('Error downloading YAML file:', error)
    process.exit(1)
  }
}

function formatType(type, format) {  
  if (format) {
    return `${escapeHtml(type)}&lt;${escapeHtml(format)}&gt;`
  }
  return `${escapeHtml(type)}`
}

function getDefaultValue(schema) {
  if (schema.default !== undefined) {
    if (typeof schema.default === 'object') {
      return `\`${escapeHtml(JSON.stringify(schema.default))}\``
    }
    return `\`${escapeHtml(String(schema.default))}\``
  }
  return ''
}

function getRequired(required = [], propertyName) {
  return required.includes(propertyName) ? '<span class="required-tag"></span>' : ''
}

function formatConstraints(schema) {
  const constraints = []
  
  if (schema.minimum !== undefined) {
    constraints.push(`<span class="constraint-tag">min: ${escapeHtml(String(schema.minimum))}</span>`)
  }
  
  if (schema.maximum !== undefined) {
    constraints.push(`<span class="constraint-tag">max: ${escapeHtml(String(schema.maximum))}</span>`)
  }
  
  if (schema.minLength !== undefined) {
    constraints.push(`<span class="constraint-tag">minLength: ${escapeHtml(String(schema.minLength))}</span>`)
  }
  
  if (schema.maxLength !== undefined) {
    constraints.push(`<span class="constraint-tag">maxLength: ${escapeHtml(String(schema.maxLength))}</span>`)
  }
  
  if (schema.pattern) {
    // Ensure pattern regex is properly escaped as HTML
    // TODO: escape not working constraints.push(`<span class="constraint-tag">pattern: ${escapeHtml(schema.pattern)}</span>`)
    constraints.push(`<span class="constraint-tag" title="${escapeHtml(schema.pattern)}">pattern: Regex</span>`)
  }
  
  return constraints.join(' ')
}

function formatEnumValues(enumValues) {
  if (!enumValues || !Array.isArray(enumValues) || enumValues.length === 0) {
    return ''
  }
  
  // Format enum values as tags
  return enumValues.map(value => `<span class="enum-tag">${escapeHtml(String(value))}</span>`).join(' ')
}

function kebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()
}


function generatePropertyTable(properties, required = [], level = 0, parentPath = '', schemaPrefix = '') {
  if (!properties || Object.keys(properties).length === 0) {
    return ''
  }

  let markdown = ''
  
  // For nested properties, add a heading based on level
  if (level > 0) {
    const heading = '#'.repeat(Math.min(level + 2, 6))
    const headingId = parentPath ? `${parentPath.replace(/\./g, '-')}` : ''
    markdown += `${heading} Properties ${headingId ? `{#properties-${schemaPrefix}-${headingId}}` : ''}\n\n`
  }

  // Start the table using standard markdown table
  markdown += '| <div style="min-width:110px">Property</div> | Type | <div style="min-width:130px">Constraints</div> | <div style="min-width:125px">Description</div> |\n'
  markdown += '|----------|------|------------|-------------|\n'

  // Process each property
  for (const [name, schema] of Object.entries(properties)) {
    const currentPath = parentPath ? `${parentPath}.${name}` : name
    // Create a unique ID by prefixing with schema name to avoid ID collisions across documents
    const uniqueId = `property-${schemaPrefix}-${currentPath}`.replace(/\./g, '-')
    
    const type = schema.type || (schema.properties ? 'object' : (schema.items ? 'array' : 'any'))
    const isRequired = getRequired(required, name)
    const defaultValue = getDefaultValue(schema)
    const description = schema.description || ''
    const enumValues = formatEnumValues(schema.enum)
    const constraints = formatConstraints(schema)
    
    // Create a formatted description with potential links to other CRDs
    let formattedDescription = escapeHtml(description)
    
    // Add default value to description if it exists
    if (defaultValue) {
      formattedDescription += ` Default: ${defaultValue}`
    }
    
    // Format with or without expandable row feature
    if (schema.properties || (schema.items && schema.items.properties)) {
      // This is an object that can be expanded
      markdown += `| <b style="cursor: pointer;" @click="scrollToDetail('${uniqueId}-details')">${escapeHtml(name)}</b>${isRequired} <span id="${uniqueId}" class="expandable-property" data-uid="${uniqueId}" @click="toggleExpand('${uniqueId}-details')">↓</span> | ${formatType(type, schema.format)} | ${constraints} ${enumValues} | ${formattedDescription} |\n`
    } else {
      // Regular property
      markdown += `| <b style="cursor: pointer;" @click="scrollToDetail('${uniqueId}-details')">${escapeHtml(name)}</b>${isRequired} | ${formatType(type, schema.format)} | ${constraints} ${enumValues} | ${formattedDescription} |\n`
    }
  }

  markdown += '\n'

  // Generate nested property sections with collapsible divs
  for (const [name, schema] of Object.entries(properties)) {
    const currentPath = parentPath ? `${parentPath}.${name}` : name
    const uniqueId = `property-${schemaPrefix}-${currentPath}`.replace(/\./g, '-')
    
    if (schema.properties) {
      // Open a div for this nested property
      markdown += `<div id="${uniqueId}-details" class="nested-properties expanded">\n\n`
      markdown += `### ${name} {#${uniqueId}-heading}\n\n`
      markdown += schema.description ? `${escapeHtml(schema.description)}\n\n` : ''
      
      // Recursively generate nested property tables for objects
      markdown += generatePropertyTable(schema.properties, schema.required || [], level + 1, currentPath, schemaPrefix)
      
      // Close the div for this nested property
      markdown += `</div>\n\n`
    } else if (schema.items && schema.items.properties) {
      // Open a div for this array item
      markdown += `<div id="${uniqueId}-details" class="nested-properties expanded">\n\n`
      markdown += `### ${name} (items) {#${uniqueId}-heading-items}\n\n`
      markdown += schema.description ? `${escapeHtml(schema.description)}\n\n` : ''
      
      // Recursively generate nested property tables for array items
      markdown += generatePropertyTable(schema.items.properties, schema.items.required || [], level + 1, `${currentPath}.items`, schemaPrefix)
      
      // Close the div for this array item
      markdown += `</div>\n\n`
    }
  }

  return markdown
}

function generateExampleYaml(schemaName, apiVersion, kind, properties) {
  // Create a simplified example based on properties
  const example = {
    apiVersion,
    kind,
    metadata: {
      name: `example-${kebabCase(kind)}`,
    },
    spec: {},
  }

  // Add first-level required properties as examples
  if (properties) {
    for (const [name, schema] of Object.entries(properties)) {
      if (schema.type === 'object') {
        example.spec[name] = {}
      } else if (schema.type === 'array') {
        example.spec[name] = []
      } else if (schema.type === 'string') {
        example.spec[name] = `example-${name}`
      } else if (schema.type === 'integer' || schema.type === 'number') {
        example.spec[name] = 1
      } else if (schema.type === 'boolean') {
        example.spec[name] = true
      }
    }
  }

  return yaml.dump(example)
}

function generateMarkdownDoc(schema, yamlContent) {
  const doc = yaml.load(yamlContent)
  const apiVersion = doc.spec.group + '/' + doc.spec.versions[0].name
  const kind = doc.spec.names.kind
  const schemaObj = doc.spec.versions[0].schema.openAPIV3Schema
  
  // Generate a unique schema prefix for IDs based on the kind name
  const schemaPrefix = kebabCase(kind)
  
  consola.log(`Generating Markdown for ${kind}...`)

  let markdown = `---
pageClass: home
---
# ${escapeHtml(kind)}\n\n`

  // Add description
  if (schemaObj.description) {
    markdown += `${escapeHtml(schemaObj.description)}\n\n`
  }

  // Add navigation and search helpers
  markdown += `<div class="crd-navigation">
  <div class="crd-search">
    <input type="text" id="${schemaPrefix}-property-search" placeholder="Search properties..." @input="filterProperties('${schemaPrefix}')">
  </div>
  <div class="crd-actions">
    <button @click="expandAll('${schemaPrefix}')">Expand All</button>
    <button @click="collapseAll('${schemaPrefix}')">Collapse All</button>
  </div>
</div>\n\n`

  // Add Kubernetes Resource information
  markdown += `## Kubernetes Resource Information\n\n`
  markdown += `| Field | Value |\n`
  markdown += `|-------|-------|\n`
  markdown += `| API Version | ${escapeHtml(apiVersion)} |\n`
  markdown += `| Kind | ${escapeHtml(kind)} |\n`
  markdown += `| Scope | ${escapeHtml(doc.spec.scope)} |\n\n`

  // Add table of contents for quick navigation
  markdown += `## Table of Contents\n\n`
  markdown += `- [API Information](#api-information)\n`
  if (schemaObj.properties && schemaObj.properties.spec) {
    markdown += `- [Spec](#spec)\n`
  }
  if (schemaObj.properties && schemaObj.properties.status) {
    markdown += `- [Status](#status)\n`
  }
  markdown += `- [Example](#example)\n\n`

  // Spec section
  if (schemaObj.properties && schemaObj.properties.spec) {
    const specSchema = schemaObj.properties.spec
    markdown += `## Spec\n\n`
    
    if (specSchema.description) {
      markdown += `${escapeHtml(specSchema.description)}\n\n`
    }
    
    const required = specSchema.required || []
    markdown += generatePropertyTable(specSchema.properties, required, 0, '', schemaPrefix)
  }

  // Status section
  if (schemaObj.properties && schemaObj.properties.status) {
    const statusSchema = schemaObj.properties.status
    markdown += `## Status\n\n`
    
    if (statusSchema.description) {
      markdown += `${escapeHtml(statusSchema.description)}\n\n`
    }
    
    const required = statusSchema.required || []
    markdown += generatePropertyTable(statusSchema.properties, required, 0, '', schemaPrefix)
  }

  // Example section
  markdown += `## Example\n\n`
  markdown += '```yaml\n'
  markdown += generateExampleYaml(
    schema.name, 
    apiVersion, 
    kind, 
    schemaObj.properties?.spec?.properties
  )
  markdown += '```\n\n'

  // Add client-side JavaScript for interactivity
  markdown += `<script setup>
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
`

  return markdown
}

async function main() {
  for (const schema of schemaList) {
    // Download and parse YAML
    const yamlContent = await downloadYaml(schema.url)
    const doc = yaml.load(yamlContent)
    
    // Generate markdown documentation
    const markdown = generateMarkdownDoc(schema, yamlContent)
    
    // Determine the file name based on kind
    const kind = doc.spec.names.kind
    const fileName = kebabCase(kind) + '.md'
    
    // Add entry to kind to file map for cross-referencing
    kindToFileMap[kind] = fileName
    
    // Save the markdown file
    fs.writeFileSync(
      path.join(DOCS_DIR, fileName),
      markdown
    )
    
    consola.success(`Generated documentation for ${kind} at ${path.join(DOCS_DIR, fileName)}`)
  }
}

main().catch(error => {
  console.error('Error generating CRD documentation:', error)
  process.exit(1)
})
