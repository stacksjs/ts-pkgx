/**
 * **mpc** - Package from pantry: gnu.org/mpc
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
 * console.log(pkg.description) // "Package from pantry: gnu.org/mpc"
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
  description: 'Package from pantry: gnu.org/mpc' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/mpc' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/mpc -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/mpc' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/mpc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorgmpcPackage = typeof gnuorgmpcPackage
