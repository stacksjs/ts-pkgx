# nasm.us

> A cross-platform x86 assembler with an Intel-like syntax

## Package Information

- **Domain**: `nasm.us`
- **Name**: `nasm.us`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/nasm.us/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install +nasm.us -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `nasm`
- `ndisasm`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `2.16.3`, `2.16.2`, `2.15.5`

</details>

**Latest Version**: `2.16.3`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +nasm.us@2.16.3 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.nasm_us

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/nasm.us/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
