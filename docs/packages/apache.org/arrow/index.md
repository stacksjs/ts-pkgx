# arrow

> Package from pantry: apache.org/arrow

## Package Information

- **Domain**: `apache.org/arrow`
- **Name**: `arrow`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/apache.org/arrow/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install apache.org/arrow
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `github.com/aws/aws-sdk-cpp`
- `github.com/google/brotli`
- `sourceware.org/bzip2`
- `google.com/glog`
- `grpc.io`
- `lz4.org`
- `openssl.org`
- `rapidjson.org`
- `github.com/google/re2`
- `google.github.io/snappy`
- `apache.org/thrift`
- `github.com/JuliaStrings/utf8proc`
- `facebook.com/zstd`
- `darwin:c-ares.org@1`
- `darwin:libcxx.llvm.org~17 # since 18.1.0`
- `linux:protobuf.dev^30.0.0 # match grpc.io, so gdal.org can build, we bundle on darwin`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.arrow

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/apache.org/arrow/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
