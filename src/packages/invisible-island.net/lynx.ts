/**
 * **lynx** - Package from pantry: invisible-island.net/lynx
 *
 * @domain `invisible-island.net/lynx`
 *
 * @install `launchpad install invisible-island.net/lynx`
 * @dependencies `openssl.org^3`, `invisible-island.net/ncurses^6`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.invisibleislandnetlynx
 * console.log(pkg.name)        // "lynx"
 * console.log(pkg.description) // "Package from pantry: invisible-island.net/lynx"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/invisible-island-net/lynx.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const invisibleislandnetlynxPackage = {
  /**
   * The display name of this package.
   */
  name: 'lynx' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'invisible-island.net/lynx' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: invisible-island.net/lynx' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install invisible-island.net/lynx' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +invisible-island.net/lynx -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install invisible-island.net/lynx' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^3',
    'invisible-island.net/ncurses^6',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/invisible-island.net/lynx/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type InvisibleislandnetlynxPackage = typeof invisibleislandnetlynxPackage
