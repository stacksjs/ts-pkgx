/**
 * **burntsushi** - pkgx package
 *
 * @domain `github.com/burntsushi`
 *
 * @install `pkgx github.com/burntsushi`
 * @name `burntsushi`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.burntsushi
 * // Or access via domain
 * const samePkg = pantry.githubcomburntsushi
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "burntsushi"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/burntsushi.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const burntsushiPackage = {
  /**
   * The display name of this package.
   */
  name: 'burntsushi' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/burntsushi' as const,
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
  installCommand: 'pkgx github.com/burntsushi' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/burntsushi' as const,
}

export type BurntsushiPackage = typeof burntsushiPackage
