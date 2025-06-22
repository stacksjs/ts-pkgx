# vanitygen-plusplus

> A vanity address generator for BTC, ETH, LTC, TRX and 100+ more crypto currencies.

## Package Information

- **Domain**: `github.com/10gic/vanitygen-plusplus`
- **Name**: `vanitygen-plusplus`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/10gic/vanitygen-plusplus/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install +github.com/10gic/vanitygen-plusplus -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `vanitygen++`
- `keyconv`
- `oclvanitygen++`
- `oclvanityminer`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `0.2.0`

</details>

**Latest Version**: `0.2.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +github.com/10gic/vanitygen-plusplus@0.2.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `openssl.org^1.1`
- `curl.se^8`
- `pcre.org^8`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.github_com_10gic_vanitygen_plusplus

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/10gic/vanitygen-plusplus/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
