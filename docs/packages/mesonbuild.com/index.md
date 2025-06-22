# meson

> Fast and user friendly build system

## Package Information

- **Domain**: `mesonbuild.com`
- **Name**: `meson`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/mesonbuild.com/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install meson
```

## Programs

This package provides the following executable programs:

- `meson`

## Available Versions

<details>
<summary>Show all 28 versions</summary>

- `1.8.2`, `1.8.1`, `1.8.0`, `1.7.2`, `1.7.1`
- `1.7.0`, `1.6.1`, `1.6.0`, `1.5.2`, `1.5.1`
- `1.5.0`, `1.4.2`, `1.4.1`, `1.4.0`, `1.3.2`
- `1.3.1`, `1.3.0`, `1.2.3`, `1.2.2`, `1.2.0`
- `1.1.1`, `1.1.0`, `1.0.2`, `1.0.1`, `1.0.0`
- `0.64.1`, `0.64.0`, `0.63.3`

</details>

**Latest Version**: `1.8.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) meson -- $SHELL -i
```

## Dependencies

This package depends on:

- `pkgx.sh^1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.meson

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/mesonbuild.com/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
