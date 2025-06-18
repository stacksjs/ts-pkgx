/**
 * **carlobaldassi** - pkgx package
 *
 * @domain `github.com/carlobaldassi`
 *
 * @install `pkgx github.com/carlobaldassi`
 * @name `carlobaldassi`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.carlobaldassi
 * // Or access via domain
 * const samePkg = pantry.githubcomcarlobaldassi
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "carlobaldassi"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/carlobaldassi.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const carlobaldassiPackage = {
  /**
   * The display name of this package.
   */
  name: 'carlobaldassi' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/carlobaldassi' as const,
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
  installCommand: 'pkgx github.com/carlobaldassi' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/carlobaldassi' as const,
}

export type CarlobaldassiPackage = typeof carlobaldassiPackage
