# bash

> Bourne-Again SHell, a UNIX command interpreter

## Package Information

- **Domain**: `ba.sh`
- **Name**: `bash`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/bash/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) +gnu.org/bash -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `bash`
- `bashbug`

## Available Versions

<details>
<summary>Show all 5 versions</summary>

- `5.2.37`, `5.2.32`, `5.2.21`, `5.2.15`, `5.1.16`

</details>

**Latest Version**: `5.2.37`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +ba.sh@5.2.37 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.bash

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/bash/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
