# pinentry

> Package from pantry: gnupg.org/pinentry

## Package Information

- **Domain**: `gnupg.org/pinentry`
- **Name**: `pinentry`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnupg.org/pinentry/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install gnupg.org/pinentry
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `gnupg.org/libassuan`
- `gnupg.org/libgpg-error`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.gnupg_org_pinentry

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnupg.org/pinentry/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
