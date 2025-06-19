# musl.libc.org

> A package from musllibc.org

## Package Information

- **Domain**: `musllibc.org`
- **Name**: `musl.libc.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/musl.libc.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install +musl.libc.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `ld.musl-clang`
- `musl-clang`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `1.2.3`

</details>

**Latest Version**: `1.2.3`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +musllibc.org@1.2.3 -- $SHELL -i
```

## Dependencies

This package depends on:

- `llvm.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.musllibcorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/musl.libc.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
