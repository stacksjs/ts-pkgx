/**
 * **certifi.io/python-certifi** - pkgx package
 *
 * @domain `certifi.io/python/certifi`
 *
 * @install `pkgx certifi.io/python-certifi`
 * @name `python-certifi`
 * @aliases `certifi.io/python-certifi`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.certifiiopythoncertifi
 * // Or access via domain
 * const samePkg = pantry.certifiiopythoncertifi
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "python-certifi"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/certifi-io/python/certifi.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const certifiiopythoncertifiPackage = {
  /**
   * The display name of this package.
   */
  name: 'python-certifi' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'certifi.io/python/certifi' as const,
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
  installCommand: 'pkgx certifi.io/python-certifi' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'certifi.io/python-certifi',
  ] as const,
  fullPath: 'certifi.io/python-certifi' as const,
}

export type CertifiiopythoncertifiPackage = typeof certifiiopythoncertifiPackage
