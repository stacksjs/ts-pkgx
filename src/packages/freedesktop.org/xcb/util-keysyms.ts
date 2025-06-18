/**
 * **freedesktop.org/xcb-util-keysyms** - pkgx package
 *
 * @domain `freedesktop.org/xcb/util-keysyms`
 *
 * @install `pkgx freedesktop.org/xcb-util-keysyms`
 * @name `xcb-util-keysyms`
 * @aliases `freedesktop.org/xcb-util-keysyms`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.freedesktoporgxcbutilkeysyms
 * // Or access via domain
 * const samePkg = pantry.freedesktoporgxcbutilkeysyms
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "xcb-util-keysyms"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/xcb/util-keysyms.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgxcbutilkeysymsPackage = {
  /**
   * The display name of this package.
   */
  name: 'xcb-util-keysyms' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/xcb/util-keysyms' as const,
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
  installCommand: 'pkgx freedesktop.org/xcb-util-keysyms' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'freedesktop.org/xcb-util-keysyms',
  ] as const,
  fullPath: 'freedesktop.org/xcb-util-keysyms' as const,
}

export type FreedesktoporgxcbutilkeysymsPackage = typeof freedesktoporgxcbutilkeysymsPackage
