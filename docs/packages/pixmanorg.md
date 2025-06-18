# pixman.org

> A package from pixman.org

## Package Information

- **Domain**: `pixman.org`
- **Name**: `pixman.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/pixman.org/package.yml)

## Installation

```bash
# Install with pkgx
launchpad install +pixman.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `0.40.0`

</details>

**Latest Version**: `0.40.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +pixman.org@0.40.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `freedesktop.org/pkg-config^0.29`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.pixmanorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/pixman.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
