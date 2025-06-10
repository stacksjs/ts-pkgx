# changie

> Automated changelog tool for preparing releases with lots of customization options

## Package Information

- **Domain**: `changie.dev`
- **Name**: `changie`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/changie.dev/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) changie
```

## Programs

This package provides the following executable programs:

- `changie`

## Available Versions

<details>
<summary>Show all 8 versions</summary>

- `1.22.0`, `1.21.1`, `1.21.0`, `1.20.1`, `1.20.0`
- `1.19.1`, `1.19.0`, `1.18.0`

</details>

**Latest Version**: `1.22.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +changie.dev@1.22.0 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.changiedev

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/changie.dev/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
