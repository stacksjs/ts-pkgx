/**
 * **lame** - pkgx package
 *
 * @domain `sf.net/lame`
 *
 * @install `pkgx sf.net/lame`
 * @name `lame`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.lame
 * // Or access via domain
 * const samePkg = pantry.sfnetlame
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "lame"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sf-net/lame.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lamePackage = {
  /**
   * The display name of this package.
   */
  name: 'lame' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sf.net/lame' as const,
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
  installCommand: 'pkgx sf.net/lame' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'sf.net/lame' as const,
}

export type LamePackage = typeof lamePackage
