# postgrest.org

> Package from pantry: postgrest.org

## Package Information

- **Domain**: `postgrest.org`
- **Name**: `postgrest.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/postgrest.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install postgrest.org
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `postgresql.org/libpq@17`
- `zlib.net~1.3`
- `gnu.org/gcc/libstdcxx@14`
- `gnome.org/libxml2~2.13 # 2.14 changes library api version`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.postgrestorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/postgrest.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
