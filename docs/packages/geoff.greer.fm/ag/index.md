# The Silver Searcher

> A code-searching tool similar to ack, but faster.

## Package Information

- **Domain**: `geoff.greer.fm/ag`
- **Name**: `The Silver Searcher`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/geoff.greer.fm/ag/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install ag
```

## Programs

This package provides the following executable programs:

- `ag`

## Aliases

This package can also be accessed using these aliases:

- `ag`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `2.2.0`

</details>

**Latest Version**: `2.2.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) ag -- $SHELL -i
```

## Dependencies

This package depends on:

- `pcre.org^8`
- `tukaani.org/xz^5.4.5`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.ag

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/geoff.greer.fm/ag/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
