# xslt

> Read-only mirror of https://gitlab.gnome.org/GNOME/libxslt

## Package Information

- **Domain**: `gnome.org/libxslt`
- **Name**: `xslt`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/libxslt/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install xslt
```

## Programs

This package provides the following executable programs:

- `xslt-config`
- `xsltproc`

## Available Versions

<details>
<summary>Show all 7 versions</summary>

- `1.1.43`, `1.1.42`, `1.1.41`, `1.1.40`, `1.1.39`
- `1.1.38`, `1.1.37`

</details>

**Latest Version**: `1.1.43`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +gnome.org/libxslt@1.1.43 -- $SHELL -i
```

## Dependencies

This package depends on:

- `gnome.org/libxml2`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.libxslt

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/libxslt/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
