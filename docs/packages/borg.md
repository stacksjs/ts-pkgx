# borgbackup.org

> Deduplicating archiver with compression and authenticated encryption.

## Package Information

- **Domain**: `borgbackup.org`
- **Name**: `borgbackup.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/borgbackup.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install +borgbackup.org
```

## Programs

This package provides the following executable programs:

- `borg`
- `borgfs`

## Aliases

This package can also be accessed using these aliases:

- `borg`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `1.4.1`

</details>

**Latest Version**: `1.4.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +borgbackup.org@1.4.1 -- $SHELL -i
```

## Dependencies

This package depends on:

- `pkgx.sh^1`
- `github.com/Cyan4973/xxHash^0.8`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.borg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/borgbackup.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
