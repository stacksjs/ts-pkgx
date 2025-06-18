/**
 * **hunspell.github.io** - Package from pantry: hunspell.github.io
 *
 * @domain `hunspell.github.io`
 *
 * @install `launchpad install hunspell.github.io`
 * @dependencies `gnu.org/readline`, `invisible-island.net/ncurses`, `gnu.org/gettext`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.hunspellgithubio
 * console.log(pkg.name)        // "hunspell.github.io"
 * console.log(pkg.description) // "Package from pantry: hunspell.github.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/hunspell-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hunspellgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'hunspell.github.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'hunspell.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: hunspell.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install hunspell.github.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/readline',
    'invisible-island.net/ncurses',
    'gnu.org/gettext',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/hunspell.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type HunspellgithubioPackage = typeof hunspellgithubioPackage
