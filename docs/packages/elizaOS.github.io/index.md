# elizaOS

> Autonomous agents for everyone

## Package Information

- **Domain**: `elizaOS.github.io`
- **Name**: `elizaOS`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/elizaOS.github.io/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install eliza
```

## Programs

This package provides the following executable programs:

- `eliza`

## Aliases

This package can also be accessed using these aliases:

- `eliza`

## Available Versions

<details>
<summary>Show all 14 versions</summary>

- `1.0.12`, `1.0.11`, `1.0.10`, `1.0.9`, `1.0.8`
- `1.0.7`, `1.0.6`, `1.0.5`, `0.25.19`, `0.25.9`
- `0.25.8`, `0.1.9`, `0.1.8.1`, `0.1.7`

</details>

**Latest Version**: `1.0.12`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) eliza -- $SHELL -i
```

## Dependencies

This package depends on:

- `python.org>=2.7`
- `nodejs.org~23.3`
- `pnpm.io`
- `bun.sh^1.2 # since 1.0.5`

## Related Packages

These packages work well with elizaOS:

- [`git-scm.org`](../git-scm.org/index.md) - Package not available
- [`ffmpeg.org`](../ffmpeg.org/index.md) - Play, record, convert, and stream audio and video

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.eliza

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/elizaOS.github.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
