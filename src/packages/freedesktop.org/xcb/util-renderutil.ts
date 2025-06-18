/**
 * **freedesktop.org/xcb-util-renderutil** - pkgx package
 *
 * @domain `freedesktop.org/xcb/util-renderutil`
 *
 * @install `pkgx freedesktop.org/xcb-util-renderutil`
 * @name `xcb-util-renderutil`
 * @aliases `freedesktop.org/xcb-util-renderutil`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.freedesktoporgxcbutilrenderutil
 * // Or access via domain
 * const samePkg = pantry.freedesktoporgxcbutilrenderutil
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "xcb-util-renderutil"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/xcb/util-renderutil.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgxcbutilrenderutilPackage = {
  /**
   * The display name of this package.
   */
  name: 'xcb-util-renderutil' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/xcb/util-renderutil' as const,
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
  installCommand: 'pkgx freedesktop.org/xcb-util-renderutil' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'freedesktop.org/xcb-util-renderutil',
  ] as const,
  fullPath: 'freedesktop.org/xcb-util-renderutil' as const,
}

export type FreedesktoporgxcbutilrenderutilPackage = typeof freedesktoporgxcbutilrenderutilPackage
