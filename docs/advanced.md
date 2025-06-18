# Advanced

This section covers advanced usage scenarios and customization options for ts-pkgx.

## Web Scraping Customization

ts-pkgx uses Playwright for fetching package information from pkgx.dev. You can customize the web scraping behavior:

```typescript
import { fetchPkgxPackage } from 'ts-pkgx'

// Custom timeout for complex packages
const result = await fetchPkgxPackage('rust-lang.org', {
  timeout: 120000, // 2 minutes
  debug: true, // Save screenshots for debugging
})
```

### Debug Mode

When enabled, debug mode saves screenshots of the pkgx.dev pages being scraped, which can be helpful for diagnosing issues:

```bash
# CLI debug mode
bun run pkgx:fetch rust-lang.org --debug

# API debug mode
const result = await fetchPkgxPackage('rust-lang.org', { debug: true })
```

Screenshots are saved in the `debug` directory.

## Enhanced Package Generation

ts-pkgx generates packages with comprehensive JSDoc documentation and intelligent naming conventions. Each package includes rich type hints and documentation links.

### JSDoc Documentation Features

Every generated package includes detailed JSDoc comments:

```typescript
/**
 * Bun - Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one
 *
 * **Programs:** bun
 *
 * **Install:** `pkgx bun.sh`
 *
 * **Homepage:** https://bun.sh
 *
 * **GitHub:** https://github.com/oven-sh/bun
 *
 * @see https://ts-pkgx.netlify.app/packages/bunsh
 */
export const bunPackage = {
  /**
   * List of available versions of this package
   * From newest version to oldest.
   * @see https://ts-pkgx.netlify.app/usage
   */
  versions: ['1.2.15', '1.2.14',] as const,
  // ... other properties with comprehensive JSDoc
}
```

### Alias-Based Variable Naming

Packages with aliases use the primary alias for variable naming:

```typescript
// Packages with aliases use alias-based naming
export const bunPackage = { ... }      // For bun.sh (alias: 'bun')
export const nodePackage = { ... }     // For nodejs.org (alias: 'node')
export const pythonPackage = { ... }   // For python.org (alias: 'python')

// Packages without aliases use domain-based naming
export const examplecomPackage = { ... } // For example.com (no alias)
```

## Custom Package Transformation

You can implement custom transformation logic when processing packages:

```typescript
import type { PkgxPackage } from 'ts-pkgx'
import { fetchPkgxPackage } from 'ts-pkgx'

async function fetchAndTransform(packageName: string): Promise<PkgxPackage> {
  const { packageInfo } = await fetchPkgxPackage(packageName)

  // Add custom metadata
  const enhancedPackage: PkgxPackage = {
    ...packageInfo,
    description: `${packageInfo.description} [Enhanced]`,
    // Add custom fields or modify existing ones
    customCategory: determineCategory(packageInfo),
  }

  return enhancedPackage
}

function determineCategory(pkg: PkgxPackage): string {
  if (pkg.domain.includes('lang'))
    return 'programming-language'
  if (pkg.programs.some(p => p.includes('server')))
    return 'server'
  return 'utility'
}
```

## Custom Output Formats

ts-pkgx generates TypeScript or JSON files by default, but you can customize the output format:

```typescript
import type { PkgxPackage } from 'ts-pkgx'
import fs from 'node:fs'
import path from 'node:path'
import { fetchPkgxPackage } from 'ts-pkgx'

async function saveAsMarkdown(packageName: string, outputDir: string): Promise<void> {
  const { packageInfo } = await fetchPkgxPackage(packageName)
  const mdContent = generateMarkdown(packageInfo)

  const fileName = `${packageInfo.domain.replace(/\./g, '-')}.md`
  const filePath = path.join(outputDir, fileName)

  fs.writeFileSync(filePath, mdContent)
  console.log(`Saved markdown to ${filePath}`)
}

function generateMarkdown(pkg: PkgxPackage): string {
  return `# ${pkg.name} (${pkg.domain})

${pkg.description}

## Installation

\`\`\`bash
${pkg.installCommand}
\`\`\`

## Programs

${pkg.programs.map(p => `- ${p}`).join('\n')}

## Dependencies

${pkg.dependencies.length ? pkg.dependencies.map(d => `- ${d}`).join('\n') : 'No dependencies'}

## Links

- [Homepage](${pkg.homepageUrl || 'N/A'})
- [GitHub](${pkg.githubUrl || 'N/A'})
- [Package YAML](${pkg.packageYmlUrl || 'N/A'})
`
}
```

## Extending the Aliases System

You can extend the built-in package aliases system:

```typescript
import { aliases as PACKAGE_ALIASES } from 'ts-pkgx'

