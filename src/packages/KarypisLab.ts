/**
 * **KarypisLab** - pkgx package
 *
 * @domain `github.com/KarypisLab`
 *
 * @install `pkgx github.com/KarypisLab`
 * @name `KarypisLab`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.KarypisLab
 * // Or access via domain
 * const samePkg = pantry.githubcomkarypislab
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "KarypisLab"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/KarypisLab.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const karypisLabPackage = {
  /**
   * The display name of this package.
   */
  name: 'KarypisLab' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/KarypisLab' as const,
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
  installCommand: 'pkgx github.com/KarypisLab' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/KarypisLab' as const,
}

export type KarypisLabPackage = typeof karypisLabPackage
