/**
 * **hughsie** - pkgx package
 *
 * @domain `github.com/hughsie`
 *
 * @install `pkgx github.com/hughsie`
 * @name `hughsie`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.hughsie
 * // Or access via domain
 * const samePkg = pantry.githubcomhughsie
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "hughsie"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/hughsie.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hughsiePackage = {
  /**
   * The display name of this package.
   */
  name: 'hughsie' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/hughsie' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/hughsie' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/hughsie' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/hughsie' as const,
}

export type HughsiePackage = typeof hughsiePackage
