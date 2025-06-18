/**
 * **people.redhat.com/sgrubb/libcap-ng** - pkgx package
 *
 * @domain `people.redhat.com/sgrubb/libcap/ng`
 *
 * @install `pkgx people.redhat.com/sgrubb/libcap-ng`
 * @aliases `people.redhat.com/sgrubb/libcap-ng`, `sgrubb/libcap-ng`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.peopleredhatcomsgrubblibcapng
 * // Or access via domain
 * const samePkg = pantry.peopleredhatcomsgrubblibcapng
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sgrubb"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/people-redhat-com/sgrubb/libcap/ng.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const peopleredhatcomsgrubblibcapngPackage = {
  /**
   * The display name of this package.
   */
  name: 'sgrubb' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'people.redhat.com/sgrubb/libcap/ng' as const,
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
  installCommand: 'pkgx people.redhat.com/sgrubb/libcap-ng' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'people.redhat.com/sgrubb/libcap-ng',
    'sgrubb/libcap-ng',
  ] as const,
  fullPath: 'people.redhat.com/sgrubb/libcap-ng' as const,
}

export type PeopleredhatcomsgrubblibcapngPackage = typeof peopleredhatcomsgrubblibcapngPackage
