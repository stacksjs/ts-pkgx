# cb

> 😎🏖️🐬 Your new, 𝙧𝙞𝙙𝙤𝙣𝙠𝙪𝙡𝙞𝙘𝙞𝙤𝙪𝙨𝙡𝙮 smart clipboard manager

## Package Information

- **Domain**: `getclipboard.app`
- **Name**: `cb`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/getclipboard.app/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install cb
```

## Programs

This package provides the following executable programs:

- `cb`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `0.9.1`, `0.9.0.1`, `0.10.0`

</details>

**Latest Version**: `0.9.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) cb -- $SHELL -i
```

## Dependencies

This package depends on:

- `openssl.org^1.1`
- `linux:alsa-project.org/alsa-lib@1`
- `linux:x.org/x11@1`
- `linux:wayland.freedesktop.org@1`
- `linux:gnu.org/gcc/libstdcxx@14`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.getclipboardapp

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/getclipboard.app/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
