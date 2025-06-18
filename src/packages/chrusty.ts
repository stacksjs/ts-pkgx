/**
 * **chrusty** - pkgx package
 *
 * @domain `github.com/chrusty`
 *
 * @install `pkgx github.com/chrusty`
 * @name `chrusty`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.chrusty
 * // Or access via domain
 * const samePkg = pantry.githubcomchrusty
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "chrusty"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/chrusty.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const chrustyPackage = {
  /**
   * The display name of this package.
   */
  name: 'chrusty' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/chrusty' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/chrusty' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/chrusty' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/chrusty' as const,
}

export type ChrustyPackage = typeof chrustyPackage
