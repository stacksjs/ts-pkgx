# gnome.org/vala

> Compiler for the GObject type system

## Package Information

- **Domain**: `gnome.org/vala`
- **Name**: `gnome.org/vala`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/vala/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) +gnome.org/vala -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `vala`
- `valac`
- `valadoc`
- `vala-gen-introspect`
- `vapigen`

## Aliases

This package can also be accessed using these aliases:

- `vala`

## Available Versions

<details>
<summary>Show all 6 versions</summary>

- `0.56.18`, `0.56.17`, `0.56.16`, `0.56.15`, `0.56.14`
- `0.56.13`

</details>

**Latest Version**: `0.56.18`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +gnome.org/vala@0.56.18 -- $SHELL -i
```

## Dependencies

This package depends on:

- `gnome.org/glib`
- `graphviz.org`
- `freedesktop.org/pkg-config`
- `gnu.org/gettext`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.gnomeorgvala

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/vala/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
