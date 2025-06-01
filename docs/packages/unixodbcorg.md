# unixodbc.org

> The unixODBC Project goals are to develop and promote unixODBC to be the definitive standard for ODBC on non MS Windows platforms.

## Package Information

- **Domain**: `unixodbcorg`
- **Name**: `unixodbc.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/unixodbc.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +unixodbc.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `dltest`
- `isql`
- `iusql`
- `odbc_config`
- `odbcinst`
- `slencheck`

## Aliases

This package can also be accessed using these aliases:

- `+unixodbc.org -- $SHELL -i`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `2.3.12`, `2.3.11`

</details>

**Latest Version**: `2.3.12`

### Install Specific Version

```bash
# Install specific version
pkgx unixodbc.org@2.3.12
```

## Dependencies

This package depends on:

- `gnu.org/libtool`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.unixodbcorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/unixodbc.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
