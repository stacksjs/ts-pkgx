# augeas.net

> A configuration editing tool and API

## Package Information

- **Domain**: `augeas.net`
- **Name**: `augeas.net`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/augeas.net/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install augeas.net
```

## Programs

This package provides the following executable programs:

- `augmatch`
- `augparse`
- `augprint`
- `augtool`
- `fadot`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `1.14.1`, `1.14.0`

</details>

**Latest Version**: `1.14.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +augeas.net@1.14.1 -- $SHELL -i
```

## Dependencies

This package depends on:

- `gnu.org/readline`
- `gnome.org/libxml2`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['augeas.net']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/augeas.net/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
