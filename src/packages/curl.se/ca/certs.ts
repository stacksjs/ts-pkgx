/**
 * **curl.se/ca-certs** - pkgx package
 *
 * @domain `curl.se/ca/certs`
 *
 * @install `pkgx curl.se/ca-certs`
 * @name `ca-certs`
 * @aliases `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.curlsecacerts
 * // Or access via domain
 * const samePkg = pantry.curlsecacerts
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ca-certs"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/curl-se/ca/certs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const curlsecacertsPackage = {
  /**
   * The display name of this package.
   */
  name: 'ca-certs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'curl.se/ca/certs' as const,
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
  installCommand: 'pkgx curl.se/ca-certs' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'curl.se/ca-certs',
  ] as const,
  fullPath: 'curl.se/ca-certs' as const,
}

export type CurlsecacertsPackage = typeof curlsecacertsPackage
