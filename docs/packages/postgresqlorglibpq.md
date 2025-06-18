# postgresql.org/libpq

> A package from postgresql.org/libpq

## Package Information

- **Domain**: `postgresql.org/libpq`
- **Name**: `postgresql.org/libpq`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/postgresql.org/libpq/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +postgresql.org/libpq -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Aliases

This package can also be accessed using these aliases:

- `libpq`

## Available Versions

<details>
<summary>Show all 4 versions</summary>

- `17.0.0`, `16.1.0`, `16.0.0`, `15.2.0`

</details>

**Latest Version**: `17.0.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +postgresql.org/libpq@17.0.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `kerberos.org`
- `openssl.org^1.1`
- `zlib.net^1`
- `unicode.org^71`
- `linuxgnu.org/readline`
- `gnu.org/readline`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.postgresqlorglibpq

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/postgresql.org/libpq/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
