# conda.org

> A package from conda.org

## Package Information

- **Domain**: `conda.org`
- **Name**: `conda.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/conda.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install conda
```

## Programs

This package provides the following executable programs:

- `conda`

## Aliases

This package can also be accessed using these aliases:

- `conda`

## Available Versions

<details>
<summary>Show all 15 versions</summary>

- `25.3.1`, `25.1.1`, `24.11.1`, `24.9.2`, `24.7.1`
- `24.5.0`, `24.4.0`, `24.3.0`, `24.1.2`, `23.11.0`
- `23.10.0`, `23.9.0`, `23.7.4`, `23.7.3`, `23.7.2`

</details>

**Latest Version**: `25.3.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +conda.org@25.3.1 -- $SHELL -i
```

## Dependencies

This package depends on:

- `pkgx.sh^1`
- `openssl.org^1.1`
- `python.org=3.11.5`
- `gnu.org/patch`
- `curl.se`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.condaorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/conda.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
