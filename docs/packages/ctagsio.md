# ctags.io

> Package from pantry: ctags.io

## Package Information

- **Domain**: `ctags.io`
- **Name**: `ctags.io`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/ctags.io/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install ctags.io
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `digip.org/jansson^2`
- `pyyaml.org/libyaml^0.2`
- `pcre.org/v2^10`
- `gnome.org/libxml2~2.13 # 2.14 changes the API`

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
