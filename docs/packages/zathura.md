# zathura

> Document viewer

## Package Information

- **Domain**: `pwmt.org/zathura`
- **Name**: `zathura`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/pwmt.org/zathura/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install zathura
```

## Programs

This package provides the following executable programs:

- `zathura`

## Available Versions

<details>
<summary>Show all 6 versions</summary>

- `0.5.11`, `0.5.10`, `0.5.9`, `0.5.8`, `0.5.7`
- `0.5.6`

</details>

**Latest Version**: `0.5.11`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +pwmt.org/zathura@0.5.11 -- $SHELL -i
```

## Dependencies

This package depends on:

- `gnome.org/glib^2.72`
- `gnome.org/adwaita-icon-theme`
- `gnu.org/gettext`
- `freedesktop.org/appstream`
- `pwmt.org/girara@0`
- `freedesktop.org/intltool`
- `freedesktop.org/desktop-file-utils`
- `darwinsys.com/file`
- `gtk.org/gtk3^3.22`
- `sqlite.org@3`
- `darwin:gnome.org/gtk-mac-integration-gtk3`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.zathura

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/pwmt.org/zathura/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
