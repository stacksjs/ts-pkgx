# docutils.org

> Text processing system for reStructuredText

## Package Information

- **Domain**: `docutilsorg`
- **Name**: `docutils.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/docutils.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +docutils.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `docutils`
- `rst2html`
- `rst2html4`
- `rst2html5`
- `rst2latex`
- `rst2man`
- `rst2odt`
- `rst2pseudoxml`
- `rst2s5`
- `rst2xetex`
- `rst2xml`

## Aliases

This package can also be accessed using these aliases:

- `+docutils.org -- $SHELL -i`

## Available Versions

<details>
<summary>Show all 6 versions</summary>

- `0.21.2`, `0.21.1`, `0.21.0`, `0.20.1`, `0.20.0`
- `0.19.0`

</details>

**Latest Version**: `0.21.2`

### Install Specific Version

```bash
# Install specific version
pkgx docutils.org@0.21.2
```

## Dependencies

This package depends on:

- `pkgx.sh^1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.docutilsorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/docutils.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
