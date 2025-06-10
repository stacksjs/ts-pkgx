# ipython

> Official repository for IPython itself. Other repos in the IPython organization contain things like the website, documentation builds, etc.

## Package Information

- **Domain**: `ipython.org`
- **Name**: `ipython`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/ipython.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +ipython.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `ipython`
- `ipython3`

## Available Versions

<details>
<summary>Show all 44 versions</summary>

- `9.3.0`, `9.2.0`, `9.1.0`, `9.0.2`, `9.0.1`
- `9.0.0`, `8.37.0`, `8.36.0`, `8.35.0`, `8.34.0`
- `8.33.0`, `8.32.0`, `8.31.0`, `8.30.0`, `8.29.0`
- `8.28.0`, `8.27.0`, `8.26.0`, `8.25.0`, `8.24.0`
- `8.23.0`, `8.22.2`, `8.22.1`, `8.22.0`, `8.21.0`
- `8.20.0`, `8.19.1`, `8.19.0`, `8.18.1`, `8.18.0`
- `8.17.2`, `8.17.1`, `8.17.0`, `8.16.1`, `8.16.0`
- `8.15.0`, `8.14.0`, `8.13.2`, `8.13.1`, `8.13.0`
- `8.12.3`, `8.12.2`, `8.12.1`, `8.12.0`

</details>

**Latest Version**: `9.3.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +ipython.org@9.3.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `pkgx.sh^1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.ipythonorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/ipython.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
