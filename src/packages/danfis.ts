/**
 * **danfis** - pkgx package
 *
 * @domain `github.com/danfis`
 *
 * @install `pkgx github.com/danfis`
 * @name `danfis`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.danfis
 * // Or access via domain
 * const samePkg = pantry.githubcomdanfis
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "danfis"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/danfis.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const danfisPackage = {
  /**
   * The display name of this package.
   */
  name: 'danfis' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/danfis' as const,
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
  installCommand: 'pkgx github.com/danfis' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/danfis' as const,
}

export type DanfisPackage = typeof danfisPackage
