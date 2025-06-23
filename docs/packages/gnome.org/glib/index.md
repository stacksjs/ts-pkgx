# gnome.org/glib

> Core application library for C

## Package Information

- **Domain**: `gnome.org/glib`
- **Name**: `gnome.org/glib`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/glib/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install gnome.org/glib
```

## Programs

This package provides the following executable programs:

- `gdbus`
- `gdbus-codegen`
- `gio`
- `gio-querymodules`
- `glib-compile-resources`
- `glib-compile-schemas`
- `glib-genmarshal`
- `glib-gettextize`
- `glib-mkenums`
- `gobject-query`
- `gresource`
- `gsettings`
- `gtester`
- `gtester-report`

## Available Versions

<details>
<summary>Show all 45 versions</summary>

- `2.85.1`, `2.85.0`, `2.84.3`, `2.84.2`, `2.84.1`
- `2.84.0`, `2.83.5`, `2.83.4`, `2.83.3`, `2.83.2`
- `2.83.0`, `2.82.5`, `2.82.4`, `2.82.3`, `2.82.2`
- `2.82.1`, `2.82.0`, `2.81.2`, `2.81.0`, `2.80.5`
- `2.80.4`, `2.80.3`, `2.80.2`, `2.80.1`, `2.80.0`
- `2.79.3`, `2.79.2`, `2.79.1`, `2.79.0`, `2.78.6`
- `2.78.5`, `2.78.3`, `2.78.2`, `2.78.1`, `2.78.0`
- `2.77.3`, `2.77.2`, `2.77.1`, `2.77.0`, `2.76.6`
- `2.76.5`, `2.76.4`, `2.76.3`, `2.76.2`, `2.72.4`

</details>

**Latest Version**: `2.85.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +gnome.org/glib@2.85.1 -- $SHELL -i
```

## Dependencies

This package depends on:

- `gnu.org/gettext^0.21`
- `sourceware.org/libffi@3`
- `pcre.org@8`
- `pcre.org/v2@10`
- `python.org^3 # several of the bins are scripts`

## Related Packages

These packages work well with gnome.org/glib:

- [`gnome.org/gsettings-desktop-schemas`](../gsettings-desktop-schemas/index.md) - Package not available

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.glib

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/glib/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
