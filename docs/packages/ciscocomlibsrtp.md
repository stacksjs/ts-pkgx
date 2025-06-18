# cisco.com/libsrtp

> Library for SRTP (Secure Realtime Transport Protocol)

## Package Information

- **Domain**: `cisco.com/libsrtp`
- **Name**: `cisco.com/libsrtp`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/cisco.com/libsrtp/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +cisco.com/libsrtp -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Aliases

This package can also be accessed using these aliases:

- `libsrtp`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `2.7.0`, `2.6.0`, `2.5.0`

</details>

**Latest Version**: `2.7.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +cisco.com/libsrtp@2.7.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `openssl.org~1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.ciscocomlibsrtp

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/cisco.com/libsrtp/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
