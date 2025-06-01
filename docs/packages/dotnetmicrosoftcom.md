# dotnet

> Home of .NET\

## Package Information

- **Domain**: `dotnet.microsoft.com`
- **Name**: `dotnet`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/dotnet.microsoft.com/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) dotnet
```

## Programs

This package provides the following executable programs:

- `dotnet`

## Aliases

This package can also be accessed using these aliases:

- `dotnet`

## Available Versions

<details>
<summary>Show all 32 versions</summary>

- `9.0.202`, `9.0.102`, `9.0.100`, `8.0.410`, `8.0.405`
- `8.0.403`, `8.0.402`, `8.0.401`, `8.0.313`, `8.0.308`
- `8.0.303`, `8.0.302`, `8.0.301`, `8.0.206`, `8.0.204`
- `8.0.203`, `8.0.112`, `8.0.107`, `8.0.106`, `8.0.104`
- `8.0.101`, `8.0.100`, `7.0.404`, `7.0.306`, `7.0.120`
- `6.0.424`, `6.0.423`, `6.0.422`, `6.0.417`, `6.0.132`
- `6.0.131`, `6.0.130`

</details>

**Latest Version**: `9.0.202`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +dotnet.microsoft.com@9.0.202 -- $SHELL -i
```

## Dependencies

This package depends on:

- `linuxunicode.org^71openssl.org`
- `unicode.org^71`
- `openssl.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.dotnetmicrosoftcom

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/dotnet.microsoft.com/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
