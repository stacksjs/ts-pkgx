# wimlib.net

> Library to create, extract, and modify Windows Imaging files

## Package Information

- **Domain**: `+wimlibnet  $shell i`
- **Name**: `wimlib.net`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/wimlib.net/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +wimlib.net -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `mkwinpeimg`
- `wimappend`
- `wimapply`
- `wimapply`
- `wimdelete`
- `wimdir`
- `wimexport`
- `wimextract`
- `wiminfo`
- `wimjoin`
- `wimlib-imagex`
- `wimmount`
- `wimmountrw`
- `wimoptimize`
- `wimsplit`
- `wimunmount`
- `wimupdate`
- `wimverify`

## Aliases

This package can also be accessed using these aliases:

- `+wimlib.net -- $SHELL -i`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `1.14.4`, `1.14.3`, `1.14.1`

</details>

**Latest Version**: `1.14.4`

### Install Specific Version

```bash
# Install specific version
pkgx wimlib.net@1.14.4
```

## Dependencies

This package depends on:

- `openssl.org^3.1.0`
- `gnome.org/libxml2`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.+wimlibnet  $shell i

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/wimlib.net/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
