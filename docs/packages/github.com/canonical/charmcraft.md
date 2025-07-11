# charmcraft

> Collaborate, build and publish charmed operators for Kubernetes, Linux and Windows.

## Package Information

- **Domain**: `github.com/canonical/charmcraft`
- **Name**: `charmcraft`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/canonical/charmcraft/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install charmcraft
```

## Programs

This package provides the following executable programs:

- `charmcraft`

## Available Versions

<details>
<summary>Show all 10 versions</summary>

- `3.5.2`, `3.5.1`, `3.5.0`, `3.4.3`, `3.3.3`
- `3.3.2`, `3.3.0`, `3.2.2`, `3.2.1`, `2.7.5`

</details>

**Latest Version**: `3.5.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) charmcraft -- $SHELL -i
```

## Dependencies

This package depends on:

- `pkgx.sh^1`
- `libgit2.org~1.7`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.charmcraft

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/canonical/charmcraft/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
