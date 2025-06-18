# caddyserver.com

> Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS

## Package Information

- **Domain**: `caddyserver.com`
- **Name**: `caddyserver.com`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/caddyserver.com/package.yml)

## Installation

```bash
# Install with pkgx
launchpad install caddy
```

## Programs

This package provides the following executable programs:

- `caddy`

## Aliases

This package can also be accessed using these aliases:

- `caddy`

## Available Versions

<details>
<summary>Show all 10 versions</summary>

- `2.10.0`, `2.9.1`, `2.9.0`, `2.8.4`, `2.8.2`
- `2.8.1`, `2.8.0`, `2.7.6`, `2.7.5`, `2.7.4`

</details>

**Latest Version**: `2.10.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +caddyserver.com@2.10.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `go.dev`
- `curl.se`
- `curl.se`
- `pkgx.sh@1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.caddyservercom

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/caddyserver.com/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
