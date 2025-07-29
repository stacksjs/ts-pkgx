/**
 * **ncurses** - Package from pantry: invisible-island.net/ncurses
 *
 * @domain `invisible-island.net/ncurses`
 *
 * @install `launchpad install invisible-island.net/ncurses`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.invisibleislandnetncurses
 * console.log(pkg.name)        // "ncurses"
 * console.log(pkg.description) // "Package from pantry: invisible-island.net/ncurses"
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
  description: 'Package from pantry: invisible-island.net/ncurses' as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/invisible-island.net/ncurses/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type InvisibleislandnetncursesPackage = typeof invisibleislandnetncursesPackage
