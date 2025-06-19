# cmocka.org

> A package from cmocka.org

## Package Information

- **Domain**: `cmocka.org`
- **Name**: `cmocka.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/cmocka.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install +cmocka.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `1.1.7`

</details>

**Latest Version**: `1.1.7`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +cmocka.org@1.1.7 -- $SHELL -i
```

## Dependencies

This package depends on:

- `cmake.org`
- `freedesktop.org/pkg-config`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.cmockaorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/cmocka.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
