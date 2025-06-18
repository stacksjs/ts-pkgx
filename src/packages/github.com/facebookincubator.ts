/**
 * **facebookincubator** - pkgx package
 *
 * @domain `github.com/facebookincubator`
 *
 * @install `pkgx github.com/facebookincubator`
 * @name `facebookincubator`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.facebookincubator
 * // Or access via domain
 * const samePkg = pantry.githubcomfacebookincubator
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "facebookincubator"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/facebookincubator.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const facebookincubatorPackage = {
  /**
   * The display name of this package.
   */
  name: 'facebookincubator' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/facebookincubator' as const,
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
  installCommand: 'pkgx github.com/facebookincubator' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/facebookincubator' as const,
}

export type FacebookincubatorPackage = typeof facebookincubatorPackage
