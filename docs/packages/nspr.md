# nspr-config

> Platform-neutral API for system-level and libc-like functions

## Package Information

- **Domain**: `mozilla.org/nspr`
- **Name**: `nspr-config`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/mozilla.org/nspr/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install nspr-config
```

## Programs

This package provides the following executable programs:

- `nspr-config`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `4.34.1`

</details>

**Latest Version**: `4.34.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) nspr-config -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.nspr

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/mozilla.org/nspr/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
