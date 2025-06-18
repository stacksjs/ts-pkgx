/**
 * **DMTF** - pkgx package
 *
 * @domain `github.com/DMTF`
 *
 * @install `pkgx github.com/DMTF`
 * @name `DMTF`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.DMTF
 * // Or access via domain
 * const samePkg = pantry.githubcomdmtf
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "DMTF"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/DMTF.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dMTFPackage = {
  /**
   * The display name of this package.
   */
  name: 'DMTF' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/DMTF' as const,
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
  installCommand: 'pkgx github.com/DMTF' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/DMTF' as const,
}

export type DMTFPackage = typeof dMTFPackage
