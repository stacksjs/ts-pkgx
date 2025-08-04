/**
 * **applewm** - Package from pantry: x.org/applewm
 *
 * @domain `x.org/applewm`
 *
 * @install `launchpad install x.org/applewm`
 * @dependencies `x.org/x11`, `x.org/exts`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgapplewm
 * console.log(pkg.name)        // "applewm"
 * console.log(pkg.description) // "Package from pantry: x.org/applewm"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/applewm.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgapplewmPackage = {
  /**
   * The display name of this package.
   */
  name: 'applewm' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/applewm' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: x.org/applewm' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/applewm' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +x.org/applewm -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install x.org/applewm' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11',
    'x.org/exts',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/applewm/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XorgapplewmPackage = typeof xorgapplewmPackage
