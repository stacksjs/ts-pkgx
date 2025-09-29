# pandoc

> Swiss-army knife of markup format conversion

## Package Information

- **Domain**: `pandoc.org`
- **Name**: `pandoc`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/pandoc.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install pandoc
```

## Programs

This package provides the following executable programs:

- `pandoc`

## Available Versions

<details>
<summary>Show all 33 versions</summary>

- `3.8.1`, `3.8.0`, `3.7.0.2`, `3.7.0.1`, `3.7.0`
- `3.6.4`, `3.6.3`, `3.6.2`, `3.6.1`, `3.6.0`
- `3.5.0`, `3.4.0`, `3.3.0`, `3.2.1`, `3.2.0`
- `3.1.13`, `3.1.9`, `3.1.8`, `3.1.7`, `3.1.6.2`
- `3.1.6`, `3.1.5`, `3.1.4`, `3.1.3`, `3.1.2`
- `3.1.12.3`, `3.1.12.2`, `3.1.12.1`, `3.1.12`, `3.1.11.1`
- `3.1.11`, `3.1.10`, `2.19.2`

</details>

**Latest Version**: `3.8.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) pandoc -- $SHELL -i
```

## Dependencies

This package depends on:

- `gnu.org/gmp@6`
- `zlib.net@1`
- `sourceware.org/libffi@3`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.pandoc

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/pandoc.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
