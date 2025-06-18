/**
 * **freedesktop.org/xcb-util-image** - pkgx package
 *
 * @domain `freedesktop.org/xcb/util-image`
 *
 * @install `pkgx freedesktop.org/xcb-util-image`
 * @name `xcb-util-image`
 * @aliases `freedesktop.org/xcb-util-image`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.freedesktoporgxcbutilimage
 * // Or access via domain
 * const samePkg = pantry.freedesktoporgxcbutilimage
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "xcb-util-image"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/xcb/util-image.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgxcbutilimagePackage = {
  /**
   * The display name of this package.
   */
  name: 'xcb-util-image' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/xcb/util-image' as const,
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
  installCommand: 'pkgx freedesktop.org/xcb-util-image' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'freedesktop.org/xcb-util-image',
  ] as const,
  fullPath: 'freedesktop.org/xcb-util-image' as const,
}

export type FreedesktoporgxcbutilimagePackage = typeof freedesktoporgxcbutilimagePackage
