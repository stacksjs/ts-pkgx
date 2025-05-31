/**
 * **midnight commander** - Terminal-based visual file manager
 *
 * @domain `midnight-commander.org`
 * @programs `mc`, `mcdiff`, `mcedit`, `mcview`
 * @version `4.8.33` (6 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/midnight-commander-org.md
 * @install `sh <(curl https://pkgx.sh) +midnight-commander.org -- $SHELL -i`
 * @aliases `midnight commander`
 * @dependencies `invisible-island.net/ncurses`, `gnome.org/glib>=2.30`, `gnu.org/gettext>=0.18.2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.midnightcommander
 * // Or access via domain
 * const samePkg = pantry.midnight-commanderorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "Midnight Commander"
 * console.log(pkg.description) // "Terminal-based visual file manager"
 * console.log(pkg.programs)    // ["mc", "mcdiff", ...]
 * console.log(pkg.versions[0]) // "4.8.33" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/midnight-commander-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const midnightcommanderPackage = {
  /**
   * The display name of this package.
   */
  name: 'Midnight Commander' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'midnight-commander.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Terminal-based visual file manager' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/midnight-commander.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +midnight-commander.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mc',
    'mcdiff',
    'mcedit',
    'mcview',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'invisible-island.net/ncurses',
    'gnome.org/glib>=2.30',
    'gnu.org/gettext>=0.18.2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.8.33',
    '4.8.32',
    '4.8.31',
    '4.8.30',
    '4.8.29',
    '4.8.28',
  ] as const,
  fullPath: 'midnight-commander.org' as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'midnight commander',
  ] as const,
}

export type MidnightcommanderPackage = typeof midnightcommanderPackage
