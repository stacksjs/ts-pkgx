# lavinmq.com

> Lightweight and fast AMQP (0-9-1) server

## Package Information

- **Domain**: `lavinmq.com`
- **Name**: `lavinmq.com`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/lavinmq.com/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install +lavinmq.com -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `lavinmq`
- `lavinmqctl`
- `lavinmqperf`

## Aliases

This package can also be accessed using these aliases:

- `lavinmq`

## Available Versions

<details>
<summary>Show all 8 versions</summary>

- `2.4.0`, `2.3.0`, `2.2.0`, `2.1.0`, `2.0.2`
- `2.0.1`, `2.0.0`, `1.3.1`

</details>

**Latest Version**: `2.4.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +lavinmq.com@2.4.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `openssl.org^1.1`
- `pcre.org/v2@10`
- `libevent.org@2`
- `hboehm.info/gc@8`
- `crystal-lang.org~1.16 # since 2.4.0`
- `crystal-lang.org/shards`
- `lz4.org^1`
- `gnu.org/help2man`
- `etcd.io`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.lavinmqcom

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/lavinmq.com/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
