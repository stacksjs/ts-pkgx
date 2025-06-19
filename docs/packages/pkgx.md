# pkgx

> Standalone binary that can run anything

## Package Information

- **Domain**: `pkgx`
- **Name**: `pkgx`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/pkgx.sh/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) pkgx
```

## Programs

This package provides the following executable programs:

- `pkgx`

## Aliases

This package can also be accessed using these aliases:

- `pkgx`

## Available Versions

<details>
<summary>Show all 35 versions</summary>

- `2.7.0`, `2.6.0`, `2.5.0`, `2.4.0`, `2.3.2`
- `2.3.1`, `2.3.0`, `2.2.1`, `2.2.0`, `2.1.4`
- `2.1.3`, `2.1.2`, `2.1.1`, `2.1.0`, `2.0.0`
- `1.5.0`, `1.4.1`, `1.4.0`, `1.3.1`, `1.3.0`
- `1.2.2`, `1.2.1`, `1.2.0`, `1.1.6`, `1.1.5`
- `1.1.4`, `1.1.3`, `1.1.2`, `1.1.1`, `1.1.0`
- `1.0.4`, `1.0.3`, `1.0.2`, `1.0.1`, `1.0.0`

</details>

**Latest Version**: `2.7.0`

### Install Specific Version

```bash
# Install specific version
pkgx pkgx@2.7.0
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.pkgx

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/pkgx.sh/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
