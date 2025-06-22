# apu-{{ version.major }}-config

> Mirror of Apache Portable Runtime util

## Package Information

- **Domain**: `apache.org/apr-util`
- **Name**: `apu-{{ version.major }}-config`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/apache.org/apr-util/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install apu-{{
```

## Programs

This package provides the following executable programs:

- `apu-&lbrace;&lbrace; version.major &rbrace;&rbrace;-config`

## Aliases

This package can also be accessed using these aliases:

- `apu-{{`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `1.6.3`

</details>

**Latest Version**: `1.6.3`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) apu-{{ -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.apache_org_apr_util

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/apache.org/apr-util/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
