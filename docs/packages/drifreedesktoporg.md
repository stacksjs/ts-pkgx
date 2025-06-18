# dri.freedesktop.org

> A package from drifreedesktop.org

## Package Information

- **Domain**: `drifreedesktop.org`
- **Name**: `dri.freedesktop.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/dri.freedesktop.org/package.yml)

## Installation

```bash
# Install with pkgx
launchpad install +dri.freedesktop.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Aliases

This package can also be accessed using these aliases:

- `libdrm`

## Available Versions

<details>
<summary>Show all 11 versions</summary>

- `2.4.125`, `2.4.124`, `2.4.123`, `2.4.122`, `2.4.121`
- `2.4.120`, `2.4.119`, `2.4.118`, `2.4.117`, `2.4.116`
- `2.4.100`

</details>

**Latest Version**: `2.4.125`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +drifreedesktop.org@2.4.125 -- $SHELL -i
```

## Dependencies

This package depends on:

- `x.org/pciaccess`
- `mesonbuild.com`
- `ninja-build.org`
- `freedesktop.org/pkg-config`
- `python.org~3.11`
- `freedesktop.org/pkg-config`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.drifreedesktoporg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/dri.freedesktop.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
