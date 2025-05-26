# po4a.org

> Maintain the translations of your documentation with ease  (PO for anything)

## Package Information

- **Domain**: `po4aorg`
- **Name**: `po4a.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/po4a.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +po4a.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `msguntypot`
- `po4a`
- `po4a-display-man`
- `po4a-display-pod`
- `po4a-gettextize`
- `po4a-normalize`
- `po4a-updatepo`
- `podselect`

## Available Versions

<details>
<summary>Show all 5 versions</summary>

- `0.73.0`, `0.72.0`, `0.71.0`, `0.70.0`, `0.69.0`

</details>

**Latest Version**: `0.73.0`

### Install Specific Version

```bash
# Install specific version
pkgx po4a.org@0.73.0
```

## Dependencies

This package depends on:

- `gnu.org/gettext^0.22`
- `perl.org^5.22`
- `gnome.org/libxslt^1.1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.po4aorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/po4a.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
