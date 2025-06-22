# libtasn1

> ASN.1 structure parser library

## Package Information

- **Domain**: `gnu.org/libtasn1`
- **Name**: `libtasn1`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/libtasn1/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install +gnu.org/libtasn1 -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `asn1Coding`
- `asn1Decoding`
- `asn1Parser`

## Aliases

This package can also be accessed using these aliases:

- `asn1`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `4.20.0`, `4.19.0`

</details>

**Latest Version**: `4.20.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +gnu.org/libtasn1@4.20.0 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.asn1

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/libtasn1/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
