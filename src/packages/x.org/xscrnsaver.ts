/**
 * **xscrnsaver** - Package from pantry: x.org/xscrnsaver
 *
 * @domain `x.org/xscrnsaver`
 *
 * @install `launchpad install x.org/xscrnsaver`
 * @dependencies `x.org/x11^1`, `x.org/protocol`, `x.org/exts`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgxscrnsaver
 * console.log(pkg.name)        // "xscrnsaver"
 * console.log(pkg.description) // "Package from pantry: x.org/xscrnsaver"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xscrnsaver.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgxscrnsaverPackage = {
  /**
   * The display name of this package.
   */
  name: 'xscrnsaver' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xscrnsaver' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: x.org/xscrnsaver' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/xscrnsaver' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11^1',
    'x.org/protocol',
    'x.org/exts',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xscrnsaver/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XorgxscrnsaverPackage = typeof xorgxscrnsaverPackage
