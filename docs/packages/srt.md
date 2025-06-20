# srt

> Secure, Reliable, Transport

## Package Information

- **Domain**: `srt`
- **Name**: `srt`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/srtalliance.org/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) +srtalliance.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `srt-ffplay`
- `srt-file-transmit`
- `srt-live-transmit`
- `srt-tunnel`

## Aliases

This package can also be accessed using these aliases:

- `+srtalliance.org -- $SHELL -i`
- `srt`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `1.5.4`, `1.5.3`, `1.5.2`

</details>

**Latest Version**: `1.5.4`

### Install Specific Version

```bash
# Install specific version
pkgx srt@1.5.4
```

## Dependencies

This package depends on:

- `openssl.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.srt

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/srtalliance.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
