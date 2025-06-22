# pandoc-crossref

> Pandoc filter for numbering and cross-referencing

## Package Information

- **Domain**: `pandoc.org/crossref`
- **Name**: `pandoc-crossref`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/pandoc.org/crossref/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install pandoc-crossref
```

## Programs

This package provides the following executable programs:

- `pandoc-crossref`

## Available Versions

<details>
<summary>Show all 8 versions</summary>

- `0.3.20`, `0.3.19`, `0.3.18.2`, `0.3.18.1`, `0.3.17.1`
- `0.3.17.0`, `0.3.16.0`, `0.3.15.2`

</details>

**Latest Version**: `0.3.20`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) pandoc-crossref -- $SHELL -i
```

## Dependencies

This package depends on:

- `pandoc.org^2.18`
- `zlib.net@1`
- `gnu.org/gmp@6`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.pandoc-crossref

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/pandoc.org/crossref/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
