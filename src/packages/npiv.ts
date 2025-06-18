/**
 * **npiv** - pkgx package
 *
 * @domain `github.com/npiv`
 *
 * @install `pkgx github.com/npiv`
 * @name `npiv`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.npiv
 * // Or access via domain
 * const samePkg = pantry.githubcomnpiv
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "npiv"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/npiv.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const npivPackage = {
  /**
   * The display name of this package.
   */
  name: 'npiv' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/npiv' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/npiv' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/npiv' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/npiv' as const,
}

export type NpivPackage = typeof npivPackage
