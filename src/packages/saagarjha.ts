/**
 * **saagarjha** - pkgx package
 *
 * @domain `github.com/saagarjha`
 *
 * @install `pkgx github.com/saagarjha`
 * @name `saagarjha`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.saagarjha
 * // Or access via domain
 * const samePkg = pantry.githubcomsaagarjha
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "saagarjha"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/saagarjha.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const saagarjhaPackage = {
  /**
   * The display name of this package.
   */
  name: 'saagarjha' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/saagarjha' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/saagarjha' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/saagarjha' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/saagarjha' as const,
}

export type SaagarjhaPackage = typeof saagarjhaPackage
