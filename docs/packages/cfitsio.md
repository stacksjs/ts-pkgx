# cfitsio

> A package from cfits.io

## Package Information

- **Domain**: `cfits.io`
- **Name**: `cfitsio`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/heasarc.gsfc.nasa.gov/cfitsio/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install cfits.io
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Available Versions

<details>
<summary>Show all 8 versions</summary>

- `4.6.2`, `4.6.0`, `4.5.0`, `4.4.1`, `4.4.0`
- `4.3.1`, `4.3.0`, `4.2.0`

</details>

**Latest Version**: `4.6.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +cfits.io@4.6.2 -- $SHELL -i
```

## Dependencies

This package depends on:

- `darwin:zlib.net`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.cfitsio

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/heasarc.gsfc.nasa.gov/cfitsio/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
