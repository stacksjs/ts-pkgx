# taskfile.dev

> A task runner / simpler Make alternative written in Go

## Package Information

- **Domain**: `taskfile.dev`
- **Name**: `taskfile.dev`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/taskfile.dev/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install task
```

## Programs

This package provides the following executable programs:

- `task`

## Aliases

This package can also be accessed using these aliases:

- `task`

## Available Versions

<details>
<summary>Show all 31 versions</summary>

- `3.44.0`, `3.43.3`, `3.43.2`, `3.43.1`, `3.42.1`
- `3.42.0`, `3.41.0`, `3.40.1`, `3.40.0`, `3.39.2`
- `3.39.1`, `3.39.0`, `3.38.0`, `3.37.2`, `3.37.1`
- `3.37.0`, `3.36.0`, `3.35.1`, `3.35.0`, `3.34.1`
- `3.34.0`, `3.33.1`, `3.33.0`, `3.32.0`, `3.31.0`
- `3.30.1`, `3.30.0`, `3.29.1`, `3.28.0`, `3.27.1`
- `3.27.0`

</details>

**Latest Version**: `3.44.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +taskfile.dev@3.44.0 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.task

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/taskfile.dev/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
