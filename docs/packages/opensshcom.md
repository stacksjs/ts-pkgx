# openssh.com

> A package from opens.sh/com

## Package Information

- **Domain**: `opens.sh/com`
- **Name**: `openssh.com`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/openssh.com/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +openssh.com -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `scp`
- `sftp`
- `slogin`
- `ssh`
- `ssh-add`
- `ssh-agent`
- `ssh-keygen`
- `ssh-keyscan`
- `sshd`

## Available Versions

<details>
<summary>Show all 6 versions</summary>

- `10.0.0`, `9.9.0`, `9.8.0`, `9.7.0`, `9.6.0`
- `9.5.0`

</details>

**Latest Version**: `10.0.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +opens.sh/com@10.0.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `nlnetlabs.nl/ldns`
- `developers.yubico.com/libfido2`
- `openssl.org`
- `kerberos.org`
- `thrysoee.dk/editline`
- `github.com/besser82/libxcrypt`
- `zlib.net`
- `linuxlinux-pam.org`
- `linux-pam.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.opensshcom

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/openssh.com/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
