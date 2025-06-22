# po4a.org

> Package from pantry: po4a.org

## Package Information

- **Domain**: `po4a.org`
- **Name**: `po4a.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/po4a.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install po4a.org
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `gnu.org/gettext^0.22`
- `perl.org^5.22`
- `gnome.org/libxslt^1.1`

## Related Packages

These packages work well with po4a.org:

- `PERL5LIB^${{prefix}}/libexec/lib/perl5:$PERL5LIB`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.po4aorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/po4a.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
