# gts.sourceforge.net

> GNU triangulated surface library

## Package Information

- **Domain**: `gtssourceforgenet`
- **Name**: `gts.sourceforge.net`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gts.sourceforge.net/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +gts.sourceforge.net -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `delaunay`
- `gts2dxf`
- `gts2oogl`
- `gts2stl`
- `gtscheck`
- `gtscompare`
- `gtstemplate`
- `stl2gts`
- `transform`

## Aliases

This package can also be accessed using these aliases:

- `+gts.sourceforge.net -- $SHELL -i`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `0.7.6`

</details>

**Latest Version**: `0.7.6`

### Install Specific Version

```bash
# Install specific version
pkgx gts.sourceforge.net@0.7.6
```

## Dependencies

This package depends on:

- `gnome.org/glib>=2.4.0`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.gtssourceforgenet

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gts.sourceforge.net/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
