# libpng.org

> LIBPNG: Portable Network Graphics support, official libpng repository

## Package Information

- **Domain**: `libpng.org`
- **Name**: `libpng.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/libpng.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install libpng.org
```

## Programs

This package provides the following executable programs:

- `libpng-config`
- `libpng16-config`
- `png-fix-itxt`
- `pngfix`

## Available Versions

<details>
<summary>Show all 13 versions</summary>

- `1.6.50`, `1.6.49`, `1.6.48`, `1.6.47`, `1.6.46`
- `1.6.45`, `1.6.44`, `1.6.43`, `1.6.42`, `1.6.41`
- `1.6.40`, `1.6.39`, `1.6.35`

</details>

**Latest Version**: `1.6.50`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +libpng.org@1.6.50 -- $SHELL -i
```

## Dependencies

This package depends on:

- `zlib.net@1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['libpng.org']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/libpng.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
