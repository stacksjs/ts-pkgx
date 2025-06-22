# lm-sensors

> Tools for monitoring the temperatures, voltages, and fans

## Package Information

- **Domain**: `github.com/lm-sensors/lm-sensors`
- **Name**: `lm-sensors`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/lm-sensors/lm-sensors/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install sensors
```

## Programs

This package provides the following executable programs:

- `sensors`

## Aliases

This package can also be accessed using these aliases:

- `sensors`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `3.6.0`

</details>

**Latest Version**: `3.6.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +github.com/lm-sensors/lm-sensors@3.6.0 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.sensors

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/lm-sensors/lm-sensors/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
