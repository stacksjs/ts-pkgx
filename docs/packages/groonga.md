# groonga

> An embeddable fulltext search engine. Groonga is the successor project to Senna.

## Package Information

- **Domain**: `groonga`
- **Name**: `groonga`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/groonga.org/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) +groonga.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `groonga`
- `groonga-suggest-create-dataset`

## Aliases

This package can also be accessed using these aliases:

- `+groonga.org -- $SHELL -i`
- `groonga`

## Available Versions

<details>
<summary>Show all 26 versions</summary>

- `15.0.9`, `15.0.4`, `15.0.3`, `15.0.2`, `15.0.1`
- `15.0.0`, `14.1.3`, `14.1.2`, `14.1.1`, `14.1.0`
- `14.0.9`, `14.0.8`, `14.0.7`, `14.0.6`, `14.0.5`
- `14.0.4`, `14.0.3`, `14.0.2`, `14.0.1`, `14.0.0`
- `13.1.1`, `13.1.0`, `13.0.9`, `13.0.8`, `13.0.7`
- `13.0.6`

</details>

**Latest Version**: `15.0.9`

### Install Specific Version

```bash
# Install specific version
pkgx groonga@15.0.9
```

## Dependencies

This package depends on:

- `darwintaku910.github.io/mecabtaku910.github.io/mecab-ipadic`
- `taku910.github.io/mecab`
- `taku910.github.io/mecab-ipadic`
- `linux/x86-64taku910.github.io/mecabtaku910.github.io/mecab-ipadic`
- `taku910.github.io/mecab`
- `taku910.github.io/mecab-ipadic`
- `msgpack.org`
- `openssl.org`
- `pcre.org/v2`
- `github.com/besser82/libxcrypt`
- `linuxgnome.org/glib`
- `gnome.org/glib`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.groonga

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/groonga.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
