/**
 * **xcb-util** - pkgx package
 *
 * @domain `x.org/xcb-util`
 * @version `0.4.1` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/x-org/xcb-util.md
 *
 * @install `sh <(curl https://pkgx.sh) +x.org/xcb-util -- $SHELL -i`
 * @aliases `xcb-util`
 * @dependencies `x.org/xcb^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.xcbutil
 * // Or access via domain
 * const samePkg = pantry.xorgxcbutil
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "x.org/xcb-util"
 * console.log(pkg.versions[0]) // "0.4.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xcb-util.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgXcbutilPackage = {
  /**
   * The display name of this package.
   */
  name: 'x.org/xcb-util' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xcb-util' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from x.org/xcb-util' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xcb-util/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +x.org/xcb-util -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/xcb^1',
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
    'xcb-util',
  ] as const,
  fullPath: 'x.org/xcb-util' as const,
}

export type XorgXcbutilPackage = typeof xorgXcbutilPackage
