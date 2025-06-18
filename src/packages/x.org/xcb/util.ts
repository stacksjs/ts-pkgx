/**
 * **x.org/xcb-util** - pkgx package
 *
 * @domain `x.org/xcb/util`
 *
 * @install `pkgx x.org/xcb-util`
 * @name `xcb-util`
 * @aliases `x.org/xcb-util`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.xorgxcbutil
 * // Or access via domain
 * const samePkg = pantry.xorgxcbutil
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "xcb-util"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xcb/util.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgxcbutilPackage = {
  /**
   * The display name of this package.
   */
  name: 'xcb-util' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xcb/util' as const,
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
  installCommand: 'pkgx x.org/xcb-util' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'x.org/xcb-util',
  ] as const,
  fullPath: 'x.org/xcb-util' as const,
}

export type XorgxcbutilPackage = typeof xorgxcbutilPackage
