# gnome.org/gsettings-desktop-schemas

> Shared GSettings schemas for the GNOME desktop

## Package Information

- **Domain**: `gnome.org/gsettings-desktop-schemas`
- **Name**: `gnome.org/gsettings-desktop-schemas`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/gsettings-desktop-schemas/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install gnome.org/gsettings-desktop-schemas
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Available Versions

<details>
<summary>Show all 6 versions</summary>

- `48.0.0`, `47.1.0`, `46.1.0`, `46.0.0`, `45.0.0`
- `44.0.0`

</details>

**Latest Version**: `48.0.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +gnome.org/gsettings-desktop-schemas@48.0.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `gnome.org/glib`
- `libexpat.github.io`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['gnome.org/gsettings-desktop-schemas']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/gsettings-desktop-schemas/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
