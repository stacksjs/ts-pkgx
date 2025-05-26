# lftp

> sophisticated command line file transfer program (ftp, http, sftp, fish, torrent)

## Package Information

- **Domain**: `lftpyarru`
- **Name**: `lftp`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/lftp.yar.ru/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +lftp.yar.ru -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `lftp`
- `lftpget`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `4.9.3`, `4.9.2`, `4.9.1`

</details>

**Latest Version**: `4.9.3`

### Install Specific Version

```bash
# Install specific version
pkgx lftp@4.9.3
```

## Dependencies

This package depends on:

- `gnu.org/libidn2`
- `gnu.org/gettext`
- `gnu.org/readline`
- `openssl.org^1.1`
- `zlib.net`
- `invisible-island.net/ncurses`
- `libexpat.github.io`
- `linuxgnu.org/gcc/libstdcxx@14`
- `gnu.org/gcc/libstdcxx@14`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.lftpyarru

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/lftp.yar.ru/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
