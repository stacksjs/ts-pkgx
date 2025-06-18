/**
 * **jaseg** - pkgx package
 *
 * @domain `github.com/jaseg`
 *
 * @install `pkgx github.com/jaseg`
 * @name `jaseg`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.jaseg
 * // Or access via domain
 * const samePkg = pantry.githubcomjaseg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "jaseg"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/jaseg.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jasegPackage = {
  /**
   * The display name of this package.
   */
  name: 'jaseg' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/jaseg' as const,
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
  installCommand: 'pkgx github.com/jaseg' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/jaseg' as const,
}

export type JasegPackage = typeof jasegPackage
