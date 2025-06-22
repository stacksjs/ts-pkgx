# mpg123

> MP3 player for Linux and UNIX

## Package Information

- **Domain**: `mpg123.de`
- **Name**: `mpg123`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/mpg123.de/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install mpg123
```

## Programs

This package provides the following executable programs:

- `mpg123`

## Available Versions

<details>
<summary>Show all 13 versions</summary>

- `1.33.0`, `1.32.10`, `1.32.9`, `1.32.8`, `1.32.7`
- `1.32.6`, `1.32.5`, `1.32.4`, `1.32.3`, `1.32.2`
- `1.32.1`, `1.32.0`, `1.31.2`

</details>

**Latest Version**: `1.33.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) mpg123 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.mpg123

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/mpg123.de/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
