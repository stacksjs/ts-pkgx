/**
 * **gnu.org/mpc** - pkgx package
 *
 * @domain `gnu.org/mpc`
 * @version `1.3.1` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install gnu.org/mpc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorgmpc
 * console.log(pkg.name)        // "gnu.org/mpc"
 * console.log(pkg.versions[0]) // "1.3.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/mpc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorgmpcPackage = {
  /**
   * The display name of this package.
   */
  name: 'gnu.org/mpc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/mpc' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/mpc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/mpc' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.1',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/mpc -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/mpc' as const,
}

export type GnuorgmpcPackage = typeof gnuorgmpcPackage
