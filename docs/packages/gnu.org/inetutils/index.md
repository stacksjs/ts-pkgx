# gnu.org/inetutils

> Common network programs

## Package Information

- **Domain**: `gnu.org/inetutils`
- **Name**: `gnu.org/inetutils`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/inetutils/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install gnu.org/inetutils
```

## Programs

This package provides the following executable programs:

- `dnsdomainname`
- `ftp`
- `hostname`
- `ifconfig`
- `logger`
- `ping`
- `ping6`
- `rcp`
- `rexec`
- `rlogin`
- `rsh`
- `talk`
- `telnet`
- `tftp`
- `traceroute`
- `whois`
- `ftpd`
- `inetd`
- `rexecd`
- `rlogind`
- `rshd`
- `syslogd`
- `talkd`
- `telnetd`
- `tftpd`
- `uucpd`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `2.6.0`, `2.5.0`, `2.4.0`

</details>

**Latest Version**: `2.6.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +gnu.org/inetutils@2.6.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `gnu.org/libidn2`
- `invisible-island.net/ncurses`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.inetutils

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/inetutils/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
