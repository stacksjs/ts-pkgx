# sed

> A stream editor for filtering and transforming text

## Package Information

- **Domain**: `gnu.org/sed`
- **Name**: `sed`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/sed/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install sed
```

## Programs

This package provides the following executable programs:

- `sed`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `4.9.0`

</details>

**Latest Version**: `4.9.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) sed -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.sed

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/sed/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
