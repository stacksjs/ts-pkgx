# pv

> Monitor data's progress through a pipe

## Package Information

- **Domain**: `ivarch.com/pv`
- **Name**: `pv`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/ivarch.com/pv/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install pv
```

## Programs

This package provides the following executable programs:

- `pv`

## Available Versions

<details>
<summary>Show all 15 versions</summary>

- `1.9.42`, `1.9.34`, `1.9.31`, `1.9.27`, `1.9.25`
- `1.9.24`, `1.9.15`, `1.9.7`, `1.9.0`, `1.8.14`
- `1.8.13`, `1.8.12`, `1.8.10`, `1.8.9`, `1.8.5`

</details>

**Latest Version**: `1.9.42`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) pv -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.pv

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/ivarch.com/pv/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
