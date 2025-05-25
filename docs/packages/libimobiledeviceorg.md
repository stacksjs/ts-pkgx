# idevicedate

> A cross-platform protocol library to communicate with iOS devices

## Package Information

- **Domain**: `libimobiledeviceorg`
- **Name**: `idevicedate`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/libimobiledevice.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) idevicedate
```

## Programs

This package provides the following executable programs:

- `idevicedate`

## Aliases

This package can also be accessed using these aliases:

- `idevicedate`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `1.3.0`

</details>

**Latest Version**: `1.3.0`

### Install Specific Version

```bash
# Install specific version
pkgx idevicedate@1.3.0
```

## Dependencies

This package depends on:

- `libimobiledevice.org/libplist^2.4`
- `gnu.org/libtasn1^4.19`
- `libimobiledevice.org/libusbmuxd^2`
- `openssl.org^1.1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['libimobiledeviceorg']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/libimobiledevice.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
