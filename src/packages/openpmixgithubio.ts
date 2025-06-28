/**
 * **openpmix.github.io** - Package from pantry: openpmix.github.io
 *
 * @domain `openpmix.github.io`
 *
 * @install `launchpad install openpmix.github.io`
 * @dependencies `open-mpi.org/hwloc^2.10`, `libevent.org^2.1`, `zlib.net^1.3`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openpmixgithubio
 * console.log(pkg.name)        // "openpmix.github.io"
 * console.log(pkg.description) // "Package from pantry: openpmix.github.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openpmix-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openpmixgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'openpmix.github.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openpmix.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: openpmix.github.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install openpmix.github.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +openpmix.github.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install openpmix.github.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'open-mpi.org/hwloc^2.10',
    'libevent.org^2.1',
    'zlib.net^1.3',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openpmix.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OpenpmixgithubioPackage = typeof openpmixgithubioPackage
