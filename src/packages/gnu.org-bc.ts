/**
 * **bc** - pkgx package
 *
 * @domain `gnu.org/bc`
 * @programs `bc`, `dc`
 * @version `1.8.2` (4 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/bc.md
 *
 * @install `sh <(curl https://pkgx.sh) +gnu.org/bc -- $SHELL -i`
 * @aliases `bc`
 * @dependencies `github.com/westes/flex^2.6`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.bc
 * // Or access via domain
 * const samePkg = pantry.gnuorgbc
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gnu.org/bc"
 * console.log(pkg.programs)    // ["bc", "dc"]
 * console.log(pkg.versions[0]) // "1.8.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/bc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const bcPackage = {
  /**
   * The display name of this package.
   */
  name: 'gnu.org/bc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/bc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from gnu.org/bc' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/bc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gnu.org/bc -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'bc',
    'dc',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'github.com/westes/flex^2.6',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.8.2',
    '1.8.1',
    '1.8.0',
    '1.7.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'bc',
  ] as const,
  fullPath: 'gnu.org/bc' as const,
}

export type BcPackage = typeof bcPackage
