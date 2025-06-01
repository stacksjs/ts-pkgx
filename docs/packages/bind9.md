# bind9

>

## Package Information

- **Domain**: `bind9`
- **Name**: `bind9`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/isc.org/bind9/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +isc.org/bind9 -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `arpaname`
- `delv`
- `dig`
- `dnssec-cds`
- `dnssec-dsfromkey`
- `dnssec-importkey`
- `dnssec-keyfromlabel`
- `dnssec-keygen`
- `dnssec-ksr`
- `dnssec-revoke`
- `dnssec-settime`
- `dnssec-signzone`
- `dnssec-verify`
- `host`
- `mdig`
- `named-checkconf`
- `named-checkzone`
- `named-compilezone`
- `named-journalprint`
- `named-nzd2nzf`
- `named-rrchecker`
- `nsec3hash`
- `nslookup`
- `nsupdate`
- `ddns-confgen`
- `named`
- `rndc`
- `rndc-confgen`
- `tsig-keygen`

## Aliases

This package can also be accessed using these aliases:

- `bind9`

## Available Versions

<details>
<summary>Show all 12 versions</summary>

- `9.21.8`, `9.21.7`, `9.21.6`, `9.21.5`, `9.21.4`
- `9.20.9`, `9.20.8`, `9.20.7`, `9.20.6`, `9.18.37`
- `9.18.36`, `9.18.35`

</details>

**Latest Version**: `9.21.8`

### Install Specific Version

```bash
# Install specific version
pkgx bind9@9.21.8
```

## Dependencies

This package depends on:

- `gnome.org/libxml2@2.13`
- `nghttp2.org@1.57`
- `libuv.org@1.49`
- `liburcu.org@0.15`
- `openldap.org/liblmdb@0.9`
- `openssl.org@3`
- `gnu.org/readline@8.2`
- `github.com/json-c/json-c@0.18`
- `gnu.org/libidn2@2.3`
- `jemalloc.net@5`
- `linuxkernel.org/libcap`
- `kernel.org/libcap`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.bind9

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/isc.org/bind9/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
