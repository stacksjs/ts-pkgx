# cvt

> VESA CVT standard timing modelines generator

## Package Information

- **Domain**: `x.org/libcvt`
- **Name**: `cvt`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/x.org/libcvt/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install cvt
```

## Programs

This package provides the following executable programs:

- `cvt`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `0.1.3`, `0.1.2`

</details>

**Latest Version**: `0.1.3`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) cvt -- $SHELL -i
```

## Dependencies

This package depends on:

- `x.org/x11^1`
- `x.org/exts`
- `x.org/protocol`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.libcvt

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/x.org/libcvt/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
