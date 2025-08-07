# postgrest

> Serves a fully RESTful API from any existing PostgreSQL database

## Package Information

- **Domain**: `postgrest.org`
- **Name**: `postgrest`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/postgrest.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install postgrest
```

## Programs

This package provides the following executable programs:

- `postgrest`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `<Error><Code>InternalError</Code><Message>We encountered an internal error. Please try again.</Message><RequestId>Y9QWZTVSWZGR6S22</RequestId><HostId>kRqGZ0DHOoSjCFVllzZWASv4+n8M03tJ/rUDqcLk75EuTInjYgD80bFNqv07x5J9EDacXaQ1zyk=</HostId></Error>`, `<?xml version="1.0" encoding="UTF-8"?>`

</details>

**Latest Version**: `<Error><Code>InternalError</Code><Message>We encountered an internal error. Please try again.</Message><RequestId>Y9QWZTVSWZGR6S22</RequestId><HostId>kRqGZ0DHOoSjCFVllzZWASv4+n8M03tJ/rUDqcLk75EuTInjYgD80bFNqv07x5J9EDacXaQ1zyk=</HostId></Error>`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) postgrest -- $SHELL -i
```

## Dependencies

This package depends on:

- `postgresql.org/libpq@17`
- `zlib.net~1.3`
- `gnu.org/gcc/libstdcxx@14`
- `gnome.org/libxml2~2.13 # 2.14 changes library api version`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.postgrest

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/postgrest.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
