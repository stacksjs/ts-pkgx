# proj.org

> PROJ - Cartographic Projections and Coordinate Transformations Library

## Package Information

- **Domain**: `proj.org`
- **Name**: `proj.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/proj.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install proj
```

## Programs

This package provides the following executable programs:

- `proj`

## Aliases

This package can also be accessed using these aliases:

- `proj`

## Available Versions

<details>
<summary>Show all 11 versions</summary>

- `9.6.2`, `9.6.1`, `9.6.0`, `9.5.1`, `9.5.0`
- `9.4.1`, `9.4.0`, `9.3.1`, `9.3.0`, `9.2.1`
- `9.2.0`

</details>

**Latest Version**: `9.6.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +proj.org@9.6.2 -- $SHELL -i
```

## Dependencies

This package depends on:

- `simplesystems.org/libtiff`
- `sqlite.org`
- `curl.se`
- `cmake.org`
- `freedesktop.org/pkg-config`
- `gnu.org/libtool`
- `gnu.org/wget`
- `gnu.org/coreutils`
- `sqlite.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.projorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/proj.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
