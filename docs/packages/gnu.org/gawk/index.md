# gnu.org/gawk

> GNU version of the AWK programming language

## Package Information

- **Domain**: `gnu.org/gawk`
- **Name**: `gnu.org/gawk`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/gawk/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install gnu.org/gawk
```

## Programs

This package provides the following executable programs:

- `awk`
- `gawk`
- `gawk-5.3.2`
- `gawkbug`

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
const pkg = pantry.gawk

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/gawk/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
