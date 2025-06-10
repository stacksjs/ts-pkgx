<p align="center"><img src=".github/art/cover.jpg" alt="Social Card of this repo"></p>

[![npm version][npm-version-src]][npm-version-href]
[![GitHub Actions][github-actions-src]][github-actions-href]
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
<!-- [![npm downloads][npm-downloads-src]][npm-downloads-href] -->
<!-- [![Codecov][codecov-src]][codecov-href] -->

# ts-pkgx

This library includes tools to fetch and save package information from pkgx.dev.

## Installation

```bash
npm install ts-pkgx
bun install ts-pkgx
```

## Usage

### CLI Tool

The library includes a CLI tool to fetch packages from pkgx.dev:

```bash
# Fetch a single package
bun run pkgx:fetch node

# With custom output directory
bun run pkgx:fetch node --output ./data/packages

# Fetch all packages
bun run pkgx:fetch-all

# Set a custom timeout (milliseconds)
bun run pkgx:fetch-all --timeout 180000 --output ./data/pkgx-packages
```

### Programmatic Usage

You can also use the library programmatically in your code:

```typescript
import { fetchAndSaveAllPackages, fetchPkgxPackage } from 'ts-pkgx'

// Fetch a single package
const nodePackage = await fetchPkgxPackage('node')
console.log(nodePackage)

// Fetch and save all packages
const savedPackages = await fetchAndSaveAllPackages({
  timeout: 120000
})
console.log(`Saved ${savedPackages.length} packages`)
```

### TypeScript Types

ts-pkgx provides comprehensive TypeScript types for all packages in the pkgx.dev ecosystem, enabling you to work in a fully typed environment:

```typescript
import type { Pantry } from 'ts-pkgx'
import { aliases, pantry } from 'ts-pkgx'

// Access packages with full type safety
const nodePackage = pantry.nodejs_org
const pythonPackage = pantry.python_org
const goPackage = pantry.go_dev

// All package properties are fully typed
console.log(nodePackage.name) // string
console.log(nodePackage.programs) // readonly string[]
console.log(nodePackage.versions) // readonly string[]

// Type-safe dynamic access
function getPackageByDomain(domain: keyof Pantry) {
  return pantry[domain]
}
const nodeDomain = aliases.node // 'nodejs.org'
const pythonDomain = aliases.python // 'python.org'
```

The type system includes:
- **Pantry interface**: Maps all available packages with their domains as keys
- **Package objects**: Complete metadata for each package (name, description, programs, versions, etc.)
- **Aliases**: Type-safe mapping of friendly names to package domains
- **Auto-completion**: Full IntelliSense support in your IDE

### Running Tests

```bash
bun test
```

## Testing

```bash
bun test
```

## Changelog

Please see our [releases](https://github.com/stackjs/launchpad/releases) page for information on changes.

## Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## Community

For help or discussion:

- [Discussions on GitHub](https://github.com/stacksjs/launchpad/discussions)
- [Join the Stacks Discord Server](https://discord.gg/stacksjs)

## Postcardware

"Software that is free, but hopes for a postcard." We love receiving postcards from around the world showing where Stacks is being used! We showcase them on our website too.

Our address: Stacks.js, 12665 Village Ln #2306, Playa Vista, CA 90094, United States 🌎

## Credits

- [Max Howell](https://github.com/mxcl) - for creating [pkgx](https://github.com/pkgxdev/pkgx) and [Homebrew](https://github.com/Homebrew/brew)
- [pkgm](https://github.com/pkgxdev/pkgm) & [dev](https://github.com/pkgxdev/dev) - thanks for the inspiration
- [Chris Breuer](https://github.com/chrisbbreuer)
- [All Contributors](https://github.com/stacksjs/launchpad/graphs/contributors)

## Sponsors

We would like to extend our thanks to the following sponsors for funding Stacks development. If you are interested in becoming a sponsor, please reach out to us.

- [JetBrains](https://www.jetbrains.com/)
- [The Solana Foundation](https://solana.com/)

## License

The MIT License (MIT). Please see [LICENSE](LICENSE.md) for more information.

Made with 💙

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/ts-pkgx?style=flat-square
[npm-version-href]: https://npmjs.com/package/ts-pkgx
[github-actions-src]: https://img.shields.io/github/actions/workflow/status/stacksjs/ts-starter/ci.yml?style=flat-square&branch=main
[github-actions-href]: https://github.com/stacksjs/ts-starter/actions?query=workflow%3Aci

<!-- [codecov-src]: https://img.shields.io/codecov/c/gh/stacksjs/ts-starter/main?style=flat-square
[codecov-href]: https://codecov.io/gh/stacksjs/ts-starter -->
