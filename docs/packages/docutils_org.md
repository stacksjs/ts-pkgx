# docutils.org

> Text processing system for reStructuredText

## Package Information

- **Domain**: `docutils.org`
- **Name**: `docutils.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/docutils.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install docutils.org
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
sh <(curl https://pkgx.sh) +docutils.org@0.21.2 -- $SHELL -i
```

## Dependencies

This package depends on:

- `pkgx.sh^1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.docutils_org

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
