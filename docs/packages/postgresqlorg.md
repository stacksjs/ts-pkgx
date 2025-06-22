# postgresql.org

> Package from pantry: postgresql.org

## Package Information

- **Domain**: `postgresql.org`
- **Name**: `postgresql.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/postgresql.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install postgresql.org
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `openssl.org^1.0.1`
- `gnu.org/readline`
- `zlib.net`
- `lz4.org`
- `gnome.org/libxml2~2.13 # abi changed in 2.14`
- `gnome.org/libxslt`
- `unicode.org^73`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.postgresqlorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/postgresql.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
