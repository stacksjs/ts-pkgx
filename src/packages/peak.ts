/**
 * **peak** - pkgx package
 *
 * @domain `github.com/peak`
 *
 * @install `pkgx github.com/peak`
 * @name `peak`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.peak
 * // Or access via domain
 * const samePkg = pantry.githubcompeak
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "peak"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/peak.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const peakPackage = {
  /**
   * The display name of this package.
   */
  name: 'peak' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/peak' as const,
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
  installCommand: 'pkgx github.com/peak' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/peak' as const,
}

export type PeakPackage = typeof peakPackage
