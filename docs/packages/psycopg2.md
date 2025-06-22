# psycopg2

> PostgreSQL database adapter for the Python programming language

## Package Information

- **Domain**: `psycopg.org/psycopg2`
- **Name**: `psycopg2`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/psycopg.org/psycopg2/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install +psycopg.org/psycopg2 -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `2.9.10`, `2.9.9`

</details>

**Latest Version**: `2.9.10`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +psycopg.org/psycopg2@2.9.10 -- $SHELL -i
```

## Dependencies

This package depends on:

- `python.org~3.11`
- `postgresql.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.psycopg2

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/psycopg.org/psycopg2/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
