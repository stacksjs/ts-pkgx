# apache.org/httpd

> Apache HTTP server

## Package Information

- **Domain**: `apache.org/httpd`
- **Name**: `apache.org/httpd`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/apache.org/httpd/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +apache.org/httpd -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `ab`
- `apachectl`
- `checkgid`
- `fcgistarter`
- `htcacheclean`
- `htdbm`
- `htdigest`
- `htpasswd`
- `httpd`
- `httxt2dbm`
- `logresolve`
- `rotatelogs`
- `suexec`

## Aliases

This package can also be accessed using these aliases:

- `httpd`

## Available Versions

<details>
<summary>Show all 7 versions</summary>

- `2.4.63`, `2.4.62`, `2.4.61`, `2.4.60`, `2.4.59`
- `2.4.58`, `2.4.57`

</details>

**Latest Version**: `2.4.63`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +apache.org/httpd@2.4.63 -- $SHELL -i
```

## Dependencies

This package depends on:

- `apache.org/apr>=1.3.0`
- `apache.org/apr-util>=1.3.0`
- `github.com/google/brotli`
- `nghttp2.org`
- `openssl.org`
- `pcre.org/v2`
- `gnome.org/libxml2`
- `zlib.net`
- `libexpat.github.io`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.apacheorghttpd

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/apache.org/httpd/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
