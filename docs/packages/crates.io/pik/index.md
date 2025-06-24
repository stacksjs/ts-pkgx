# pik

> Process Interactive Kill

## Package Information

- **Domain**: `crates.io/pik`
- **Name**: `pik`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/pik/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install pik
```

## Programs

This package provides the following executable programs:

- `pik`

## Available Versions

<details>
<summary>Show all 11 versions</summary>

- `0.24.0`, `0.23.1`, `0.23.0`, `0.22.0`, `0.21.0`
- `0.20.0`, `0.19.0`, `0.18.1`, `0.18.0`, `0.17.0`
- `0.16.0`

</details>

**Latest Version**: `0.24.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) pik -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.pik

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/pik/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
