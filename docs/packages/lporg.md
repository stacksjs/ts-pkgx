# lporg

> Organize Your macOS Launchpad Apps

## Package Information

- **Domain**: `lp.org`
- **Name**: `lporg`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/blacktop/lporg/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) lporg
```

## Programs

This package provides the following executable programs:

- `lporg`

## Aliases

This package can also be accessed using these aliases:

- `blacktop/lporg`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `20.4.32`

</details>

**Latest Version**: `20.4.32`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +lp.org@20.4.32 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.lporg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/blacktop/lporg/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
