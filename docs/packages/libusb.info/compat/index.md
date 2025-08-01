# libusb-config

> Library for USB device access

## Package Information

- **Domain**: `libusb.info/compat`
- **Name**: `libusb-config`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/libusb.info/compat/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install libusb-config
```

## Programs

This package provides the following executable programs:

- `libusb-config`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `0.1.8`

</details>

**Latest Version**: `0.1.8`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) libusb-config -- $SHELL -i
```

## Dependencies

This package depends on:

- `libusb.info^1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['libusb-config']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/libusb.info/compat/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
