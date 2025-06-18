/**
 * **eagle** - pkgx package
 *
 * @domain `eyrie.org/eagle`
 *
 * @install `pkgx eyrie.org/eagle`
 * @name `eagle`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.eagle
 * // Or access via domain
 * const samePkg = pantry.eyrieorgeagle
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "eagle"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/eyrie-org/eagle.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const eaglePackage = {
  /**
   * The display name of this package.
   */
  name: 'eagle' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'eyrie.org/eagle' as const,
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
  installCommand: 'pkgx eyrie.org/eagle' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'eyrie.org/eagle' as const,
}

export type EaglePackage = typeof eaglePackage
