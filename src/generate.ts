/* eslint-disable no-console */

/**
 * Script to generate the index.ts file for packages directory and documentation
 * This will scan the packages directory and automatically create imports and exports
 * for all package files found, as well as generate comprehensive documentation.
 */
import type { PkgxPackage } from './types'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { convertDomainToVarName, guessOriginalDomain } from './utils'

// The packages directory path
const PACKAGES_DIR = path.join(process.cwd(), 'src', 'packages')
// The index file path
const INDEX_FILE = path.join(PACKAGES_DIR, 'index.ts')
// The aliases file path
const ALIASES_FILE = path.join(PACKAGES_DIR, 'aliases.ts')
// Default documentation output directory
const DEFAULT_DOCS_DIR = path.join(process.cwd(), 'docs')

// Files to exclude from the index
const EXCLUDED_FILES = ['index.ts', 'aliases.ts']

// Special module names that need custom handling
const SPECIAL_MODULES: Record<string, string> = {
  undefined: 'undefinedpkg', // Rename to avoid conflict with JavaScript undefined
}

// Import pantry dynamically to avoid circular dependencies
async function importPantry() {
  try {
    const packages = await import('./packages')
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
 * Safely convert a filename to a valid JavaScript identifier
 * @param moduleName The module filename without extension
 * @returns A valid JavaScript identifier
 */
function toSafeVarName(moduleName: string): string {
  if (SPECIAL_MODULES[moduleName]) {
    return SPECIAL_MODULES[moduleName]
  }
  // Replace special characters with underscores
  return moduleName.replace(/\W/g, '_')
}

/**
 * Normalize a module name by converting to lowercase
 * This helps with files that have capital letters in their names
 * @param moduleName The module filename without extension
 * @returns A normalized module name
 */
function normalizeModuleName(moduleName: string): string {
  return moduleName.toLowerCase()
}

/**
 * Convert a filename to the expected type name in the file
 * @param moduleName The module filename without extension
 * @returns The expected type name
 */
function toTypeName(moduleName: string): string {
  // If it's a special module, use the special name with first letter capitalized
  if (SPECIAL_MODULES[moduleName]) {
    const special = SPECIAL_MODULES[moduleName]
    return `${special.charAt(0).toUpperCase()}${special.slice(1)}Package`
  }

  // Normalize the module name to lowercase to handle case sensitivity
  const normalized = normalizeModuleName(moduleName)

  // The pattern in the actual files is that a filename like "foo.bar" becomes FoobarPackage
  // rather than FooBarPackage, so we need to replace dots and other special characters

  // Remove special characters
  const safe = normalized.replace(/\W/g, '')

  // Then capitalize the first letter
  return `${safe.charAt(0).toUpperCase()}${safe.slice(1)}Package`
}

/**
 * Convert a filename to the expected package variable name in the file
 * @param moduleName The module filename without extension
 * @returns The expected package variable name
 */
function toPackageVarName(moduleName: string): string {
  // Special handling for special modules
  if (SPECIAL_MODULES[moduleName]) {
    return `${SPECIAL_MODULES[moduleName]}Package`
  }

  // Normalize the module name to lowercase to handle case sensitivity
  const normalized = normalizeModuleName(moduleName)

  // For package variable names, follow the same pattern as type names
  // but without capitalizing the first letter
  const safe = normalized.replace(/\W/g, '')
  return `${safe}Package`
}

/**
 * Generate the index.ts file for the packages directory
 * @returns The path to the generated index file
 */
export async function generateIndex(): Promise<string | null> {
  try {
    // Get all TS files in the packages directory
    const files = await fs.promises.readdir(PACKAGES_DIR)
    const packageFiles = files.filter(file =>
      file.endsWith('.ts')
      && !EXCLUDED_FILES.includes(file),
    )

    // Custom sort function that handles paths with hyphens correctly
    // Ensures base paths like './viaduct.ai' come before extended paths like './viaduct.ai-ksops'
    packageFiles.sort((a, b) => {
      const aName = path.basename(a, '.ts')
      const bName = path.basename(b, '.ts')

      // Handle special cases where we need to override normal alphabetical sorting
      const specialCases: Record<string, string[]> = {
        'libssh.org': ['libssh2.org'], // libssh2.org should come before libssh.org
      }

      // Check special case overrides
      for (const [before, afters] of Object.entries(specialCases)) {
        if (aName === before && afters.includes(bName))
          return 1
        if (bName === before && afters.includes(aName))
          return -1
      }

      // Check if one is a sub-path of the other (has a hyphen extension)
      if (bName.startsWith(`${aName}-`))
        return -1
      if (aName.startsWith(`${bName}-`))
        return 1

      // Normal alphabetical sorting
      return aName.localeCompare(bName)
    })

    // Create the imports section
    let imports = ''

    // Create the interface declaration with comprehensive JSDoc
    let interfaceDecl = `/**
 * The Pantry interface provides access to all available pkgx packages.
 * Each property represents a package domain and provides comprehensive package information
 * including metadata, installation commands, available programs, versions, and dependencies.
 *
 * @example
 * \`\`\`typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access Node.js package
 * const node = pantry.nodejsorg
 * console.log(node.description) // "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine"
 * console.log(node.programs)    // ["node", "npm", "npx"]
 * console.log(node.versions[0]) // Latest version
 *
 * // Access Bun package
 * const bun = pantry.bunsh
 * console.log(bun.installCommand) // Installation command
 * \`\`\`
 */
export interface Pantry {
`

    // Create the pantry object
    let pantry = 'export const pantry: Pantry = {\n'

    // Import pantry to get package data for documentation
    const pantryData = await importPantry()

    // Process each package file
    for (const file of packageFiles) {
      const moduleName = path.basename(file, '.ts')
      const moduleVarName = toSafeVarName(moduleName)
      const packageVarName = toPackageVarName(moduleName)
      const typeName = toTypeName(moduleName)

      // Domain is used as the key in the types and pantry objects
      const domain = guessOriginalDomain(moduleName)
      const domainVarName = convertDomainToVarName(domain)

      // Add the import
      imports += `import * as ${moduleVarName} from './${moduleName}'\n`

      // Get package data for JSDoc
      const pkgData = pantryData[domainVarName]

      // Generate comprehensive JSDoc for this package
      let jsdoc = '  /**\n'

      if (pkgData) {
        // Package name and description
        jsdoc += `   * **${pkgData.name || domain}**${pkgData.description ? ` - ${pkgData.description}` : ''}\n`
        jsdoc += '   *\n'

        // Domain information
        jsdoc += `   * @domain \`${domain}\`\n`

        // Programs provided
        if (pkgData.programs && pkgData.programs.length > 0) {
          const programsList = pkgData.programs.slice(0, 5).join('`, `')
          const morePrograms = pkgData.programs.length > 5 ? `, ... (+${pkgData.programs.length - 5} more)` : ''
          jsdoc += `   * @programs \`${programsList}\`${morePrograms}\n`
        }

        // Latest version
        if (pkgData.versions && pkgData.versions.length > 0) {
          jsdoc += `   * @version \`${pkgData.versions[0]}\` (${pkgData.versions.length} versions available)\n`
        }

        // Installation command
        if (pkgData.installCommand) {
          jsdoc += `   * @install \`${pkgData.installCommand}\`\n`
        }

        // Aliases
        if (pkgData.aliases && pkgData.aliases.length > 0) {
          jsdoc += `   * @aliases ${pkgData.aliases.map(a => `\`${a}\``).join(', ')}\n`
        }

        // Homepage URL
        if (pkgData.homepageUrl) {
          jsdoc += `   * @homepage ${pkgData.homepageUrl}\n`
        }

        // Dependencies
        if (pkgData.dependencies && pkgData.dependencies.length > 0) {
          const depsList = pkgData.dependencies.slice(0, 3).join('`, `')
          const moreDeps = pkgData.dependencies.length > 3 ? `, ... (+${pkgData.dependencies.length - 3} more)` : ''
          jsdoc += `   * @dependencies \`${depsList}\`${moreDeps}\n`
        }

        // Companions
        if (pkgData.companions && pkgData.companions.length > 0) {
          const companionsList = pkgData.companions.slice(0, 3).join('`, `')
          const moreCompanions = pkgData.companions.length > 3 ? `, ... (+${pkgData.companions.length - 3} more)` : ''
          jsdoc += `   * @companions \`${companionsList}\`${moreCompanions}\n`
        }

        jsdoc += '   *\n'
        jsdoc += '   * @example\n'
        jsdoc += '   * ```typescript\n'
        jsdoc += `   * import { pantry } from 'ts-pkgx'\n`
        jsdoc += '   *\n'
        jsdoc += `   * const pkg = pantry.${domainVarName}\n`
        jsdoc += `   * console.log(pkg.name)        // "${pkgData.name || domain}"\n`
        if (pkgData.description) {
          const shortDesc = pkgData.description.length > 50 ? `${pkgData.description.substring(0, 47)}...` : pkgData.description
          jsdoc += `   * console.log(pkg.description) // "${shortDesc}"\n`
        }
        if (pkgData.programs && pkgData.programs.length > 0) {
          jsdoc += `   * console.log(pkg.programs)    // [${pkgData.programs.slice(0, 2).map(p => `"${p}"`).join(', ')}${pkgData.programs.length > 2 ? ', ...' : ''}]\n`
        }
        if (pkgData.versions && pkgData.versions.length > 0) {
          jsdoc += `   * console.log(pkg.versions[0]) // "${pkgData.versions[0]}"\n`
        }
        jsdoc += '   * ```\n'
      }
      else {
        // Fallback for packages without data
        jsdoc += `   * **${domain}** - pkgx package\n`
        jsdoc += '   *\n'
        jsdoc += `   * @domain \`${domain}\`\n`
        jsdoc += '   *\n'
        jsdoc += '   * @example\n'
        jsdoc += '   * ```typescript\n'
        jsdoc += `   * import { pantry } from 'ts-pkgx'\n`
        jsdoc += `   * const pkg = pantry.${domainVarName}\n`
        jsdoc += '   * ```\n'
      }

      jsdoc += '   */\n'

      // Add the interface property with JSDoc
      interfaceDecl += jsdoc
      interfaceDecl += `  ${domainVarName}: ${moduleVarName}.${typeName}\n\n`

      // Add to pantry
      pantry += `  ${domainVarName}: ${moduleVarName}.${packageVarName},\n`
    }

    // Close the interface and pantry
    interfaceDecl += '}\n\n'
    pantry += '}\n\n'

    // Add the Packages type alias and packages const
    const packagesType = 'export type Packages = Pantry\n\n'
    const packagesConst = 'export const packages: Packages = pantry\n'

    // Add export for aliases
    const aliasesExport = 'export * from \'./aliases\'\n'

    // Combine all sections
    const content = `${imports}\n${interfaceDecl}${packagesType}${pantry}${packagesConst}${aliasesExport}`

    // Write to the index file
    await fs.promises.writeFile(INDEX_FILE, content)
    console.log(`Successfully generated ${INDEX_FILE}`)

    return INDEX_FILE
  }
  catch (error) {
    console.error('Error generating index file:', error)
    return null
  }
}

