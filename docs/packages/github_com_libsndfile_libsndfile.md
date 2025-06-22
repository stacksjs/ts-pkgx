# sndfile

> A C library for reading and writing sound files containing sampled audio data.

## Package Information

- **Domain**: `github.com/libsndfile/libsndfile`
- **Name**: `sndfile`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/libsndfile/libsndfile/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install sndfile
```

## Programs

This package provides the following executable programs:

- `sndfile-info`
- `sndfile-convert`
- `sndfile-play`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `1.2.2`, `1.2.1`, `1.2.0`

</details>

**Latest Version**: `1.2.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +github.com/libsndfile/libsndfile@1.2.2 -- $SHELL -i
```

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
