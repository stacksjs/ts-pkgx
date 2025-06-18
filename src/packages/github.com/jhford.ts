/**
 * **jhford** - pkgx package
 *
 * @domain `github.com/jhford`
 *
 * @install `pkgx github.com/jhford`
 * @name `jhford`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.jhford
 * // Or access via domain
 * const samePkg = pantry.githubcomjhford
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "jhford"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/jhford.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jhfordPackage = {
  /**
   * The display name of this package.
   */
  name: 'jhford' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/jhford' as const,
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
  installCommand: 'pkgx github.com/jhford' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/jhford' as const,
}

export type JhfordPackage = typeof jhfordPackage
