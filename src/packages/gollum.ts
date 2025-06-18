/**
 * **gollum** - pkgx package
 *
 * @domain `github.com/gollum`
 *
 * @install `pkgx github.com/gollum`
 * @name `gollum`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gollum
 * // Or access via domain
 * const samePkg = pantry.githubcomgollum
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gollum"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/gollum.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gollumPackage = {
  /**
   * The display name of this package.
   */
  name: 'gollum' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/gollum' as const,
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
  installCommand: 'pkgx github.com/gollum' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/gollum' as const,
}

export type GollumPackage = typeof gollumPackage
