# cryptography.io

> cryptography is a package designed to expose cryptographic primitives and recipes to Python developers.

## Package Information

- **Domain**: `cryptographyio`
- **Name**: `cryptography.io`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/cryptography.io/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +cryptography.io -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Aliases

This package can also be accessed using these aliases:

- `+cryptography.io -- $SHELL -i`

## Available Versions

<details>
<summary>Show all 20 versions</summary>

- `45.0.3`, `45.0.2`, `45.0.1`, `45.0.0`, `44.0.3`
- `44.0.2`, `44.0.1`, `44.0.0`, `43.0.3`, `43.0.2`
- `43.0.1`, `43.0.0`, `42.0.8`, `42.0.7`, `42.0.6`
- `42.0.5`, `42.0.4`, `42.0.3`, `42.0.2`, `42.0.1`

</details>

**Latest Version**: `45.0.3`

### Install Specific Version

```bash
# Install specific version
pkgx cryptography.io@45.0.3
```

## Dependencies

This package depends on:

- `python.org>=3.11`
- `github.com/python-cffi/cffi^1.16`
- `openssl.org>=1.1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.cryptographyio

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/cryptography.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
