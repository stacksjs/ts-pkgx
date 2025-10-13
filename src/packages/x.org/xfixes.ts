/**
 * **xfixes** - Package from pantry: x.org/xfixes
 *
 * @domain `x.org/xfixes`
 *
 * @install `launchpad install x.org/xfixes`
 * @dependencies `x.org/x11`, `x.org/protocol`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgxfixes
 * console.log(pkg.name)        // "xfixes"
 * console.log(pkg.description) // "Package from pantry: x.org/xfixes"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xfixes.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgxfixesPackage = {
  /**
   * The display name of this package.
   */
  name: 'xfixes' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xfixes' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: x.org/xfixes' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/xfixes' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +x.org/xfixes -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install x.org/xfixes' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11',
    'x.org/protocol',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xfixes/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XorgxfixesPackage = typeof xorgxfixesPackage
