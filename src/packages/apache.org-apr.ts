/**
 * **apr** - Mirror of Apache Portable Runtime
 *
 * @domain `apache.org/apr`
 * @version `1.7.6` (5 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/apache-org/apr.md
 *
 * @install `sh <(curl https://pkgx.sh) +apache.org/apr -- $SHELL -i`
 * @aliases `apr`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.apr
 * // Or access via domain
 * const samePkg = pantry.apacheorgapr
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "apache.org/apr"
 * console.log(pkg.description) // "Mirror of Apache Portable Runtime"
 * console.log(pkg.versions[0]) // "1.7.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/apache-org/apr.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const aprPackage = {
  /**
   * The display name of this package.
   */
  name: 'apache.org/apr' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'apache.org/apr' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Mirror of Apache Portable Runtime' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/apache.org/apr/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +apache.org/apr -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.7.6',
    '1.7.5',
    '1.7.4',
    '1.7.3',
    '1.7.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'apr',
  ] as const,
  fullPath: 'apache.org/apr' as const,
}

export type AprPackage = typeof aprPackage
