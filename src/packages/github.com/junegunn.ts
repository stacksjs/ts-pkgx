/**
 * **junegunn** - pkgx package
 *
 * @domain `github.com/junegunn`
 *
 * @install `pkgx github.com/junegunn`
 * @name `junegunn`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.junegunn
 * // Or access via domain
 * const samePkg = pantry.githubcomjunegunn
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "junegunn"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/junegunn.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const junegunnPackage = {
  /**
   * The display name of this package.
   */
  name: 'junegunn' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/junegunn' as const,
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
  installCommand: 'pkgx github.com/junegunn' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/junegunn' as const,
}

export type JunegunnPackage = typeof junegunnPackage
