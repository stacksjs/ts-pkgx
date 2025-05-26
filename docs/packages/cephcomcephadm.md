# cephadm

> Ceph is a distributed object, block, and file storage platform

## Package Information

- **Domain**: `cephcomcephadm`
- **Name**: `cephadm`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/ceph.com/cephadm/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) cephadm
```

## Programs

This package provides the following executable programs:

- `cephadm`

## Aliases

This package can also be accessed using these aliases:

- `cephadm`

## Available Versions

<details>
<summary>Show all 8 versions</summary>

- `20.3.0`, `20.0.0`, `19.3.0`, `19.2.2`, `19.2.1`
- `18.2.7`, `18.2.6`, `18.2.5`

</details>

**Latest Version**: `20.3.0`

### Install Specific Version

```bash
# Install specific version
pkgx cephadm@20.3.0
```

## Dependencies

This package depends on:

- `openssl.org^1.1`
- `python.org^3`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.cephcomcephadm

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/ceph.com/cephadm/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
