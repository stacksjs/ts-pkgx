/**
 * **MaestroError** - pkgx package
 *
 * @domain `github.com/MaestroError`
 *
 * @install `pkgx github.com/MaestroError`
 * @name `MaestroError`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.MaestroError
 * // Or access via domain
 * const samePkg = pantry.githubcommaestroerror
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "MaestroError"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/MaestroError.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const maestroErrorPackage = {
  /**
   * The display name of this package.
   */
  name: 'MaestroError' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/MaestroError' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/MaestroError' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/MaestroError' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/MaestroError' as const,
}

export type MaestroErrorPackage = typeof maestroErrorPackage
