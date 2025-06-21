/**
 * **popt** - C library for parsing command line parameters
 *
 * @domain `rpm.org/popt`
 * @version `1.19.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +rpm.org/popt -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rpmorgpopt
 * console.log(pkg.name)        // "popt"
 * console.log(pkg.description) // "C library for parsing command line parameters"
 * console.log(pkg.versions[0]) // "1.19.0" (latest)
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
  description: 'C library for parsing command line parameters' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rpm.org/popt/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +rpm.org/popt -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.19.0',
  ] as const,
  aliases: [] as const,
}

export type RpmorgpoptPackage = typeof rpmorgpoptPackage
