# lavinmq

> Lightweight and fast AMQP (0-9-1) server

## Package Information

- **Domain**: `+lavinmqcom  $shell i`
- **Name**: `lavinmq`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/lavinmq.com/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +lavinmq.com -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `lavinmq`
- `lavinmqctl`
- `lavinmqperf`

## Aliases

This package can also be accessed using these aliases:

- `+lavinmq.com -- $SHELL -i`
- `lavinmq`

## Available Versions

<details>
<summary>Show all 7 versions</summary>

- `2.3.0`, `2.2.0`, `2.1.0`, `2.0.2`, `2.0.1`
- `2.0.0`, `1.3.1`

</details>

**Latest Version**: `2.3.0`

### Install Specific Version

```bash
# Install specific version
pkgx lavinmq@2.3.0
```

## Dependencies

This package depends on:

- `openssl.org^1.1`
- `pcre.org/v2@10`
- `libevent.org@2`
- `hboehm.info/gc@8`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.+lavinmqcom  $shell i

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