// Legacy support - if script is run directly without arguments, generate the index
if (require.main === module && process.argv.length === 2) {
  generateIndex()
    .then((result) => {
      if (!result) {
        process.exit(1)
      }
    })
    .catch((error) => {
      console.error('Unhandled error:', error)
      process.exit(1)
    })
}

/**
 * Extracts aliases from all package files
 * @returns A map of alias to domain name
 */
async function extractAllAliases(): Promise<Record<string, string>> {
  const allAliases: Record<string, string> = {}

  // Get all TypeScript files in the packages directory
  const files = fs.readdirSync(PACKAGES_DIR)
    .filter(file => file.endsWith('.ts') && file !== 'index.ts' && file !== 'aliases.ts')

  console.log(`Found ${files.length} package files`)

  // Process each file to extract aliases
  for (const file of files) {
    try {
      const filePath = path.join(PACKAGES_DIR, file)
      const content = fs.readFileSync(filePath, 'utf-8')

      const moduleName = path.basename(file, '.ts')
      const domain = guessOriginalDomain(moduleName)

      // Extract aliases array from the file content
      const aliasesMatch = content.match(/aliases:\s*\[([\s\S]*?)\]/)
      if (aliasesMatch && aliasesMatch[1]) {
        const aliases = aliasesMatch[1].match(/["']([^"']*)["']/g)
        if (aliases) {
          // Add each alias to the map
          for (const alias of aliases) {
            const cleanAlias = alias.replace(/["']/g, '')
            if (cleanAlias) {
              allAliases[cleanAlias] = domain
              console.log(`Found alias ${cleanAlias} -> ${domain}`)
            }
          }
        }
      }

      // Also add the domain itself as an alias
      allAliases[domain] = domain
    }
    catch (error) {
      console.error(`Error extracting aliases from ${file}:`, error)
    }
  }

  return allAliases
}

/**
 * Generates the aliases.ts file
 * @returns Path to the generated file
 */
export async function generateAliases(): Promise<string> {
  try {
    // Extract all aliases
    const aliases = await extractAllAliases()

    // Generate the file content
    let content = '/**\n * Auto-generated aliases for pkgx packages\n */\n\n'
    content += 'export const aliases: Record<string, string> = {\n'

    // Sort aliases alphabetically
    const sortedAliases = Object.entries(aliases).sort((a, b) => a[0].localeCompare(b[0]))

    // Add each alias entry
    for (const [alias, domain] of sortedAliases) {
      content += `  '${alias}': '${domain}',\n`
    }

    content += '}\n'

    // Write the file
    fs.writeFileSync(ALIASES_FILE, content)
    console.log(`Successfully generated ${ALIASES_FILE} with ${sortedAliases.length} aliases`)

    return ALIASES_FILE
  }
  catch (error) {
    console.error('Error generating aliases file:', error)
    return ''
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

Each package can be accessed using \`getPackage(name)\` or directly via \`pantry.domain\`.

## Quick Stats

- **Total Packages**: ${Object.keys(pantry).length}
- **Categories**: ${Object.keys(categories).length}
- **Last Updated**: ${new Date().toISOString()}

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
const nodePackage = pantry.nodejsorg

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
  pantry.postgresqlorg,
  pantry.mysqlcom,
  pantry.redisio,
  pantry.mongodbcom
]

// Get all available versions
const nodeVersions = pantry.nodejsorg.versions
console.log(\`Node.js versions: \${nodeVersions.slice(0, 5).join(', ')}...\`)

// Check dependencies
const nodeDeps = pantry.nodejsorg.dependencies
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

To add or update packages, see the pkgx [contribution guide](https://docs.pkgx.sh/appendix/packaging/pantry).
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

>${pkg.description ? ` ${pkg.description}` : ''}

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
const pkg = pantry.${convertDomainToVarName(domain)}

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
${pkg.description
  ? `
${pkg.description}
`
  : ''}
**Programs**: ${pkg.programs.length > 0 ? pkg.programs.map(p => p.replace(/\{\{/g, '&lbrace;&lbrace;').replace(/\}\}/g, '&rbrace;&rbrace;')).join(', ') : 'None specified'}

**Install**: \`${pkg.installCommand || `pkgx ${pkg.name || domain}`}\`

---

`
      }
    })

    content += `[← Back to Package Catalog](../package-catalog.md)
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

/**
 * Main function - handles both index and documentation generation
 */
async function main() {
  try {
    const args = process.argv.slice(2)
    const command = args[0] || 'index'

    switch (command) {
      case 'index': {
        console.log('🔧 Generating package index...')
        const indexResult = await generateIndex()
        if (!indexResult) {
          console.error('❌ Failed to generate index')
          process.exit(1)
        }

        console.log('🏷️  Generating aliases...')
        const aliasesResult = await generateAliases()
        if (!aliasesResult) {
          console.error('❌ Failed to generate aliases')
          process.exit(1)
        }

        console.log('✨ Index and aliases generation completed successfully!')
        break
      }

      case 'docs': {
        const outputDir = args[1] || DEFAULT_DOCS_DIR
        console.log(`📚 Generating documentation to ${outputDir}...`)
        await generateDocs(outputDir)
        console.log('✨ Documentation generation completed successfully!')
        break
      }

      case 'all': {
        console.log('🚀 Generating everything...')

        // Generate index and aliases first
        console.log('🔧 Generating package index...')
        const allIndexResult = await generateIndex()
        if (!allIndexResult) {
          console.error('❌ Failed to generate index')
          process.exit(1)
        }

        console.log('🏷️  Generating aliases...')
        const allAliasesResult = await generateAliases()
        if (!allAliasesResult) {
          console.error('❌ Failed to generate aliases')
          process.exit(1)
        }

        // Then generate documentation
        const allOutputDir = args[1] || DEFAULT_DOCS_DIR
        console.log(`📚 Generating documentation to ${allOutputDir}...`)
        await generateDocs(allOutputDir)

        console.log('✨ All generation completed successfully!')
        break
      }

      default:
        console.log(`
Usage: bun run src/generate.ts [command] [options]

Commands:
  index                 Generate package index and aliases (default)
  docs [output-dir]     Generate documentation (default: ./docs)
  all [output-dir]      Generate everything (index, aliases, and docs)

Examples:
  bun run src/generate.ts
  bun run src/generate.ts index
  bun run src/generate.ts docs
  bun run src/generate.ts docs ./custom-docs
  bun run src/generate.ts all
  bun run src/generate.ts all ./custom-docs
`)
        break
    }
  }
  catch (error) {
    console.error('💥 Error during generation:', error)
    process.exit(1)
  }
}

// Run the main function only when run directly (for both CommonJS and ES modules)
if (require.main === module || import.meta.url.endsWith('generate.ts')) {
  main()
}
