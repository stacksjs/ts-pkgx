/**
 * **midnight-commander.org** - Package from pantry: midnight-commander.org
 *
 * @domain `midnight-commander.org`
 *
 * @install `launchpad install midnight-commander.org`
 * @dependencies `invisible-island.net/ncurses`, `gnome.org/glib>=2.30`, `gnu.org/gettext>=0.18.2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.midnightcommanderorg
 * console.log(pkg.name)        // "midnight-commander.org"
 * console.log(pkg.description) // "Package from pantry: midnight-commander.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/midnight-commander-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const midnightcommanderorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'midnight-commander.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'midnight-commander.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: midnight-commander.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install midnight-commander.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +midnight-commander.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install midnight-commander.org' as const,
  programs: [] as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/midnight-commander.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MidnightcommanderorgPackage = typeof midnightcommanderorgPackage
