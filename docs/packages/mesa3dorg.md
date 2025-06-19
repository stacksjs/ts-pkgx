# mesa3d.org

> A package from mesa3d.org

## Package Information

- **Domain**: `mesa3d.org`
- **Name**: `mesa3d.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/mesa3d.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install +mesa3d.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Available Versions

<details>
<summary>Show all 55 versions</summary>

- `25.1.4`, `25.1.3`, `25.1.2`, `25.1.1`, `25.1.0`
- `25.0.7`, `25.0.6`, `25.0.5`, `25.0.4`, `25.0.3`
- `25.0.2`, `25.0.1`, `25.0.0`, `24.3.4`, `24.3.3`
- `24.3.2`, `24.3.1`, `24.3.0`, `24.2.8`, `24.2.7`
- `24.2.6`, `24.2.5`, `24.2.4`, `24.2.3`, `24.2.2`
- `24.2.1`, `24.2.0`, `24.1.7`, `24.1.6`, `24.1.5`
- `24.1.4`, `24.1.3`, `24.1.2`, `24.1.1`, `24.1.0`
- `24.0.9`, `24.0.8`, `24.0.7`, `24.0.6`, `24.0.5`
- `24.0.4`, `24.0.3`, `24.0.2`, `24.0.1`, `24.0.0`
- `23.3.6`, `23.3.5`, `23.3.4`, `23.3.3`, `23.3.2`
- `23.3.1`, `23.3.0`, `23.2.1`, `23.1.8`, `23.1.7`

</details>

**Latest Version**: `25.1.4`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +mesa3d.org@25.1.4 -- $SHELL -i
```

## Dependencies

This package depends on:

- `libexpat.github.io`
- `x.org/x11`
- `x.org/xcb`
- `x.org/xdamage`
- `x.org/exts`
- `invisible-island.net/ncurses`
- `zlib.net`
- `x.org/xrandr`
- `darwin:gnu.org/gettext`
- `linux:gnome.org/libxml2~2.13 # since 25.0.3, 2.14 changed the API version`
- `linux:elfutils.org`
- `linux:khronos.org/glslang`
- `linux:info-zip.org/zip`
- `linux:dri.freedesktop.org^2.4.110`
- `linux:intel.com/libva`
- `linux:freedesktop.org/vdpau`
- `linux:x.org/xfixes`
- `linux:x.org/xshmfence`
- `linux:x.org/xv`
- `linux:x.org/xxf86vm`
- `linux:llvm.org`
- `linux:github.com/lm-sensors/lm-sensors`
- `linux:wayland.freedesktop.org`
- `linux:wayland.freedesktop.org/protocols`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.mesa3dorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/mesa3d.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
