# ntp.org

>

## Package Information

- **Domain**: `ntporg`
- **Name**: `ntp.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/ntp.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +ntp.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `ntpq`
- `sntp`
- `ntp-keygen`
- `ntp-wait`
- `ntpd`
- `ntpdate`
- `ntpdc`
- `ntptime`
- `ntptrace`
- `update-leap`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `4.2.8.17`

</details>

**Latest Version**: `4.2.8.17`

### Install Specific Version

```bash
# Install specific version
pkgx ntp.org@4.2.8.17
```

## Dependencies

This package depends on:

- `openssl.org^3`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.ntporg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/ntp.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
