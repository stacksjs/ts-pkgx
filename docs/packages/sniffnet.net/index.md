# sniffnet

> Cross-platform application to monitor your network traffic

## Package Information

- **Domain**: `sniffnet.net`
- **Name**: `sniffnet`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/sniffnet.net/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install sniffnet
```

## Programs

This package provides the following executable programs:

- `sniffnet`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `1.4.0`, `1.3.2`, `1.3.1`

</details>

**Latest Version**: `1.4.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) sniffnet -- $SHELL -i
```

## Dependencies

This package depends on:

- `openssl.org@1`
- `tcpdump.org@1`
- `linux:alsa-project.org/alsa-lib@1`
- `linux:freedesktop.org/fontconfig@2`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.sniffnet

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/sniffnet.net/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
