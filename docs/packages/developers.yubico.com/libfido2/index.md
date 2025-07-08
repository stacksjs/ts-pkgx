# libfido2

> Package from pantry: developers.yubico.com/libfido2

## Package Information

- **Domain**: `developers.yubico.com/libfido2`
- **Name**: `libfido2`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/developers.yubico.com/libfido2/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install developers.yubico.com/libfido2
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `github.com/PJK/libcbor@0`
- `openssl.org@1`
- `zlib.net@1`
- `linux:systemd.io`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.libfido2

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/developers.yubico.com/libfido2/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
