# xmlif

> Convert XML to another format (based on XSL or other tools)

## Package Information

- **Domain**: `pagure.io/xmlto`
- **Name**: `xmlif`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/pagure.io/xmlto/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install xmlif
```

## Programs

This package provides the following executable programs:

- `xmlif`
- `xmlto`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `0.0.29`, `0.0.28`

</details>

**Latest Version**: `0.0.29`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +pagure.io/xmlto@0.0.29 -- $SHELL -i
```

## Dependencies

This package depends on:

- `docbook.org`
- `github.com/util-linux/util-linux`
- `darwin:gnome.org/libxslt`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.xmlif

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/pagure.io/xmlto/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
