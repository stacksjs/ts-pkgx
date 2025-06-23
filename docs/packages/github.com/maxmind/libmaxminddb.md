# mmdblookup

> C library for the MaxMind DB file format

## Package Information

- **Domain**: `github.com/maxmind/libmaxminddb`
- **Name**: `mmdblookup`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/maxmind/libmaxminddb/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install mmdblookup
```

## Programs

This package provides the following executable programs:

- `mmdblookup`

## Available Versions

<details>
<summary>Show all 9 versions</summary>

- `1.12.2`, `1.12.1`, `1.12.0`, `1.11.0`, `1.10.0`
- `1.9.1`, `1.9.0`, `1.8.0`, `1.7.1`

</details>

**Latest Version**: `1.12.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) mmdblookup -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.mmdblookup

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/maxmind/libmaxminddb/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
