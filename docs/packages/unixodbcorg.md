# unixodbc.org

> The unixODBC Project goals are to develop and promote unixODBC to be the definitive standard for ODBC on non MS Windows platforms.

## Package Information

- **Domain**: `unixodbc.org`
- **Name**: `unixodbc.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/unixodbc.org/package.yml)

## Installation

```bash
# Install with pkgx
launchpad install +unixodbc.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `dltest`
- `isql`
- `iusql`
- `odbc_config`
- `odbcinst`
- `slencheck`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `2.3.12`, `2.3.11`

</details>

**Latest Version**: `2.3.12`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +unixodbc.org@2.3.12 -- $SHELL -i
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
