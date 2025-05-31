# API Reference

This page documents the API of ts-pkgx, including all the functions, interfaces, and types that are available for use.

## Core Types

### PkgxPackage

The main interface that represents a pkgx package.

```typescript
interface PkgxPackage {
  /**
   * The display name of the package
   */
  name: string

  /**
   * The domain name of the package (e.g., 'nodejs.org', 'bun.sh')
   */
  domain: string

  /**
   * A brief description of the package
   */
  description: string

  /**
   * URL to the package.yml file in the pkgx pantry repository
   */
  packageYmlUrl?: string

  /**
   * URL to the package's homepage
   */
  homepageUrl?: string

  /**
   * URL to the package's GitHub repository
   */
  githubUrl?: string

  /**
   * The command to install the package using pkgx
   */
  installCommand: string

  /**
   * List of executable programs provided by the package
   * @see https://ts-pkgx.netlify.app/usage
   */
  programs: string[]

  /**
   * List of companion packages that are often used with this package
   * @see https://ts-pkgx.netlify.app/usage
   */
  companions: string[]

  /**
   * List of dependencies required by this package
   * @see https://ts-pkgx.netlify.app/usage
   */
  dependencies: string[]

  /**
   * List of available versions of the package
   * From newest version to oldest.
   * @see https://ts-pkgx.netlify.app/usage
   */
  versions: string[]

  /**
   * List of alternative names or aliases for this package
   * @see https://ts-pkgx.netlify.app/usage
   */
  aliases?: string[]

  /**
   * The full path to the package, including any nested paths (e.g. 'agwa.name/git-crypt')
   */
  fullPath?: string
}
```

### Pantry Interface

The main interface that provides access to all packages with comprehensive JSDoc documentation and alias support.

```typescript
interface Pantry {
  // Domain-based properties (e.g., bunsh, nodejsorg, pythonorg)
  [domain: string]: PkgxPackage

  // Alias properties for convenience (e.g., bun, node, python)
  // These provide the same package objects as their domain counterparts
  bun: PkgxPackage // Alias for bunsh (bun.sh)
  node: PkgxPackage // Alias for nodejsorg (nodejs.org)
  python: PkgxPackage // Alias for pythonorg (python.org)
  go: PkgxPackage // Alias for godev (go.dev)
  rust: PkgxPackage // Alias for rustlangorg (rust-lang.org)
  // ... and many more aliases
}
```

Each property in the Pantry interface includes comprehensive JSDoc documentation with:
- Package description and purpose
- List of programs provided
- Installation command
- Links to homepage, GitHub, and package documentation
- Version information with "From newest version to oldest" description
- Links to our usage documentation at https://ts-pkgx.netlify.app/usage

### PackageFetchOptions

Options for package fetching operations.

```typescript
interface PackageFetchOptions {
  /**
   * Timeout in milliseconds for fetching operations
   * @default 30000
   */
  timeout?: number

  /**
   * Directory to save package data
   * @default 'packages'
   */
  outputDir?: string

  /**
   * Enable debug mode to save screenshots and additional info
   * @default false
   */
  debug?: boolean
}
```

## Enhanced Package Generation

### Alias-Based Naming Convention

ts-pkgx uses intelligent alias-based naming for package variables and types:

1. **Packages with aliases use the primary alias for naming:**
   ```typescript
   // For bun.sh (alias: 'bun')
   export const bunPackage = { ... }
   export type BunPackage = typeof bunPackage

   // For nodejs.org (alias: 'node')
   export const nodePackage = { ... }
   export type NodePackage = typeof nodePackage

   // For python.org (alias: 'python')
   export const pythonPackage = { ... }
   export type PythonPackage = typeof pythonPackage
   ```

2. **Packages without aliases use domain-based naming:**
   ```typescript
   // For example.com (no alias)
   export const examplecomPackage = { ... }
   export type ExamplecomPackage = typeof examplecomPackage
   ```

### Comprehensive JSDoc Documentation

