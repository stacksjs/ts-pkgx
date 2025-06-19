# s5cmd

> Parallel S3 and local filesystem execution tool.

## Package Information

- **Domain**: `peaks5cmd`
- **Name**: `s5cmd`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/peak/s5cmd/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) s5cmd
```

## Programs

This package provides the following executable programs:

- `s5cmd`

## Aliases

This package can also be accessed using these aliases:

- `s5cmd`
- `peak/s5cmd`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `2.3.0`

</details>

**Latest Version**: `2.3.0`

### Install Specific Version

```bash
# Install specific version
pkgx s5cmd@2.3.0
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.peaks5cmd

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/peak/s5cmd/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
