/**
 * **popt** - C library for parsing command line parameters
 *
 * @domain `rpm.org/popt`
 * @version `1.19.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +rpm.org/popt -- $SHELL -i`
 * @aliases `popt`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.popt
 * // Or access via domain
 * const samePkg = pantry.rpmorgpopt
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "rpm.org/popt"
 * console.log(pkg.description) // "C library for parsing command line parameters"
 * console.log(pkg.versions[0]) // "1.19.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rpm-org/popt.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const poptPackage = {
  /**
   * The display name of this package.
   */
  name: 'rpm.org/popt' as const,
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
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +rpm.org/popt -- $SHELL -i' as const,
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
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'popt',
  ] as const,
  fullPath: 'rpm.org/popt' as const,
}

export type PoptPackage = typeof poptPackage
