# flit

> Simplified packaging of Python modules

## Package Information

- **Domain**: `flit.pypa.io`
- **Name**: `flit`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/flit.pypa.io/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install flit
```

## Programs

This package provides the following executable programs:

- `flit`

## Available Versions

<details>
<summary>Show all 6 versions</summary>

- `3.12.0`, `3.11.0`, `3.10.1`, `3.10.0`, `3.9.0`
- `3.8.0`

</details>

**Latest Version**: `3.12.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) flit -- $SHELL -i
```

## Dependencies

This package depends on:

- `python.org>=3<3.12`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.flit

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/flit.pypa.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
