# chromedriver.chromium.org

> A package from chromedriverchromium.org

## Package Information

- **Domain**: `chromedriverchromium.org`
- **Name**: `chromedriver.chromium.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/chromedriver.chromium.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install chromedriver
```

## Programs

This package provides the following executable programs:

- `chromedriver`

## Aliases

This package can also be accessed using these aliases:

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
sh <(curl https://pkgx.sh) chromedriver -- $SHELL -i
```

## Dependencies

This package depends on:

- `linux:gnome.org/glib^2`
- `linux:mozilla.org/nss`
- `linux:x.org/xcb`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.chromedriverchromiumorg

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
