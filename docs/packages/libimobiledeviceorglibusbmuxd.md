# libimobiledevice.org/libusbmuxd

> A client library to multiplex connections from and to iOS devices

## Package Information

- **Domain**: `libimobiledevice.org/libusbmuxd`
- **Name**: `libimobiledevice.org/libusbmuxd`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/libimobiledevice.org/libusbmuxd/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +libimobiledevice.org/libusbmuxd -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `iproxy`
- `inetcat`

## Aliases

This package can also be accessed using these aliases:

- `libusbmuxd`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `2.1.1`, `2.1.0`, `2.0.2`

</details>

**Latest Version**: `2.1.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +libimobiledevice.org/libusbmuxd@2.1.1 -- $SHELL -i
```

## Dependencies

This package depends on:

- `libimobiledevice.org/libplist^2.4`
- `libimobiledevice.org/libimobiledevice-glue^1.2`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.libimobiledeviceorglibusbmuxd

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/libimobiledevice.org/libusbmuxd/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
