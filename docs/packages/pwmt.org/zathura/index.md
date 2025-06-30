# zathura

> Package from pantry: pwmt.org/zathura

## Package Information

- **Domain**: `pwmt.org/zathura`
- **Name**: `zathura`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/pwmt.org/zathura/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install pwmt.org/zathura
```

## Programs

This package provides the following executable programs:

*No programs specified*

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
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
