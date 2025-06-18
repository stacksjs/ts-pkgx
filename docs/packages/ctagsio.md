# ctags.io

> A maintained ctags implementation

## Package Information

- **Domain**: `ctags.io`
- **Name**: `ctags.io`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/ctags.io/package.yml)

## Installation

```bash
# Install with pkgx
launchpad install ctags
```

## Programs

This package provides the following executable programs:

- `ctags`

## Aliases

This package can also be accessed using these aliases:

- `ctags`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `6.2.0`, `6.1.0`

</details>

**Latest Version**: `6.2.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +ctags.io@6.2.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `digip.org/jansson^2`
- `pyyaml.org/libyaml^0.2`
- `pcre.org/v2^10`
- `gnome.org/libxml2~2.13 # 2.14 changes the API`
- `gnu.org/autoconf`
- `gnu.org/automake`
- `docutils.org~0.20`
- `python.org>=3.11`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.ctagsio

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/ctags.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
