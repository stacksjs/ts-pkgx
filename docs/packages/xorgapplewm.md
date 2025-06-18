# x.org/applewm

> A package from x.org/applewm

## Package Information

- **Domain**: `x.org/applewm`
- **Name**: `x.org/applewm`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/x.org/applewm/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +x.org/applewm -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Aliases

This package can also be accessed using these aliases:

- `applewm`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `1.4.1`

</details>

**Latest Version**: `1.4.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +x.org/applewm@1.4.1 -- $SHELL -i
```

## Dependencies

This package depends on:

- `x.org/x11`
- `x.org/exts`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.xorgapplewm

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/x.org/applewm/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
