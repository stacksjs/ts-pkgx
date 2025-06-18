/**
 * **gmp** - pkgx package
 *
 * @domain `gnu.org/gmp`
 * @version `6.3.0` (2 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/gmp.md
 *
 * @install `sh <(curl https://pkgx.sh) +gnu.org/gmp -- $SHELL -i`
 * @aliases `gmp`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.gmp
 * // Or access via domain
 * const samePkg = pantry.gnuorggmp
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gnu.org/gmp"
 * console.log(pkg.versions[0]) // "6.3.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/gmp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gmpPackage = {
  /**
   * The display name of this package.
   */
  name: 'gnu.org/gmp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/gmp' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/gmp/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gnu.org/gmp -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '6.3.0',
    '6.2.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'gmp',
  ] as const,
  fullPath: 'gnu.org/gmp' as const,
}

export type GmpPackage = typeof gmpPackage
