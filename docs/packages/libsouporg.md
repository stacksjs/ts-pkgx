# libsoup.org

>

## Package Information

- **Domain**: `libsouporg`
- **Name**: `libsoup.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/libsoup.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +libsoup.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Available Versions

<details>
<summary>Show all 10 versions</summary>

- `3.6.5`, `3.6.4`, `3.6.3`, `3.6.1`, `3.6.0`
- `3.5.2`, `3.5.1`, `3.4.5`, `3.4.4`, `3.2.3`

</details>

**Latest Version**: `3.6.5`

### Install Specific Version

```bash
# Install specific version
pkgx libsoup.org@3.6.5
```

## Dependencies

This package depends on:

- `gnome.org/glib-networking`
- `gnutls.org`
- `rockdaboot.github.io/libpsl`
- `kerberos.org`
- `gnome.org/libxml2`
- `sqlite.org`
- `nghttp2.org`
- `linuxgnu.org/gettextgnome.org/glibgithub.com/google/brotli`
- `gnu.org/gettext`
- `gnome.org/glib`
- `github.com/google/brotli`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.libsouporg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/libsoup.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
