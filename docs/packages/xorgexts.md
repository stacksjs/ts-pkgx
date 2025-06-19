# x.org/exts

> A package from x.org/exts

## Package Information

- **Domain**: `x.org/exts`
- **Name**: `x.org/exts`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/x.org/exts/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) +x.org/exts -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Aliases

This package can also be accessed using these aliases:

- `exts`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `1.3.6`, `1.3.5`

</details>

**Latest Version**: `1.3.6`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +x.org/exts@1.3.6 -- $SHELL -i
```

## Dependencies

This package depends on:

- `x.org/x11^1`
- `x.org/protocol`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.xorgexts

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/x.org/exts/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
