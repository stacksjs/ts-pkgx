# black

> The uncompromising Python code formatter

## Package Information

- **Domain**: `github.com/psf/black`
- **Name**: `black`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/psf/black/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install black
```

## Programs

This package provides the following executable programs:

- `black`
- `blackd`

## Available Versions

<details>
<summary>Show all 19 versions</summary>

- `25.1.0`, `24.10.0`, `24.8.0`, `24.4.2`, `24.4.1`
- `24.4.0`, `24.3.0`, `24.2.0`, `24.1.1`, `24.1.0`
- `23.12.1`, `23.12.0`, `23.11.0`, `23.10.1`, `23.10.0`
- `23.9.1`, `23.9.0`, `23.7.0`, `23.3.0`

</details>

**Latest Version**: `25.1.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +github.com/psf/black@25.1.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `python.org>=3.7<3.12`
- `gnu.org/which`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.black

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/psf/black/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
