# arrow

> Apache Arrow is the universal columnar format and multi-language toolbox for fast data interchange and in-memory analytics

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

- `parquet-dump-schema`
- `parquet-reader`
- `parquet-scan`

## Available Versions

<details>
<summary>Show all 14 versions</summary>

- `20.0.0`, `19.0.1`, `19.0.0`, `18.1.0`, `18.0.0`
- `16.1.0`, `16.0.0`, `15.0.2`, `15.0.1`, `15.0.0`
- `14.0.2`, `14.0.1`, `14.0.0`, `13.0.0`

</details>

**Latest Version**: `20.0.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +apache.org/arrow@20.0.0 -- $SHELL -i
```

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
- `linux:protobuf.dev^26.1.0 # match grpc.io, so gdal.org can build, we bundle on darwin`

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
