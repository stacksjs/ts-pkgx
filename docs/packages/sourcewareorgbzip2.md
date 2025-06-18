# sourceware.org/bzip2

> Clone of https://gitlab.com/federicomenaquintero/bzip2

## Package Information

- **Domain**: `sourceware.org/bzip2`
- **Name**: `sourceware.org/bzip2`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/sourceware.org/bzip2/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +sourceware.org/bzip2 -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `bunzip2`
- `bzcat`
- `bzcmp`
- `bzdiff`
- `bzgrep`
- `bzegrep`
- `bzfgrep`
- `bzip2`
- `bzip2recover`
- `bzmore`
- `bzless`

## Aliases

This package can also be accessed using these aliases:

- `bzip2`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `1.0.8`

</details>

**Latest Version**: `1.0.8`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +sourceware.org/bzip2@1.0.8 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.sourcewareorgbzip2

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/sourceware.org/bzip2/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
