/**
 * **freedesktop.org/xcb-util-wm** - pkgx package
 *
 * @domain `freedesktop.org/xcb/util-wm`
 *
 * @install `pkgx freedesktop.org/xcb-util-wm`
 * @name `xcb-util-wm`
 * @aliases `freedesktop.org/xcb-util-wm`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.freedesktoporgxcbutilwm
 * // Or access via domain
 * const samePkg = pantry.freedesktoporgxcbutilwm
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "xcb-util-wm"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/xcb/util-wm.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgxcbutilwmPackage = {
  /**
   * The display name of this package.
   */
  name: 'xcb-util-wm' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/xcb/util-wm' as const,
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
  installCommand: 'pkgx freedesktop.org/xcb-util-wm' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'freedesktop.org/xcb-util-wm',
  ] as const,
  fullPath: 'freedesktop.org/xcb-util-wm' as const,
}

export type FreedesktoporgxcbutilwmPackage = typeof freedesktoporgxcbutilwmPackage
