# bitcoin

> Decentralized, peer to peer payment network

## Package Information

- **Domain**: `bitcoin.org`
- **Name**: `bitcoin`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/bitcoin.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +bitcoin.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `bitcoin-cli`
- `bitcoin-tx`
- `bitcoin-util`
- `bitcoin-wallet`
- `bitcoind`

## Aliases

This package can also be accessed using these aliases:

- `bitcoin`

## Available Versions

<details>
<summary>Show all 16 versions</summary>

- `29.0.0`, `28.1.0`, `28.0.0`, `27.2.0`, `27.1.0`
- `27.0.0`, `26.2.0`, `26.1.0`, `26.0.0`, `25.2.0`
- `25.1.0`, `25.0.0`, `24.2.0`, `24.1.0`, `24.0.1`
- `23.2.0`

</details>

**Latest Version**: `29.0.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +bitcoin.org@29.0.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `oracle.com/berkeley-db^18`
- `boost.org^1`
- `libevent.org^2`
- `zeromq.org^4`
- `sqlite.org^3`
- `linuxgnu.org/gcc/libstdcxx`
- `gnu.org/gcc/libstdcxx`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.bitcoinorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/bitcoin.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
