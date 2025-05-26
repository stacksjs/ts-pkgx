# plocate.sesse.net

>

## Package Information

- **Domain**: `plocatesessenet`
- **Name**: `plocate.sesse.net`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/plocate.sesse.net/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +plocate.sesse.net -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `plocate`
- `plocate-build`
- `updatedb`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `1.1.23`, `1.1.22`

</details>

**Latest Version**: `1.1.23`

### Install Specific Version

```bash
# Install specific version
pkgx plocate.sesse.net@1.1.23
```

## Dependencies

This package depends on:

- `facebook.com/zstd@1`
- `gnu.org/gcc/libstdcxx@14`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.plocatesessenet

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/plocate.sesse.net/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
