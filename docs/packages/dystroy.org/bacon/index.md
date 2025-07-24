# bacon

> Background rust code check

## Package Information

- **Domain**: `dystroy.org/bacon`
- **Name**: `bacon`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/dystroy.org/bacon/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install bacon
```

## Programs

This package provides the following executable programs:

- `bacon`

## Available Versions

<details>
<summary>Show all 10 versions</summary>

- `3.16.0`, `3.15.0`, `3.14.0`, `3.13.0`, `3.12.0`
- `3.11.0`, `3.10.0`, `3.9.1`, `3.9.0`, `3.8.0`

</details>

**Latest Version**: `3.16.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) bacon -- $SHELL -i
```

## Dependencies

This package depends on:

- `linux:alsa-project.org/alsa-lib`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.bacon

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/dystroy.org/bacon/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
