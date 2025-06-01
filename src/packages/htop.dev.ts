/**
 * **htop** - Improved top (interactive process viewer)
 *
 * @domain `htop.dev`
 * @programs `htop`
 * @version `3.4.1` (5 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/htop-dev.md
 *
 * @install `sh <(curl https://pkgx.sh) htop`
 * @aliases `htop`
 * @dependencies `invisible-island.net/ncurses@6`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.htop
 * // Or access via domain
 * const samePkg = pantry.htopdev
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "htop"
 * console.log(pkg.description) // "Improved top (interactive process viewer)"
 * console.log(pkg.programs)    // ["htop"]
 * console.log(pkg.versions[0]) // "3.4.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/htop-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const htopPackage = {
  /**
   * The display name of this package.
   */
  name: 'htop' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'htop.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Improved top (interactive process viewer)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/htop.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) htop' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'htop',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'invisible-island.net/ncurses@6',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.4.1',
    '3.4.0',
    '3.3.0',
    '3.2.2',
    '3.2.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'htop',
  ] as const,
  fullPath: 'htop.dev' as const,
}

export type HtopPackage = typeof htopPackage
