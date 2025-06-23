# leonerd.org.uk/libvterm

> C99 library which implements a VT220 or xterm terminal emulator

## Package Information

- **Domain**: `leonerd.org.uk/libvterm`
- **Name**: `leonerd.org.uk/libvterm`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/leonerd.org.uk/libvterm/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install leonerd.org.uk/libvterm
```

## Programs

This package provides the following executable programs:

- `unterm`
- `vterm-ctrl`
- `vterm-dump`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `0.3.3`, `0.3.2`, `0.3.1`

</details>

**Latest Version**: `0.3.3`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +leonerd.org.uk/libvterm@0.3.3 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['leonerd.org.uk/libvterm']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/leonerd.org.uk/libvterm/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
