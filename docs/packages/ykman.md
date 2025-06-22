# yubikey-manager

> Python library and command line tool for configuring any YubiKey over all USB interfaces.

## Package Information

- **Domain**: `developers.yubico.com/yubikey-manager`
- **Name**: `yubikey-manager`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/developers.yubico.com/yubikey-manager/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install ykman
```

## Programs

This package provides the following executable programs:

- `ykman`

## Aliases

This package can also be accessed using these aliases:

- `ykman`

## Available Versions

<details>
<summary>Show all 10 versions</summary>

- `5.7.2`, `5.7.1`, `5.7.0`, `5.6.1`, `5.6.0`
- `5.5.1`, `5.5.0`, `5.4.0`, `5.3.0`, `5.2.1`

</details>

**Latest Version**: `5.7.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +developers.yubico.com/yubikey-manager@5.7.2 -- $SHELL -i
```

## Dependencies

This package depends on:

- `python.org~3.11`
- `linux:pcsclite.apdu.fr^2`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.ykman

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/developers.yubico.com/yubikey-manager/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
