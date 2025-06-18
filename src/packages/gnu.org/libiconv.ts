/**
 * **iconv** - pkgx package
 *
 * @domain `gnu.org/libiconv`
 * @programs `iconv`
 * @version `1.18.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) iconv`
 * @name `iconv`
 * @aliases `libiconv`
 * @dependencies `linuxgnu.org/gcc/libstdcxx@14`, `gnu.org/gcc/libstdcxx@14`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.iconv
 * // Or access via domain
 * const samePkg = pantry.gnuorglibiconv
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "iconv"
 * console.log(pkg.programs)    // ["iconv"]
 * console.log(pkg.versions[0]) // "1.18.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/libiconv.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const iconvPackage = {
  /**
   * The display name of this package.
   */
  name: 'iconv' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/libiconv' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/libiconv/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) iconv' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'iconv',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'linuxgnu.org/gcc/libstdcxx@14',
    'gnu.org/gcc/libstdcxx@14',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.18.0',
    '1.17.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libiconv',
  ] as const,
  fullPath: 'gnu.org/libiconv' as const,
}

export type IconvPackage = typeof iconvPackage
