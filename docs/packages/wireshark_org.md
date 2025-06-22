# wireshark.org

> Network analyzer and capture tool - without graphical user interface

## Package Information

- **Domain**: `wireshark.org`
- **Name**: `wireshark.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/wireshark.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install +wireshark.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `capinfos`
- `captype`
- `dumpcap`
- `editcap`
- `idl2wrs`
- `mergecap`
- `mmdbresolve`
- `randpkt`
- `rawshark`
- `reordercap`
- `sharkd`
- `text2pcap`
- `tshark`

## Available Versions

<details>
<summary>Show all 32 versions</summary>

- `4.4.7`, `4.4.6`, `4.4.5`, `4.4.4`, `4.4.3`
- `4.4.2`, `4.4.1`, `4.4.0`, `4.3.1`, `4.3.0`
- `4.2.12`, `4.2.11`, `4.2.10`, `4.2.9`, `4.2.8`
- `4.2.7`, `4.2.5`, `4.2.3`, `4.2.2`, `4.2.1`
- `4.2.0`, `4.0.17`, `4.0.16`, `4.0.15`, `4.0.14`
- `4.0.13`, `4.0.12`, `3.6.24`, `3.6.23`, `3.6.22`
- `3.6.21`, `3.6.20`

</details>

**Latest Version**: `4.4.7`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +wireshark.org@4.4.7 -- $SHELL -i
```

## Dependencies

This package depends on:

- `c-ares.org^1.23`
- `gnome.org/glib^2.78.3`
- `gnutls.org^3.8.2`
- `gnupg.org/libgcrypt^1.10.3`
- `gnupg.org/libgpg-error^1.47`
- `github.com/maxmind/libmaxminddb^1.8`
- `nghttp2.org^1.58`
- `ibr.cs.tu-bs.de/libsmi^0.4.8`
- `libssh.org^0.10.5`
- `lua.org^5.4`
- `github.com/xiph/speexdsp^1.2.1`
- `tcpdump.org^1.10.4`
- `gnome.org/libxml2^2.12.3`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.wireshark_org

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/wireshark.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
