# debian.org/iso-codes

> A package from debian.org/iso-codes

## Package Information

- **Domain**: `debian.org/iso-codes`
- **Name**: `debian.org/iso-codes`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/debian.org/iso-codes/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) +debian.org/iso-codes -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Aliases

This package can also be accessed using these aliases:

- `iso-codes`

## Available Versions

<details>
<summary>Show all 4 versions</summary>

- `4.18.0`, `4.17.0`, `4.16.0`, `4.15.0`

</details>

**Latest Version**: `4.18.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +debian.org/iso-codes@4.18.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `gnu.org/gettext`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.debianorgisocodes

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/debian.org/iso-codes/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
