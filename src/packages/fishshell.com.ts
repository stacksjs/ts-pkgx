/**
 * **fish** - User-friendly command-line shell for UNIX-like operating systems
 *
 * @domain `fishshell.com`
 * @programs `fish`, `fish_indent`, `fish_key_reader`
 * @version `4.0.2` (11 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/fishshell-com.md
 *
 * @install `sh <(curl https://pkgx.sh) +fishshell.com -- $SHELL -i`
 * @aliases `fish`
 * @dependencies `gnu.org/gettext`, `invisible-island.net/ncurses>=6.0`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.fish
 * // Or access via domain
 * const samePkg = pantry.fishshellcom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "fish"
 * console.log(pkg.description) // "User-friendly command-line shell for UNIX-like ..."
 * console.log(pkg.programs)    // ["fish", "fish_indent", ...]
 * console.log(pkg.versions[0]) // "4.0.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fishshell-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fishPackage = {
  /**
   * The display name of this package.
   */
  name: 'fish' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fishshell.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'User-friendly command-line shell for UNIX-like operating systems' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/fishshell.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +fishshell.com -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'fish',
    'fish_indent',
    'fish_key_reader',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gettext',
    'invisible-island.net/ncurses>=6.0',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.0.2',
    '4.0.1',
    '4.0.0',
    '3.7.1',
    '3.7.0',
    '3.6.4',
    '3.6.3',
    '3.6.2',
    '3.6.1',
    '3.6.0',
    '3.5.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'fish',
  ] as const,
  fullPath: 'fishshell.com' as const,
}

export type FishPackage = typeof fishPackage
