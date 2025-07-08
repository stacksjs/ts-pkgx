/**
 * **gperf** - Package from pantry: gnu.org/gperf
 *
 * @domain `gnu.org/gperf`
 *
 * @install `launchpad install gnu.org/gperf`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorggperf
 * console.log(pkg.name)        // "gperf"
 * console.log(pkg.description) // "Package from pantry: gnu.org/gperf"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/gperf.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorggperfPackage = {
  /**
   * The display name of this package.
   */
  name: 'gperf' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/gperf' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/gperf' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/gperf' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/gperf -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/gperf' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/gperf/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorggperfPackage = typeof gnuorggperfPackage
