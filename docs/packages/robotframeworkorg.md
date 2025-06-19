# robotframework.org

> Generic automation framework for acceptance testing and RPA

## Package Information

- **Domain**: `robotframework.org`
- **Name**: `robotframework.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/robotframework.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install robot
```

## Programs

This package provides the following executable programs:

- `robot`

## Aliases

This package can also be accessed using these aliases:

- `robot`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `7.3.1`, `7.3.0`, `7.2.2`

</details>

**Latest Version**: `7.3.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +robotframework.org@7.3.1 -- $SHELL -i
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
