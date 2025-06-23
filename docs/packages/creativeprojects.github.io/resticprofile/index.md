# resticprofile

> Configuration profiles manager and scheduler for restic backup

## Package Information

- **Domain**: `creativeprojects.github.io/resticprofile`
- **Name**: `resticprofile`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/creativeprojects.github.io/resticprofile/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install resticprofile
```

## Programs

This package provides the following executable programs:

- `resticprofile`

## Available Versions

<details>
<summary>Show all 8 versions</summary>

- `0.31.0`, `0.30.1`, `0.30.0`, `0.29.1`, `0.29.0`
- `0.28.1`, `0.28.0`, `0.27.1`

</details>

**Latest Version**: `0.31.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) resticprofile -- $SHELL -i
```

## Related Packages

These packages work well with resticprofile:

- `restic.net/restic`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.resticprofile

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/creativeprojects.github.io/resticprofile/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
