/**
 * **fossil** - pkgx package
 *
 * @domain `gaia-gis.it/fossil`
 *
 * @install `pkgx gaia-gis.it/fossil`
 * @name `fossil`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.fossil
 * // Or access via domain
 * const samePkg = pantry.gaiagisitfossil
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "fossil"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gaia-gis-it/fossil.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fossilPackage = {
  /**
   * The display name of this package.
   */
  name: 'fossil' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gaia-gis.it/fossil' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from gaia-gis.it/fossil' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx gaia-gis.it/fossil' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'gaia-gis.it/fossil' as const,
}

export type FossilPackage = typeof fossilPackage
