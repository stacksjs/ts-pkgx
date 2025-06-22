# libjpeg-turbo.org

> Main libjpeg-turbo repository

## Package Information

- **Domain**: `libjpeg-turbo.org`
- **Name**: `libjpeg-turbo.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/libjpeg-turbo.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install +libjpeg-turbo.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `cjpeg`
- `djpeg`
- `jpegtran`
- `rdjpgcom`
- `tjbench`
- `wrjpgcom`

## Available Versions

<details>
<summary>Show all 8 versions</summary>

- `3.1.1`, `3.1.0`, `3.0.4`, `3.0.3`, `3.0.2`
- `3.0.1`, `3.0.0`, `2.1.5.1`

</details>

**Latest Version**: `3.1.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +libjpeg-turbo.org@3.1.1 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.libjpeg_turboorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/libjpeg-turbo.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
