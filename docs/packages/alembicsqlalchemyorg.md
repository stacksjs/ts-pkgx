# alembic

> A database migrations tool for SQLAlchemy.

## Package Information

- **Domain**: `alembic.sqlalchemy.org`
- **Name**: `alembic`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/alembic.sqlalchemy.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) alembic
```

## Programs

This package provides the following executable programs:

- `alembic`

## Available Versions

<details>
<summary>Show all 9 versions</summary>

- `1.16.2`, `1.16.1`, `1.16.0`, `1.15.2`, `1.15.1`
- `1.14.1`, `1.14.0`, `1.13.3`, `1.13.2`

</details>

**Latest Version**: `1.16.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +alembic.sqlalchemy.org@1.16.2 -- $SHELL -i
```

## Dependencies

This package depends on:

- `pkgx.sh^1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.alembicsqlalchemyorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/alembic.sqlalchemy.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
