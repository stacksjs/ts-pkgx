# yubikey-manager

> Package from pantry: developers.yubico.com/yubikey-manager

## Package Information

- **Domain**: `developers.yubico.com/yubikey-manager`
- **Name**: `yubikey-manager`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/developers.yubico.com/yubikey-manager/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install developers.yubico.com/yubikey-manager
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `python.org~3.11`
- `linux:pcsclite.apdu.fr^2`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['yubikey-manager']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/developers.yubico.com/yubikey-manager/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
