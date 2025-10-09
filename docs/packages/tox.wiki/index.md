# tox

> Command line driven CI frontend and development task automation tool.

## Package Information

- **Domain**: `tox.wiki`
- **Name**: `tox`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/tox.wiki/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install tox
```

## Programs

This package provides the following executable programs:

- `tox`

## Available Versions

<details>
<summary>Show all 26 versions</summary>

- `4.30.3`, `4.30.2`, `4.30.1`, `4.30.0`, `4.29.0`
- `4.28.4`, `4.28.3`, `4.28.2`, `4.28.1`, `4.28.0`
- `4.27.0`, `4.26.0`, `4.25.0`, `4.24.2`, `4.24.1`
- `4.24.0`, `4.23.2`, `4.23.1`, `4.23.0`, `4.22.0`
- `4.21.2`, `4.21.1`, `4.21.0`, `4.20.0`, `4.19.0`
- `4.18.1`

</details>

**Latest Version**: `4.30.3`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) tox -- $SHELL -i
```

## Dependencies

This package depends on:

- `pkgx.sh^1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.tox

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/tox.wiki/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
