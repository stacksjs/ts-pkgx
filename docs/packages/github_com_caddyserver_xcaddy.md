# xcaddy

> Build Caddy with plugins

## Package Information

- **Domain**: `github.com/caddyserver/xcaddy`
- **Name**: `xcaddy`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/caddyserver/xcaddy/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install xcaddy
```

## Programs

This package provides the following executable programs:

- `xcaddy`

## Available Versions

<details>
<summary>Show all 5 versions</summary>

- `0.4.4`, `0.4.2`, `0.4.1`, `0.4.0`, `0.3.5`

</details>

**Latest Version**: `0.4.4`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +github.com/caddyserver/xcaddy@0.4.4 -- $SHELL -i
```

## Dependencies

This package depends on:

- `go.dev^1.21`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.github_com_caddyserver_xcaddy

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/caddyserver/xcaddy/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
