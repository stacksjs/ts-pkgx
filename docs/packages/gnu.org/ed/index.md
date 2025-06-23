# ed

> A line-oriented text editor

## Package Information

- **Domain**: `gnu.org/ed`
- **Name**: `ed`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/ed/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install ed
```

## Programs

This package provides the following executable programs:

- `ed`

## Available Versions

<details>
<summary>Show all 4 versions</summary>

- `1.21.1`, `1.20.2`, `1.20.1`, `1.14.2`

</details>

**Latest Version**: `1.21.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) ed -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.ed

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/ed/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
