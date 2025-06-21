/**
 * **xmu** - Package from pantry: x.org/xmu
 *
 * @domain `x.org/xmu`
 *
 * @install `launchpad install x.org/xmu`
 * @dependencies `x.org/exts`, `x.org/xt`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgxmu
 * console.log(pkg.name)        // "xmu"
 * console.log(pkg.description) // "Package from pantry: x.org/xmu"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xmu.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgxmuPackage = {
  /**
   * The display name of this package.
   */
  name: 'xmu' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xmu' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: x.org/xmu' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/xmu' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/exts',
    'x.org/xt',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xmu/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XorgxmuPackage = typeof xorgxmuPackage
