# theora.org

>

## Package Information

- **Domain**: `theoraorg`
- **Name**: `theora.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/theora.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +theora.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `1.2.0`, `1.1.1`

</details>

**Latest Version**: `1.2.0`

### Install Specific Version

```bash
# Install specific version
pkgx theora.org@1.2.0
```

## Dependencies

This package depends on:

- `xiph.org/ogg`
- `xiph.org/vorbis`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.theoraorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/theora.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
