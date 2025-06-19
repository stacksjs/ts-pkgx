# x.org/xi

> A package from x.org/xi

## Package Information

- **Domain**: `x.org/xi`
- **Name**: `x.org/xi`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xi/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) +x.org/xi -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Aliases

This package can also be accessed using these aliases:

- `xi`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `1.8.2`, `1.8.1`

</details>

**Latest Version**: `1.8.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +x.org/xi@1.8.2 -- $SHELL -i
```

## Dependencies

This package depends on:

- `x.org/x11`
- `x.org/protocol`
- `x.org/xfixes`
- `x.org/exts`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.xorgxi

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xi/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
