/**
 * **jemalloc.net** - Package from pantry: jemalloc.net
 *
 * @domain `jemalloc.net`
 *
 * @install `launchpad install jemalloc.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jemallocnet
 * console.log(pkg.name)        // "jemalloc.net"
 * console.log(pkg.description) // "Package from pantry: jemalloc.net"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jemalloc-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jemallocnetPackage = {
  /**
   * The display name of this package.
   */
  name: 'jemalloc.net' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jemalloc.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: jemalloc.net' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install jemalloc.net' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +jemalloc.net -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install jemalloc.net' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/jemalloc.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type JemallocnetPackage = typeof jemallocnetPackage
