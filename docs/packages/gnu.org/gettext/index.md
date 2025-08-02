# gettext

> Package from pantry: gnu.org/gettext

## Package Information

- **Domain**: `gnu.org/gettext`
- **Name**: `gettext`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/gettext/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install gnu.org/gettext
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `gnome.org/libxml2~2.13 # 2.14 changes the API`
- `tukaani.org/xz^5 # autopoint needs this to unpack archives`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.gettext

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/gettext/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
