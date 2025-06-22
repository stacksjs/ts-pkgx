# yubikey-agent

> Package from pantry: filippo.io/yubikey-agent

## Package Information

- **Domain**: `filippo.io/yubikey-agent`
- **Name**: `yubikey-agent`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/filippo.io/yubikey-agent/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install filippo.io/yubikey-agent
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `pcsclite.apdu.fr^2`
- `linux:gnupg.org/pinentry`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.yubikey_agent

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/filippo.io/yubikey-agent/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
