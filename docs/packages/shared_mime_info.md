# update-mime-database

> Database of common MIME types

## Package Information

- **Domain**: `freedesktop.org/shared-mime-info`
- **Name**: `update-mime-database`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/shared-mime-info/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install update-mime-database
```

## Programs

This package provides the following executable programs:

- `update-mime-database`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `2.4.0`, `2.3.0`, `2.2.0`

</details>

**Latest Version**: `2.4.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) update-mime-database -- $SHELL -i
```

## Dependencies

This package depends on:

- `gnome.org/glib@2`
- `gnu.org/gettext^0.21`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.shared_mime_info

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/shared-mime-info/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
