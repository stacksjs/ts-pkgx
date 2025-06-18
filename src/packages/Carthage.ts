/**
 * **Carthage** - pkgx package
 *
 * @domain `github.com/Carthage`
 *
 * @install `pkgx github.com/Carthage`
 * @name `Carthage`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.Carthage
 * // Or access via domain
 * const samePkg = pantry.githubcomcarthage
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "Carthage"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Carthage.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const carthagePackage = {
  /**
   * The display name of this package.
   */
  name: 'Carthage' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/Carthage' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/Carthage' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/Carthage' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/Carthage' as const,
}

export type CarthagePackage = typeof carthagePackage
