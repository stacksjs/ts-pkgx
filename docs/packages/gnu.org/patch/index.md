# patch

> A utility to apply a diff file to an original

## Package Information

- **Domain**: `gnu.org/patch`
- **Name**: `patch`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/patch/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install patch
```

## Programs

This package provides the following executable programs:

- `patch`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `2.8.0`, `2.7.6`

</details>

**Latest Version**: `2.8.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) patch -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.patch

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/patch/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
