# gnome.org/libsecret

> A package from gnome.org/libsecret

## Package Information

- **Domain**: `gnome.org/libsecret`
- **Name**: `gnome.org/libsecret`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/libsecret/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) +gnome.org/libsecret -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Aliases

This package can also be accessed using these aliases:

- `libsecret`

## Available Versions

<details>
<summary>Show all 7 versions</summary>

- `0.21.7`, `0.21.6`, `0.21.5`, `0.21.4`, `0.21.3`
- `0.21.2`, `0.21.1`

</details>

**Latest Version**: `0.21.7`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +gnome.org/libsecret@0.21.7 -- $SHELL -i
```

## Dependencies

This package depends on:

- `gnome.org/glib`
- `gnupg.org/libgcrypt`
- `gnupg.org/libgpg-error`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.gnomeorglibsecret

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/libsecret/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
