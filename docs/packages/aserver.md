# aserver

> Provides audio and MIDI functionality to the Linux operating system

## Package Information

- **Domain**: `alsa-project.org/alsa-lib`
- **Name**: `aserver`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/alsa-project.org/alsa-lib/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install aserver
```

## Programs

This package provides the following executable programs:

- `aserver`

## Available Versions

<details>
<summary>Show all 6 versions</summary>

- `1.2.14`, `1.2.13`, `1.2.12`, `1.2.11`, `1.2.10`
- `1.2.9`

</details>

**Latest Version**: `1.2.14`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) aserver -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.aserver

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/alsa-project.org/alsa-lib/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
