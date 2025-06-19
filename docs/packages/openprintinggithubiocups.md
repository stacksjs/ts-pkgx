# openprinting.github.io/cups

> Common UNIX Printing System

## Package Information

- **Domain**: `openprinting.github.io/cups`
- **Name**: `openprinting.github.io/cups`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/openprinting.github.io/cups/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) +openprinting.github.io/cups -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `cups-config`
- `ippeveprinter`
- `ipptool`

## Aliases

This package can also be accessed using these aliases:

- `cups`

## Available Versions

<details>
<summary>Show all 7 versions</summary>

- `2.4.12`, `2.4.11`, `2.4.10`, `2.4.9`, `2.4.8`
- `2.4.7`, `2.4.6`

</details>

**Latest Version**: `2.4.12`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +openprinting.github.io/cups@2.4.12 -- $SHELL -i
```

## Dependencies

This package depends on:

- `kerberos.org`
- `zlib.net`
- `linuxopenssl.org^1.1`
- `openssl.org^1.1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.openprintinggithubiocups

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/openprinting.github.io/cups/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
