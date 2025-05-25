# mongodb.com

> The MongoDB Database

## Package Information

- **Domain**: `mongodbcom`
- **Name**: `mongodb.com`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/mongodb.com/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +mongodb.com -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `install_compass`
- `mongod`
- `mongos`

## Available Versions

<details>
<summary>Show all 26 versions</summary>

- `8.0.9`, `8.0.8`, `8.0.7`, `8.0.6`, `8.0.5`
- `8.0.4`, `8.0.3`, `8.0.2`, `8.0.1`, `8.0.0`
- `7.3.4`, `7.3.3`, `7.0.20`, `7.0.19`, `7.0.18`
- `7.0.17`, `7.0.16`, `7.0.15`, `7.0.14`, `6.0.23`
- `6.0.22`, `6.0.21`, `6.0.20`, `6.0.19`, `6.0.18`
- `6.0.17`

</details>

**Latest Version**: `8.0.9`

### Install Specific Version

```bash
# Install specific version
pkgx mongodb.com@8.0.9
```

## Dependencies

This package depends on:

- `curl.se@8`
- `openssl.org@1.1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['mongodbcom']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/mongodb.com/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
