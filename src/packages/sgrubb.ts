/**
 * **sgrubb** - pkgx package
 *
 * @domain `people.redhat.com/sgrubb`
 *
 * @install `pkgx people.redhat.com/sgrubb`
 * @name `sgrubb`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.sgrubb
 * // Or access via domain
 * const samePkg = pantry.peopleredhatcomsgrubb
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sgrubb"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/people-redhat-com/sgrubb.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sgrubbPackage = {
  /**
   * The display name of this package.
   */
  name: 'sgrubb' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'people.redhat.com/sgrubb' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from people.redhat.com/sgrubb' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx people.redhat.com/sgrubb' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'people.redhat.com/sgrubb' as const,
}

export type SgrubbPackage = typeof sgrubbPackage
