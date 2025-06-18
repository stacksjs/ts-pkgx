/**
 * **benjaminp** - pkgx package
 *
 * @domain `github.com/benjaminp`
 *
 * @install `pkgx github.com/benjaminp`
 * @name `benjaminp`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.benjaminp
 * // Or access via domain
 * const samePkg = pantry.githubcombenjaminp
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "benjaminp"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/benjaminp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const benjaminpPackage = {
  /**
   * The display name of this package.
   */
  name: 'benjaminp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/benjaminp' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/benjaminp' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/benjaminp' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/benjaminp' as const,
}

export type BenjaminpPackage = typeof benjaminpPackage
