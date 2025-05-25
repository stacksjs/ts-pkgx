# pandoc

> Swiss-army knife of markup format conversion

## Package Information

- **Domain**: `pandocorg`
- **Name**: `pandoc`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/pandoc.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) pandoc
```

## Programs

This package provides the following executable programs:

- `pandoc`

## Available Versions

<details>
<summary>Show all 30 versions</summary>

- `3.7.0.1`, `3.7.0`, `3.6.4`, `3.6.3`, `3.6.2`
- `3.6.1`, `3.6.0`, `3.5.0`, `3.4.0`, `3.3.0`
- `3.2.1`, `3.2.0`, `3.1.13`, `3.1.9`, `3.1.8`
- `3.1.7`, `3.1.6.2`, `3.1.6`, `3.1.5`, `3.1.4`
- `3.1.3`, `3.1.2`, `3.1.12.3`, `3.1.12.2`, `3.1.12.1`
- `3.1.12`, `3.1.11.1`, `3.1.11`, `3.1.10`, `2.19.2`

</details>

**Latest Version**: `3.7.0.1`

### Install Specific Version

```bash
# Install specific version
pkgx pandoc@3.7.0.1
```

## Dependencies

This package depends on:

- `gnu.org/gmp@6`
- `zlib.net@1`
- `sourceware.org/libffi@3`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['pandocorg']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/pandoc.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
