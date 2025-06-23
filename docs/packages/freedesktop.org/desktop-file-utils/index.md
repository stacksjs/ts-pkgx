# freedesktop.org/desktop-file-utils

> Command-line utilities for working with desktop entries

## Package Information

- **Domain**: `freedesktop.org/desktop-file-utils`
- **Name**: `freedesktop.org/desktop-file-utils`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/desktop-file-utils/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install freedesktop.org/desktop-file-utils
```

## Programs

This package provides the following executable programs:

- `desktop-file-edit`
- `desktop-file-install`
- `desktop-file-validate`
- `update-desktop-database`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `0.28.0`, `0.27.0`

</details>

**Latest Version**: `0.28.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +freedesktop.org/desktop-file-utils@0.28.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `gnome.org/glib@2`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.desktop_file_utils

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/desktop-file-utils/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
