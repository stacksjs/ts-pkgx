# daemontools

> Collection of tools for managing UNIX services

## Package Information

- **Domain**: `cr.yp.to/daemontools`
- **Name**: `daemontools`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/cr.yp.to/daemontools/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install +cr.yp.to/daemontools -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `envdir`
- `envuidgid`
- `fghack`
- `multilog`
- `pgrphack`
- `readproctitle`
- `setlock`
- `setuidgid`
- `softlimit`
- `supervise`
- `svc`
- `svok`
- `svscan`
- `svscanboot`
- `svstat`
- `tai64n`
- `tai64nlocal`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `0.76.0`

</details>

**Latest Version**: `0.76.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +cr.yp.to/daemontools@0.76.0 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.cr_yp_to_daemontools

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/cr.yp.to/daemontools/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
