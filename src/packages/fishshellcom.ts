/**
 * **fishshell.com** - Package from pantry: fishshell.com
 *
 * @domain `fishshell.com`
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
 * console.log(pkg.description) // "Package from pantry: fishshell.com"
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
  description: 'Package from pantry: fishshell.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install fishshell.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +fishshell.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install fishshell.com' as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/fishshell.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FishshellcomPackage = typeof fishshellcomPackage
