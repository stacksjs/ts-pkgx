/**
 * **gawk** - pkgx package
 *
 * @domain `gnu.org/gawk`
 * @programs `awk`, `gawk`, `gawk-{{version}}`, `gawkbug`
 * @version `5.3.2` (5 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/gawk.md
 *
 * @install `sh <(curl https://pkgx.sh) +gnu.org/gawk -- $SHELL -i`
 * @aliases `gawk`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.gawk
 * // Or access via domain
 * const samePkg = pantry.gnuorggawk
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gnu.org/gawk"
 * console.log(pkg.programs)    // ["awk", "gawk", ...]
 * console.log(pkg.versions[0]) // "5.3.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/gawk.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gawkPackage = {
  /**
   * The display name of this package.
   */
  name: 'gnu.org/gawk' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/gawk' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from gnu.org/gawk' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/gawk/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gnu.org/gawk -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'awk',
    'gawk',
    'gawk-{{version}}',
    'gawkbug',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.3.2',
    '5.3.1',
    '5.3.0',
    '5.2.2',
    '5.2.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'gawk',
  ] as const,
  fullPath: 'gnu.org/gawk' as const,
}

export type GawkPackage = typeof gawkPackage
