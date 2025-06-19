# pakku

> pakku is a declarative approach to your system package managers.

## Package Information

- **Domain**: `pakku`
- **Name**: `pakku`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mycreepy/pakku/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) pakku
```

## Programs

This package provides the following executable programs:

- `pakku`

## Aliases

This package can also be accessed using these aliases:

- `pakku`
- `mycreepy/pakku`

## Available Versions

<details>
<summary>Show all 8 versions</summary>

- `0.5.0`, `0.4.2`, `0.4.1`, `0.4.0`, `0.3.1`
- `0.3.0`, `0.2.0`, `0.1.0`

</details>

**Latest Version**: `0.5.0`

### Install Specific Version

```bash
# Install specific version
pkgx pakku@0.5.0
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.pakku

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mycreepy/pakku/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
