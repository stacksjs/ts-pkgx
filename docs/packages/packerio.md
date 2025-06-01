# packer

> Packer is a tool for creating identical machine images for multiple platforms from a single source configuration.

## Package Information

- **Domain**: `packerio`
- **Name**: `packer`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/packer.io/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) packer
```

## Programs

This package provides the following executable programs:

- `packer`

## Aliases

This package can also be accessed using these aliases:

- `packer`

## Available Versions

<details>
<summary>Show all 11 versions</summary>

- `1.12.0`, `1.11.2`, `1.11.1`, `1.11.0`, `1.10.3`
- `1.10.2`, `1.10.1`, `1.9.5`, `1.9.4`, `1.9.3`
- `1.9.2`

</details>

**Latest Version**: `1.12.0`

### Install Specific Version

```bash
# Install specific version
pkgx packer@1.12.0
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.packerio

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/packer.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
