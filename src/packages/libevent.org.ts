/**
 * **libevent.org** - Event notification library
 *
 * @domain `libevent.org`
 * @version `2.1.12` (1 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/libevent-org.md
 * @install `sh <(curl https://pkgx.sh) +libevent.org -- $SHELL -i`
 * @dependencies `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libeventorg
 * console.log(pkg.name)        // "libevent.org"
 * console.log(pkg.description) // "Event notification library"
 * console.log(pkg.versions[0]) // "2.1.12" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libevent-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libeventorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'libevent.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libevent.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Event notification library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libevent.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +libevent.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.1.12',
  ] as const,
  fullPath: 'libevent.org' as const,
  aliases: [] as const,
}

export type LibeventorgPackage = typeof libeventorgPackage
