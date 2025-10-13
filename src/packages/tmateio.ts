/**
 * **tmate.io** - Package from pantry: tmate.io
 *
 * @domain `tmate.io`
 *
 * @install `launchpad install tmate.io`
 * @dependencies `libevent.org^2.0`, `invisible-island.net/ncurses@6`, `msgpack.org@6`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tmateio
 * console.log(pkg.name)        // "tmate.io"
 * console.log(pkg.description) // "Package from pantry: tmate.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tmate-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tmateioPackage = {
  /**
   * The display name of this package.
   */
  name: 'tmate.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tmate.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: tmate.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install tmate.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +tmate.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install tmate.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libevent.org^2.0',
    'invisible-island.net/ncurses@6',
    'msgpack.org@6',
    'libssh.org@0',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tmate.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type TmateioPackage = typeof tmateioPackage
