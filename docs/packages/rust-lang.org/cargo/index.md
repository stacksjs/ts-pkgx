# cargo

> Package from pantry: rust-lang.org/cargo

## Package Information

- **Domain**: `rust-lang.org/cargo`
- **Name**: `cargo`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/rust-lang.org/cargo/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install rust-lang.org/cargo
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `zlib.net^1`
- `libgit2.org~1.7 # links to libgit2.so.1.7`
- `curl.se/ca-certs`
- `linux:llvm.org`
- `linux:curl.se`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.cargo

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/rust-lang.org/cargo/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
