#!/usr/bin/env bun
/**
 * Enhanced documentation generator for ts-pkgx packages
 * Creates comprehensive VitePress-compatible documentation
 */

import type { PkgxPackage } from '../src/types'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

// Default output directory
const DEFAULT_DOCS_DIR = path.join(process.cwd(), 'docs')

// Import pantry dynamically to avoid circular dependencies
async function importPantry() {
  try {
    const packages = await import('../src/packages')
    return packages.pantry as unknown as Record<string, PkgxPackage>
  }
  catch (error) {
    console.error('Error importing pantry:', error)
    return {}
  }
}

/**
 * Enhanced category mapping with better organization
 * Note: Domain names are normalized (dots removed, lowercase)
 */
function getCategoryMapping(): Record<string, string[]> {
  return {
    'Programming Languages': [
      'nodejsorg',
      'node',
      'pythonorg',
      'python',
      'rustlangorg',
      'rubylangorg',
      'godev',
      'scalalangorg',
      'julialangorg',
      'kotlinlangorg',
      'perlorg',
      'phpnet',
      'swiftorg',
      'typescriptlangorg',
      'crystallangorg',
      'elixirlangorg',
      'haskellorg',
      'gleamrun',
      'denoland',
      'vlangio',
      'ziglangorg',
      'nimlangorg',
      'ocamlorg',
      'dartdev',
      'erlangorg',
    ],
    'JavaScript & Node.js Ecosystem': [
      'nodejsorg',
      'node',
      'bunsh',
      'denoland',
      'npmjscom',
      'pnpmio',
      'yarnpkgcom',
      'classicyarnpkgcom',
      'vitejsdev',
      'angulardev',
      'expodev',
      'flutterdev',
    ],
    'Package Managers & Build Tools': [
      'npmjscom',
      'pnpmio',
      'yarnpkgcom',
      'pythonpoetryorg',
      'pipenvpypaio',
      'pippypaio',
      'rubygemsorg',
      'cratesio',
      'mavenapacheorg',
      'gradleorg',
      'cmakeorg',
      'ninjabuildorg',
      'mesonbuildcom',
    ],
    'Databases': [
      'postgresqlorg',
      'mysqlcom',
      'redisio',
      'mongodbcom',
      'sqliteorg',
      'cassandraapacheorg',
      'influxdatacom',
      'couchdbapacheorg',
      'neo4jcom',
      'clickhousecom',
      'surrealdbcom',
      'duckdborg',
      'valkeyio',
    ],
    'DevOps & Infrastructure': [
      'dockercom',
      'kubernetesio',
      'terraformio',
      'helmsh',
      'consulio',
      'vaulthashicorpio',
      'nomadprojectio',
      'ansiblecom',
      'podmanio',
      'traefikio',
      'envoyproxyio',
      'istioio',
      'ciliumio',
      'fluxcdio',
      'argoprojgithubio',
    ],
    'Cloud Platforms & Services': [
      'awsamazoncom',
      'githubcom',
      'gitlabcom',
      'digitaloceancom',
      'herokucom',
      'vercelcom',
      'cloudflarecom',
      'flyio',
      'railwayapp',
    ],
    'Monitoring & Observability': [
      'prometheusio',
      'grafanacom',
      'jaegertracingiojaeger',
      'opentelemetryio',
      'sentryio',
      'datadogcom',
    ],
    'Security & Authentication': [
      'hashicorpcom',
      'bitwardencom',
      'developer1passwordcom',
      'auth0com',
      'oktacom',
      'keycloakorg',
    ],
    'Development Tools': [
      'gitscmorg',
      'githubcom',
      'gitlabcom',
      'codevisualstudiocom',
      'neovimio',
      'vimorg',
      'jetbrainscom',
      'prettierio',
      'eslintorg',
    ],
    'CLI Tools & Utilities': [
      'curlse',
      'wgetgnuorg',
      'jqstedolangithubio',
      'ripgrepburntsushinet',
      'fdsharkdpgithubio',
      'batsharkdpgithubio',
      'exavaladaptivenet',
      'htopdev',
      'tmuxgithubio',
    ],
    'Web Servers & Proxies': [
      'nginxorg',
      'apacheorg',
      'caddycommunity',
      'traefikio',
      'envoyproxyio',
      'haproxyorg',
    ],
    'Testing & Quality Assurance': [
      'jestio',
      'cypressio',
      'playwrightdev',
      'seleniumdev',
      'pytestorg',
      'junitorg',
    ],
  }
}

