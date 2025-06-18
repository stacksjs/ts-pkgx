/**
 * **mity** - pkgx package
 *
 * @domain `github.com/mity`
 *
 * @install `pkgx github.com/mity`
 * @name `mity`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mity
 * // Or access via domain
 * const samePkg = pantry.githubcommity
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mity"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mity.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mityPackage = {
  /**
   * The display name of this package.
   */
  name: 'mity' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mity' as const,
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
  installCommand: 'pkgx github.com/mity' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/mity' as const,
}

export type MityPackage = typeof mityPackage
