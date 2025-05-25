# openvpn

> 

## Package Information

- **Domain**: `openvpnnet`
- **Name**: `openvpn`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/openvpn.net/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) openvpn
```

## Programs

This package provides the following executable programs:

- `openvpn`

## Available Versions

<details>
<summary>Show all 12 versions</summary>

- `2.6.14`, `2.6.13`, `2.6.12`, `2.6.11`, `2.6.10`
- `2.6.9`, `2.6.8`, `2.6.7`, `2.6.6`, `2.6.5`
- `2.6.4`, `2.5.10`

</details>

**Latest Version**: `2.6.14`

### Install Specific Version

```bash
# Install specific version
pkgx openvpn@2.6.14
```

## Dependencies

This package depends on:

- `lz4.org^1.9`
- `oberhumer.com/lzo^2.10`
- `openssl.org^1.1`
- `linuxsourceforge.net/net-toolsgithub.com/thom311/libnl`
- `sourceforge.net/net-tools`
- `github.com/thom311/libnl`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['openvpnnet']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/openvpn.net/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
