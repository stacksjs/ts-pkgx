# x.org/xau

> A package from x.org/xau

## Package Information

- **Domain**: `x.org/xau`
- **Name**: `x.org/xau`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xau/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +x.org/xau -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Aliases

This package can also be accessed using these aliases:

- `xau`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `1.0.12`, `1.0.11`

</details>

**Latest Version**: `1.0.12`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +x.org/xau@1.0.12 -- $SHELL -i
```

## Dependencies

This package depends on:

- `x.org/util-macros`
- `x.org/protocol`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.xorgxau

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xau/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
