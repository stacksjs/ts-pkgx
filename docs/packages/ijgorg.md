# ijg.org

>

## Package Information

- **Domain**: `ijgorg`
- **Name**: `ijg.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/ijg.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +ijg.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `cjpeg`
- `djpeg`
- `jpegtran`
- `rdjpgcom`
- `wrjpgcom`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `9f`, `9e`, `9.5.0`

</details>

**Latest Version**: `9f`

### Install Specific Version

```bash
# Install specific version
pkgx ijg.org@9f
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.ijgorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/ijg.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
