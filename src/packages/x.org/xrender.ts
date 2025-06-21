/**
 * **xrender** - Package from pantry: x.org/xrender
 *
 * @domain `x.org/xrender`
 *
 * @install `launchpad install x.org/xrender`
 * @dependencies `x.org/x11^1`, `x.org/protocol`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgxrender
 * console.log(pkg.name)        // "xrender"
 * console.log(pkg.description) // "Package from pantry: x.org/xrender"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xrender.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgxrenderPackage = {
  /**
   * The display name of this package.
   */
  name: 'xrender' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xrender' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: x.org/xrender' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/xrender' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11^1',
    'x.org/protocol',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xrender/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XorgxrenderPackage = typeof xorgxrenderPackage
