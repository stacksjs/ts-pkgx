# kcat

> Package from pantry: github.com/edenhill/kcat

## Package Information

- **Domain**: `github.com/edenhill/kcat`
- **Name**: `kcat`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/edenhill/kcat/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install github.com/edenhill/kcat
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `apache.org/avro`
- `github.com/confluentinc/librdkafka`
- `github.com/confluentinc/libserdes`
- `lloyd.github.io/yajl`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.kcat

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/edenhill/kcat/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
