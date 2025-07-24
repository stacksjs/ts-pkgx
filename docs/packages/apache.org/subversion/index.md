# subversion

> Package from pantry: apache.org/subversion

## Package Information

- **Domain**: `apache.org/subversion`
- **Name**: `subversion`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/apache.org/subversion/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install apache.org/subversion
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `gnu.org/gettext^0.21`
- `lz4.org^1`
- `openssl.org^1.1`
- `github.com/JuliaStrings/utf8proc^2`
- `libexpat.github.io^2`
- `kerberos.org^1.20`
- `sqlite.org^3`
- `zlib.net^1.2`
- `apache.org/apr^1`
- `apache.org/apr-util^1`
- `apache.org/serf^1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.subversion

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/apache.org/subversion/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