Every generated package includes rich JSDoc documentation:

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
  name: 'bun',
  domain: 'bun.sh',
  description: 'Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one',
  /**
   * List of executable programs provided by this package
   * @see https://ts-pkgx.netlify.app/usage
   */
  programs: ['bun'] as const,
  /**
   * List of available versions of this package
   * From newest version to oldest.
   * @see https://ts-pkgx.netlify.app/usage
   */
  versions: ['1.2.15', '1.2.14',] as const,
  /**
   * List of dependencies required by this package
   * @see https://ts-pkgx.netlify.app/usage
   */
  dependencies: [] as const,
  /**
   * List of companion packages that are often used with this package
   * @see https://ts-pkgx.netlify.app/usage
   */
  companions: [] as const,
  // ... other properties with JSDoc
} as const
```

### Enhanced TypeScript Intellisense

The generated packages provide excellent TypeScript intellisense:

1. **Hovering over `pantry.bun`** shows:
   - Package description
   - Programs provided
   - Installation command
   - Links to documentation

2. **Hovering over `pantry.bun.versions`** shows:
   - "From newest version to oldest."
   - Link to usage documentation

3. **Hovering over `pantry.bun.programs`** shows:
   - "List of executable programs provided by this package"
   - Link to usage documentation

## Core Functions

### fetchPkgxPackage

Fetches package information from pkgx.dev.

```typescript
async function fetchPkgxPackage(
  packageName: string,
  options: PackageFetchOptions = {},
): Promise<{ packageInfo: PkgxPackage, originalName: string, fullDomainName: string }>
```

#### Parameters

- `packageName`: The name of the package to fetch (e.g., 'node', 'bun', 'agwa.name/git-crypt')
- `options`: Optional configuration

#### Returns

- `packageInfo`: The fetched package information
- `originalName`: The original name used to fetch the package
- `fullDomainName`: The full domain name of the package

#### Example

```typescript
const { packageInfo, originalName, fullDomainName } = await fetchPkgxPackage('node')
console.log(`Fetched ${packageInfo.name} (${fullDomainName})`)
```

### fetchAndSavePackage

Fetches and saves a package to the specified output directory with enhanced JSDoc generation.

```typescript
async function fetchAndSavePackage(
  packageName: string,
  outputDir: string,
  timeout: number = 30000,
  saveAsJson: boolean = false,
  retryNumber: number = 1,
  maxRetries: number = 3,
  debug: boolean = false,
): Promise<{ success: boolean, fullDomainName?: string, aliases?: string[], filePath?: string }>
```

#### Parameters

- `packageName`: The name of the package to fetch
- `outputDir`: Directory to save the package data
- `timeout`: Timeout in milliseconds
- `saveAsJson`: Whether to save as JSON (true) or TypeScript (false)
- `retryNumber`: Current retry attempt number (for internal use)
- `maxRetries`: Maximum number of retry attempts
- `debug`: Enable debug mode

#### Returns

- `success`: Whether the operation was successful
- `fullDomainName`: The full domain name of the package
- `aliases`: List of aliases for the package
- `filePath`: Path to the saved file

#### Example

```typescript
const result = await fetchAndSavePackage('bun', './packages', 60000)
if (result.success) {
  console.log(`Saved package to ${result.filePath}`)
}
```

### fetchAndSaveAllPackages

Fetches and saves all packages from pkgx.dev with enhanced documentation generation.

```typescript
async function fetchAndSaveAllPackages(
  options: PackageFetchOptions = {},
): Promise<string[]>
```

#### Parameters

- `options`: Optional configuration

#### Returns

- Array of domain names of the packages that were successfully fetched and saved

#### Example

```typescript
const savedPackages = await fetchAndSaveAllPackages({
  timeout: 120000,
  outputDir: './packages',
})
console.log(`Saved ${savedPackages.length} packages`)
```

## Domain Utilities

### convertDomainToVarName

Converts a domain name to a safe TypeScript variable name.

```typescript
function convertDomainToVarName(domain: string): string
```

#### Parameters

- `domain`: Domain name (e.g., 'bun.sh', 'agwa.name/git-crypt')

#### Returns

- Safe TypeScript variable name (e.g., 'bunsh', 'agwanamegitcrypt')

#### Example

```typescript
const varName = convertDomainToVarName('bun.sh') // "bunsh"
const nestedVarName = convertDomainToVarName('agwa.name/git-crypt') // "agwanamegitcrypt"
```

### convertDomainToFileName

Converts a domain name to a standard format for file names.

```typescript
function convertDomainToFileName(domain: string): string
```

#### Parameters

- `domain`: Domain name or path

#### Returns

- Filename-safe version (e.g., 'bun.sh' -> 'bunsh', 'agwa.name/git-crypt' -> 'agwaname-gitcrypt')

#### Example

```typescript
const fileName = convertDomainToFileName('bun.sh') // "bunsh"
const nestedFileName = convertDomainToFileName('agwa.name/git-crypt') // "agwaname-gitcrypt"
```

### guessOriginalDomain

Attempts to guess a domain name from a filename.

```typescript
function guessOriginalDomain(fileName: string): string
```

#### Parameters

- `fileName`: The filename (without extension)

#### Returns

- Best guess at the original domain

#### Example

```typescript
const domain = guessOriginalDomain('bunsh') // "bun.sh"
const nestedDomain = guessOriginalDomain('agwaname-gitcrypt') // "agwa.name/gitcrypt"
```

## Package Index Utilities

### generateIndex

Generates an index.ts file for all packages in the packages directory with comprehensive JSDoc documentation and alias support.

```typescript
async function generateIndex(): Promise<void>
```

The generated index includes:
- Comprehensive JSDoc documentation for each package property
- Alias properties that point to the same package objects
- Type-safe property names (quoted when necessary)
- Links to package documentation pages

#### Example

```typescript
await generateIndex()
```

### getPackage

Gets a package by name, supporting both full domain and aliases.

```typescript
function getPackage(name: string): PkgxPackage | undefined
```

#### Parameters

- `name`: The name of the package to lookup (can be a domain or an alias)

#### Returns

- The package if found, or undefined if not found

#### Example

```typescript
const nodePackage = getPackage('node') // Using alias
const bunPackage = getPackage('bun.sh') // Using domain
const gitCrypt = getPackage('git-crypt') // Using alias
```

### pantry

The object containing all packages, indexed by domain name and including alias properties.

```typescript
const pantry: Pantry = {
  // Domain-based properties
  bunsh: bunPackage,
  nodejsorg: nodePackage,
  pythonorg: pythonPackage,

  // Alias properties (point to the same objects)
  bun: bunPackage, // Same as bunsh
  node: nodePackage, // Same as nodejsorg
  python: pythonPackage, // Same as pythonorg

  // ... all other packages
}
```

#### Example

```typescript
// Both approaches work and return the same object
const nodeViaAlias = pantry.node
const nodeViaDomain = pantry.nodejsorg
console.log(nodeViaAlias === nodeViaDomain) // true

