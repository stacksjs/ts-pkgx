# thrift

> Framework for scalable cross-language services development

## Package Information

- **Domain**: `apache.org/thrift`
- **Name**: `thrift`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/apache.org/thrift/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install thrift
```

## Programs

This package provides the following executable programs:

- `thrift`

## Available Versions

<details>
<summary>Show all 5 versions</summary>

- `0.22.0`, `0.21.0`, `0.20.0`, `0.19.0`, `0.18.1`

</details>

**Latest Version**: `0.22.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) thrift -- $SHELL -i
```

## Dependencies

This package depends on:

- `openssl.org@1.1`
- `zlib.net`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.apache_org_thrift

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/apache.org/thrift/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
