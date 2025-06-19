# elementsproject.org

> Open Source implementation of advanced blockchain features extending the Bitcoin protocol

## Package Information

- **Domain**: `elementsproject.org`
- **Name**: `elementsproject.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/elementsproject.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install +elementsproject.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `bench_bitcoin`
- `elements-cli`
- `elements-tx`
- `elements-util`
- `elements-wallet`
- `elementsd`
- `test_bitcoin`

## Available Versions

<details>
<summary>Show all 9 versions</summary>

- `23.3.0`, `23.2.7`, `23.2.6`, `23.2.5`, `23.2.4`
- `23.2.3`, `23.2.2`, `23.2.1`, `22.1.1`

</details>

**Latest Version**: `23.3.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +elementsproject.org@23.3.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `boost.org^1.64`
- `libevent.org`
- `oracle.com/berkeley-db`
- `gnu.org/automake`
- `gnu.org/autoconf`
- `gnu.org/libtool`
- `freedesktop.org/pkg-config`
- `github.com/util-linux/util-linux`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.elementsprojectorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/elementsproject.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
