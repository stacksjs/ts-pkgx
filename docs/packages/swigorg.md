# swig.org

> SWIG is a software development tool that connects programs written in C and C++ with a variety of high-level programming languages.

## Package Information

- **Domain**: `swigorg`
- **Name**: `swig.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/swig.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +swig.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `swig`
- `ccache-swig`

## Available Versions

<details>
<summary>Show all 5 versions</summary>

- `4.3.1`, `4.3.0`, `4.2.1`, `4.2.0`, `4.1.1`

</details>

**Latest Version**: `4.3.1`

### Install Specific Version

```bash
# Install specific version
pkgx swig.org@4.3.1
```

## Dependencies

This package depends on:

- `pcre.org/v2`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['swigorg']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/swig.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
