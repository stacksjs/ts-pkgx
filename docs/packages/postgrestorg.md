# postgrest

> Serves a fully RESTful API from any existing PostgreSQL database

## Package Information

- **Domain**: `postgrest.org`
- **Name**: `postgrest`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/postgrest.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) postgrest
```

## Programs

This package provides the following executable programs:

- `postgrest`

## Available Versions

<details>
<summary>Show all 14 versions</summary>

- `13.0.3`, `13.0.2`, `13.0.1`, `13.0.0`, `12.2.12`
- `12.2.11`, `12.2.10`, `12.2.9`, `12.2.8`, `12.2.7`
- `12.2.6`, `12.2.5`, `12.2.4`, `12.2.3`

</details>

**Latest Version**: `13.0.3`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +postgrest.org@13.0.3 -- $SHELL -i
```

## Dependencies

This package depends on:

- `postgresql.org/libpq@17`
- `zlib.net~1.3`
- `gnu.org/gcc/libstdcxx@14`

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
