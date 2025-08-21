/**
 * **mpc** - pkgx package
 *
 * @domain `gnu.org/mpc`
 *
 * @install `launchpad install gnu.org/mpc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorgmpc
 * console.log(pkg.name)        // "mpc"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/mpc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorgmpcPackage = {
  /**
   * The display name of this package.
   */
  name: 'mpc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/mpc' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/mpc' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/mpc -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/mpc' as const,
}

export type GnuorgmpcPackage = typeof gnuorgmpcPackage
