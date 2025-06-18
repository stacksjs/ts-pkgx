/**
 * **newren** - pkgx package
 *
 * @domain `github.com/newren`
 *
 * @install `pkgx github.com/newren`
 * @name `newren`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.newren
 * // Or access via domain
 * const samePkg = pantry.githubcomnewren
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "newren"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/newren.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const newrenPackage = {
  /**
   * The display name of this package.
   */
  name: 'newren' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/newren' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/newren' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/newren' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/newren' as const,
}

export type NewrenPackage = typeof newrenPackage
