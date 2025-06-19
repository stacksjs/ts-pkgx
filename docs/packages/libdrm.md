# libdrm

>

## Package Information

- **Domain**: `libdrm`
- **Name**: `libdrm`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/dri.freedesktop.org/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) +dri.freedesktop.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Aliases

This package can also be accessed using these aliases:

- `libdrm`

## Available Versions

<details>
<summary>Show all 10 versions</summary>

- `2.4.124`, `2.4.123`, `2.4.122`, `2.4.121`, `2.4.120`
- `2.4.119`, `2.4.118`, `2.4.117`, `2.4.116`, `2.4.100`

</details>

**Latest Version**: `2.4.124`

### Install Specific Version

```bash
# Install specific version
pkgx libdrm@2.4.124
```

## Dependencies

This package depends on:

- `x.org/pciaccess`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.libdrm

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/dri.freedesktop.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
