# pluto

> A cli tool to help discover deprecated apiVersions in Kubernetes

## Package Information

- **Domain**: `fairwinds.com/pluto`
- **Name**: `pluto`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/fairwinds.com/pluto/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install pluto
```

## Programs

This package provides the following executable programs:

- `pluto`

## Available Versions

<details>
<summary>Show all 24 versions</summary>

- `5.22.3`, `5.22.2`, `5.22.1`, `5.22.0`, `5.21.9`
- `5.21.8`, `5.21.7`, `5.21.6`, `5.21.4`, `5.21.3`
- `5.21.2`, `5.21.1`, `5.21.0`, `5.20.3`, `5.20.2`
- `5.20.1`, `5.20.0`, `5.19.4`, `5.19.3`, `5.19.2`
- `5.19.1`, `5.19.0`, `5.18.6`, `5.18.5`

</details>

**Latest Version**: `5.22.3`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) pluto -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.pluto

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/fairwinds.com/pluto/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
