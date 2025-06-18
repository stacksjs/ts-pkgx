# x.org/xcomposite

> A package from x.org/xcomposite

## Package Information

- **Domain**: `x.org/xcomposite`
- **Name**: `x.org/xcomposite`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xcomposite/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +x.org/xcomposite -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Aliases

This package can also be accessed using these aliases:

- `xcomposite`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `0.4.6`

</details>

**Latest Version**: `0.4.6`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +x.org/xcomposite@0.4.6 -- $SHELL -i
```

## Dependencies

This package depends on:

- `x.org/x11`
- `x.org/xfixes`
- `x.org/protocol`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.xorgxcomposite

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xcomposite/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
