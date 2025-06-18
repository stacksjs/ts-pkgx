/**
 * **mikefarah** - pkgx package
 *
 * @domain `github.com/mikefarah`
 *
 * @install `pkgx github.com/mikefarah`
 * @name `mikefarah`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mikefarah
 * // Or access via domain
 * const samePkg = pantry.githubcommikefarah
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mikefarah"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mikefarah.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mikefarahPackage = {
  /**
   * The display name of this package.
   */
  name: 'mikefarah' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mikefarah' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/mikefarah' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/mikefarah' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/mikefarah' as const,
}

export type MikefarahPackage = typeof mikefarahPackage
