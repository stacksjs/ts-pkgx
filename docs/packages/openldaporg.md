# ldap

> Open source suite of directory software

## Package Information

- **Domain**: `openldap.org`
- **Name**: `ldap`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/openldap.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install ldap
```

## Programs

This package provides the following executable programs:

- `ldapcompare`
- `ldapdelete`
- `ldapexop`
- `ldapmodify`
- `ldapmodrdn`
- `ldappasswd`
- `ldapsearch`
- `ldapurl`
- `ldapvc`
- `ldapwhoami`

## Available Versions

<details>
<summary>Show all 13 versions</summary>

- `2.6.10`, `2.6.9`, `2.6.8`, `2.6.7`, `2.6.6`
- `2.6.5`, `2.6.4`, `2.5.20`, `2.5.19`, `2.5.18`
- `2.5.17`, `2.5.16`, `2.5.15`

</details>

**Latest Version**: `2.6.10`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +openldap.org@2.6.10 -- $SHELL -i
```

## Dependencies

This package depends on:

- `openssl.org^1.1`
- `linux:github.com/util-linux/util-linux`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.openldaporg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/openldap.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
