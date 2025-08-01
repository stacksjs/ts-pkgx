# xcodes

> The best command-line tool to install and switch between multiple versions of Xcode.

## Package Information

- **Domain**: `github.com/XcodesOrg/xcodes`
- **Name**: `xcodes`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/XcodesOrg/xcodes/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install xcodes
```

## Programs

This package provides the following executable programs:

- `xcodes`

## Available Versions

<details>
<summary>Show all 5 versions</summary>

- `1.6.2`, `1.6.1`, `1.6.0`, `1.5.0`, `1.4.1`

</details>

**Latest Version**: `1.6.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) xcodes -- $SHELL -i
```

## Related Packages

These packages work well with xcodes:

- [`aria2.github.io`](../../aria2.github.io/index.md) - aria2 is a lightweight multi-protocol & multi-source, cross platform download utility operated in command-line. It supports HTTP/HTTPS, FTP, SFTP, BitTorrent and Metalink.

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.xcodes

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/XcodesOrg/xcodes/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
