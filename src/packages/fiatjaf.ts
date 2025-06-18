/**
 * **fiatjaf** - pkgx package
 *
 * @domain `github.com/fiatjaf`
 *
 * @install `pkgx github.com/fiatjaf`
 * @name `fiatjaf`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.fiatjaf
 * // Or access via domain
 * const samePkg = pantry.githubcomfiatjaf
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "fiatjaf"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/fiatjaf.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fiatjafPackage = {
  /**
   * The display name of this package.
   */
  name: 'fiatjaf' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/fiatjaf' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/fiatjaf' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/fiatjaf' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/fiatjaf' as const,
}

export type FiatjafPackage = typeof fiatjafPackage
