# ninja

> Small build system for use with gyp or CMake

## Package Information

- **Domain**: `ninja-build.org`
- **Name**: `ninja`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/ninja-build.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install ninja
```

## Programs

This package provides the following executable programs:

- `ninja`

## Available Versions

<details>
<summary>Show all 5 versions</summary>

- `1.13.0`, `1.12.1`, `1.12.0`, `1.11.1`, `1.11.0`

</details>

**Latest Version**: `1.13.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) ninja -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.ninja_buildorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/ninja-build.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
