/**
 * **xcursor** - Package from pantry: x.org/xcursor
 *
 * @domain `x.org/xcursor`
 *
 * @install `launchpad install x.org/xcursor`
 * @dependencies `x.org/x11`, `x.org/xfixes`, `x.org/xrender`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgxcursor
 * console.log(pkg.name)        // "xcursor"
 * console.log(pkg.description) // "Package from pantry: x.org/xcursor"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xcursor.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgxcursorPackage = {
  /**
   * The display name of this package.
   */
  name: 'xcursor' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xcursor' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: x.org/xcursor' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/xcursor' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11',
    'x.org/xfixes',
    'x.org/xrender',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xcursor/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XorgxcursorPackage = typeof xorgxcursorPackage
