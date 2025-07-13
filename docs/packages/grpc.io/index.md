# grpc.io

> Package from pantry: grpc.io

## Package Information

- **Domain**: `grpc.io`
- **Name**: `grpc.io`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/grpc.io/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install grpc.io
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `abseil.io^20250127`
- `c-ares.org`
- `openssl.org^1.1`
- `github.com/google/re2`
- `zlib.net`
- `linux:gnu.org/gcc/libstdcxx`
- `linux:protobuf.dev^30.0.0 # as of 1.72.0`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['grpc.io']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/grpc.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
