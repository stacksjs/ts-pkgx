# copa

> Tool to directly patch container images given the vulnerability scanning results

## Package Information

- **Domain**: `project-copacetic.github.io`
- **Name**: `copa`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/project-copacetic.github.io/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install copa
```

## Programs

This package provides the following executable programs:

- `copa`

## Available Versions

<details>
<summary>Show all 5 versions</summary>

- `0.10.0`, `0.9.0`, `0.8.0`, `0.7.0`, `0.6.2`

</details>

**Latest Version**: `0.10.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) copa -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.project_copaceticgithubio

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/project-copacetic.github.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
