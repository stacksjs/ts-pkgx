# cargo-c

> Package from pantry: github.com/lu-zero/cargo-c

## Package Information

- **Domain**: `github.com/lu-zero/cargo-c`
- **Name**: `cargo-c`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/lu-zero/cargo-c/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install github.com/lu-zero/cargo-c
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `libgit2.org~1.7 # links to libgit2.so.1.7`
- `libssh2.org`
- `openssl.org^1.1`
- `zlib.net`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.cargo_c

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/lu-zero/cargo-c/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
