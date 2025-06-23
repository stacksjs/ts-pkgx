# mas

> :package: Mac App Store command line interface

## Package Information

- **Domain**: `github.com/mas-cli/mas`
- **Name**: `mas`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mas-cli/mas/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install mas
```

## Programs

This package provides the following executable programs:

- `mas`

## Available Versions

<details>
<summary>Show all 8 versions</summary>

- `2.2.2`, `2.2.1`, `2.2.0`, `2.1.0`, `2.0.0`
- `1.9.0`, `1.8.8`, `1.8.7`

</details>

**Latest Version**: `2.2.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) mas -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.mas

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mas-cli/mas/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
