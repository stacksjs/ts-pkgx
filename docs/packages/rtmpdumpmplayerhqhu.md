# rtmpdump

> Tool for downloading RTMP streaming media

## Package Information

- **Domain**: `rtmpdump.mplayerhq.hu`
- **Name**: `rtmpdump`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/rtmpdump.mplayerhq.hu/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +rtmpdump.mplayerhq.hu -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `rtmpdump`
- `rtmpgw`
- `rtmpsrv`
- `rtmpsuck`

## Aliases

This package can also be accessed using these aliases:

- `rtmpdump`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `2.3.0`, `2.3.0`

</details>

**Latest Version**: `2.3.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +rtmpdump.mplayerhq.hu@2.3.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `openssl.org^1.1`
- `zlib.net`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.rtmpdumpmplayerhqhu

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/rtmpdump.mplayerhq.hu/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
