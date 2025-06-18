/**
 * **jemalloc.net** - pkgx package
 *
 * @domain `jemalloc.net`
 * @version `5.3.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +jemalloc.net -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jemallocnet
 * console.log(pkg.name)        // "jemalloc.net"
 * console.log(pkg.versions[0]) // "5.3.0" (latest)
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
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/jemalloc.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +jemalloc.net -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.3.0',
  ] as const,
  aliases: [] as const,
  fullPath: 'jemalloc.net' as const,
}

export type JemallocnetPackage = typeof jemallocnetPackage
