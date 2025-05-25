# chromedriver

> 

## Package Information

- **Domain**: `chromedriverchromiumorg`
- **Name**: `chromedriver`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/chromedriver.chromium.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) chromedriver
```

## Programs

This package provides the following executable programs:

- `chromedriver`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `114.0.5735.90`

</details>

**Latest Version**: `114.0.5735.90`

### Install Specific Version

```bash
# Install specific version
pkgx chromedriver@114.0.5735.90
```

## Dependencies

This package depends on:

- `linuxgnome.org/glib^2mozilla.org/nssx.org/xcb`
- `gnome.org/glib^2`
- `mozilla.org/nss`
- `x.org/xcb`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['chromedriverchromiumorg']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/chromedriver.chromium.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
