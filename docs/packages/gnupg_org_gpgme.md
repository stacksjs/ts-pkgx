# gpgme

> Library access to GnuPG

## Package Information

- **Domain**: `gnupg.org/gpgme`
- **Name**: `gpgme`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnupg.org/gpgme/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install gpgme
```

## Programs

This package provides the following executable programs:

- `gpgme-config`
- `gpgme-json`
- `gpgme-tool`

## Available Versions

<details>
<summary>Show all 11 versions</summary>

- `2.0.0`, `1.24.3`, `1.24.2`, `1.24.1`, `1.24.0`
- `1.23.2`, `1.23.1`, `1.23.0`, `1.22.0`, `1.19.0`
- `1.5.1`

</details>

**Latest Version**: `2.0.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +gnupg.org/gpgme@2.0.0 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.gnupg_org_gpgme

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnupg.org/gpgme/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
