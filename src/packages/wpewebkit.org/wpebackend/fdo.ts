/**
 * **wpewebkit.org/wpebackend-fdo** - pkgx package
 *
 * @domain `wpewebkit.org/wpebackend/fdo`
 *
 * @install `pkgx wpewebkit.org/wpebackend-fdo`
 * @name `wpebackend-fdo`
 * @aliases `wpewebkit.org/wpebackend-fdo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.wpewebkitorgwpebackendfdo
 * // Or access via domain
 * const samePkg = pantry.wpewebkitorgwpebackendfdo
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "wpebackend-fdo"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wpewebkit-org/wpebackend/fdo.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wpewebkitorgwpebackendfdoPackage = {
  /**
   * The display name of this package.
   */
  name: 'wpebackend-fdo' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'wpewebkit.org/wpebackend/fdo' as const,
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
  installCommand: 'pkgx wpewebkit.org/wpebackend-fdo' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'wpewebkit.org/wpebackend-fdo',
  ] as const,
  fullPath: 'wpewebkit.org/wpebackend-fdo' as const,
}

export type WpewebkitorgwpebackendfdoPackage = typeof wpewebkitorgwpebackendfdoPackage
