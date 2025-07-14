# apko

> Build OCI images from APK packages directly without Dockerfile

## Package Information

- **Domain**: `github.com/chainguard-dev/apko`
- **Name**: `apko`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/chainguard-dev/apko/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install apko
```

## Programs

This package provides the following executable programs:

- `apko`

## Available Versions

<details>
<summary>Show all 55 versions</summary>

- `0.29.3`, `0.29.2`, `0.29.1`, `0.29.0`, `0.28.0`
- `0.27.9`, `0.27.8`, `0.27.7`, `0.27.6`, `0.27.5`
- `0.27.4`, `0.27.3`, `0.27.2`, `0.27.1`, `0.27.0`
- `0.26.1`, `0.26.0`, `0.25.7`, `0.25.6`, `0.25.5`
- `0.25.4`, `0.25.3`, `0.25.2`, `0.25.1`, `0.25.0`
- `0.24.0`, `0.23.0`, `0.22.7`, `0.22.6`, `0.22.5`
- `0.22.4`, `0.22.3`, `0.22.2`, `0.22.1`, `0.22.0`
- `0.21.0`, `0.20.2`, `0.20.1`, `0.20.0`, `0.19.9`
- `0.19.8`, `0.19.7`, `0.19.6`, `0.19.5`, `0.19.4`
- `0.19.3`, `0.19.1`, `0.18.1`, `0.18.0`, `0.16.0`
- `0.14.7`, `0.14.6`, `0.14.5`, `0.14.1`, `0.13.3`

</details>

**Latest Version**: `0.29.3`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) apko -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.apko

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/chainguard-dev/apko/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
