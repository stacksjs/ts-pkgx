# github.com/AlDanial/cloc

> cloc counts blank lines, comment lines, and physical lines of source code in many programming languages.

## Package Information

- **Domain**: `github.com/AlDanial/cloc`
- **Name**: `github.com/AlDanial/cloc`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/AlDanial/cloc/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install github.com/AlDanial/cloc
```

## Programs

This package provides the following executable programs:

- `cloc`
- `config_data`

## Available Versions

<details>
<summary>Show all 4 versions</summary>

- `2.4.0`, `2.2.0`, `2.0.0`, `1.98.0`

</details>

**Latest Version**: `2.4.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +github.com/AlDanial/cloc@2.4.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `perl.org^5`

## Related Packages

These packages work well with github.com/AlDanial/cloc:

- [`PERL5LIB^$PERL5LIB:{{prefix}}/lib/perl5`](../../perl5lib-perl5lib-prefix-lib.md) - Package not available

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.cloc

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/AlDanial/cloc/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
