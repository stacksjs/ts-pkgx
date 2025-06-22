# taglib-config

> TagLib Audio Meta-Data Library

## Package Information

- **Domain**: `taglib.org`
- **Name**: `taglib-config`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/taglib.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install taglib-config
```

## Programs

This package provides the following executable programs:

- `taglib-config`

## Available Versions

<details>
<summary>Show all 5 versions</summary>

- `2.1.0`, `2.0.2`, `2.0.1`, `2.0.0`, `1.13.1`

</details>

**Latest Version**: `2.1.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) taglib-config -- $SHELL -i
```

## Dependencies

This package depends on:

- `zlib.net^1`
- `github.com/nemtrif/utfcpp^4`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.taglib_org

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/taglib.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
