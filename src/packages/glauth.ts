/**
 * **glauth** - pkgx package
 *
 * @domain `github.com/glauth`
 *
 * @install `pkgx github.com/glauth`
 * @name `glauth`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.glauth
 * // Or access via domain
 * const samePkg = pantry.githubcomglauth
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "glauth"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/glauth.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const glauthPackage = {
  /**
   * The display name of this package.
   */
  name: 'glauth' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/glauth' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/glauth' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/glauth' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/glauth' as const,
}

export type GlauthPackage = typeof glauthPackage
