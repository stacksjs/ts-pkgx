# ladspa.org

> Linux Audio Developer's Simple Plugin

## Package Information

- **Domain**: `+ladspaorg  $shell i`
- **Name**: `ladspa.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/ladspa.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +ladspa.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `analyseplugin`
- `applyplugin`
- `listplugins`

## Aliases

This package can also be accessed using these aliases:

- `+ladspa.org -- $SHELL -i`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `1.17.0`

</details>

**Latest Version**: `1.17.0`

### Install Specific Version

```bash
# Install specific version
pkgx ladspa.org@1.17.0
```

## Dependencies

This package depends on:

- `github.com/libsndfile/libsndfile^1.2`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.+ladspaorg  $shell i

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/ladspa.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
