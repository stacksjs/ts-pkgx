# plistutil

> A library to handle Apple Property List format in binary or XML

## Package Information

- **Domain**: `libimobiledevice.org/libplist`
- **Name**: `plistutil`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/libimobiledevice.org/libplist/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install plistutil
```

## Programs

This package provides the following executable programs:

- `plistutil`

## Available Versions

<details>
<summary>Show all 5 versions</summary>

- `2.7.0`, `2.6.0`, `2.5.0`, `2.4.0`, `2.3.0`

</details>

**Latest Version**: `2.7.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) plistutil -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.libplist

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/libimobiledevice.org/libplist/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
