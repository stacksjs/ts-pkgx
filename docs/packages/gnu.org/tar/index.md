# tar

> Multi-format archive and compression library

## Package Information

- **Domain**: `gnu.org/tar`
- **Name**: `tar`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/tar/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install tar
```

## Programs

This package provides the following executable programs:

- `tar`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `1.35.0`, `1.34.0`

</details>

**Latest Version**: `1.35.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) tar -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.tar

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/tar/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
