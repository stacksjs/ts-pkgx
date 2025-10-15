# paper

> Library and command-line tools for configuring and getting information on paper sizes

## Package Information

- **Domain**: `github.com/rrthomas/libpaper`
- **Name**: `paper`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/rrthomas/libpaper/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install github.com/rrthomas/libpaper
```

## Programs

This package provides the following executable programs:

- `paper`

## Available Versions

<details>
<summary>Show all 7 versions</summary>

- `2.2.6`, `2.2.5`, `2.2.4`, `2.2.3`, `2.1.3`
- `2.1.2`, `2.1.1`

</details>

**Latest Version**: `2.2.6`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +github.com/rrthomas/libpaper@2.2.6 -- $SHELL -i
```

## Dependencies

This package depends on:

- `gnu.org/make`
- `gnu.org/help2man`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.paper

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/rrthomas/libpaper/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
