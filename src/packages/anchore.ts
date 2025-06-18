/**
 * **anchore** - pkgx package
 *
 * @domain `github.com/anchore`
 *
 * @install `pkgx github.com/anchore`
 * @name `anchore`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.anchore
 * // Or access via domain
 * const samePkg = pantry.githubcomanchore
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "anchore"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/anchore.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const anchorePackage = {
  /**
   * The display name of this package.
   */
  name: 'anchore' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/anchore' as const,
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
  installCommand: 'pkgx github.com/anchore' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/anchore' as const,
}

export type AnchorePackage = typeof anchorePackage
