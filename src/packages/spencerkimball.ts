/**
 * **spencerkimball** - pkgx package
 *
 * @domain `github.com/spencerkimball`
 *
 * @install `pkgx github.com/spencerkimball`
 * @name `spencerkimball`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.spencerkimball
 * // Or access via domain
 * const samePkg = pantry.githubcomspencerkimball
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "spencerkimball"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/spencerkimball.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const spencerkimballPackage = {
  /**
   * The display name of this package.
   */
  name: 'spencerkimball' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/spencerkimball' as const,
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
  installCommand: 'pkgx github.com/spencerkimball' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/spencerkimball' as const,
}

export type SpencerkimballPackage = typeof spencerkimballPackage
