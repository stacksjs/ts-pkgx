/**
 * **sxyazi** - pkgx package
 *
 * @domain `github.com/sxyazi`
 *
 * @install `pkgx github.com/sxyazi`
 * @name `sxyazi`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.sxyazi
 * // Or access via domain
 * const samePkg = pantry.githubcomsxyazi
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sxyazi"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/sxyazi.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sxyaziPackage = {
  /**
   * The display name of this package.
   */
  name: 'sxyazi' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/sxyazi' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/sxyazi' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/sxyazi' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/sxyazi' as const,
}

export type SxyaziPackage = typeof sxyaziPackage
