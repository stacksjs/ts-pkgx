# gradle

> Open-source build automation tool based on the Groovy and Kotlin DSL

## Package Information

- **Domain**: `gradle`
- **Name**: `gradle`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gradle.org/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) gradle
```

## Programs

This package provides the following executable programs:

- `gradle`

## Aliases

This package can also be accessed using these aliases:

- `gradle`

## Available Versions

<details>
<summary>Show all 16 versions</summary>

- `8.14.1`, `8.14.0`, `8.13.0`, `8.12.1`, `8.12.0`
- `8.11.1`, `8.11.0`, `8.10.2`, `8.10.1`, `8.10.0`
- `8.9.0`, `8.8.0`, `8.7.0`, `8.6.0`, `8.5.0`
- `8.2.1`

</details>

**Latest Version**: `8.14.1`

### Install Specific Version

```bash
# Install specific version
pkgx gradle@8.14.1
```

## Dependencies

This package depends on:

- `openjdk.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.gradle

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gradle.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
