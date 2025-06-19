# etcd

> Distributed reliable key-value store for the most critical data of a distributed system

## Package Information

- **Domain**: `etcd`
- **Name**: `etcd`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/etcd.io/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) +etcd.io -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `etcd`
- `etcdctl`

## Aliases

This package can also be accessed using these aliases:

- `+etcd.io -- $SHELL -i`
- `etcd`

## Available Versions

<details>
<summary>Show all 11 versions</summary>

- `3.6.0`, `3.5.21`, `3.5.20`, `3.5.19`, `3.5.18`
- `3.5.17`, `3.5.16`, `3.5.15`, `3.5.14`, `3.4.37`
- `3.4.36`

</details>

**Latest Version**: `3.6.0`

### Install Specific Version

```bash
# Install specific version
pkgx etcd@3.6.0
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.etcd

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/etcd.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
