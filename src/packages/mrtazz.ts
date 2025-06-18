/**
 * **mrtazz** - pkgx package
 *
 * @domain `github.com/mrtazz`
 *
 * @install `pkgx github.com/mrtazz`
 * @name `mrtazz`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mrtazz
 * // Or access via domain
 * const samePkg = pantry.githubcommrtazz
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mrtazz"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mrtazz.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mrtazzPackage = {
  /**
   * The display name of this package.
   */
  name: 'mrtazz' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mrtazz' as const,
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
  installCommand: 'pkgx github.com/mrtazz' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/mrtazz' as const,
}

export type MrtazzPackage = typeof mrtazzPackage
