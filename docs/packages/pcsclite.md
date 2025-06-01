# pcsc-lite

>

## Package Information

- **Domain**: `pcsclite`
- **Name**: `pcsc-lite`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/pcsclite.apdu.fr/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) pcscd
```

## Programs

This package provides the following executable programs:

- `pcscd`

## Aliases

This package can also be accessed using these aliases:

- `pcsc-lite`

## Available Versions

<details>
<summary>Show all 13 versions</summary>

- `2.3.3`, `2.3.2`, `2.3.1`, `2.3.0`, `2.2.3`
- `2.2.2`, `2.2.1`, `2.2.0`, `2.1.0`, `2.0.3`
- `2.0.2`, `2.0.1`, `2.0.0`

</details>

**Latest Version**: `2.3.3`

### Install Specific Version

```bash
# Install specific version
pkgx pcsc-lite@2.3.3
```

## Dependencies

This package depends on:

- `libusb.info^1`
- `linuxsystemd.io^254`
- `systemd.io^254`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.pcsclite

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/pcsclite.apdu.fr/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
