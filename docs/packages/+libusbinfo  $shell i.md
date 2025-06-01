# libusb.info

> A cross-platform library to access USB devices

## Package Information

- **Domain**: `+libusbinfo  $shell i`
- **Name**: `libusb.info`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/libusb.info/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +libusb.info -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Aliases

This package can also be accessed using these aliases:

- `+libusb.info -- $SHELL -i`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `1.0.28`, `1.0.27`, `1.0.26`

</details>

**Latest Version**: `1.0.28`

### Install Specific Version

```bash
# Install specific version
pkgx libusb.info@1.0.28
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.+libusbinfo  $shell i

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/libusb.info/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
