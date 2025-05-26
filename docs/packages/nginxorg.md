# nginx

> HTTP(S) server and reverse proxy, and IMAP/POP3 proxy server

## Package Information

- **Domain**: `nginxorg`
- **Name**: `nginx`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/nginx.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) nginx
```

## Programs

This package provides the following executable programs:

- `nginx`

## Available Versions

<details>
<summary>Show all 18 versions</summary>

- `1.28.0`, `1.27.5`, `1.27.4`, `1.27.3`, `1.27.2`
- `1.27.1`, `1.27.0`, `1.26.2`, `1.26.1`, `1.26.0`
- `1.25.5`, `1.25.4`, `1.25.3`, `1.25.2`, `1.25.1`
- `1.25.0`, `1.24.0`, `1.23.3`

</details>

**Latest Version**: `1.28.0`

### Install Specific Version

```bash
# Install specific version
pkgx nginx@1.28.0
```

## Dependencies

This package depends on:

- `pcre.org@8.45`
- `zlib.net^1.2.13`
- `openssl.org^1.1.1k`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.nginxorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/nginx.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
