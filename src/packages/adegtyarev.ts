/**
 * **adegtyarev** - pkgx package
 *
 * @domain `github.com/adegtyarev`
 *
 * @install `pkgx github.com/adegtyarev`
 * @name `adegtyarev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.adegtyarev
 * // Or access via domain
 * const samePkg = pantry.githubcomadegtyarev
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "adegtyarev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/adegtyarev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const adegtyarevPackage = {
  /**
   * The display name of this package.
   */
  name: 'adegtyarev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/adegtyarev' as const,
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
  installCommand: 'pkgx github.com/adegtyarev' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/adegtyarev' as const,
}

export type AdegtyarevPackage = typeof adegtyarevPackage
