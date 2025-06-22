# license-plist

> A license list generator of all your dependencies for iOS applications

## Package Information

- **Domain**: `github.com/mono0926/LicensePlist`
- **Name**: `license-plist`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mono0926/LicensePlist/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install license-plist
```

## Programs

This package provides the following executable programs:

- `license-plist`

## Available Versions

<details>
<summary>Show all 4 versions</summary>

- `3.27.1`, `3.27.0`, `3.26.0`, `3.25.1`

</details>

**Latest Version**: `3.27.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) license-plist -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.license-plist

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mono0926/LicensePlist/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
