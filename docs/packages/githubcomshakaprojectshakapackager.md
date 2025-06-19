# github.com/shaka-project/shaka-packager

> A media packaging and development framework for VOD and Live DASH and HLS applications, supporting Common Encryption for Widevine and other DRM Systems.

## Package Information

- **Domain**: `github.com/shaka-project-shaka-packager`
- **Name**: `github.com/shaka-project/shaka-packager`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/shaka-project/shaka-packager/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) +github.com/shaka-project/shaka-packager -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `packager`
- `mpd_generator`

## Aliases

This package can also be accessed using these aliases:

- `shaka-project/shaka-packager`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `3.4.2`, `3.4.1`, `3.4.0`

</details>

**Latest Version**: `3.4.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +github.com/shaka-project-shaka-packager@3.4.2 -- $SHELL -i
```

## Dependencies

This package depends on:

- `linuxgnu.org/gcc/libstdcxx`
- `gnu.org/gcc/libstdcxx`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.githubcomshakaprojectshakapackager

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/shaka-project/shaka-packager/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
