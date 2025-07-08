/**
 * **dssim** - Package from pantry: kornel.ski/dssim
 *
 * @domain `kornel.ski/dssim`
 *
 * @install `launchpad install kornel.ski/dssim`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kornelskidssim
 * console.log(pkg.name)        // "dssim"
 * console.log(pkg.description) // "Package from pantry: kornel.ski/dssim"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kornel-ski/dssim.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kornelskidssimPackage = {
  /**
   * The display name of this package.
   */
  name: 'dssim' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kornel.ski/dssim' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: kornel.ski/dssim' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install kornel.ski/dssim' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +kornel.ski/dssim -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install kornel.ski/dssim' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/kornel.ski/dssim/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type KornelskidssimPackage = typeof kornelskidssimPackage
