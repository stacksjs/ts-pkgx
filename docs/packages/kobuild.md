# ko

> Build and deploy Go applications on Kubernetes

## Package Information

- **Domain**: `ko.build`
- **Name**: `ko`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/ko.build/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) ko
```

## Programs

This package provides the following executable programs:

- `ko`

## Available Versions

<details>
<summary>Show all 4 versions</summary>

- `0.18.0`, `0.17.1`, `0.17.0`, `0.16.0`

</details>

**Latest Version**: `0.18.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +ko.build@0.18.0 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.kobuild

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/ko.build/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
