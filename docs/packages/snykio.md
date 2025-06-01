# snyk

> Scans and monitors projects for security vulnerabilities

## Package Information

- **Domain**: `snyk.io`
- **Name**: `snyk`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/snyk.io/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) snyk
```

## Programs

This package provides the following executable programs:

- `snyk`

## Aliases

This package can also be accessed using these aliases:

- `snyk`

## Available Versions

<details>
<summary>Show all 41 versions</summary>

- `1.1297.1`, `1.1297.0`, `1.1296.2`, `1.1296.1`, `1.1296.0`
- `1.1295.4`, `1.1295.3`, `1.1295.2`, `1.1295.1`, `1.1295.0`
- `1.1294.3`, `1.1294.2`, `1.1294.1`, `1.1294.0`, `1.1293.1`
- `1.1293.0`, `1.1292.4`, `1.1292.2`, `1.1292.1`, `1.1292.0`
- `1.1291.1`, `1.1291.0`, `1.1290.0`, `1.1289.0`, `1.1288.1`
- `1.1288.0`, `1.1287.0`, `1.1286.4`, `1.1286.3`, `1.1286.2`
- `1.1286.1`, `1.1286.0`, `1.1285.1`, `1.1285.0`, `1.1284.0`
- `1.1283.1`, `1.1283.0`, `1.1282.1`, `1.1282.0`, `1.1281.0`
- `1.1280.1`

</details>

**Latest Version**: `1.1297.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +snyk.io@1.1297.1 -- $SHELL -i
```

## Dependencies

This package depends on:

- `nodejs.org^20`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.snykio

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/snyk.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
