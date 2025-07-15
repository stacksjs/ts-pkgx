# watchman

> Package from pantry: facebook.com/watchman

## Package Information

- **Domain**: `facebook.com/watchman`
- **Name**: `watchman`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/facebook.com/watchman/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install facebook.com/watchman
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `facebook.com/edencommon`
- `facebook.com/fb303`
- `facebook.com/folly`
- `fmt.dev>=9`
- `gflags.github.io^2`
- `google.com/glog^0.6`
- `libevent.org^2.1`
- `libsodium.org^1`
- `openssl.org^1.1`
- `pcre.org/v2^10`
- `python.org~3.11`
- `linux:libcxx.llvm.org^18 # libunwind`
- `linux:gnu.org/gcc/libstdcxx@13`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.watchman

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/facebook.com/watchman/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
