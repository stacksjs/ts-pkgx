/**
 * **wpebackend-fdo** - Package from pantry: wpewebkit.org/wpebackend-fdo
 *
 * @domain `wpewebkit.org/wpebackend-fdo`
 *
 * @install `launchpad install wpewebkit.org/wpebackend-fdo`
 * @dependencies `gnome.org/glib`, `github.com/anholt/libepoxy`, `wpewebkit.org/libwpe`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.wpewebkitorgwpebackendfdo
 * console.log(pkg.name)        // "wpebackend-fdo"
 * console.log(pkg.description) // "Package from pantry: wpewebkit.org/wpebackend-fdo"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wpewebkit-org/wpebackend-fdo.md
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
  domain: 'wpewebkit.org/wpebackend-fdo' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: wpewebkit.org/wpebackend-fdo' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install wpewebkit.org/wpebackend-fdo' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/glib',
    'github.com/anholt/libepoxy',
    'wpewebkit.org/libwpe',
    'mesa3d.org',
    'wayland.freedesktop.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/wpewebkit.org/wpebackend-fdo/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type WpewebkitorgwpebackendfdoPackage = typeof wpewebkitorgwpebackendfdoPackage
