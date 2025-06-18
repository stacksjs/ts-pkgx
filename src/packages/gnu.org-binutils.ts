/**
 * **binutils** - GNU binary tools for native development
 *
 * @domain `gnu.org/binutils`
 * @programs `addr2line`, `ar`, `c++filt`, `elfedit`, `nm`, ... (+7 more)
 * @version `2.44.0` (7 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/binutils.md
 *
 * @install `sh <(curl https://pkgx.sh) +gnu.org/binutils -- $SHELL -i`
 * @aliases `binutils`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.binutils
 * // Or access via domain
 * const samePkg = pantry.gnuorgbinutils
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gnu.org/binutils"
 * console.log(pkg.description) // "GNU binary tools for native development"
 * console.log(pkg.programs)    // ["addr2line", "ar", ...]
 * console.log(pkg.versions[0]) // "2.44.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/binutils.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const binutilsPackage = {
  /**
   * The display name of this package.
   */
  name: 'gnu.org/binutils' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/binutils' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'GNU binary tools for native development' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/binutils/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gnu.org/binutils -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'addr2line',
    'ar',
    'c++filt',
    'elfedit',
    'nm',
    'objcopy',
    'objdump',
    'ranlib',
    'readelf',
    'size',
    'strings',
    'strip',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.44.0',
    '2.43.1',
    '2.43.0',
    '2.42.0',
    '2.41.0',
    '2.40.0',
    '2.39.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'binutils',
  ] as const,
  fullPath: 'gnu.org/binutils' as const,
}

export type BinutilsPackage = typeof binutilsPackage
