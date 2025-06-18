/**
 * **kevinmichaelchen** - pkgx package
 *
 * @domain `github.com/kevinmichaelchen`
 *
 * @install `pkgx github.com/kevinmichaelchen`
 * @name `kevinmichaelchen`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.kevinmichaelchen
 * // Or access via domain
 * const samePkg = pantry.githubcomkevinmichaelchen
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "kevinmichaelchen"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/kevinmichaelchen.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kevinmichaelchenPackage = {
  /**
   * The display name of this package.
   */
  name: 'kevinmichaelchen' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/kevinmichaelchen' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/kevinmichaelchen' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/kevinmichaelchen' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/kevinmichaelchen' as const,
}

export type KevinmichaelchenPackage = typeof kevinmichaelchenPackage
