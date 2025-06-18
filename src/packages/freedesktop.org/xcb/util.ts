/**
 * **freedesktop.org/xcb-util** - pkgx package
 *
 * @domain `freedesktop.org/xcb/util`
 *
 * @install `pkgx freedesktop.org/xcb-util`
 * @name `xcb-util`
 * @aliases `freedesktop.org/xcb-util`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.freedesktoporgxcbutil
 * // Or access via domain
 * const samePkg = pantry.freedesktoporgxcbutil
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "xcb-util"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/xcb/util.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgxcbutilPackage = {
  /**
   * The display name of this package.
   */
  name: 'xcb-util' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/xcb/util' as const,
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
  installCommand: 'pkgx freedesktop.org/xcb-util' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'freedesktop.org/xcb-util',
  ] as const,
  fullPath: 'freedesktop.org/xcb-util' as const,
}

export type FreedesktoporgxcbutilPackage = typeof freedesktoporgxcbutilPackage
