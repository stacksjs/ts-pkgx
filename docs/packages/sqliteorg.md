# sqlite3

> Official Git mirror of the SQLite source tree

## Package Information

- **Domain**: `sqliteorg`
- **Name**: `sqlite3`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/sqlite.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) sqlite3
```

## Programs

This package provides the following executable programs:

- `sqlite3`

## Aliases

This package can also be accessed using these aliases:

- `sqlite3`

## Available Versions

<details>
<summary>Show all 25 versions</summary>

- `3.50.0`, `3.49.2`, `3.49.1`, `3.49.0`, `3.48.0`
- `3.47.2`, `3.47.1`, `3.47.0`, `3.46.1`, `3.46.0`
- `3.45.3`, `3.45.2`, `3.45.1`, `3.45.0`, `3.44.4`
- `3.44.3`, `3.44.2`, `3.44.1`, `3.44.0`, `3.43.2`
- `3.43.1`, `3.43.0`, `3.42.0`, `3.40.0`, `3.39.4`

</details>

**Latest Version**: `3.50.0`

### Install Specific Version

```bash
# Install specific version
pkgx sqlite3@3.50.0
```

## Dependencies

This package depends on:

- `zlib.net@1`
- `gnu.org/readline@8`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.sqliteorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/sqlite.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
