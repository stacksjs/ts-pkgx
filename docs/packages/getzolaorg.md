# zola

> A fast static site generator in a single binary with everything built-in. https://www.getzola.org

## Package Information

- **Domain**: `getzola.org`
- **Name**: `zola`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/getzola.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) zola
```

## Programs

This package provides the following executable programs:

- `zola`

## Available Versions

<details>
<summary>Show all 6 versions</summary>

- `0.20.0`, `0.19.2`, `0.19.1`, `0.19.0`, `0.18.0`
- `0.17.2`

</details>

**Latest Version**: `0.20.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +getzola.org@0.20.0 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.getzolaorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/getzola.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
