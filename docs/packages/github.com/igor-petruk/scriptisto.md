# Scriptisto

> A language-agnostic "shebang interpreter" that enables you to write scripts in compiled languages.

## Package Information

- **Domain**: `github.com/igor-petruk/scriptisto`
- **Name**: `Scriptisto`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/igor-petruk/scriptisto/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install scriptisto
```

## Programs

This package provides the following executable programs:

- `scriptisto`

## Aliases

This package can also be accessed using these aliases:

- `scriptisto`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `2.2.0`, `2.1.1`

</details>

**Latest Version**: `2.2.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) scriptisto -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.Scriptisto

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/igor-petruk/scriptisto/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
