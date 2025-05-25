# cbindgen

> A project for generating C bindings from Rust code

## Package Information

- **Domain**: `mozillaorgcbindgen`
- **Name**: `cbindgen`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/mozilla.org/cbindgen/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) cbindgen
```

## Programs

This package provides the following executable programs:

- `cbindgen`

## Aliases

This package can also be accessed using these aliases:

- `cbindgen`

## Available Versions

<details>
<summary>Show all 4 versions</summary>

- `0.29.0`, `0.28.0`, `0.27.0`, `0.26.0`

</details>

**Latest Version**: `0.29.0`

### Install Specific Version

```bash
# Install specific version
pkgx cbindgen@0.29.0
```

## Dependencies

This package depends on:

- `linuxllvm.org`
- `llvm.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['mozillaorgcbindgen']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/mozilla.org/cbindgen/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
