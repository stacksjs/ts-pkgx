/**
 * **metis** - Package from pantry: glaros.dtc.umn.edu/metis
 *
 * @domain `glaros.dtc.umn.edu/metis`
 *
 * @install `launchpad install glaros.dtc.umn.edu/metis`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.glarosdtcumnedumetis
 * console.log(pkg.name)        // "metis"
 * console.log(pkg.description) // "Package from pantry: glaros.dtc.umn.edu/metis"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/glaros-dtc-umn-edu/metis.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const glarosdtcumnedumetisPackage = {
  /**
   * The display name of this package.
   */
  name: 'metis' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'glaros.dtc.umn.edu/metis' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: glaros.dtc.umn.edu/metis' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install glaros.dtc.umn.edu/metis' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +glaros.dtc.umn.edu/metis -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install glaros.dtc.umn.edu/metis' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/glaros.dtc.umn.edu/metis/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GlarosdtcumnedumetisPackage = typeof glarosdtcumnedumetisPackage
