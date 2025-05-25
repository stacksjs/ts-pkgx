# jsonnet

> Jsonnet - The data templating language

## Package Information

- **Domain**: `jsonnetorg`
- **Name**: `jsonnet`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/jsonnet.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +jsonnet.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `jsonnet`
- `jsonnetfmt`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `0.21.0`, `0.20.0`

</details>

**Latest Version**: `0.21.0`

### Install Specific Version

```bash
# Install specific version
pkgx jsonnet@0.21.0
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['jsonnetorg']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/jsonnet.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
