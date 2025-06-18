/**
 * **automake** - Tool for generating GNU Standards-compliant Makefiles
 *
 * @domain `gnu.org/automake`
 * @programs `aclocal`, `automake`
 * @version `1.18.0` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +gnu.org/automake -- $SHELL -i`
 * @aliases `automake`
 * @dependencies `gnu.org/autoconf^2.65.0`, `perl.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.automake
 * // Or access via domain
 * const samePkg = pantry.gnuorgautomake
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gnu.org/automake"
 * console.log(pkg.description) // "Tool for generating GNU Standards-compliant Mak..."
 * console.log(pkg.programs)    // ["aclocal", "automake"]
 * console.log(pkg.versions[0]) // "1.18.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/automake.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const automakePackage = {
  /**
   * The display name of this package.
   */
  name: 'gnu.org/automake' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/automake' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Tool for generating GNU Standards-compliant Makefiles' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/automake/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gnu.org/automake -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'aclocal',
    'automake',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/autoconf^2.65.0',
    'perl.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.18.0',
    '1.17.0',
    '1.16.5',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'automake',
  ] as const,
  fullPath: 'gnu.org/automake' as const,
}

export type AutomakePackage = typeof automakePackage
