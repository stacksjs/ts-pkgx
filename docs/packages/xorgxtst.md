# x.org/xtst

> A package from x.org/xtst

## Package Information

- **Domain**: `x.org/xtst`
- **Name**: `x.org/xtst`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xtst/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +x.org/xtst -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Aliases

This package can also be accessed using these aliases:

- `xtst`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `1.2.5`, `1.2.4`

</details>

**Latest Version**: `1.2.5`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +x.org/xtst@1.2.5 -- $SHELL -i
```

## Dependencies

This package depends on:

- `x.org/xi`
- `x.org/protocol`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.xorgxtst

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xtst/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
