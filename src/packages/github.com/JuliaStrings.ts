/**
 * **JuliaStrings** - pkgx package
 *
 * @domain `github.com/JuliaStrings`
 *
 * @install `pkgx github.com/JuliaStrings`
 * @name `JuliaStrings`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.JuliaStrings
 * // Or access via domain
 * const samePkg = pantry.githubcomjuliastrings
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "JuliaStrings"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/JuliaStrings.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const juliaStringsPackage = {
  /**
   * The display name of this package.
   */
  name: 'JuliaStrings' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/JuliaStrings' as const,
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
  installCommand: 'pkgx github.com/JuliaStrings' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/JuliaStrings' as const,
}

export type JuliaStringsPackage = typeof juliaStringsPackage
