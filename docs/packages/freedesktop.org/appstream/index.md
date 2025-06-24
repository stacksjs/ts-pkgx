# appstream

> Package from pantry: freedesktop.org/appstream

## Package Information

- **Domain**: `freedesktop.org/appstream`
- **Name**: `appstream`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/appstream/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install freedesktop.org/appstream
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `gnome.org/glib@2`
- `github.com/hughsie/libxmlb@0`
- `pyyaml.org/libyaml@0`
- `curl.se@8`
- `gnome.org/libxml2@2`
- `darwin:openldap.org^2 # 1.0.4 needs it with curl`
- `linux:systemd.io`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.appstream

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/appstream/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
