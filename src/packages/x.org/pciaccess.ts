/**
 * **pciaccess** - Package from pantry: x.org/pciaccess
 *
 * @domain `x.org/pciaccess`
 *
 * @install `launchpad install x.org/pciaccess`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgpciaccess
 * console.log(pkg.name)        // "pciaccess"
 * console.log(pkg.description) // "Package from pantry: x.org/pciaccess"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/pciaccess.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgpciaccessPackage = {
  /**
   * The display name of this package.
   */
  name: 'pciaccess' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/pciaccess' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: x.org/pciaccess' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/pciaccess' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +x.org/pciaccess -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install x.org/pciaccess' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/pciaccess/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XorgpciaccessPackage = typeof xorgpciaccessPackage
