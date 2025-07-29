# vamp-plugins.org

> Package from pantry: vamp-plugins.org

## Package Information

- **Domain**: `vamp-plugins.org`
- **Name**: `vamp-plugins.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/vamp-plugins.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install vamp-plugins.org
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `xiph.org/flac^1.4`
- `xiph.org/ogg^1.3`
- `github.com/libsndfile/libsndfile^1.2`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['vamp-plugins.org']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/vamp-plugins.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
