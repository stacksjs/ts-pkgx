# gnupg.org

> Package from pantry: gnupg.org

## Package Information

- **Domain**: `gnupg.org`
- **Name**: `gnupg.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnupg.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install gnupg.org
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `zlib.net^1.1`
- `sourceware.org/bzip2`
- `gnupg.org/npth`
- `gnupg.org/libgpg-error`
- `gnupg.org/libksba`
- `gnupg.org/libassuan@2`
- `gnupg.org/libgcrypt`
- `gnupg.org/pinentry`
- `gnutls.org^3`
- `openldap.org^2`
- `gnu.org/readline^8`
- `sqlite.org^3`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.gnupgorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnupg.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