// Add custom aliases
function extendAliases(customAliases: Record<string, string>): void {
  Object.entries(customAliases).forEach(([alias, domain]) => {
    if (!PACKAGE_ALIASES[alias]) {
      PACKAGE_ALIASES[alias] = domain
      console.log(`Added alias: ${alias} -> ${domain}`)
    }
  })
}

// Usage
extendAliases({
  js: 'nodejs.org',
  py: 'python.org',
  rs: 'rust-lang.org',
  bunjs: 'bun.sh',
})
```

## Custom Error Handling

Implement custom error handling for package fetching:

```typescript
import { fetchPkgxPackage } from 'ts-pkgx'

async function fetchWithRetry(packageName: string, maxRetries = 3): Promise<any> {
  let lastError

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`Attempt ${attempt} of ${maxRetries} for ${packageName}`)
      return await fetchPkgxPackage(packageName, {
        timeout: 30000 * attempt, // Increase timeout with each retry
      })
    }
    catch (error) {
      lastError = error
      console.error(`Attempt ${attempt} failed for ${packageName}:`, error.message)

      // Don't retry for certain errors
      if (error.message.includes('404') || error.message.includes('Not Found')) {
        throw new Error(`Package ${packageName} not found`)
      }

      // Wait before retrying
      if (attempt < maxRetries) {
        const delay = 2000 * attempt // Increasing delay
        console.log(`Waiting ${delay}ms before retry...`)
        await new Promise(resolve => setTimeout(resolve, delay))
      }
    }
  }

  throw new Error(`Failed to fetch ${packageName} after ${maxRetries} attempts: ${lastError.message}`)
}
```

## Custom Package Index Generation

Customize the generated index.ts file:

```typescript
import fs from 'node:fs'
import path from 'node:path'
import { convertDomainToVarName } from 'ts-pkgx/tools/domainUtils'

function generateCustomIndex(packagesDir: string, outputFile: string): void {
  const files = fs.readdirSync(packagesDir)
    .filter(file => file.endsWith('.ts') && file !== 'index.ts' && file !== 'fetch.ts')

  const imports = files.map((file) => {
    const moduleName = file.replace(/\.ts$/, '')
    const packageVarName = `${moduleName}Package`
    return `import { ${packageVarName} } from './${moduleName}'`
  })

  const categoryMap: Record<string, string[]> = {
    languages: ['nodejs.org', 'python.org', 'rust-lang.org', 'ruby-lang.org'],
    runtimes: ['bun.sh', 'deno.land'],
    tools: ['git-crypt', 'example.com'],
  }

  let content = `${imports.join('\n')}\n\n`
  content += `export * from './fetch'\n\n`
  content += `// Package collections by category\n`

  Object.entries(categoryMap).forEach(([category, domains]) => {
    content += `export const ${category}Packages = {\n`
    domains.forEach((domain) => {
      const varName = convertDomainToVarName(domain)
      content += `  '${domain}': ${varName}Package,\n`
    })
    content += `}\n\n`
  })

  // Add the regular pantry export
  content += `export const pantry: Record<string, PkgxPackage> = {}\n\n`

  // Add standard getPackage function
  content += `/**
 * Get a package by name, supporting both full domain and aliases
 */
export function getPackage(name: string): PkgxPackage | undefined {
  // Direct lookup
  if (pantry[name]) {
    return pantry[name]
  }

  // Check aliases - loop through all packages
  for (const pkg of Object.values(pantry)) {
    // Check if this package has the name as an alias
    if (pkg.aliases && pkg.aliases.includes(name)) {
      return pkg
    }
  }

  return undefined
}\n`

  fs.writeFileSync(outputFile, content)
  console.log(`Generated custom index at ${outputFile}`)
}
```

## Working with GitHub API Rate Limits

ts-pkgx uses the GitHub API to fetch additional information. You can customize this behavior to handle rate limits:

```typescript
import fs from 'node:fs'
import path from 'node:path'

interface GitHubCache {
  timestamp: number
  expiresAt: number
  data: any
}

