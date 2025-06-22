# p11-kit

> Provides a way to load and enumerate PKCS#11 modules.

## Package Information

- **Domain**: `freedesktop.org/p11-kit`
- **Name**: `p11-kit`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/p11-kit/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install +freedesktop.org/p11-kit -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `p11-kit`
- `trust`

## Available Versions

<details>
<summary>Show all 7 versions</summary>

- `0.25.5`, `0.25.4`, `0.25.3`, `0.25.2`, `0.25.1`
- `0.25.0`, `0.24.1`

</details>

**Latest Version**: `0.25.5`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +freedesktop.org/p11-kit@0.25.5 -- $SHELL -i
```

## Dependencies

This package depends on:

- `sourceware.org/libffi^3`
- `curl.se/ca-certs`
- `gnu.org/libtasn1^4`
- `gnu.org/gettext`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.p11-kit

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/p11-kit/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
