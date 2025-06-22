# unicode.org

> The home of the ICU project source code.

## Package Information

- **Domain**: `unicode.org`
- **Name**: `unicode.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/unicode.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install unicode.org
```

## Programs

This package provides the following executable programs:

- `derb`
- `genbrk`
- `gencfu`
- `gencnval`
- `gendict`
- `genrb`
- `icu-config`
- `icuexportdata`
- `icuinfo`
- `makeconv`
- `pkgdata`
- `uconv`

## Available Versions

<details>
<summary>Show all 7 versions</summary>

- `77.1.0`, `76.1.0`, `75.1.0`, `74.2.0`, `74.1.0`
- `73.2.0`, `71.1.0`

</details>

**Latest Version**: `77.1.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +unicode.org@77.1.0 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.unicodeorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/unicode.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
