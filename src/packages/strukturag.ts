/**
 * **strukturag** - pkgx package
 *
 * @domain `github.com/strukturag`
 *
 * @install `pkgx github.com/strukturag`
 * @name `strukturag`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.strukturag
 * // Or access via domain
 * const samePkg = pantry.githubcomstrukturag
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "strukturag"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/strukturag.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const strukturagPackage = {
  /**
   * The display name of this package.
   */
  name: 'strukturag' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/strukturag' as const,
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
  installCommand: 'pkgx github.com/strukturag' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/strukturag' as const,
}

export type StrukturagPackage = typeof strukturagPackage
