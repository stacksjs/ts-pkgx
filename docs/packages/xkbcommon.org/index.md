# xkbcli

> keymap handling library for toolkits and window systems

## Package Information

- **Domain**: `xkbcommon.org`
- **Name**: `xkbcli`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/xkbcommon.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install xkbcli
```

## Programs

This package provides the following executable programs:

- `xkbcli`

## Available Versions

<details>
<summary>Show all 9 versions</summary>

- `1.10.0`, `1.9.2`, `1.9.1`, `1.9.0`, `1.8.1`
- `1.8.0`, `1.7.0`, `1.6.0`, `1.5.0`

</details>

**Latest Version**: `1.10.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) xkbcli -- $SHELL -i
```

## Dependencies

This package depends on:

- `x.org/x11`
- `x.org/xcb`
- `freedesktop.org/XKeyboardConfig`
- `gnome.org/libxml2`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.xkbcli

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/xkbcommon.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
