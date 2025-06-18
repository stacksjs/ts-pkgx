# valkey.io

> A flexible distributed key-value datastore that is optimized for caching and other realtime workloads.

## Package Information

- **Domain**: `valkey.io`
- **Name**: `valkey.io`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/valkey.io/package.yml)

## Installation

```bash
# Install with pkgx
launchpad install +valkey.io -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `valkey-server`
- `valkey-cli`
- `valkey-benchmark`

## Aliases

This package can also be accessed using these aliases:

- `valkey`

## Available Versions

<details>
<summary>Show all 12 versions</summary>

- `8.1.2`, `8.1.1`, `8.1.0`, `8.0.3`, `8.0.2`
- `8.0.1`, `8.0.0`, `7.2.9`, `7.2.8`, `7.2.7`
- `7.2.6`, `7.2.5`

</details>

**Latest Version**: `8.1.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +valkey.io@8.1.2 -- $SHELL -i
```

## Dependencies

This package depends on:

- `openssl.org^1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.valkeyio

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/valkey.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
