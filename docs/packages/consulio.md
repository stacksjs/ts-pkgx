# consul

> Consul is a distributed, highly available, and data center aware solution to connect and configure applications across dynamic, distributed infrastructure.

## Package Information

- **Domain**: `consulio`
- **Name**: `consul`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/consul.io/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) consul
```

## Programs

This package provides the following executable programs:

- `consul`

## Available Versions

<details>
<summary>Show all 11 versions</summary>

- `1.21.1`, `1.21.0`, `1.20.6`, `1.20.5`, `1.20.4`
- `1.20.3`, `1.20.2`, `1.20.1`, `1.20.0`, `1.19.2`
- `1.19.1`

</details>

**Latest Version**: `1.21.1`

### Install Specific Version

```bash
# Install specific version
pkgx consul@1.21.1
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.consulio

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/consul.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
