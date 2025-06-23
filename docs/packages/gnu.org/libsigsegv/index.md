# gnu.org/libsigsegv

> A library for handling page faults in user mode

## Package Information

- **Domain**: `gnu.org/libsigsegv`
- **Name**: `gnu.org/libsigsegv`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/libsigsegv/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install gnu.org/libsigsegv
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `2.15.0`, `2.14.0`

</details>

**Latest Version**: `2.15.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +gnu.org/libsigsegv@2.15.0 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.libsigsegv

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/libsigsegv/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
