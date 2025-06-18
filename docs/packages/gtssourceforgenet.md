# gts.sourceforge.net

> GNU triangulated surface library

## Package Information

- **Domain**: `gtssourceforge.net`
- **Name**: `gts.sourceforge.net`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gts.sourceforge.net/package.yml)

## Installation

```bash
# Install with pkgx
launchpad install +gts.sourceforge.net -- $SHELL -i
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

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `0.7.6`

</details>

**Latest Version**: `0.7.6`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +gtssourceforge.net@0.7.6 -- $SHELL -i
```

## Dependencies

This package depends on:

- `gnome.org/glib>=2.4.0`
- `gnu.org/automake`
- `gnu.org/autoconf`
- `gnu.org/libtool`
- `freedesktop.org/pkg-config`
- `freedesktop.org/pkg-config`

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
