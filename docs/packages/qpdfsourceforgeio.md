# qpdf.sourceforge.io

> qpdf: A content-preserving PDF document transformer

## Package Information

- **Domain**: `qpdfsourceforge.io`
- **Name**: `qpdf.sourceforge.io`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/qpdf.sourceforge.io/package.yml)

## Installation

```bash
# Install with pkgx
launchpad install qpdf
```

## Programs

This package provides the following executable programs:

- `qpdf`

## Aliases

This package can also be accessed using these aliases:

- `qpdf`

## Available Versions

<details>
<summary>Show all 10 versions</summary>

- `12.2.0`, `12.1.0`, `12.0.0`, `11.10.1`, `11.10.0`
- `11.9.1`, `11.9.0`, `11.8.0`, `11.7.0`, `11.6.4`

</details>

**Latest Version**: `12.2.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +qpdfsourceforge.io@12.2.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `zlib.net^1`
- `libjpeg-turbo.org^2`
- `openssl.org^1.1`
- `gnutls.org^3`
- `cmake.org^3`
- `pyyaml.org/libyaml`
- `python.org^3`
- `pip.pypa.io`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.qpdfsourceforgeio

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/qpdf.sourceforge.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
