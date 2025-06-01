# redis

> Redis is an in-memory database that persists on disk. The data model is key-value, but many different kind of values are supported: Strings, Lists, Sets, Sorted Sets, Hashes, Streams, HyperLogLogs, Bitmaps.

## Package Information

- **Domain**: `redis`
- **Name**: `redis`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/redis.io/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +redis.io -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `redis-server`
- `redis-cli`
- `redis-benchmark`

## Aliases

This package can also be accessed using these aliases:

- `+redis.io -- $SHELL -i`
- `redis`

## Available Versions

<details>
<summary>Show all 37 versions</summary>

- `8.0.2`, `8.0.1`, `8.0.0`, `7.4.4`, `7.4.2`
- `7.4.1`, `7.4.0`, `7.2.9`, `7.2.8`, `7.2.7`
- `7.2.6`, `7.2.5`, `7.2.4`, `7.2.3`, `7.2.2`
- `7.2.1`, `7.2.0`, `7.0.15`, `7.0.14`, `7.0.13`
- `7.0.12`, `7.0.11`, `7.0.10`, `7.0.9`, `7.0.8`
- `7.0.7`, `6.2.18`, `6.2.17`, `6.2.16`, `6.2.15`
- `6.2.14`, `6.2.13`, `6.2.12`, `6.2.11`, `6.0.20`
- `6.0.19`, `6.0.18`

</details>

**Latest Version**: `8.0.2`

### Install Specific Version

```bash
# Install specific version
pkgx redis@8.0.2
```

## Dependencies

This package depends on:

- `openssl.org^1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.redis

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/redis.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
