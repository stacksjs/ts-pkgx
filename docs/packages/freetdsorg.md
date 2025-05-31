# freetds.org

> Libraries to talk to Microsoft SQL Server and Sybase databases

## Package Information

- **Domain**: `freetdsorg`
- **Name**: `freetds.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/freetds.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +freetds.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `bsqldb`
- `bsqlodbc`
- `datacopy`
- `defncopy`
- `fisql`
- `freebcp`
- `osql`
- `tdspool`
- `tsql`

## Available Versions

<details>
<summary>Show all 31 versions</summary>

- `1.5.2`, `1.5.1`, `1.4.27`, `1.4.26`, `1.4.24`
- `1.4.23`, `1.4.22`, `1.4.21`, `1.4.20`, `1.4.19`
- `1.4.17`, `1.4.16`, `1.4.15`, `1.4.14`, `1.4.13`
- `1.4.12`, `1.4.11`, `1.4.10`, `1.4.9`, `1.4.8`
- `1.4.7`, `1.4.6`, `1.4.5`, `1.4.4`, `1.4.3`
- `1.4.2`, `1.4.1`, `1.3.21`, `1.3.20`, `1.3.19`
- `1.3.18`

</details>

**Latest Version**: `1.5.2`

### Install Specific Version

```bash
# Install specific version
pkgx freetds.org@1.5.2
```

## Dependencies

This package depends on:

- `openssl.org^1.1`
- `unixodbc.org`
- `kerberos.org`
- `gnu.org/readline`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.freetdsorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/freetds.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