/**
 * Generate package catalog with proper categorization
 */
async function generatePackageCatalog(outputDir: string): Promise<string> {
  const pantry = await importPantry()
  const categories = getCategoryMapping()
  const catalogPath = path.join(outputDir, 'package-catalog.md')

  // Track categorized packages
  const categorizedDomains = new Set<string>()
  Object.values(categories).forEach((domains) => {
    domains.forEach(domain => categorizedDomains.add(domain))
  })

  // Add uncategorized packages to Utilities
  const uncategorizedPackages: string[] = []
  Object.keys(pantry).forEach((domain) => {
    if (!categorizedDomains.has(domain)) {
      uncategorizedPackages.push(domain)
    }
  })

  if (uncategorizedPackages.length > 0) {
    categories['Other Utilities'] = uncategorizedPackages
  }

  let content = `# Package Catalog

This comprehensive catalog lists all ${Object.keys(pantry).length}+ packages available in ts-pkgx, organized by category.

Each package can be accessed using \`getPackage(name)\` or directly via \`pantry[domain]\`.

## Quick Stats

- **Total Packages**: ${Object.keys(pantry).length}
- **Categories**: ${Object.keys(categories).length}
- **Last Updated**: ${new Date().toISOString().split('T')[0]}

## Table of Contents

`

  // Generate table of contents
  Object.keys(categories).forEach((category) => {
    const slug = category.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    const count = categories[category].filter(domain => pantry[domain]).length
    content += `- [${category}](#${slug}) (${count} packages)\n`
  })

  content += '\n'

  // Generate sections for each category
  for (const [category, domains] of Object.entries(categories)) {
    const validDomains = domains.filter(domain => pantry[domain]).sort()

    if (validDomains.length === 0)
      continue

    content += `## ${category}\n\n`
    content += `*${validDomains.length} packages in this category*\n\n`
    content += '| Package | Description | Programs | Versions | Install |\n'
    content += '|---------|-------------|----------|----------|----------|\n'

    for (const domain of validDomains) {
      try {
        const pkg = pantry[domain]
        if (!pkg)
          continue

        // Format aliases
        const aliases = pkg.aliases ? ` (${pkg.aliases.join(', ')})` : ''

        // Limit programs display and escape template variables for VitePress
        let programs = pkg.programs.slice(0, 3).map(p => p.replace(/\{\{/g, '&lbrace;&lbrace;').replace(/\}\}/g, '&rbrace;&rbrace;')).join(', ')
        if (pkg.programs.length > 3) {
          programs += `, ... (+${pkg.programs.length - 3})`
        }
        if (pkg.programs.length === 0) {
          programs = '-'
        }

        // Get version info
        const versionCount = pkg.versions?.length || 0
        const latestVersion = pkg.versions?.[0] || 'latest'
        const versionInfo = versionCount > 0 ? `${latestVersion} (+${versionCount - 1})` : 'latest'

        // Escape pipe characters and limit description length
        let description = pkg.description.replace(/\|/g, '\\|')
        if (description.length > 100) {
          description = `${description.substring(0, 97)}...`
        }

        // Create install command
        const installCmd = `\`pkgx ${pkg.name || domain}\``

        content += `| **[${domain}](./packages/${domain.replace(/\./g, '-')}.md)**${aliases} | ${description} | ${programs} | ${versionInfo} | ${installCmd} |\n`
      }
      catch (error) {
        console.error(`Error processing ${domain}:`, error)
        content += `| **${domain}** | Error retrieving package information | - | - | - |\n`
      }
    }

    content += '\n'
  }

  // Add usage examples
  content += `## Usage Examples

### Basic Usage

\`\`\`typescript
import { getPackage, pantry } from 'ts-pkgx'

// Get a package by domain
const nodePackage = pantry['nodejs.org']

// Get a package by alias
const nodeByAlias = getPackage('node')

// Access package properties
console.log(\`Package: \${nodePackage.name} - \${nodePackage.description}\`)
console.log(\`Install: \${nodePackage.installCommand}\`)
console.log(\`Programs: \${nodePackage.programs.join(', ')}\`)
\`\`\`

### Advanced Usage

\`\`\`typescript
// Find packages by category
const databases = [
  pantry['postgresql.org'],
  pantry['mysql.com'],
  pantry['redis.io'],
  pantry['mongodb.com']
]

// Get all available versions
const nodeVersions = pantry['nodejs.org'].versions
console.log(\`Node.js versions: \${nodeVersions.slice(0, 5).join(', ')}...\`)

// Check dependencies
const nodeDeps = pantry['nodejs.org'].dependencies
console.log(\`Node.js dependencies: \${nodeDeps.join(', ')}\`)
\`\`\`

### Installation Examples

\`\`\`bash
# Install using pkgx
pkgx node
pkgx python
pkgx rust

# Install specific versions
pkgx node@20
pkgx python@3.11

# Install multiple packages
pkgx node python rust
\`\`\`

## Package Information

Each package includes:

- **Name**: Short identifier for the package
- **Domain**: Full domain identifier
- **Description**: What the package does
- **Programs**: Executable programs provided
- **Versions**: Available versions
- **Dependencies**: Required dependencies
- **Companions**: Related packages
- **Install Command**: How to install with pkgx

## Contributing

To add or update packages, see our [contribution guide](./contributing.md).
`

  fs.writeFileSync(catalogPath, content)
  return catalogPath
}

