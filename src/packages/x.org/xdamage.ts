/**
 * **xdamage** - Package from pantry: x.org/xdamage
 *
 * @domain `x.org/xdamage`
 *
 * @install `launchpad install x.org/xdamage`
 * @dependencies `x.org/x11`, `x.org/protocol`, `x.org/xfixes`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgxdamage
 * console.log(pkg.name)        // "xdamage"
 * console.log(pkg.description) // "Package from pantry: x.org/xdamage"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xdamage.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgxdamagePackage = {
  /**
   * The display name of this package.
   */
  name: 'xdamage' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xdamage' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: x.org/xdamage' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/xdamage' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11',
    'x.org/protocol',
    'x.org/xfixes',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xdamage/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XorgxdamagePackage = typeof xorgxdamagePackage
