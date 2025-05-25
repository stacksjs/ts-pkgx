# conda

> 

## Package Information

- **Domain**: `condaorg`
- **Name**: `conda`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/conda.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) conda
```

## Programs

This package provides the following executable programs:

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
pkgx conda@25.3.1
```

## Dependencies

This package depends on:

- `pkgx.sh^1`
- `openssl.org^1.1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['condaorg']

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
