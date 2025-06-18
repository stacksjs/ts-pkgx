/**
 * **krzysztofzablocki** - pkgx package
 *
 * @domain `github.com/krzysztofzablocki`
 *
 * @install `pkgx github.com/krzysztofzablocki`
 * @name `krzysztofzablocki`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.krzysztofzablocki
 * // Or access via domain
 * const samePkg = pantry.githubcomkrzysztofzablocki
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "krzysztofzablocki"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/krzysztofzablocki.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const krzysztofzablockiPackage = {
  /**
   * The display name of this package.
   */
  name: 'krzysztofzablocki' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/krzysztofzablocki' as const,
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
  installCommand: 'pkgx github.com/krzysztofzablocki' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/krzysztofzablocki' as const,
}

export type KrzysztofzablockiPackage = typeof krzysztofzablockiPackage
