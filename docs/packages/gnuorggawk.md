# gnu.org/gawk

> A package from gnu.org/gawk

## Package Information

- **Domain**: `gnu.org/gawk`
- **Name**: `gnu.org/gawk`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/gawk/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +gnu.org/gawk -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `awk`
- `gawk`
- `gawk-&lbrace;&lbrace;version&rbrace;&rbrace;`
- `gawkbug`

## Aliases

This package can also be accessed using these aliases:

- `gawk`

## Available Versions

<details>
<summary>Show all 5 versions</summary>

- `5.3.2`, `5.3.1`, `5.3.0`, `5.2.2`, `5.2.1`

</details>

**Latest Version**: `5.3.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +gnu.org/gawk@5.3.2 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.gnuorggawk

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/gawk/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
