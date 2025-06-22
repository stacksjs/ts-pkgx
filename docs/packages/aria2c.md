# aria2.github.io

> aria2 is a lightweight multi-protocol & multi-source, cross platform download utility operated in command-line. It supports HTTP/HTTPS, FTP, SFTP, BitTorrent and Metalink.

## Package Information

- **Domain**: `aria2.github.io`
- **Name**: `aria2.github.io`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/aria2.github.io/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install aria2c
```

## Programs

This package provides the following executable programs:

- `aria2c`

## Aliases

This package can also be accessed using these aliases:

- `aria2c`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `1.37.0`, `1.36.0`

</details>

**Latest Version**: `1.37.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) aria2c -- $SHELL -i
```

## Dependencies

This package depends on:

- `zlib.net^1`
- `openssl.org^1`
- `libexpat.github.io`
- `sqlite.org^3`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.aria2c

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/aria2.github.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
