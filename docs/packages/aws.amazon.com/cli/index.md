# cli

> Package from pantry: aws.amazon.com/cli

## Package Information

- **Domain**: `aws.amazon.com/cli`
- **Name**: `cli`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/aws.amazon.com/cli/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install aws.amazon.com/cli
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `sourceware.org/libffi^3`
- `pkgx.sh^1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.cli

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/aws.amazon.com/cli/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
