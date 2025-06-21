/**
 * **libcap-ng** - Package from pantry: people.redhat.com/sgrubb/libcap-ng
 *
 * @domain `people.redhat.com/sgrubb/libcap-ng`
 *
 * @install `launchpad install people.redhat.com/sgrubb/libcap-ng`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.peopleredhatcomsgrubblibcapng
 * console.log(pkg.name)        // "libcap-ng"
 * console.log(pkg.description) // "Package from pantry: people.redhat.com/sgrubb/l..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/people-redhat-com/sgrubb/libcap-ng.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const peopleredhatcomsgrubblibcapngPackage = {
  /**
   * The display name of this package.
   */
  name: 'libcap-ng' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'people.redhat.com/sgrubb/libcap-ng' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: people.redhat.com/sgrubb/libcap-ng' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install people.redhat.com/sgrubb/libcap-ng' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/people.redhat.com/sgrubb/libcap-ng/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PeopleredhatcomsgrubblibcapngPackage = typeof peopleredhatcomsgrubblibcapngPackage
