/**
 * **kdave** - pkgx package
 *
 * @domain `github.com/kdave`
 *
 * @install `pkgx github.com/kdave`
 * @name `kdave`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.kdave
 * // Or access via domain
 * const samePkg = pantry.githubcomkdave
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "kdave"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/kdave.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kdavePackage = {
  /**
   * The display name of this package.
   */
  name: 'kdave' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/kdave' as const,
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
  installCommand: 'pkgx github.com/kdave' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/kdave' as const,
}

export type KdavePackage = typeof kdavePackage
