# fftw.org

> C routines to compute the Discrete Fourier Transform

## Package Information

- **Domain**: `fftw.org`
- **Name**: `fftw.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/fftw.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install +fftw.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `fftw-wisdom`
- `fftw-wisdom-to-conf`
- `fftwf-wisdom`
- `fftwl-wisdom`

## Aliases

This package can also be accessed using these aliases:

- `fftw`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `3.3.10`

</details>

**Latest Version**: `3.3.10`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +fftw.org@3.3.10 -- $SHELL -i
```

## Dependencies

This package depends on:

- `open-mpi.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.fftworg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/fftw.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
