/**
 * **abtreece** - pkgx package
 *
 * @domain `github.com/abtreece`
 *
 * @install `pkgx github.com/abtreece`
 * @name `abtreece`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.abtreece
 * // Or access via domain
 * const samePkg = pantry.githubcomabtreece
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "abtreece"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/abtreece.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const abtreecePackage = {
  /**
   * The display name of this package.
   */
  name: 'abtreece' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/abtreece' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/abtreece' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/abtreece' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/abtreece' as const,
}

export type AbtreecePackage = typeof abtreecePackage
