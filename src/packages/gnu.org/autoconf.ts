/**
 * **autoconf** - Automatic configure script builder
 *
 * @domain `gnu.org/autoconf`
 * @programs `autoconf`, `autoheader`, `autom4te`, `autoreconf`, `autoscan`, ... (+2 more)
 * @version `2.72.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +gnu.org/autoconf -- $SHELL -i`
 * @aliases `autoconf`
 * @dependencies `gnu.org/m4@1`, `perl.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.autoconf
 * // Or access via domain
 * const samePkg = pantry.gnuorgautoconf
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gnu.org/autoconf"
 * console.log(pkg.description) // "Automatic configure script builder"
 * console.log(pkg.programs)    // ["autoconf", "autoheader", ...]
 * console.log(pkg.versions[0]) // "2.72.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/autoconf.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const autoconfPackage = {
  /**
   * The display name of this package.
   */
  name: 'gnu.org/autoconf' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/autoconf' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Automatic configure script builder' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/autoconf/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gnu.org/autoconf -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'autoconf',
    'autoheader',
    'autom4te',
    'autoreconf',
    'autoscan',
    'autoupdate',
    'ifnames',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/m4@1',
    'perl.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.72.0',
    '2.71.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'autoconf',
  ] as const,
  fullPath: 'gnu.org/autoconf' as const,
}

export type AutoconfPackage = typeof autoconfPackage
