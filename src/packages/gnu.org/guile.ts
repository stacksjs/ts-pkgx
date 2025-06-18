/**
 * **guil** - GNU Ubiquitous Intelligent Language for Extensions
 *
 * @domain `gnu.org/guile`
 * @programs `guild`, `guile`, `guile-config`, `guile-snarf`, `guile-tools`
 * @version `3.0.10` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +gnu.org/guile -- $SHELL -i`
 * @aliases `guil`
 * @dependencies `hboehm.info/gc^8`, `gnu.org/gmp^6`, `gnu.org/libtool^2`, ... (+6 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.guil
 * // Or access via domain
 * const samePkg = pantry.gnuorgguile
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "guile"
 * console.log(pkg.description) // "GNU Ubiquitous Intelligent Language for Extensions"
 * console.log(pkg.programs)    // ["guild", "guile", ...]
 * console.log(pkg.versions[0]) // "3.0.10" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/guile.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const guilPackage = {
  /**
   * The display name of this package.
   */
  name: 'guile' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/guile' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'GNU Ubiquitous Intelligent Language for Extensions' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/guile/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +gnu.org/guile -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'guild',
    'guile',
    'guile-config',
    'guile-snarf',
    'guile-tools',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'hboehm.info/gc^8',
    'gnu.org/gmp^6',
    'gnu.org/libtool^2',
    'gnu.org/libunistring^1',
    'freedesktop.org/pkg-config^0.29 # guile-config is a wrapper around pkg-config.',
    'gnu.org/readline^8',
    'gnu.org/gperf^3',
    'sourceware.org/libffi^3',
    'github.com/besser82/libxcrypt^4',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.0.10',
    '3.0.9',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'guil',
  ] as const,
}

export type GuilPackage = typeof guilPackage
