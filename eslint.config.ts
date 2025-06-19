import type { ESLintConfig } from '@stacksjs/eslint-config'
import stacks from '@stacksjs/eslint-config'

const config: ESLintConfig = stacks({
  stylistic: {
    indent: 2,
    quotes: 'single',
  },

  typescript: true,
  jsonc: true,
  yaml: true,
  ignores: [
    'fixtures/**',
    'examples/**',
    'examples/**',
    'src/pantry/**',
    'docs/advanced.md',
    'docs/advanced/type-safety.md',
    'docs/api-reference.md',
    'src/packages/index.ts', // TODO: this could be removed, but there is a minor sort order a-z "issue"
    'src/packages/freedesktop.org/intltool.ts',
    'src/packages/github.com/linux-test-project/lcov.ts',
    'src/packages/gnu.org/stow.ts',
    'src/packages/po4aorg.ts',
  ],
})

export default config
