# gdk-pixbuf

> Toolkit for image loading and pixel buffer manipulation

## Package Information

- **Domain**: `gnome.org/gdk-pixbuf`
- **Name**: `gdk-pixbuf`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/gdk-pixbuf/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install gdk-pixbuf
```

## Programs

This package provides the following executable programs:

- `gdk-pixbuf-csource`
- `gdk-pixbuf-pixdata`
- `gdk-pixbuf-query-loaders`
- `gdk-pixbuf-thumbnailer`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `2.43.2`, `2.42.9`, `2.42.8`

</details>

**Latest Version**: `2.43.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +gnome.org/gdk-pixbuf@2.43.2 -- $SHELL -i
```

## Dependencies

This package depends on:

- `ijg.org^9.6 # needs fixed major; sadly this includes the character > v9f`
- `gnome.org/glib@2`
- `libpng.org@1`
- `freedesktop.org/shared-mime-info^2 #FIXME only on Linux`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.gdk-pixbuf

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/gdk-pixbuf/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
