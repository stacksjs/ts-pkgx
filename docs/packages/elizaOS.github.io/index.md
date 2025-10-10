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
<summary>Show all 69 versions</summary>

- `1.6.1`, `1.5.15`, `1.5.14`, `1.5.13`, `1.5.12`
- `1.5.11`, `1.5.10`, `1.5.9`, `1.5.8`, `1.5.7`
- `1.5.6`, `1.5.5`, `1.5.4`, `1.5.2`, `1.5.1`
- `1.5.0`, `1.4.5`, `1.4.4`, `1.4.3`, `1.4.2`
- `1.4.1`, `1.3.6`, `1.3.4`, `1.3.3`, `1.3.2`
- `1.3.1`, `1.3.0`, `1.2.12`, `1.2.10`, `1.2.9`
- `1.2.8`, `1.2.7`, `1.2.6`, `1.2.5`, `1.2.4`
- `1.2.3`, `1.2.2`, `1.2.1`, `1.2.0`, `1.1.8`
- `1.1.6`, `1.1.5`, `1.1.4`, `1.1.3`, `1.1.2`
- `1.1.1`, `1.1.0`, `1.0.20`, `1.0.19`, `1.0.18`
- `1.0.17`, `1.0.16`, `1.0.15`, `1.0.14`, `1.0.13`
- `1.0.12`, `1.0.11`, `1.0.10`, `1.0.9`, `1.0.8`
- `1.0.7`, `1.0.6`, `1.0.5`, `0.25.19`, `0.25.9`
- `0.25.8`, `0.1.9`, `0.1.8.1`, `0.1.7`

</details>

**Latest Version**: `1.6.1`

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

- [`git-scm.org`](../git-scm.org/index.md) - Git Source Code Mirror - This is a publish-only repository but pull requests can be turned into patches to the mailing list via GitGitGadget (https://gitgitgadget.github.io/). Please follow Documentation/SubmittingPatches procedure for any of your improvements.
- [`ffmpeg.org`](../ffmpeg.org/index.md)

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
