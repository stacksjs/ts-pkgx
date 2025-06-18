# openresty.org

> High Performance Web Platform Based on Nginx and LuaJIT

## Package Information

- **Domain**: `openresty.org`
- **Name**: `openresty.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/openresty.org/package.yml)

## Installation

```bash
# Install with pkgx
launchpad install +openresty.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `nginx-xml2pod`
- `opm`
- `resty`
- `restydoc`
- `restydoc-index`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `1.25.3.2`

</details>

**Latest Version**: `1.25.3.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +openresty.org@1.25.3.2 -- $SHELL -i
```

## Dependencies

This package depends on:

- `pcre.org@8`
- `openssl.org^1.1`
- `zlib.net^1.2`
- `perl.org`
- `waterlan.home.xs4all.nl/dos2unix`
- `mercurial-scm.org`
- `git-scm.org`
- `gnu.org/wget`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.openrestyorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/openresty.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
