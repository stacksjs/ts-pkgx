# gnupg.org/libgcrypt

> Cryptographic library based on the code from GnuPG

## Package Information

- **Domain**: `gnupg.org/libgcrypt`
- **Name**: `gnupg.org/libgcrypt`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnupg.org/libgcrypt/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install gnupg.org/libgcrypt
```

## Programs

This package provides the following executable programs:

- `dumpsexp`
- `hmac256`
- `libgcrypt-config`
- `mpicalc`

## Available Versions

<details>
<summary>Show all 4 versions</summary>

- `1.11.1`, `1.11.0`, `1.10.3`, `1.10.1`

</details>

**Latest Version**: `1.11.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +gnupg.org/libgcrypt@1.11.1 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.libgcrypt

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnupg.org/libgcrypt/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
