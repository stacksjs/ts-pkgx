# server

> Package from pantry: mariadb.com/server

## Package Information

- **Domain**: `mariadb.com/server`
- **Name**: `server`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/mariadb.com/server/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install mariadb.com/server
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `sourceware.org/bzip2^1`
- `github.com/besser82/libxcrypt^4`
- `gnome.org/libxml2`
- `invisible-island.net/ncurses^6`
- `zlib.net^1`
- `openssl.org^1.1`
- `pcre.org/v2^10`
- `facebook.com/zstd^1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.server

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/mariadb.com/server/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
