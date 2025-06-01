# cpanm

> cpanminus - get, unpack, build and install modules from CPAN

## Package Information

- **Domain**: `cpanmin.us`
- **Name**: `cpanm`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/cpanmin.us/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) cpanm
```

## Programs

This package provides the following executable programs:

- `cpanm`

## Aliases

This package can also be accessed using these aliases:

- `cpanm`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `1.7048.0`, `1.7047.0`, `1.7046.0`

</details>

**Latest Version**: `1.7048.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +cpanmin.us@1.7048.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `perl.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.cpanminus

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/cpanmin.us/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
