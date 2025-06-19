/**
 * **iconv** - pkgx package
 *
 * @domain `gnu.org/libiconv`
 * @programs `iconv`
 * @version `1.18.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install iconv`
 * @aliases `iconv`
 * @dependencies `linux:gnu.org/gcc/libstdcxx@14` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.iconv
 * // Or access via domain
 * const samePkg = pantry.gnuorglibiconv
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libiconv"
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
  name: 'libiconv' as const,
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
  installCommand: 'launchpad install iconv' as const,
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
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'linux:gnu.org/gcc/libstdcxx@14',
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
    'iconv',
  ] as const,
}

export type IconvPackage = typeof iconvPackage
