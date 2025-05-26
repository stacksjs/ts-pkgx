# cscope.sourceforge.io

> Tool for browsing source code

## Package Information

- **Domain**: `cscopesourceforgeio`
- **Name**: `cscope.sourceforge.io`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/cscope.sourceforge.io/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +cscope.sourceforge.io -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `cscope`
- `ocs`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `15.9.0`

</details>

**Latest Version**: `15.9.0`

### Install Specific Version

```bash
# Install specific version
pkgx cscope.sourceforge.io@15.9.0
```

## Dependencies

This package depends on:

- `invisible-island.net/ncurses`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.cscopesourceforgeio

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/cscope.sourceforge.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
