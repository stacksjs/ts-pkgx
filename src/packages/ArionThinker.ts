/**
 * **ArionThinker** - pkgx package
 *
 * @domain `github.com/ArionThinker`
 *
 * @install `pkgx github.com/ArionThinker`
 * @name `ArionThinker`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ArionThinker
 * // Or access via domain
 * const samePkg = pantry.githubcomarionthinker
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ArionThinker"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/ArionThinker.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const arionThinkerPackage = {
  /**
   * The display name of this package.
   */
  name: 'ArionThinker' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/ArionThinker' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/ArionThinker' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/ArionThinker' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/ArionThinker' as const,
}

export type ArionThinkerPackage = typeof arionThinkerPackage
