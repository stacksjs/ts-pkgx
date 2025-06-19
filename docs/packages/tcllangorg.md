# tcl-lang.org

> Tool Command Language

## Package Information

- **Domain**: `tcl/lang.org`
- **Name**: `tcl-lang.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/tcl-lang.org/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) +tcl-lang.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `tclsh`
- `wish`
- `critcl`

## Available Versions

<details>
<summary>Show all 6 versions</summary>

- `9.0.1`, `9.0.0`, `8.6.16`, `8.6.15`, `8.6.14`
- `8.6.13`

</details>

**Latest Version**: `9.0.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +tcl/lang.org@9.0.1 -- $SHELL -i
```

## Dependencies

This package depends on:

- `openssl.org^1.1`
- `zlib.net^1.3`
- `freetype.org^2`
- `freedesktop.org/pkg-config^0.29`
- `x.org/x11=1.8.11`
- `x.org/exts^1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.tcllangorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/tcl-lang.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
