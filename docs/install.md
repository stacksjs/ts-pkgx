# Installation

Installing ts-pkgx is easy. Simply pull it in via your package manager of choice.

## Package Managers

Choose your package manager of choice:

::: code-group

```sh [npm]
npm install ts-pkgx
# npm i ts-pkgx

# Or, as a development dependency
npm install --save-dev ts-pkgx
```

```sh [bun]
bun install ts-pkgx
# bun add ts-pkgx

# Or, as a development dependency
bun install --dev ts-pkgx
```

```sh [pnpm]
pnpm add ts-pkgx
# pnpm i ts-pkgx

# Or, as a development dependency
pnpm add --save-dev ts-pkgx
```

```sh [yarn]
yarn add ts-pkgx
# yarn i ts-pkgx

# Or, as a development dependency
yarn add --dev ts-pkgx
```

:::

## Global Installation

If you want to use the CLI globally, you can install it globally:

::: code-group

```sh [npm]
npm install -g ts-pkgx
```

```sh [bun]
bun install -g ts-pkgx
```

```sh [pnpm]
pnpm add -g ts-pkgx
```

```sh [yarn]
yarn global add ts-pkgx
```

:::

## Verification

To verify the installation, you can run:

```sh
bun run pkgx:fetch node
```

This should fetch information about the Node.js package from pkgx.dev.

## Requirements

ts-pkgx requires:

- Node.js >= 16 (or Bun)
- TypeScript >= 5.0 (for type definitions)
- Playwright (for web scraping functionality)

## Next Steps

Once you have ts-pkgx installed, check out the [Usage](./usage.md) guide to learn how to use it.
