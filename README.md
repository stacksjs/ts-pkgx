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

# Update all packages with latest information
bun src/tools/updatePackages.ts

# Or use the convenience script
./scripts/update-packages.sh
```

### Package Updates

This project includes an automated package update system:

1. The `updatePackages.ts` script fetches the latest package information from pkgx.dev
2. Updates are processed in batches to prevent memory issues
3. The script automatically regenerates the index.ts file after updates
4. A GitHub Action runs hourly to keep all packages up-to-date

You can manually trigger the update workflow through GitHub Actions or run the script locally:

```bash
# Run the update script directly
bun src/tools/updatePackages.ts

# Or use the convenience script
./scripts/update-packages.sh
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

### Running Tests

```bash
bun test
```

## Testing

```bash
bun test
```

## Changelog

Please see our [releases](https://github.com/stackjs/ts-pkgx/releases) page for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## Community

For help, discussion about best practices, or any other conversation that would benefit from being searchable:

[Discussions on GitHub](https://github.com/stacksjs/ts-starter/discussions)

For casual chit-chat with others using this package:

[Join the Stacks Discord Server](https://discord.gg/stacksjs)

## Postcardware

"Software that is free, but hopes for a postcard." We love receiving postcards from around the world showing where Stacks is being used! We showcase them on our website too.

Our address: Stacks.js, 12665 Village Ln #2306, Playa Vista, CA 90094, United States 🌎

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
