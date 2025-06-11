# mvn

> Java-based project management

## Package Information

- **Domain**: `maven.apache.org`
- **Name**: `mvn`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/maven.apache.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +maven.apache.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `mvn`
- `mvnDebug`
- `mvnyjp`

## Available Versions

<details>
<summary>Show all 10 versions</summary>

- `3.9.10`, `3.9.9`, `3.9.8`, `3.9.7`, `3.9.6`
- `3.9.5`, `3.9.4`, `3.9.3`, `3.8.7`, `3.6.3`

</details>

**Latest Version**: `3.9.10`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +maven.apache.org@3.9.10 -- $SHELL -i
```

## Dependencies

This package depends on:

- `openjdk.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.mavenapacheorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/maven.apache.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
