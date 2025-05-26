# gnupg.org

> GNU Pretty Good Privacy (PGP) package

## Package Information

- **Domain**: `gnupgorg`
- **Name**: `gnupg.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnupg.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +gnupg.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `gpg`
- `gpg-agent`
- `gpg-connect-agent`
- `gpg-wks-server`
- `gpgconf`
- `gpgparsemail`
- `gpgscm`
- `gpgsm`
- `gpgsplit`
- `gpgtar`
- `gpgv`
- `kbxutil`
- `watchgnupg`

## Available Versions

<details>
<summary>Show all 12 versions</summary>

- `2.4.8`, `2.4.7`, `2.4.6`, `2.4.5`, `2.4.4`
- `2.4.3`, `2.4.2`, `2.3.7`, `2.2.45`, `2.2.44`
- `2.2.43`, `2.2.42`

</details>

**Latest Version**: `2.4.8`

### Install Specific Version

```bash
# Install specific version
pkgx gnupg.org@2.4.8
```

## Dependencies

This package depends on:

- `zlib.net^1.1`
- `sourceware.org/bzip2`
- `gnupg.org/npth`
- `gnupg.org/libgpg-error`
- `gnupg.org/libksba`
- `gnupg.org/libassuan@2`
- `gnupg.org/libgcrypt`
- `gnupg.org/pinentry`
- `gnutls.org^3`
- `openldap.org^2`
- `gnu.org/readline^8`
- `sqlite.org^3`
- `darwingnu.org/gettext^0.21`
- `gnu.org/gettext^0.21`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.gnupgorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnupg.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
