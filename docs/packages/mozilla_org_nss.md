# nss

> Package from pantry: mozilla.org/nss

## Package Information

- **Domain**: `mozilla.org/nss`
- **Name**: `nss`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/mozilla.org/nss/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install mozilla.org/nss
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `mozilla.org/nspr`
- `sqlite.org`
- `zlib.net`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.mozilla_org_nss

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/mozilla.org/nss/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
