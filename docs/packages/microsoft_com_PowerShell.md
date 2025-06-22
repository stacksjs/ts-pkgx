# pwsh

> PowerShell for every system!

## Package Information

- **Domain**: `microsoft.com/PowerShell`
- **Name**: `pwsh`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/microsoft.com/PowerShell/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install pwsh
```

## Programs

This package provides the following executable programs:

- `pwsh`

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
sh <(curl https://pkgx.sh) pwsh -- $SHELL -i
```

## Dependencies

This package depends on:

- `openssl.org^1.1`
- `linux:unicode.org^71`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.microsoft_com_PowerShell

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
