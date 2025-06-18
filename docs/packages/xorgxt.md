# x.org/xt

> A package from x.org/xt

## Package Information

- **Domain**: `x.org/xt`
- **Name**: `x.org/xt`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xt/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +x.org/xt -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Aliases

This package can also be accessed using these aliases:

- `xt`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `1.3.1`, `1.3.0`

</details>

**Latest Version**: `1.3.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +x.org/xt@1.3.1 -- $SHELL -i
```

## Dependencies

This package depends on:

- `x.org/ice`
- `x.org/sm`
- `x.org/x11`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.xorgxt

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xt/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
