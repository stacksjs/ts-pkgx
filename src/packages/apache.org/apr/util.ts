/**
 * **apache.org/apr-util** - pkgx package
 *
 * @domain `apache.org/apr/util`
 *
 * @install `pkgx apache.org/apr-util`
 * @name `apr-util`
 * @aliases `apache.org/apr-util`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.apacheorgaprutil
 * // Or access via domain
 * const samePkg = pantry.apacheorgaprutil
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "apr-util"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/apache-org/apr/util.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const apacheorgaprutilPackage = {
  /**
   * The display name of this package.
   */
  name: 'apr-util' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'apache.org/apr/util' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx apache.org/apr-util' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'apache.org/apr-util',
  ] as const,
  fullPath: 'apache.org/apr-util' as const,
}

export type ApacheorgaprutilPackage = typeof apacheorgaprutilPackage
