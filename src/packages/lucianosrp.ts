/**
 * **lucianosrp** - pkgx package
 *
 * @domain `github.com/lucianosrp`
 *
 * @install `pkgx github.com/lucianosrp`
 * @name `lucianosrp`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.lucianosrp
 * // Or access via domain
 * const samePkg = pantry.githubcomlucianosrp
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "lucianosrp"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/lucianosrp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lucianosrpPackage = {
  /**
   * The display name of this package.
   */
  name: 'lucianosrp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/lucianosrp' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/lucianosrp' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/lucianosrp' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/lucianosrp' as const,
}

export type LucianosrpPackage = typeof lucianosrpPackage
