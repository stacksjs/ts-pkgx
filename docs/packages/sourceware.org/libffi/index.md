# sourceware.org/libffi

> A portable foreign-function interface library.

## Package Information

- **Domain**: `sourceware.org/libffi`
- **Name**: `sourceware.org/libffi`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/sourceware.org/libffi/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install sourceware.org/libffi
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Available Versions

<details>
<summary>Show all 8 versions</summary>

- `3.5.1`, `3.5.0`, `3.4.8`, `3.4.7`, `3.4.6`
- `3.4.5`, `3.4.4`, `3.4.3`

</details>

**Latest Version**: `3.5.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +sourceware.org/libffi@3.5.1 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.libffi

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/sourceware.org/libffi/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
