# x.org/x11

> A package from x.org/x11

## Package Information

- **Domain**: `x.org/x11`
- **Name**: `x.org/x11`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/x.org/x11/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +x.org/x11 -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Aliases

This package can also be accessed using these aliases:

- `x11`

## Available Versions

<details>
<summary>Show all 9 versions</summary>

- `1.8.12`, `1.8.11`, `1.8.10`, `1.8.9`, `1.8.8`
- `1.8.7`, `1.8.6`, `1.8.5`, `1.8.4`

</details>

**Latest Version**: `1.8.12`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +x.org/x11@1.8.12 -- $SHELL -i
```

## Dependencies

This package depends on:

- `x.org/xcb^1`
- `x.org/protocol`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.xorgx11

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/x.org/x11/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
