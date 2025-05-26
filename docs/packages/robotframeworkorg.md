# robot

> Generic automation framework for acceptance testing and RPA

## Package Information

- **Domain**: `robotframeworkorg`
- **Name**: `robot`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/robotframework.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) robot
```

## Programs

This package provides the following executable programs:

- `robot`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `7.2.2`

</details>

**Latest Version**: `7.2.2`

### Install Specific Version

```bash
# Install specific version
pkgx robot@7.2.2
```

## Dependencies

This package depends on:

- `pkgx.sh^1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.robotframeworkorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/robotframework.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
