# php.net

> Package from pantry: php.net

## Package Information

- **Domain**: `php.net`
- **Name**: `php.net`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/php.net/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install php.net
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `gnu.org/bison^3`
- `re2c.org^3`
- `apache.org/apr^1`
- `apache.org/apr-util^1`
- `bcrypt.sourceforge.net^1`
- `gnu.org/autoconf^2`
- `curl.se^8`
- `gnu.org/gettext^0`
- `gnu.org/gmp^6`
- `libsodium.org<1.0.19`
- `libzip.org~1.9`
- `github.com/kkos/oniguruma^6`
- `openssl.org`
- `pcre.org/v2>=10.30`
- `sqlite.org^3`
- `unicode.org^71`
- `gnu.org/libiconv^1`
- `kerberos.org^1`
- `gnome.org/libxml2`
- `thrysoee.dk/editline^3`
- `sourceware.org/libffi>=3.4.7`
- `gnome.org/libxslt>=1.1.0<1.1.43`
- `libpng.org^1`
- `google.com/webp^1`
- `ijg.org^9`
- `gnu.org/sed^4 # phpize requires this`
- `openldap.org^2 # since 8.1.31, 8.2.26, 8.3.14, 8.4.0`
- `gnu.org/gcc/libstdcxx@14`
- `darwin:sourceware.org/bzip2^1`
- `darwin:zlib.net^1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.phpnet

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/php.net/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
