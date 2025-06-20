# intel.com/libva

> Libva is an implementation for VA-API (Video Acceleration API)

## Package Information

- **Domain**: `intel.com/libva`
- **Name**: `intel.com/libva`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/intel.com/libva/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) +intel.com/libva -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Aliases

This package can also be accessed using these aliases:

- `libva`

## Available Versions

<details>
<summary>Show all 4 versions</summary>

- `2.22.0`, `2.21.0`, `2.20.0`, `2.19.0`

</details>

**Latest Version**: `2.22.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +intel.com/libva@2.22.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `dri.freedesktop.org`
- `x.org/x11`
- `x.org/exts`
- `x.org/xfixes`
- `wayland.freedesktop.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.intelcomlibva

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/intel.com/libva/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
