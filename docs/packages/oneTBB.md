# tbb

> oneAPI Threading Building Blocks (oneTBB)

## Package Information

- **Domain**: `github.com/oneapi-src/oneTBB`
- **Name**: `tbb`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/oneapi-src/oneTBB/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install tbb
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Available Versions

<details>
<summary>Show all 6 versions</summary>

- `2022.1.0`, `2022.0.0`, `2021.13.0`, `2021.12.0`, `2021.11.0`
- `2021.10.0`

</details>

**Latest Version**: `2022.1.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +github.com/oneapi-src/oneTBB@2022.1.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `python.org~3.11`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.oneTBB

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/oneapi-src/oneTBB/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
