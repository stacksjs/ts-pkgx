# pygmentize

> Pygments is a generic syntax highlighter written in Python

## Package Information

- **Domain**: `pygments.org`
- **Name**: `pygmentize`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/pygments.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) pygmentize
```

## Programs

This package provides the following executable programs:

- `pygmentize`

## Available Versions

<details>
<summary>Show all 8 versions</summary>

- `2.19.1`, `2.19.0`, `2.18.0`, `2.17.2`, `2.17.1`
- `2.17.0`, `2.15.0`, `2.14.0`

</details>

**Latest Version**: `2.19.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +pygments.org@2.19.1 -- $SHELL -i
```

## Dependencies

This package depends on:

- `python.org~3.11`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.pygmentsorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/pygments.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
