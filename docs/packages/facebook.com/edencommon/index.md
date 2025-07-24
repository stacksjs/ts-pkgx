# edencommon

> Package from pantry: facebook.com/edencommon

## Package Information

- **Domain**: `facebook.com/edencommon`
- **Name**: `edencommon`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/facebook.com/edencommon/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install facebook.com/edencommon
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `facebook.com/folly`
- `gflags.github.io`
- `google.com/glog`
- `facebook.com/fb303`
- `facebook.com/mvfst`
- `openssl.org^1.1`
- `sourceware.org/bzip2^1`
- `boost.org~1.88`
- `linux:gnu.org/gcc/libstdcxx@13`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.edencommon

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/facebook.com/edencommon/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
