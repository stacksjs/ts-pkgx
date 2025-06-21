/**
 * **xt** - Package from pantry: x.org/xt
 *
 * @domain `x.org/xt`
 *
 * @install `launchpad install x.org/xt`
 * @dependencies `x.org/ice`, `x.org/sm`, `x.org/x11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgxt
 * console.log(pkg.name)        // "xt"
 * console.log(pkg.description) // "Package from pantry: x.org/xt"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xt.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgxtPackage = {
  /**
   * The display name of this package.
   */
  name: 'xt' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xt' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: x.org/xt' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/xt' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/ice',
    'x.org/sm',
    'x.org/x11',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xt/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XorgxtPackage = typeof xorgxtPackage