// Save GitHub API response to cache
function saveGitHubCache(data: any, cacheDuration: number, cacheFile: string): void {
  try {
    const cacheData: GitHubCache = {
      timestamp: Date.now(),
      expiresAt: Date.now() + cacheDuration,
      data,
    }
    fs.writeFileSync(cacheFile, JSON.stringify(cacheData, null, 2))
    console.log(`GitHub API cache saved to ${cacheFile}, expires at ${new Date(cacheData.expiresAt).toLocaleString()}`)
  }
  catch (error) {
    console.error('Failed to save GitHub cache:', error)
  }
}

// Load GitHub API response from cache if valid
function loadGitHubCache(cacheDuration: number, cacheFile: string): any | null {
  try {
    if (!fs.existsSync(cacheFile)) {
      return null
    }

    const cacheData: GitHubCache = JSON.parse(fs.readFileSync(cacheFile, 'utf8'))
    const now = Date.now()

    // Check if cache is still valid
    if (now - cacheData.timestamp <= cacheDuration) {
      console.log(`Using GitHub API cache from ${new Date(cacheData.timestamp).toLocaleString()}, expires at ${new Date(cacheData.expiresAt).toLocaleString()}`)
      return cacheData.data
    }
    else {
      console.log(`GitHub API cache expired (from ${new Date(cacheData.timestamp).toLocaleString()})`)
      return null
    }
  }
  catch (error) {
    console.error('Error loading GitHub cache:', error)
    return null
  }
}
```

## Optimized Batch Processing

ts-pkgx implements optimized batch processing to efficiently handle large numbers of packages. This is particularly useful when updating the entire pantry, which contains around 1,000 packages.

```typescript
import { updatePackage } from 'ts-pkgx/tools/updatePackages'
import { fetchPackageListFromGitHub } from 'ts-pkgx/utils'

async function updatePackagesInBatches() {
  // Get the list of all packages from GitHub
  const packages = await fetchPackageListFromGitHub()
  console.log(`Found ${packages.length} packages to update`)

  // Process packages in batches of 20 to prevent memory issues
  const BATCH_SIZE = 20
  let updatedCount = 0
  const batches = Math.ceil(packages.length / BATCH_SIZE)

  for (let i = 0; i < batches; i++) {
    const start = i * BATCH_SIZE
    const end = Math.min(start + BATCH_SIZE, packages.length)
    const batch = packages.slice(start, end)

    console.log(`Processing batch ${i + 1}/${batches} (packages ${start + 1}-${end})`)

    // Update packages in the current batch in parallel
    const results = await Promise.all(batch.map(pkg => updatePackage(pkg)))

    // Count updated packages
    updatedCount += results.filter(Boolean).length
  }

  console.log(`Updated ${updatedCount} out of ${packages.length} packages`)
}
```

### Batch Size Considerations

The optimal batch size depends on several factors:

- **Memory Usage**: Smaller batches reduce memory consumption but may increase total processing time.
- **API Rate Limits**: If using external APIs, batch size affects how quickly you approach rate limits.
- **Fetching Method**: Different batch sizes are optimal for different fetch methods:
  - GitHub API: 30-40 packages per batch is usually efficient
  - Web scraping: 10-20 packages per batch avoids IP blocks and timeouts

### Skip Unchanged Packages

For better performance, ts-pkgx can check if a package file has changed before writing to disk:

```typescript
async function updatePackageEfficiently(packageName: string): Promise<boolean> {
  // Fetch the latest package information
  const { packageInfo } = await fetchPkgxPackage(packageName)

  // Determine file path
  const filePath = path.join(PACKAGES_DIR, `${convertDomainToFileName(packageInfo.domain)}.ts`)

  // Check if file exists
  if (fs.existsSync(filePath)) {
    // Read existing file
    const existingContent = fs.readFileSync(filePath, 'utf-8')

    // Generate new content
    const newContent = generatePackageTypescript(packageInfo)

    // Only write if content has changed
    if (newContent !== existingContent) {
      fs.writeFileSync(filePath, newContent)
      return true // Package was updated
    }
    return false // No changes needed
  }

  // File doesn't exist, create it
  fs.writeFileSync(filePath, generatePackageTypescript(packageInfo))
  return true // New package was created
}
```

### Command Line Usage

You can leverage batch processing via the CLI with options to control batch size and limits:

```bash
# Process all packages with default batch size (20)
bun run pkgx:fetch-all

# Limit to first 50 packages (useful for testing)
bun run pkgx:fetch-all --limit 50

# Increase timeout for complex packages
bun run pkgx:fetch-all --timeout 60000
```
