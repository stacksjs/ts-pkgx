/**
 * **xcb-util-wm** - pkgx package
 *
 * @domain `freedesktop.org/xcb-util-wm`
 * @version `0.4.2` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/xcb-util-wm.md
 *
 * @install `sh <(curl https://pkgx.sh) +freedesktop.org/xcb-util-wm -- $SHELL -i`
 * @aliases `xcb-util-wm`
 * @dependencies `x.org/xcb`, `gnu.org/m4`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.xcbutilwm
 * // Or access via domain
 * const samePkg = pantry.freedesktoporgxcbutilwm
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "freedesktop.org/xcb-util-wm"
 * console.log(pkg.versions[0]) // "0.4.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/xcb-util-wm.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xcbutilwmPackage = {
  /**
   * The display name of this package.
   */
  name: 'freedesktop.org/xcb-util-wm' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/xcb-util-wm' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from freedesktop.org/xcb-util-wm' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/xcb-util-wm/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/xcb-util-wm -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/xcb',
    'gnu.org/m4',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.4.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'xcb-util-wm',
  ] as const,
  fullPath: 'freedesktop.org/xcb-util-wm' as const,
}

export type XcbutilwmPackage = typeof xcbutilwmPackage
