# libwpe

> General-purpose library specifically developed for the WPE-flavored port of WebKit.

## Package Information

- **Domain**: `wpewebkit.org/libwpe`
- **Name**: `libwpe`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/wpewebkit.org/libwpe/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install +wpewebkit.org/libwpe -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Available Versions

<details>
<summary>Show all 5 versions</summary>

- `1.16.2`, `1.16.1`, `1.16.0`, `1.15.2`, `1.15.1`

</details>

**Latest Version**: `1.16.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +wpewebkit.org/libwpe@1.16.2 -- $SHELL -i
```

## Dependencies

This package depends on:

- `xkbcommon.org`
- `mesa3d.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.wpewebkit_org_libwpe

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/wpewebkit.org/libwpe/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
