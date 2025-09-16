# asciinema

> Record and share terminal sessions

## Package Information

- **Domain**: `asciinema.org`
- **Name**: `asciinema`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/asciinema.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install asciinema
```

## Programs

This package provides the following executable programs:

- `asciinema`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `3.0.0`, `2.4.0`

</details>

**Latest Version**: `3.0.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) asciinema -- $SHELL -i
```

## Dependencies

This package depends on:

- `python.org^3.12 # v2`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.asciinema

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/asciinema.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
