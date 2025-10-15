# uriparse

>  :hocho: Strictly RFC 3986 compliant URI parsing and handling library written in C89; moved from SourceForge to GitHub

## Package Information

- **Domain**: `uriparser.github.io`
- **Name**: `uriparse`
- **Homepage**: https://uriparser.github.io/
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/uriparser.github.io/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install uriparser.github.io
```

## Programs

This package provides the following executable programs:

- `uriparse`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `0.9.9`, `0.9.8`, `0.9.7`

</details>

**Latest Version**: `0.9.9`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +uriparser.github.io@0.9.9 -- $SHELL -i
```

## Dependencies

This package depends on:

- `cmake.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.uriparse

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/uriparser.github.io/package.yml)
- [Homepage](https://uriparser.github.io/)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
