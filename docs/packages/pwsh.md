# pwsh

> PowerShell for every system!

## Package Information

- **Domain**: `pw.sh`
- **Name**: `pwsh`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/microsoft.com/PowerShell/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) pwsh
```

## Programs

This package provides the following executable programs:

- `pwsh`

## Aliases

This package can also be accessed using these aliases:

- `PowerShell`

## Available Versions

<details>
<summary>Show all 6 versions</summary>

- `7.5.1`, `7.5.0`, `7.4.10`, `7.4.7`, `7.4.5`
- `7.2.24`

</details>

**Latest Version**: `7.5.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +pw.sh@7.5.1 -- $SHELL -i
```

## Dependencies

This package depends on:

- `openssl.org^1.1`
- `linuxunicode.org^71`
- `unicode.org^71`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.pwsh

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/microsoft.com/PowerShell/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
