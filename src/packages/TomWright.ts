/**
 * **TomWright** - pkgx package
 *
 * @domain `github.com/TomWright`
 *
 * @install `pkgx github.com/TomWright`
 * @name `TomWright`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.TomWright
 * // Or access via domain
 * const samePkg = pantry.githubcomtomwright
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "TomWright"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/TomWright.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tomWrightPackage = {
  /**
   * The display name of this package.
   */
  name: 'TomWright' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/TomWright' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/TomWright' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/TomWright' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/TomWright' as const,
}

export type TomWrightPackage = typeof tomWrightPackage
