# Usage

ts-pkgx can be used both as a library in your code and as a command-line tool.

## CLI Usage

The ts-pkgx CLI provides commands for fetching package data from pkgx.dev:

```bash
# Fetch a single package
bun run pkgx:fetch node

# Fetch a package with a specific path
bun run pkgx:fetch agwa.name/git-crypt

# With custom output directory
bun run pkgx:fetch node --output ./data/packages

# Fetch all packages
bun run pkgx:fetch-all

# Set a custom timeout (milliseconds)
bun run pkgx:fetch-all --timeout 180000
```

## Library Usage

### Fetching Package Data

You can use ts-pkgx programmatically in your TypeScript or JavaScript code:

```typescript
import { fetchAndSaveAllPackages, fetchPkgxPackage } from 'ts-pkgx'

// Fetch a single package
async function fetchNodePackage() {
  const { packageInfo, originalName, fullDomainName } = await fetchPkgxPackage('node')
  console.log(packageInfo)
  console.log(`Original name: ${originalName}, Full domain: ${fullDomainName}`)
}

// Fetch and save all packages
async function fetchAllPackages() {
  const savedPackages = await fetchAndSaveAllPackages({
    timeout: 120000,
    outputDir: './data/packages'
  })
  console.log(`Saved ${savedPackages.length} packages`)
}
```

### The PkgxPackage Interface

All package data conforms to the `PkgxPackage` interface:

```typescript
interface PkgxPackage {
  name: string
  domain: string
  description: string
  packageYmlUrl?: string
  homepageUrl?: string
  githubUrl?: string
  installCommand: string
  programs: string[]
  companions: string[]
  dependencies: string[]
  versions: string[]
  aliases?: string[]
  fullPath?: string
}
```

### Working with the Package Pantry

After fetching packages, you can import them directly from the generated files:

```typescript
// Or use the pantry and getPackage function
import { getPackage, pantry } from 'ts-pkgx/packages'

// Import a specific package
import { nodejsorgPackage } from 'ts-pkgx/packages/nodejsorg'

// Get a package by domain
const nodePackage = pantry['nodejs.org']

// Get a package by alias
const nodeByAlias = getPackage('node')

// Get a nested package
const gitCrypt = getPackage('agwa.name/git-crypt')
// Or by subpath alias
const gitCryptByAlias = getPackage('git-crypt')

console.log(nodePackage.installCommand) // "pkgx nodejs.org"
```

### Domain Utilities

ts-pkgx provides utility functions for handling domain names:

```typescript
import {
  convertDomainToFileName,
  convertDomainToVarName,
  guessOriginalDomain
} from 'ts-pkgx/tools/domainUtils'

// Convert domain to variable name
const varName = convertDomainToVarName('bun.sh') // "bunsh"
const nestedVarName = convertDomainToVarName('agwa.name/git-crypt') // "agwanamegitcrypt"

// Convert domain to file name
const fileName = convertDomainToFileName('bun.sh') // "bunsh"
const nestedFileName = convertDomainToFileName('agwa.name/git-crypt') // "agwaname-gitcrypt"

// Guess original domain from filename
const domain = guessOriginalDomain('bunsh') // "bun.sh"
const nestedDomain = guessOriginalDomain('agwaname-gitcrypt') // "agwa.name/gitcrypt"
```

## Examples

### Basic Example: Fetch and Use a Package

```typescript
import { fetchPkgxPackage } from 'ts-pkgx'

async function main() {
  try {
    const { packageInfo } = await fetchPkgxPackage('bun')
    console.log(`Package: ${packageInfo.name} (${packageInfo.domain})`)
    console.log(`Description: ${packageInfo.description}`)
    console.log(`Install command: ${packageInfo.installCommand}`)
    console.log(`Programs: ${packageInfo.programs.join(', ')}`)
  }
  catch (error) {
    console.error('Error fetching package:', error)
  }
}

main()
```

### Advanced Example: Custom Package Collection

```typescript
import fs from 'node:fs'
import path from 'node:path'
import { fetchAndSavePackage, fetchPkgxPackage } from 'ts-pkgx'
import { getPackage, pantry } from 'ts-pkgx/packages'

// Define your packages of interest
const packagesToFetch = [
  'node',
  'python',
  'bun',
  'agwa.name/git-crypt'
]

async function fetchMyPackages() {
  const outputDir = path.join(process.cwd(), 'my-packages')

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  // Fetch each package
  const results = await Promise.all(
    packagesToFetch.map(async (pkg) => {
      try {
        const result = await fetchAndSavePackage(pkg, outputDir, 60000)
        return { name: pkg, success: result.success }
      }
      catch (error) {
        return { name: pkg, success: false, error }
      }
    })
  )

  // Report results
  console.log('Fetch results:')
  results.forEach((result) => {
    console.log(`- ${result.name}: ${result.success ? 'Success' : 'Failed'}`)
  })
}

fetchMyPackages()
```

For more advanced usage, check out the [API Reference](./api-reference.md) section.
