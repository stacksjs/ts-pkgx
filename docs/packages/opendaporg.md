# opendap.org

> A new version of libdap that contains both DAP2 and DAP4 support

## Package Information

- **Domain**: `opendaporg`
- **Name**: `opendap.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/opendap.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +opendap.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `dap-config`
- `dap-config-pkgconfig`
- `getdap`
- `getdap4`

## Aliases

This package can also be accessed using these aliases:

- `+opendap.org -- $SHELL -i`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `3.21.1`, `3.20.11`

</details>

**Latest Version**: `3.21.1`

### Install Specific Version

```bash
# Install specific version
pkgx opendap.org@3.21.1
```

## Dependencies

This package depends on:

- `gnome.org/libxml2`
- `openssl.org`
- `curl.se`
- `linuxsourceforge.net/libtirpcgithub.com/util-linux/util-linux`
- `sourceforge.net/libtirpc`
- `github.com/util-linux/util-linux`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.opendaporg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/opendap.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
