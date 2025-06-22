# intltool

> String tool

## Package Information

- **Domain**: `freedesktop.org/intltool`
- **Name**: `intltool`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/intltool/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install +freedesktop.org/intltool -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `intltool-extract`
- `intltool-merge`
- `intltool-prepare`
- `intltool-update`
- `intltoolize`
- `lwp-download`
- `lwp-dump`
- `lwp-mirror`
- `lwp-request`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `0.51.0`

</details>

**Latest Version**: `0.51.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +freedesktop.org/intltool@0.51.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `perl.org~5`
- `linux:libexpat.github.io^2.6`

## Related Packages

These packages work well with intltool:

- `PERL5LIB^${{prefix}}/lib/perl5:{{prefix}}/libexec/lib/perl5:$PERL5LIB`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.freedesktop_org_intltool

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/intltool/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
