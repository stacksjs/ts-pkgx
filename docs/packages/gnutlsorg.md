# gnutls.org

> A package from gnutls.org

## Package Information

- **Domain**: `gnutls.org`
- **Name**: `gnutls.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnutls.org/package.yml)

## Installation

```bash
# Install with pkgx
launchpad install +gnutls.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `certtool`
- `danetool`
- `gnutls-cli`
- `gnutls-cli-debug`
- `gnutls-serv`
- `ocsptool`
- `p11tool`
- `psktool`

## Available Versions

<details>
<summary>Show all 10 versions</summary>

- `3.8.9`, `3.8.7`, `3.8.6`, `3.8.5`, `3.8.4`
- `3.8.3`, `3.8.2`, `3.8.1`, `3.7.10`, `3.6.16`

</details>

**Latest Version**: `3.8.9`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +gnutls.org@3.8.9 -- $SHELL -i
```

## Dependencies

This package depends on:

- `freedesktop.org/p11-kit`
- `gnu.org/libidn2`
- `gnu.org/libunistring^1`
- `gnu.org/libtasn1^4`
- `gnu.org/nettle`
- `gnu.org/gettext`
- `gnu.org/gmp`
- `unbound.net^1`
- `curl.se/ca-certs`
- `gnu.org/gcc`
- `freedesktop.org/pkg-config`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.gnutlsorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnutls.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
