# perl.org

> Highly capable, feature-rich programming language

## Package Information

- **Domain**: `perl.org`
- **Name**: `perl.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/perl.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install +perl.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `corelist`
- `cpan`
- `enc2xs`
- `encguess`
- `h2ph`
- `h2xs`
- `instmodsh`
- `json_pp`
- `libnetcfg`
- `perl`
- `perlbug`
- `perldoc`
- `perlivp`
- `perlthanks`
- `piconv`
- `pl2pm`
- `pod2html`
- `pod2man`
- `pod2text`
- `pod2usage`
- `podchecker`
- `prove`
- `ptar`
- `ptardiff`
- `ptargrep`
- `shasum`
- `splain`
- `streamzip`
- `xsubpp`
- `zipdetails`

## Available Versions

<details>
<summary>Show all 14 versions</summary>

- `5.40.2`, `5.40.1`, `5.40.0`, `5.38.4`, `5.38.3`
- `5.38.2`, `5.38.1`, `5.38.0`, `5.36.3`, `5.36.2`
- `5.36.1`, `5.36.0`, `5.34.3`, `5.34.2`

</details>

**Latest Version**: `5.40.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +perl.org@5.40.2 -- $SHELL -i
```

## Dependencies

This package depends on:

- `llvm.org<17`
- `gnu.org/make`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.perlorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/perl.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
