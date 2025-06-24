/**
 * **readline** - Package from pantry: gnu.org/readline
 *
 * @domain `gnu.org/readline`
 *
 * @install `launchpad install gnu.org/readline`
 * @dependencies `invisible-island.net/ncurses^6`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorgreadline
 * console.log(pkg.name)        // "readline"
 * console.log(pkg.description) // "Package from pantry: gnu.org/readline"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/readline.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorgreadlinePackage = {
  /**
   * The display name of this package.
   */
  name: 'readline' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/readline' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/readline' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/readline' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/readline -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/readline' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'invisible-island.net/ncurses^6',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/readline/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorgreadlinePackage = typeof gnuorgreadlinePackage
