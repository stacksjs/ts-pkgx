/**
 * **xcb-util** - Package from pantry: x.org/xcb-util
 *
 * @domain `x.org/xcb-util`
 *
 * @install `launchpad install x.org/xcb-util`
 * @dependencies `x.org/xcb^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgxcbutil
 * console.log(pkg.name)        // "xcb-util"
 * console.log(pkg.description) // "Package from pantry: x.org/xcb-util"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xcb-util.md
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
  domain: 'x.org/xcb-util' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: x.org/xcb-util' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/xcb-util' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/xcb^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xcb-util/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XorgxcbutilPackage = typeof xorgxcbutilPackage
