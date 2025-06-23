# pypa.io/packaging

> Core utilities for Python packages

## Package Information

- **Domain**: `pypa.io/packaging`
- **Name**: `pypa.io/packaging`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/pypa.io/packaging/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install pypa.io/packaging
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Available Versions

<details>
<summary>Show all 5 versions</summary>

- `25.0.0`, `24.2.0`, `24.1.0`, `24.0.0`, `23.2.0`

</details>

**Latest Version**: `25.0.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +pypa.io/packaging@25.0.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `python.org>=3.11`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['pypa.io/packaging']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/pypa.io/packaging/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
