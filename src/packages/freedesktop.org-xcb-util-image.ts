/**
 * **xcb-util-image** - pkgx package
 *
 * @domain `freedesktop.org/xcb-util-image`
 * @version `0.4.1` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/xcb-util-image.md
 *
 * @install `sh <(curl https://pkgx.sh) +freedesktop.org/xcb-util-image -- $SHELL -i`
 * @aliases `xcb-util-image`
 * @dependencies `x.org/xcb`, `freedesktop.org/xcb-util`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.xcbutilimage
 * // Or access via domain
 * const samePkg = pantry.freedesktoporgxcbutilimage
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "freedesktop.org/xcb-util-image"
 * console.log(pkg.versions[0]) // "0.4.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/xcb-util-image.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xcbutilimagePackage = {
  /**
   * The display name of this package.
   */
  name: 'freedesktop.org/xcb-util-image' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/xcb-util-image' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from freedesktop.org/xcb-util-image' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/xcb-util-image/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/xcb-util-image -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/xcb',
    'freedesktop.org/xcb-util',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.4.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'xcb-util-image',
  ] as const,
  fullPath: 'freedesktop.org/xcb-util-image' as const,
}

export type XcbutilimagePackage = typeof xcbutilimagePackage
