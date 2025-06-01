# kpt

> Automate Kubernetes Configuration Editing

## Package Information

- **Domain**: `kpt.dev`
- **Name**: `kpt`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/kpt.dev/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) kpt
```

## Programs

This package provides the following executable programs:

- `kpt`

## Aliases

This package can also be accessed using these aliases:

- `kpt`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `0.39.3`

</details>

**Latest Version**: `0.39.3`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +kpt.dev@0.39.3 -- $SHELL -i
```

## Dependencies

This package depends on:

- `git-scm.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.kptdev

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/kpt.dev/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
