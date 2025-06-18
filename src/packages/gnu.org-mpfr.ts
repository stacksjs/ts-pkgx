/**
 * **mpfr** - pkgx package
 *
 * @domain `gnu.org/mpfr`
 * @version `4.2.2` (3 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/mpfr.md
 *
 * @install `sh <(curl https://pkgx.sh) +gnu.org/mpfr -- $SHELL -i`
 * @aliases `mpfr`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.mpfr
 * // Or access via domain
 * const samePkg = pantry.gnuorgmpfr
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gnu.org/mpfr"
 * console.log(pkg.versions[0]) // "4.2.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/mpfr.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mpfrPackage = {
  /**
   * The display name of this package.
   */
  name: 'gnu.org/mpfr' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/mpfr' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from gnu.org/mpfr' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/mpfr/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gnu.org/mpfr -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.2.2',
    '4.2.1',
    '4.1.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'mpfr',
  ] as const,
  fullPath: 'gnu.org/mpfr' as const,
}

export type MpfrPackage = typeof mpfrPackage
