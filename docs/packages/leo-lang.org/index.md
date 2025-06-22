# leo

> 🦁 The Leo Programming Language. A Programming Language for Formally Verified, Zero-Knowledge Applications

## Package Information

- **Domain**: `leo-lang.org`
- **Name**: `leo`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/leo-lang.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install leo
```

## Programs

This package provides the following executable programs:

- `leo`

## Available Versions

<details>
<summary>Show all 15 versions</summary>

- `2.7.1`, `2.7.0`, `2.6.1`, `2.6.0`, `2.5.0`
- `2.4.1`, `2.4.0`, `2.3.1`, `2.3.0`, `2.2.0`
- `2.1.0`, `2.0.0`, `1.12.0`, `1.11.0`, `1.10.0`

</details>

**Latest Version**: `2.7.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) leo -- $SHELL -i
```

## Dependencies

This package depends on:

- `openssl.org^1.1`
- `curl.se^8.4`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.leo

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/leo-lang.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
