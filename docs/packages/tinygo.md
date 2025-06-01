# tinygo

> Go compiler for small places. Microcontrollers, WebAssembly (WASM/WASI), and command-line tools. Based on LLVM.

## Package Information

- **Domain**: `tinygo`
- **Name**: `tinygo`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/tinygo.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) tinygo
```

## Programs

This package provides the following executable programs:

- `tinygo`

## Aliases

This package can also be accessed using these aliases:

- `tinygo`

## Available Versions

<details>
<summary>Show all 7 versions</summary>

- `0.37.0`, `0.36.0`, `0.35.0`, `0.34.0`, `0.33.0`
- `0.32.0`, `0.31.2`

</details>

**Latest Version**: `0.37.0`

### Install Specific Version

```bash
# Install specific version
pkgx tinygo@0.37.0
```

## Dependencies

This package depends on:

- `go.dev`

## Related Packages

These packages work well with tinygo:

- `llvm.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.tinygo

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/tinygo.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
