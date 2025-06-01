# pcre

> Perl compatible regular expressions library

## Package Information

- **Domain**: `pcre`
- **Name**: `pcre`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/pcre.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +pcre.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `pcre-config`
- `pcregrep`
- `pcretest`

## Aliases

This package can also be accessed using these aliases:

- `+pcre.org -- $SHELL -i`
- `pcre`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `8.45.0`

</details>

**Latest Version**: `8.45.0`

### Install Specific Version

```bash
# Install specific version
pkgx pcre@8.45.0
```

## Dependencies

This package depends on:

- `sourceware.org/bzip2@1`
- `zlib.net@1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.pcre

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/pcre.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
