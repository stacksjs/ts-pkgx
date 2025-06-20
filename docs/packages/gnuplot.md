# gnuplot

> Command-driven, interactive function plotting

## Package Information

- **Domain**: `gnuplot`
- **Name**: `gnuplot`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnuplot.info/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) gnuplot
```

## Programs

This package provides the following executable programs:

- `gnuplot`

## Aliases

This package can also be accessed using these aliases:

- `gnuplot`

## Available Versions

<details>
<summary>Show all 8 versions</summary>

- `6.0.2`, `6.0.1`, `6.0.0`, `5.4.10`, `5.4.9`
- `5.4.8`, `5.4.7`, `5.4.6`

</details>

**Latest Version**: `6.0.2`

### Install Specific Version

```bash
# Install specific version
pkgx gnuplot@6.0.2
```

## Dependencies

This package depends on:

- `libgd.github.io`
- `lua.org`
- `gnome.org/pango`
- `gnu.org/readline`
- `linuxgithub.com/AOMediaCodec/libavif^0.11`
- `github.com/AOMediaCodec/libavif^0.11`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.gnuplot

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnuplot.info/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
