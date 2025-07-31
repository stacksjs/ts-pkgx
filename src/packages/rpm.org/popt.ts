/**
 * **popt** - Package from pantry: rpm.org/popt
 *
 * @domain `rpm.org/popt`
 *
 * @install `launchpad install rpm.org/popt`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rpmorgpopt
 * console.log(pkg.name)        // "popt"
 * console.log(pkg.description) // "Package from pantry: rpm.org/popt"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rpm-org/popt.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rpmorgpoptPackage = {
  /**
   * The display name of this package.
   */
  name: 'popt' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rpm.org/popt' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: rpm.org/popt' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install rpm.org/popt' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +rpm.org/popt -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install rpm.org/popt' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rpm.org/popt/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type RpmorgpoptPackage = typeof rpmorgpoptPackage
