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
import { PACKAGE_ALIASES } from 'ts-pkgx/packages/fetch'

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
