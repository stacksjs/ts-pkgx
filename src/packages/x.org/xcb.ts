/**
 * **xcb** - Package from pantry: x.org/xcb
 *
 * @domain `x.org/xcb`
 *
 * @install `launchpad install x.org/xcb`
 * @dependencies `x.org/xau^1`, `x.org/xdmcp^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgxcb
 * console.log(pkg.name)        // "xcb"
 * console.log(pkg.description) // "Package from pantry: x.org/xcb"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xcb.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgxcbPackage = {
  /**
   * The display name of this package.
   */
  name: 'xcb' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xcb' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: x.org/xcb' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/xcb' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +x.org/xcb -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install x.org/xcb' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/xau^1',
    'x.org/xdmcp^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xcb/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XorgxcbPackage = typeof xorgxcbPackage
