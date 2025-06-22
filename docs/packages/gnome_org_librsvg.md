# rsvg-convert

> Read-only mirror of https://gitlab.gnome.org/GNOME/librsvg

## Package Information

- **Domain**: `gnome.org/librsvg`
- **Name**: `rsvg-convert`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/librsvg/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install rsvg-convert
```

## Programs

This package provides the following executable programs:

- `rsvg-convert`

## Available Versions

<details>
<summary>Show all 30 versions</summary>

- `2.60.0`, `2.59.2`, `2.59.1`, `2.59.0`, `2.58.5`
- `2.58.4`, `2.58.3`, `2.58.2`, `2.58.1`, `2.58.0`
- `2.57.91`, `2.57.90`, `2.57.3`, `2.57.2`, `2.57.1`
- `2.57.0`, `2.56.93`, `2.56.92`, `2.56.4`, `2.56.3`
- `2.56.2`, `2.56.1`, `2.55.3`, `2.55.1`, `2.54.7`
- `2.54.6`, `2.52.11`, `2.52.10`, `2.50.9`, `2.50.8`

</details>

**Latest Version**: `2.60.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) rsvg-convert -- $SHELL -i
```

## Dependencies

This package depends on:

- `cairographics.org^1.18`
- `gnome.org/pango@1`
- `gnome.org/gdk-pixbuf@2`
- `gnome.org/glib@2`
- `gnu.org/gettext^0.21`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.gnome_org_librsvg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/librsvg/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
