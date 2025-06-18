/**
 * **giflib** - pkgx package
 *
 * @domain `sf.net/giflib`
 *
 * @install `pkgx sf.net/giflib`
 * @name `giflib`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.giflib
 * // Or access via domain
 * const samePkg = pantry.sfnetgiflib
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "giflib"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sf-net/giflib.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const giflibPackage = {
  /**
   * The display name of this package.
   */
  name: 'giflib' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sf.net/giflib' as const,
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
  installCommand: 'pkgx sf.net/giflib' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'sf.net/giflib' as const,
}

export type GiflibPackage = typeof giflibPackage
