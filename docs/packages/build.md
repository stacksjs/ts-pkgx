# pyproject-build

> A simple, correct Python build frontend

## Package Information

- **Domain**: `github.com/pypa/build`
- **Name**: `pyproject-build`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/pypa/build/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install pyproject-build
```

## Programs

This package provides the following executable programs:

- `pyproject-build`

## Available Versions

<details>
<summary>Show all 9 versions</summary>

- `1.2.2`, `1.2.1`, `1.2.0`, `1.1.1`, `1.1.0`
- `1.0.3`, `1.0.1`, `1.0.0`, `0.10.0`

</details>

**Latest Version**: `1.2.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) pyproject-build -- $SHELL -i
```

## Dependencies

This package depends on:

- `pkgx.sh^1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.build

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/pypa/build/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
