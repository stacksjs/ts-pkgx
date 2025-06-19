/**
 * **libtool** - pkgx package
 *
 * @domain `gnu.org/libtool`
 * @programs `libtool`, `libtoolize`
 * @version `2.5.4` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +gnu.org/libtool -- $SHELL -i`
 * @name `libtool`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.libtool
 * // Or access via domain
 * const samePkg = pantry.gnuorglibtool
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libtool"
 * console.log(pkg.programs)    // ["libtool", "libtoolize"]
 * console.log(pkg.versions[0]) // "2.5.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/libtool.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libtoolPackage = {
  /**
   * The display name of this package.
   */
  name: 'libtool' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/libtool' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/libtool/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +gnu.org/libtool -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'libtool',
    'libtoolize',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.5.4',
    '2.5.3',
    '2.4.7',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type LibtoolPackage = typeof libtoolPackage
