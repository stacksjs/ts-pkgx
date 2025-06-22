# cosign

> Code signing and transparency for containers and binaries

## Package Information

- **Domain**: `sigstore.dev/cosign`
- **Name**: `cosign`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/sigstore.dev/cosign/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install cosign
```

## Programs

This package provides the following executable programs:

- `cosign`

## Available Versions

<details>
<summary>Show all 15 versions</summary>

- `2.5.2`, `2.5.1`, `2.5.0`, `2.4.3`, `2.4.2`
- `2.4.1`, `2.4.0`, `2.3.0`, `2.2.4`, `2.2.3`
- `2.2.2`, `2.2.1`, `2.2.0`, `1.13.6`, `1.13.2`

</details>

**Latest Version**: `2.5.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) cosign -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.cosign

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/sigstore.dev/cosign/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
