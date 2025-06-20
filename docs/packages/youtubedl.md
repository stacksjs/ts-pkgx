# youtube-dl

> Command-line program to download videos from YouTube.com and other video sites

## Package Information

- **Domain**: `youtubedl`
- **Name**: `youtube-dl`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/youtube-dl.org/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) youtube-dl
```

## Programs

This package provides the following executable programs:

- `youtube-dl`

## Aliases

This package can also be accessed using these aliases:

- `youtube-dl`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `2023.8.4`, `2021.12.17`

</details>

**Latest Version**: `2023.8.4`

### Install Specific Version

```bash
# Install specific version
pkgx youtube-dl@2023.8.4
```

## Dependencies

This package depends on:

- `python.org>=3<3.12`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.youtubedl

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/youtube-dl.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
