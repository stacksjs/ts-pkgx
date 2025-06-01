# envchain

> Environment variables meet macOS Keychain and gnome-keyring <3

## Package Information

- **Domain**: `sorahenvchain`
- **Name**: `envchain`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/sorah/envchain/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) envchain
```

## Programs

This package provides the following executable programs:

- `envchain`

## Aliases

This package can also be accessed using these aliases:

- `envchain`
- `sorah/envchain`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `1.1.0`

</details>

**Latest Version**: `1.1.0`

### Install Specific Version

```bash
# Install specific version
pkgx envchain@1.1.0
```

## Dependencies

This package depends on:

- `linuxgnu.org/readlinegnome.org/libsecret`
- `gnu.org/readline`
- `gnome.org/libsecret`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.sorahenvchain

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/sorah/envchain/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
