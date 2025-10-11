/**
 * **fishshell.com** - pkgx package
 *
 * @domain `fishshell.com`
 * @version `4.1.2` (17 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install fishshell.com`
 * @dependencies `gnu.org/gettext`, `invisible-island.net/ncurses>=6.0`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.fishshellcom
 * console.log(pkg.name)        // "fishshell.com"
 * console.log(pkg.versions[0]) // "4.1.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fishshell-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fishshellcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'fishshell.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fishshell.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/fishshell.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install fishshell.com' as const,
  programs: [] as const,
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
    '4.1.2',
    '4.1.1',
    '4.1.0',
    '4.0.9',
    '4.0.8',
    '4.0.6',
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
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +fishshell.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install fishshell.com' as const,
}

export type FishshellcomPackage = typeof fishshellcomPackage
