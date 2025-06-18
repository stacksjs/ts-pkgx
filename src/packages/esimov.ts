/**
 * **esimov** - pkgx package
 *
 * @domain `github.com/esimov`
 *
 * @install `pkgx github.com/esimov`
 * @name `esimov`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.esimov
 * // Or access via domain
 * const samePkg = pantry.githubcomesimov
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "esimov"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/esimov.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const esimovPackage = {
  /**
   * The display name of this package.
   */
  name: 'esimov' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/esimov' as const,
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
  installCommand: 'pkgx github.com/esimov' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/esimov' as const,
}

export type EsimovPackage = typeof esimovPackage
