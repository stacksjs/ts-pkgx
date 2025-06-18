# xerces.apache.org/xerces-c

> Validating XML parser

## Package Information

- **Domain**: `xerces.apache.org/xerces-c`
- **Name**: `xerces.apache.org/xerces-c`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/xerces.apache.org/xerces-c/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +xerces.apache.org/xerces-c -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `CreateDOMDocument`
- `DOMCount`
- `DOMPrint`
- `EnumVal`
- `PParse`
- `PSVIWriter`
- `Redirect`
- `SAX2Count`
- `SAX2Print`
- `SAXCount`
- `SAXPrint`
- `SCMPrint`
- `SEnumVal`
- `StdInParse`
- `XInclude`

## Aliases

This package can also be accessed using these aliases:

- `xerces-c`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `3.3.0`, `3.2.5`, `3.2.4`

</details>

**Latest Version**: `3.3.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +xerces.apache.org/xerces-c@3.3.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `curl.se`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.xercesapacheorgxercesc

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/xerces.apache.org/xerces-c/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