/**
 * Generate individual package documentation pages
 */
async function generatePackagePages(outputDir: string): Promise<string[]> {
  const pantry = await importPantry()
  const packagesDir = path.join(outputDir, 'packages')

  // Ensure packages directory exists
  if (!fs.existsSync(packagesDir)) {
    fs.mkdirSync(packagesDir, { recursive: true })
  }

  const generatedFiles: string[] = []

  for (const [domain, pkg] of Object.entries(pantry)) {
    try {
      const filename = `${domain.replace(/\./g, '-')}.md`
      const filepath = path.join(packagesDir, filename)

      let content = `# ${pkg.name || domain}

> ${pkg.description}

## Package Information

- **Domain**: \`${domain}\`
- **Name**: \`${pkg.name || domain}\`
- **Homepage**: ${pkg.homepageUrl || 'Not specified'}
- **Source**: [View on GitHub](${pkg.packageYmlUrl || pkg.githubUrl || '#'})

## Installation

\`\`\`bash
# Install with pkgx
${pkg.installCommand || `pkgx ${pkg.name || domain}`}
\`\`\`

## Programs

This package provides the following executable programs:

`

      if (pkg.programs && pkg.programs.length > 0) {
        pkg.programs.forEach((program) => {
          // Escape template variables for VitePress
          const escapedProgram = program.replace(/\{\{/g, '&lbrace;&lbrace;').replace(/\}\}/g, '&rbrace;&rbrace;')
          content += `- \`${escapedProgram}\`\n`
        })
      }
      else {
        content += '*No programs specified*\n'
      }

      // Add aliases if available
      if (pkg.aliases && pkg.aliases.length > 0) {
        content += `\n## Aliases

This package can also be accessed using these aliases:

`
        pkg.aliases.forEach((alias) => {
          content += `- \`${alias}\`\n`
        })
      }

      // Add versions
      if (pkg.versions && pkg.versions.length > 0) {
        content += `\n## Available Versions

<details>
<summary>Show all ${pkg.versions.length} versions</summary>

`
        // Show versions in a more readable format
        const versionChunks = []
        for (let i = 0; i < pkg.versions.length; i += 5) {
          versionChunks.push(pkg.versions.slice(i, i + 5))
        }

        versionChunks.forEach((chunk) => {
          content += `- ${chunk.map(v => `\`${v}\``).join(', ')}\n`
        })

        content += `\n</details>

**Latest Version**: \`${pkg.versions[0]}\`

### Install Specific Version

\`\`\`bash
# Install specific version
pkgx ${pkg.name || domain}@${pkg.versions[0]}
\`\`\`
`
      }

      // Add dependencies
      if (pkg.dependencies && pkg.dependencies.length > 0) {
        content += `\n## Dependencies

This package depends on:

`
        pkg.dependencies.forEach((dep) => {
          content += `- \`${dep}\`\n`
        })
      }

      // Add companions
      if (pkg.companions && pkg.companions.length > 0) {
        content += `\n## Related Packages

These packages work well with ${pkg.name || domain}:

`
        pkg.companions.forEach((companion) => {
          const companionPkg = pantry[companion]
          if (companionPkg) {
            content += `- [\`${companion}\`](${companion.replace(/\./g, '-')}.md) - ${companionPkg.description}\n`
          }
          else {
            content += `- \`${companion}\`\n`
          }
        })
      }

      // Add usage examples
      content += `\n## Usage Examples

\`\`\`typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['${domain}']

console.log(\`Package: \${pkg.name}\`)
console.log(\`Description: \${pkg.description}\`)
console.log(\`Programs: \${pkg.programs.join(', ')}\`)
\`\`\`

## Links

- [Package Source](${pkg.packageYmlUrl || pkg.githubUrl || '#'})
- [Homepage](${pkg.homepageUrl || '#'})
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
`

      fs.writeFileSync(filepath, content)
      generatedFiles.push(filepath)
    }
    catch (error) {
      console.error(`Error generating page for ${domain}:`, error)
    }
  }

  return generatedFiles
}

