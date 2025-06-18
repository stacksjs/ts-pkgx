/**
 * **keith** - pkgx package
 *
 * @domain `github.com/keith`
 *
 * @install `pkgx github.com/keith`
 * @name `keith`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.keith
 * // Or access via domain
 * const samePkg = pantry.githubcomkeith
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "keith"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/keith.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const keithPackage = {
  /**
   * The display name of this package.
   */
  name: 'keith' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/keith' as const,
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
  installCommand: 'pkgx github.com/keith' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/keith' as const,
}

export type KeithPackage = typeof keithPackage
