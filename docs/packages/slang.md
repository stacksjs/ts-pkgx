# s-lang

> Library for creating multi-platform software

## Package Information

- **Domain**: `jedsoft.org/slang`
- **Name**: `s-lang`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/jedsoft.org/slang/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install slsh
```

## Programs

This package provides the following executable programs:

- `slsh`

## Aliases

This package can also be accessed using these aliases:

- `slsh`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `2.3.3`

</details>

**Latest Version**: `2.3.3`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) slsh -- $SHELL -i
```

## Dependencies

This package depends on:

- `libpng.org`
- `linux:pcre.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.slang

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/jedsoft.org/slang/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
