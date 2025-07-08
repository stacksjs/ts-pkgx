# folly

> Package from pantry: facebook.com/folly

## Package Information

- **Domain**: `facebook.com/folly`
- **Name**: `folly`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/facebook.com/folly/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install facebook.com/folly
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `boost.org`
- `gflags.github.io`
- `google.com/glog<0.7`
- `libevent.org`
- `lz4.org@1`
- `openssl.org^1.1`
- `tukaani.org/xz@5`
- `facebook.com/zstd@1`
- `gnu.org/coreutils@9`
- `google.github.io/snappy`
- `google.com/double-conversion^3`
- `google.com/googletest^1`
- `fmt.dev^10`
- `zlib.net^1`
- `github.com/fastfloat/fast_float@7`
- `darwin:sourceware.org/bzip2`
- `linux:libcxx.llvm.org^18 # libunwind, since 2024.5.13.0`
- `linux:jemalloc.net^5 # since 2024.5.13.0`
- `linux:elfutils.org^0 # for dwarf.h, since 2024.5.13.0`
- `linux:gnu.org/gcc/libstdcxx@13`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.folly

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/facebook.com/folly/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
