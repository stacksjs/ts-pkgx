# sentencepiece

> Unsupervised text tokenizer for Neural Network-based text generation.

## Package Information

- **Domain**: `google.com/sentencepiece`
- **Name**: `sentencepiece`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/google.com/sentencepiece/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install +google.com/sentencepiece -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `spm_decode`
- `spm_encode`
- `spm_export_vocab`
- `spm_normalize`
- `spm_train`

## Aliases

This package can also be accessed using these aliases:

- `spm`

## Available Versions

<details>
<summary>Show all 4 versions</summary>

- `0.2.0`, `0.1.99`, `0.1.98`, `0.1.97`

</details>

**Latest Version**: `0.2.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +google.com/sentencepiece@0.2.0 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.spm

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/google.com/sentencepiece/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
