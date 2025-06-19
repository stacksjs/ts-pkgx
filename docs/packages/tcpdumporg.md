# tcpdump.org

> the LIBpcap interface to various kernel packet capture mechanism

## Package Information

- **Domain**: `tcpdump.org`
- **Name**: `tcpdump.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/tcpdump.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install pcap-config
```

## Programs

This package provides the following executable programs:

- `pcap-config`

## Aliases

This package can also be accessed using these aliases:

- `pcap-config`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `1.10.5`, `1.10.4`

</details>

**Latest Version**: `1.10.5`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +tcpdump.org@1.10.5 -- $SHELL -i
```

## Dependencies

This package depends on:

- `gnu.org/make`
- `gnu.org/bison`
- `github.com/westes/flex`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.tcpdumporg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/tcpdump.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
