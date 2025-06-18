/**
 * **giampaolo** - pkgx package
 *
 * @domain `github.com/giampaolo`
 *
 * @install `pkgx github.com/giampaolo`
 * @name `giampaolo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.giampaolo
 * // Or access via domain
 * const samePkg = pantry.githubcomgiampaolo
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "giampaolo"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/giampaolo.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const giampaoloPackage = {
  /**
   * The display name of this package.
   */
  name: 'giampaolo' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/giampaolo' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/giampaolo' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/giampaolo' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/giampaolo' as const,
}

export type GiampaoloPackage = typeof giampaoloPackage
