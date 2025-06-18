/**
 * **xerces.apache.org/xerces-c** - pkgx package
 *
 * @domain `xerces.apache.org/xerces/c`
 *
 * @install `pkgx xerces.apache.org/xerces-c`
 * @name `xerces-c`
 * @aliases `xerces.apache.org/xerces-c`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.xercesapacheorgxercesc
 * // Or access via domain
 * const samePkg = pantry.xercesapacheorgxercesc
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "xerces-c"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/xerces-apache-org/xerces/c.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xercesapacheorgxercescPackage = {
  /**
   * The display name of this package.
   */
  name: 'xerces-c' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'xerces.apache.org/xerces/c' as const,
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
  installCommand: 'pkgx xerces.apache.org/xerces-c' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'xerces.apache.org/xerces-c',
  ] as const,
  fullPath: 'xerces.apache.org/xerces-c' as const,
}

export type XercesapacheorgxercescPackage = typeof xercesapacheorgxercescPackage
