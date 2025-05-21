<p align="center"><img src="https://github.com/stacksjs/ts-pkgx/blob/main/.github/art/cover.jpg?raw=true" alt="Social Card of ts-pkgx"></p>

# Introduction to ts-pkgx

> A TypeScript library for fetching and working with pkgx.dev package information

ts-pkgx is a specialized library that provides tools for fetching, storing, and accessing package data from [pkgx.dev](https://pkgx.dev). It offers both programmatic APIs and CLI tools for developers who want to work with pkgx packages in their TypeScript applications.

## What is pkgx?

[pkgx.dev](https://pkgx.dev) is a package manager that simplifies the installation of development tools and dependencies. It provides a central repository of packages that can be easily installed and managed.

## Core Features

- **Package Fetching**: Retrieve detailed package information from pkgx.dev
- **TypeScript Integration**: Fully typed interfaces for all package data
- **Multiple Package Fetching**: Fetch multiple specific packages at once with the new `--pkg` option
- **Optimized Batch Processing**: Efficiently process hundreds of packages with intelligent batching
- **CLI Tools**: Command line utilities for fetching and managing packages
- **Alias Support**: Handle package aliases (e.g., "node" for "nodejs.org")
- **Nested Paths**: Support for packages with nested paths (e.g., "agwa.name/git-crypt")
- **Automatic Parsing**: Convert package data into TypeScript files for easy use
- **Custom Output Formats**: Generate documentation in various formats (Markdown, HTML, CSV, etc.)
- **Auto-Generated Package Catalog**: Browse comprehensive information for ~1,000 packages
- **Advanced Error Handling**: Robust error handling and recovery mechanisms

## Why ts-pkgx?

ts-pkgx simplifies the process of working with pkgx.dev package data in TypeScript projects. Instead of manually scraping the pkgx.dev website or trying to parse package information yourself, ts-pkgx provides a clean, type-safe interface for accessing this data.

## Get Started

To start using ts-pkgx in your project, check out the [Installation](./install.md) guide.

```bash
# Install with bun
bun install ts-pkgx

# Quick example: fetch package info
bun run pkgx:fetch node
```

## Project Structure

The project follows a clean and maintainable structure:

- `src/`: Source code for the library
  - `packages/`: Package definitions and utilities
  - `tools/`: Utility scripts for package handling
  - `types.ts`: TypeScript interfaces
- `bin/`: CLI tools
- `test/`: Comprehensive test suite

## Changelog

Please see our [releases](https://github.com/stacksjs/ts-pkgx/releases) page for more information on what has changed recently.

## Contributing

Please review the [Contributing Guide](https://github.com/stacksjs/contributing) for details.

## Community

For help, discussion about best practices, or any other conversation that would benefit from being searchable:

[Discussions on GitHub](https://github.com/stacksjs/stacks/discussions)

For casual chit-chat with others using this package:

[Join the Stacks Discord Server](https://discord.gg/stacksjs)

## Postcardware

Two things are true: Stacks OSS will always stay open-source, and we do love to receive postcards from wherever Stacks is used! 🌍 _We also publish them on our website. And thank you, Spatie_

Our address: Stacks.js, 12665 Village Ln #2306, Playa Vista, CA 90094

## Sponsors

We would like to extend our thanks to the following sponsors for funding Stacks development. If you are interested in becoming a sponsor, please reach out to us.

- [JetBrains](https://www.jetbrains.com/)
- [The Solana Foundation](https://solana.com/)

## Credits

- [Chris Breuer](https://github.com/chrisbbreuer)
- [All Contributors](https://github.com/stacksjs/ts-pkgx/graphs/contributors)

## License

The MIT License (MIT). Please see [LICENSE](https://github.com/stacksjs/ts-pkgx/tree/main/LICENSE.md) for more information.

Made with 💙 by the Stacks community.

<!-- Badges -->

<!-- [codecov-src]: https://img.shields.io/codecov/c/gh/stacksjs/rpx/main?style=flat-square
[codecov-href]: https://codecov.io/gh/stacksjs/rpx -->
