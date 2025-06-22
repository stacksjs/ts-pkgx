# xpra

> Persistent remote applications for X11; screen sharing for X11, MacOS and MSWindows.

## Package Information

- **Domain**: `xpra.org`
- **Name**: `xpra`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/xpra.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install xpra
```

## Programs

This package provides the following executable programs:

- `xpra`

## Available Versions

<details>
<summary>Show all 10 versions</summary>

- `6.3.1`, `6.3.0`, `6.2.5`, `6.2.4`, `6.2.3`
- `6.2.2`, `6.2.1`, `6.2.0`, `6.1.3`, `6.1.2`

</details>

**Latest Version**: `6.3.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) xpra -- $SHELL -i
```

## Dependencies

This package depends on:

- `pkgx.sh^1`
- `python.org~3.11`
- `cython.org`
- `tukaani.org/xz`
- `cairographics.org`
- `cairographics.org/pycairo@1.26.1`
- `freedesktop.org/pkg-config~0.29`
- `gnome.org/PyGObject`
- `gnome.org/glib`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.xpra_org

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/xpra.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
