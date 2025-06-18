/**
 * **nishanths** - pkgx package
 *
 * @domain `github.com/nishanths`
 *
 * @install `pkgx github.com/nishanths`
 * @name `nishanths`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.nishanths
 * // Or access via domain
 * const samePkg = pantry.githubcomnishanths
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "nishanths"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/nishanths.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nishanthsPackage = {
  /**
   * The display name of this package.
   */
  name: 'nishanths' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/nishanths' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/nishanths' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/nishanths' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/nishanths' as const,
}

export type NishanthsPackage = typeof nishanthsPackage
