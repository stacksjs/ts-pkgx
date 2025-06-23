# help2man

> Automatically generate simple man pages

## Package Information

- **Domain**: `gnu.org/help2man`
- **Name**: `help2man`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/help2man/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install help2man
```

## Programs

This package provides the following executable programs:

- `help2man`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `1.49.3`

</details>

**Latest Version**: `1.49.3`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) help2man -- $SHELL -i
```

## Dependencies

This package depends on:

- `gnu.org/gettext`
- `perl.org^5.38 # perl modules require matching minors`

## Related Packages

These packages work well with help2man:

- [`PERL5LIB^{{prefix}}/lib/perl5:{{prefix}}/libexec/lib/perl5:$PERL5LIB`](../../perl5lib-prefix-lib.md) - Package not available

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.help2man

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/help2man/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
