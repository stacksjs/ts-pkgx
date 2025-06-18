/**
 * **mpc** - pkgx package
 *
 * @domain `gnu.org/mpc`
 * @version `1.3.1` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/mpc.md
 *
 * @install `sh <(curl https://pkgx.sh) +gnu.org/mpc -- $SHELL -i`
 * @aliases `mpc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.mpc
 * // Or access via domain
 * const samePkg = pantry.gnuorgmpc
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gnu.org/mpc"
 * console.log(pkg.versions[0]) // "1.3.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/mpc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mpcPackage = {
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
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gnu.org/mpc -- $SHELL -i' as const,
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
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'mpc',
  ] as const,
  fullPath: 'gnu.org/mpc' as const,
}

export type MpcPackage = typeof mpcPackage
