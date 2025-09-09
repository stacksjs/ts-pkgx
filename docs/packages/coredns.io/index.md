# coredns

> CoreDNS is a DNS server that chains plugins

## Package Information

- **Domain**: `coredns.io`
- **Name**: `coredns`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/coredns.io/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install coredns
```

## Programs

This package provides the following executable programs:

- `coredns`

## Available Versions

<details>
<summary>Show all 10 versions</summary>

- `1.12.4`, `1.12.3`, `1.12.2`, `1.12.1`, `1.12.0`
- `1.11.4`, `1.11.3`, `1.11.2`, `1.11.1`, `1.10.1`

</details>

**Latest Version**: `1.12.4`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) coredns -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.coredns

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/coredns.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
