# theora.org

> A package from theora.org

## Package Information

- **Domain**: `theora.org`
- **Name**: `theora.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/theora.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install +theora.org -- $SHELL -i
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
sh <(curl https://pkgx.sh) +theora.org@1.2.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `xiph.org/ogg`
- `xiph.org/vorbis`
- `gnu.org/libtool`
- `gnu.org/automake`
- `gnu.org/autoconf>=2.71`
- `freedesktop.org/pkg-config`
- `gnu.org/wget`
- `freedesktop.org/pkg-config`

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
