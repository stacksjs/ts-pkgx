# elizaOS.github.io

> Autonomous agents for everyone

## Package Information

- **Domain**: `elizaOSgithub.io`
- **Name**: `elizaOS.github.io`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/elizaOS.github.io/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install elizaOSgithub.io
```

## Programs

This package provides the following executable programs:

- `eliza`

## Aliases

This package can also be accessed using these aliases:

- `eliza`
- `elizaOS`

## Available Versions

<details>
<summary>Show all 13 versions</summary>

- `1.0.11`, `1.0.10`, `1.0.9`, `1.0.8`, `1.0.7`
- `1.0.6`, `1.0.5`, `0.25.19`, `0.25.9`, `0.25.8`
- `0.1.9`, `0.1.8.1`, `0.1.7`

</details>

**Latest Version**: `1.0.11`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +elizaOSgithub.io@1.0.11 -- $SHELL -i
```

## Dependencies

This package depends on:

- `python.org>=2.7`
- `nodejs.org~23.3`
- `pnpm.io`
- `bun.sh^1.2 # since 1.0.5`

## Related Packages

These packages work well with elizaOS.github.io:

- [`git-scm.org`](gitscmorg.md) - Git Source Code Mirror - This is a publish-only repository but pull requests can be turned into patches to the mailing list via GitGitGadget (https://gitgitgadget.github.io/). Please follow Documentation/SubmittingPatches procedure for any of your improvements.
- [`ffmpeg.org`](ffmpegorg.md) - Play, record, convert, and stream audio and video

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.elizaosgithubio

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/elizaOS.github.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
