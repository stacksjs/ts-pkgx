# opencanaryd

> Modular and decentralised honeypot

## Package Information

- **Domain**: `github.com/thinkst/opencanary`
- **Name**: `opencanaryd`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/thinkst/opencanary/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install opencanaryd
```

## Programs

This package provides the following executable programs:

- `opencanaryd`

## Available Versions

<details>
<summary>Show all 5 versions</summary>

- `0.9.6`, `0.9.5`, `0.9.4`, `0.9.3`, `0.9.2`

</details>

**Latest Version**: `0.9.6`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) opencanaryd -- $SHELL -i
```

## Dependencies

This package depends on:

- `python.org>=3.10<3.12`
- `tcpdump.org`
- `openssl.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.opencanary

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/thinkst/opencanary/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
