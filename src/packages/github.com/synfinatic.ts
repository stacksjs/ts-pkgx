/**
 * **synfinatic** - pkgx package
 *
 * @domain `github.com/synfinatic`
 *
 * @install `pkgx github.com/synfinatic`
 * @name `synfinatic`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.synfinatic
 * // Or access via domain
 * const samePkg = pantry.githubcomsynfinatic
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "synfinatic"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/synfinatic.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const synfinaticPackage = {
  /**
   * The display name of this package.
   */
  name: 'synfinatic' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/synfinatic' as const,
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
  installCommand: 'pkgx github.com/synfinatic' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/synfinatic' as const,
}

export type SynfinaticPackage = typeof synfinaticPackage
