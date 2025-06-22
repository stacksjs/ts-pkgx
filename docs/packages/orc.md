# orc

> Oil Runtime Compiler (ORC)

## Package Information

- **Domain**: `gstreamer.freedesktop.org/orc`
- **Name**: `orc`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gstreamer.freedesktop.org/orc/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install +gstreamer.freedesktop.org/orc -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `orcc`
- `orc-bugreport`

## Available Versions

<details>
<summary>Show all 8 versions</summary>

- `0.4.41`, `0.4.40`, `0.4.39`, `0.4.38`, `0.4.37`
- `0.4.36`, `0.4.35`, `0.4.34`

</details>

**Latest Version**: `0.4.41`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +gstreamer.freedesktop.org/orc@0.4.41 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.orc

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gstreamer.freedesktop.org/orc/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
