# libsndfile

> Package from pantry: github.com/libsndfile/libsndfile

## Package Information

- **Domain**: `github.com/libsndfile/libsndfile`
- **Name**: `libsndfile`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/libsndfile/libsndfile/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install github.com/libsndfile/libsndfile
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `xiph.org/flac`
- `lame.sourceforge.io`
- `xiph.org/ogg`
- `xiph.org/vorbis`
- `mpg123.de`
- `opus-codec.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.github_com_libsndfile_libsndfile

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/libsndfile/libsndfile/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
