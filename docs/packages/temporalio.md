# temporal

> Command-line interface for running Temporal Server and interacting with Workflows, Activities, Namespaces, and other parts of Temporal

## Package Information

- **Domain**: `temporal.io`
- **Name**: `temporal`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/temporal.io/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) temporal
```

## Programs

This package provides the following executable programs:

- `temporal`

## Aliases

This package can also be accessed using these aliases:

- `temporal`

## Available Versions

<details>
<summary>Show all 14 versions</summary>

- `1.3.0`, `1.2.0`, `1.1.2`, `1.1.1`, `1.1.0`
- `1.0.0`, `0.13.2`, `0.13.1`, `0.13.0`, `0.12.0`
- `0.11.0`, `0.10.7`, `0.10.6`, `0.10.5`

</details>

**Latest Version**: `1.3.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +temporal.io@1.3.0 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.temporalio

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/temporal.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
