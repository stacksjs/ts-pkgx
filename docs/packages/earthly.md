# earthly

> Super simple build framework with fast, repeatable builds and an instantly familiar syntax – like Dockerfile and Makefile had a baby.

## Package Information

- **Domain**: `earthly.dev/earthly`
- **Name**: `earthly`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/earthly.dev/earthly/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install earthly
```

## Programs

This package provides the following executable programs:

- `earthly`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `0.8.15`

</details>

**Latest Version**: `0.8.15`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +earthly.dev/earthly@0.8.15 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.earthly

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/earthly.dev/earthly/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
