/**
 * **readline** - pkgx package
 *
 * @domain `gnu.org/readline`
 * @version `8.2.13` (3 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/readline.md
 *
 * @install `sh <(curl https://pkgx.sh) +gnu.org/readline -- $SHELL -i`
 * @aliases `readline`
 * @dependencies `invisible-island.net/ncurses^6`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.readline
 * // Or access via domain
 * const samePkg = pantry.gnuorgreadline
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gnu.org/readline"
 * console.log(pkg.versions[0]) // "8.2.13" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/readline.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const readlinePackage = {
  /**
   * The display name of this package.
   */
  name: 'gnu.org/readline' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/readline' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from gnu.org/readline' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/readline/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gnu.org/readline -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'invisible-island.net/ncurses^6',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '8.2.13',
    '8.2.0',
    '8.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'readline',
  ] as const,
  fullPath: 'gnu.org/readline' as const,
}

export type ReadlinePackage = typeof readlinePackage
