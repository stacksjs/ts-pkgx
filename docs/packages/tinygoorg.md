# tinygo.org

> Go compiler for small places. Microcontrollers, WebAssembly (WASM/WASI), and command-line tools. Based on LLVM.

## Package Information

- **Domain**: `tinygo.org`
- **Name**: `tinygo.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/tinygo.org/package.yml)

## Installation

```bash
# Install with pkgx
launchpad install tinygo
```

## Programs

This package provides the following executable programs:

- `tinygo`

## Aliases

This package can also be accessed using these aliases:

- `tinygo`

## Available Versions

<details>
<summary>Show all 8 versions</summary>

- `0.38.0`, `0.37.0`, `0.36.0`, `0.35.0`, `0.34.0`
- `0.33.0`, `0.32.0`, `0.31.2`

</details>

**Latest Version**: `0.38.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +tinygo.org@0.38.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `go.dev`
- `go.dev^1.18`
- `git-scm.org@2`
- `cmake.org@3`
- `ninja-build.org@1`
- `nodejs.org`
- `python.org>=3.6`

## Related Packages

These packages work well with tinygo.org:

- [`llvm.org`](llvmorg.md) - The LLVM Project is a collection of modular and reusable compiler and toolchain technologies.

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.tinygoorg

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
