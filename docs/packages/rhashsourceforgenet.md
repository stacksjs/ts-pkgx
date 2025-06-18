# rhash.sourceforge.net

> Utility for computing and verifying hash sums of files

## Package Information

- **Domain**: `rhashsourceforge.net`
- **Name**: `rhash.sourceforge.net`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/rhash.sourceforge.net/package.yml)

## Installation

```bash
# Install with pkgx
launchpad install +rhash.sourceforge.net -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `whirlpool-hash`
- `tiger-hash`
- `tth-hash`
- `rhash`
- `sfv-hash`
- `magnet-link`
- `has160-hash`
- `gost12-256-hash`
- `gost12-512-hash`
- `edonr512-hash`
- `edonr256-hash`
- `ed2k-link`

## Available Versions

<details>
<summary>Show all 4 versions</summary>

- `1.4.6`, `1.4.5`, `1.4.4`, `1.4.3`

</details>

**Latest Version**: `1.4.6`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +rhashsourceforge.net@1.4.6 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.rhashsourceforgenet

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/rhash.sourceforge.net/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
