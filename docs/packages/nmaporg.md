# nmap.org

> Port scanning utility for large networks

## Package Information

- **Domain**: `nmap.org`
- **Name**: `nmap.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/nmap.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install nmap.org
```

## Programs

This package provides the following executable programs:

- `nmap`
- `ncat`
- `nping`

## Available Versions

<details>
<summary>Show all 5 versions</summary>

- `7.97.0`, `7.96.0`, `7.95.0`, `7.94.0`, `7.93.0`

</details>

**Latest Version**: `7.97.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +nmap.org@7.97.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `openssl.org^1.1`
- `pcre.org/v2^10`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.nmaporg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/nmap.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
