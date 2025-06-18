/**
 * **xcb-util-keysyms** - pkgx package
 *
 * @domain `freedesktop.org/xcb-util-keysyms`
 * @version `0.4.1` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/xcb-util-keysyms.md
 *
 * @install `sh <(curl https://pkgx.sh) +freedesktop.org/xcb-util-keysyms -- $SHELL -i`
 * @aliases `xcb-util-keysyms`
 * @dependencies `x.org/xcb`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.xcbutilkeysyms
 * // Or access via domain
 * const samePkg = pantry.freedesktoporgxcbutilkeysyms
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "freedesktop.org/xcb-util-keysyms"
 * console.log(pkg.versions[0]) // "0.4.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/xcb-util-keysyms.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xcbutilkeysymsPackage = {
  /**
   * The display name of this package.
   */
  name: 'freedesktop.org/xcb-util-keysyms' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/xcb-util-keysyms' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/xcb-util-keysyms/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/xcb-util-keysyms -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/xcb',
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
    'xcb-util-keysyms',
  ] as const,
  fullPath: 'freedesktop.org/xcb-util-keysyms' as const,
}

export type XcbutilkeysymsPackage = typeof xcbutilkeysymsPackage
