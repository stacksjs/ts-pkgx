# which

> A utility for locating a command

## Package Information

- **Domain**: `gnu.org/which`
- **Name**: `which`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/which/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install which
```

## Programs

This package provides the following executable programs:

- `which`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `2.23.0`, `2.22.0`, `2.21.0`

</details>

**Latest Version**: `2.23.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) which -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.which

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/which/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
