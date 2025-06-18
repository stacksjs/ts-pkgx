/**
 * **Parchive** - pkgx package
 *
 * @domain `github.com/Parchive`
 *
 * @install `pkgx github.com/Parchive`
 * @name `Parchive`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.Parchive
 * // Or access via domain
 * const samePkg = pantry.githubcomparchive
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "Parchive"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Parchive.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const parchivePackage = {
  /**
   * The display name of this package.
   */
  name: 'Parchive' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/Parchive' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/Parchive' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/Parchive' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/Parchive' as const,
}

export type ParchivePackage = typeof parchivePackage
