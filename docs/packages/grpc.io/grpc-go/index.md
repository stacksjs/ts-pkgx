# protoc-gen-go-grpc

> The Go language implementation of gRPC. HTTP/2 based RPC

## Package Information

- **Domain**: `grpc.io/grpc-go`
- **Name**: `protoc-gen-go-grpc`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/grpc.io/grpc-go/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install protoc-gen-go-grpc
```

## Programs

This package provides the following executable programs:

- `protoc-gen-go-grpc`

## Available Versions

<details>
<summary>Show all 31 versions</summary>

- `1.74.1`, `1.74.0`, `1.73.0`, `1.72.2`, `1.72.1`
- `1.72.0`, `1.71.3`, `1.71.2`, `1.71.1`, `1.71.0`
- `1.70.0`, `1.69.4`, `1.69.3`, `1.69.2`, `1.69.0`
- `1.68.2`, `1.68.1`, `1.68.0`, `1.67.3`, `1.67.2`
- `1.67.1`, `1.67.0`, `1.66.3`, `1.66.2`, `1.66.0`
- `1.65.1`, `1.65.0`, `1.64.1`, `1.64.0`, `1.63.3`
- `1.63.2`

</details>

**Latest Version**: `1.74.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) protoc-gen-go-grpc -- $SHELL -i
```

## Dependencies

This package depends on:

- `google.com/protobuf-go^1`

## Related Packages

These packages work well with protoc-gen-go-grpc:

- [`protobuf.dev`](../../protobuf.dev/index.md) - Protocol Buffers - Google's data interchange format
- [`abseil.io`](../../abseil.io/index.md) - Abseil Common Libraries (C++)
- [`go.dev`](../../go.dev/index.md) - The Go programming language

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['protoc-gen-go-grpc']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/grpc.io/grpc-go/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
