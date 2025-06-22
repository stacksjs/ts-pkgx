# fb303

> Package from pantry: facebook.com/fb303

## Package Information

- **Domain**: `facebook.com/fb303`
- **Name**: `fb303`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/facebook.com/fb303/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install facebook.com/fb303
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `github.com/facebookincubator/fizz`
- `facebook.com/wangle`
- `facebook.com/folly`
- `facebook.com/fbthrift>=2023.12.18.0`
- `fmt.dev^10`
- `gflags.github.io^2.2.2`
- `google.com/glog^0.6`
- `libsodium.org^1.0.19`
- `openssl.org^1.1`
- `github.com/Cyan4973/xxHash^0.8 # since 2024.10.14.0`
- `linux:zlib.net^1`
- `linux:gnu.org/gcc/libstdcxx@13`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.facebook_com_fb303

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/facebook.com/fb303/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
