/**
 * **ncurses** - pkgx package
 *
 * @domain `invisible-island.net/ncurses`
 * @version `6.5.0` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install invisible-island.net/ncurses`
 * @buildDependencies `github.com/tmux/tmux@^3` - required only when building from source
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.invisibleislandnetncurses
 * console.log(pkg.name)        // "ncurses"
 * console.log(pkg.versions[0]) // "6.5.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/invisible-island-net/ncurses.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const invisibleislandnetncursesPackage = {
  /**
   * The display name of this package.
   */
  name: 'ncurses' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'invisible-island.net/ncurses' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/invisible-island.net/ncurses/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install invisible-island.net/ncurses' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +invisible-island.net/ncurses -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install invisible-island.net/ncurses' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Build dependencies for this package.
   * These are only required when building the package from source.
   */
  buildDependencies: [
    'github.com/tmux/tmux@^3',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '6.5.0',
    '6.4.0',
    '6.3.0',
  ] as const,
  aliases: [] as const,
}

export type InvisibleislandnetncursesPackage = typeof invisibleislandnetncursesPackage
