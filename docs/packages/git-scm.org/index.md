# git

> Git Source Code Mirror - This is a publish-only repository but pull requests can be turned into patches to the mailing list via GitGitGadget (https://gitgitgadget.github.io/). Please follow Documentation/SubmittingPatches procedure for any of your improvements.

## Package Information

- **Domain**: `git-scm.org`
- **Name**: `git`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/git-scm.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install git
```

## Programs

This package provides the following executable programs:

- `git`
- `git-cvsserver`
- `git-receive-pack`
- `git-shell`
- `git-upload-archive`
- `git-upload-pack`
- `scalar`
- `git-credential-osxkeychain`

## Available Versions

<details>
<summary>Show all 30 versions</summary>

- `2.50.1`, `2.50.0`, `2.49.1`, `2.49.0`, `2.48.2`
- `2.48.0`, `2.47.3`, `2.47.1`, `2.47.0`, `2.46.4`
- `2.46.2`, `2.46.1`, `2.46.0`, `2.45.4`, `2.45.2`
- `2.45.0`, `2.44.4`, `2.44.0`, `2.43.7`, `2.43.3`
- `2.43.2`, `2.43.1`, `2.43.0`, `2.42.1`, `2.42.0`
- `2.41.0`, `2.40.0`, `2.39.1`, `2.39.0`, `2.38.1`

</details>

**Latest Version**: `2.50.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +git-scm.org@2.50.1 -- $SHELL -i
```

## Dependencies

This package depends on:

- `zlib.net@1`
- `gnu.org/gettext^0.21`
- `curl.se>=5`
- `curl.se/ca-certs`
- `perl.org`
- `libexpat.github.io~2`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.git

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/git-scm.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
