# tldr

> C command-line client for tldr pages 📚

## Package Information

- **Domain**: `tldrsh`
- **Name**: `tldr`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/tldr.sh/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) tldr
```

## Programs

This package provides the following executable programs:

- `tldr`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `1.6.1`, `1.6.0`, `1.5.0`

</details>

**Latest Version**: `1.6.1`

### Install Specific Version

```bash
# Install specific version
pkgx tldr@1.6.1
```

## Dependencies

This package depends on:

- `linuxsourceware.org/bzip2^1`
- `sourceware.org/bzip2^1`
- `libzip.org^1.9.2`
- `curl.se`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.tldrsh

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/tldr.sh/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
