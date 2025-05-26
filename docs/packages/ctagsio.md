# ctags

> A maintained ctags implementation

## Package Information

- **Domain**: `ctagsio`
- **Name**: `ctags`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/ctags.io/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) ctags
```

## Programs

This package provides the following executable programs:

- `ctags`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `6.1.0`

</details>

**Latest Version**: `6.1.0`

### Install Specific Version

```bash
# Install specific version
pkgx ctags@6.1.0
```

## Dependencies

This package depends on:

- `digip.org/jansson^2`
- `pyyaml.org/libyaml^0.2`
- `pcre.org/v2^10`
- `gnome.org/libxml2^2`

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
