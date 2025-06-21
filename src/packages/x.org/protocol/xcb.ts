/**
 * **xcb** - Package from pantry: x.org/protocol/xcb
 *
 * @domain `x.org/protocol/xcb`
 *
 * @install `launchpad install x.org/protocol/xcb`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgprotocolxcb
 * console.log(pkg.name)        // "xcb"
 * console.log(pkg.description) // "Package from pantry: x.org/protocol/xcb"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/protocol/xcb.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgprotocolxcbPackage = {
  /**
   * The display name of this package.
   */
  name: 'xcb' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/protocol/xcb' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: x.org/protocol/xcb' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/protocol/xcb' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/protocol/xcb/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XorgprotocolxcbPackage = typeof xorgprotocolxcbPackage
