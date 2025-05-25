# libcap

> 

## Package Information

- **Domain**: `kernelorglibcap`
- **Name**: `libcap`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/kernel.org/libcap/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +kernel.org/libcap -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `capsh`
- `getcap`
- `getpcaps`
- `setcap`

## Aliases

This package can also be accessed using these aliases:

- `libcap`

## Available Versions

<details>
<summary>Show all 4 versions</summary>

- `1.2.76`, `1.2.75`, `1.2.74`, `1.2.73`

</details>

**Latest Version**: `1.2.76`

### Install Specific Version

```bash
# Install specific version
pkgx libcap@1.2.76
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['kernelorglibcap']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/kernel.org/libcap/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