/**
 * Generate category index pages
 */
async function generateCategoryPages(outputDir: string): Promise<string[]> {
  const pantry = await importPantry()
  const categories = getCategoryMapping()
  const categoriesDir = path.join(outputDir, 'categories')

  // Ensure categories directory exists
  if (!fs.existsSync(categoriesDir)) {
    fs.mkdirSync(categoriesDir, { recursive: true })
  }

  const generatedFiles: string[] = []

  for (const [categoryName, domains] of Object.entries(categories)) {
    const validDomains = domains.filter(domain => pantry[domain])
    if (validDomains.length === 0)
      continue

    const filename = `${categoryName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.md`
    const filepath = path.join(categoriesDir, filename)

    let content = `# ${categoryName}

*${validDomains.length} packages in this category*

${categoryName === 'Programming Languages'
    ? 'Popular programming languages and their runtimes available through pkgx.'
    : categoryName === 'Databases'
      ? 'Database systems and data storage solutions.'
      : categoryName === 'DevOps & Infrastructure'
        ? 'Tools for deployment, orchestration, and infrastructure management.'
        : `Packages related to ${categoryName.toLowerCase()}.`
}

## Packages

`

    validDomains.sort().forEach((domain) => {
      const pkg = pantry[domain]
      if (pkg) {
        const aliases = pkg.aliases ? ` (${pkg.aliases.join(', ')})` : ''
        content += `### [${domain}](../packages/${domain.replace(/\./g, '-')}.md)${aliases}

${pkg.description}

**Programs**: ${pkg.programs.length > 0 ? pkg.programs.map(p => p.replace(/\{\{/g, '&lbrace;&lbrace;').replace(/\}\}/g, '&rbrace;&rbrace;')).join(', ') : 'None specified'}

**Install**: \`${pkg.installCommand || `pkgx ${pkg.name || domain}`}\`

---

`
      }
    })

    content += `\n[← Back to Package Catalog](../package-catalog.md)
`

    fs.writeFileSync(filepath, content)
    generatedFiles.push(filepath)
  }

  return generatedFiles
}

/**
 * Main documentation generation function
 */
export async function generateDocs(outputDir: string = DEFAULT_DOCS_DIR): Promise<void> {
  console.error('🚀 Generating comprehensive package documentation...')

  try {
    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
    }

    // Generate main catalog
    console.error('📚 Generating package catalog...')
    const catalogPath = await generatePackageCatalog(outputDir)
    console.error(`✅ Generated: ${catalogPath}`)

    // Generate individual package pages
    console.error('📄 Generating individual package pages...')
    const packagePages = await generatePackagePages(outputDir)
    console.error(`✅ Generated ${packagePages.length} package pages`)

    // Generate category pages
    console.error('📂 Generating category pages...')
    const categoryPages = await generateCategoryPages(outputDir)
    console.error(`✅ Generated ${categoryPages.length} category pages`)

    console.error(`\n🎉 Documentation generation complete!`)
    console.error(`📍 Output directory: ${outputDir}`)
    console.error(`📊 Total files generated: ${1 + packagePages.length + categoryPages.length}`)
    console.error(`\nFiles generated:`)
    console.error(`- Package catalog: ${catalogPath}`)
    console.error(`- Package pages: ${packagePages.length} files in docs/packages/`)
    console.error(`- Category pages: ${categoryPages.length} files in docs/categories/`)
  }
  catch (error) {
    console.error('❌ Error generating documentation:', error)
    throw error
  }
}

// Main function - only called when run directly
async function main() {
  try {
    const outputDir = process.argv[2] || DEFAULT_DOCS_DIR
    await generateDocs(outputDir)
    console.error('\n✨ Documentation generation completed successfully!')
  }
  catch (error) {
    console.error('💥 Error generating documentation:', error)
    process.exit(1)
  }
}

// Run the main function only when run directly
if (import.meta.url.endsWith('generate-docs.ts')) {
  main()
}
