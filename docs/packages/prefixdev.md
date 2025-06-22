# prefix.dev

> Package from pantry: prefix.dev

## Package Information

- **Domain**: `prefix.dev`
- **Name**: `prefix.dev`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/prefix.dev/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install prefix.dev
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `openssl.org^1.1`
- `libgit2.org~1.7 # links to libgit2.so.1.7`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.prefixdev

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/prefix.dev/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
