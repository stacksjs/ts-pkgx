/**
 * **libmatio** - C library for reading and writing MATLAB MAT files
 *
 * @domain `matio.sourceforge.io`
 * @programs `matdump`
 * @version `1.5.28` (6 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/matio-sourceforge-io.md
 *
 * @install `sh <(curl https://pkgx.sh) matdump`
 * @aliases `libmatio`
 * @dependencies `hdfgroup.org/HDF5`, `zlib.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.libmatio
 * // Or access via domain
 * const samePkg = pantry.matiosourceforgeio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libmatio"
 * console.log(pkg.description) // "C library for reading and writing MATLAB MAT files"
 * console.log(pkg.programs)    // ["matdump"]
 * console.log(pkg.versions[0]) // "1.5.28" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/matio-sourceforge-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libmatioPackage = {
  /**
   * The display name of this package.
   */
  name: 'libmatio' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'matio.sourceforge.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'C library for reading and writing MATLAB MAT files' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/matio.sourceforge.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) matdump' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'matdump',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'hdfgroup.org/HDF5',
    'zlib.net',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.5.28',
    '1.5.27',
    '1.5.26',
    '1.5.25',
    '1.5.24',
    '1.5.23',
  ] as const,
  fullPath: 'matio.sourceforge.io' as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libmatio',
  ] as const,
}

export type LibmatioPackage = typeof libmatioPackage
