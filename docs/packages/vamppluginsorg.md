# vamp

> Audio processing plugin system sdk

## Package Information

- **Domain**: `vamp/plugins.org`
- **Name**: `vamp`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/vamp-plugins.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +vamp-plugins.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `vamp-simple-host`
- `vamp-rdf-template-generator`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `2.10.0`, `2.9.0`

</details>

**Latest Version**: `2.10.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +vamp/plugins.org@2.10.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `xiph.org/flac^1.4`
- `xiph.org/ogg^1.3`
- `github.com/libsndfile/libsndfile^1.2`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.vamppluginsorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/vamp-plugins.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