// Access with excellent TypeScript intellisense
console.log(pantry.bun.versions) // Shows JSDoc: "From newest version to oldest."
```

## Constants

### PACKAGE_ALIASES

Map of common package aliases to their full domain names.

```typescript
const PACKAGE_ALIASES: Record<string, string> = {
  node: 'nodejs.org',
  python: 'python.org',
  go: 'go.dev',
  rust: 'rust-lang.org',
  ruby: 'ruby-lang.org',
  php: 'php.net',
  perl: 'perl.org',
  deno: 'deno.land',
  bun: 'bun.sh',
  // ... and more
}
```

## CLI Commands

### pkgx:fetch

Fetches a single package or a list of packages from pkgx.dev with enhanced JSDoc generation.

```bash
bun run pkgx:fetch <packageName> [options]
# OR
bun run pkgx:fetch --pkg <packageList> [options]
```

#### Options

- `--pkg <packageNames>`: Comma-separated list of package names to fetch
- `--output <directory>`: Directory to save the package data
- `--timeout <milliseconds>`: Timeout in milliseconds
- `--debug`: Enable debug mode
- `--json`: Save as JSON instead of TypeScript

#### Examples

```bash
# Fetch a single package with enhanced documentation
bun run pkgx:fetch node

# Fetch multiple packages
bun run pkgx:fetch --pkg node,bun,python

# Fetch packages with JSON output
bun run pkgx:fetch --pkg "go.dev,python.org" --json

# Fetch with custom timeout and output directory
bun run pkgx:fetch --pkg node,bun --timeout 60000 --output ./custom-packages
```

### pkgx:fetch-all

Fetches all packages from pkgx.dev with enhanced documentation generation.

```bash
bun run pkgx:fetch-all [options]
```

#### Options

- `--output <directory>`: Directory to save the package data
- `--timeout <milliseconds>`: Timeout in milliseconds
- `--debug`: Enable debug mode
- `--json`: Save as JSON instead of TypeScript
- `--github-cache-duration <milliseconds>`: Duration to cache GitHub API responses
- `--mode <mode>`: Fetch mode: "basic" (legacy), "complete" (improved), or "scrape" (web scraping)
- `--limit <number>`: Limit the number of packages to fetch
