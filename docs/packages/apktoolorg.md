# apktool.org

> Tool for reverse engineering 3rd party, closed, binary Android apps

## Package Information

- **Domain**: `apktool.org`
- **Name**: `apktool.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/apktool.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install apktool
```

## Programs

This package provides the following executable programs:

- `apktool`

## Aliases

This package can also be accessed using these aliases:

- `apktool`

## Available Versions

<details>
<summary>Show all 4 versions</summary>

- `2.11.1`, `2.11.0`, `2.10.0`, `2.9.3`

</details>

**Latest Version**: `2.11.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +apktool.org@2.11.1 -- $SHELL -i
```

## Dependencies

This package depends on:

- `openjdk.org^21`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.apktoolorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/apktool.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
