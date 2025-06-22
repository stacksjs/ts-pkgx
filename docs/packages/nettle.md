# nettle

> A mirror of the nettle repository

## Package Information

- **Domain**: `gnu.org/nettle`
- **Name**: `nettle`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/nettle/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install +gnu.org/nettle -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `nettle-hash`
- `nettle-lfib-stream`
- `nettle-pbkdf2`
- `pkcs1-conv`
- `sexp-conv`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `3.8.1`

</details>

**Latest Version**: `3.8.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +gnu.org/nettle@3.8.1 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.nettle

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/nettle/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
