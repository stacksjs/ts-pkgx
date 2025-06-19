# sbt

> sbt, the interactive build tool

## Package Information

- **Domain**: `sbt`
- **Name**: `sbt`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/scala-sbt.org/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) sbt
```

## Programs

This package provides the following executable programs:

- `sbt`

## Aliases

This package can also be accessed using these aliases:

- `sbt`

## Available Versions

<details>
<summary>Show all 19 versions</summary>

- `1.11.0`, `1.10.11`, `1.10.10`, `1.10.9`, `1.10.7`
- `1.10.6`, `1.10.5`, `1.10.4`, `1.10.3`, `1.10.2`
- `1.10.1`, `1.10.0`, `1.9.9`, `1.9.8`, `1.9.7`
- `1.9.6`, `1.9.5`, `1.9.4`, `1.9.3`

</details>

**Latest Version**: `1.11.0`

### Install Specific Version

```bash
# Install specific version
pkgx sbt@1.11.0
```

## Dependencies

This package depends on:

- `openjdk.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.sbt

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/scala-sbt.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
