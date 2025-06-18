/**
 * **moretension** - pkgx package
 *
 * @domain `github.com/moretension`
 *
 * @install `pkgx github.com/moretension`
 * @name `moretension`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.moretension
 * // Or access via domain
 * const samePkg = pantry.githubcommoretension
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "moretension"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/moretension.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const moretensionPackage = {
  /**
   * The display name of this package.
   */
  name: 'moretension' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/moretension' as const,
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
  installCommand: 'pkgx github.com/moretension' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/moretension' as const,
}

export type MoretensionPackage = typeof moretensionPackage
