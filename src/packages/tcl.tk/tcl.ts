/**
 * **tcl** - pkgx package
 *
 * @domain `tcl.tk/tcl`
 * @programs `sqlite3_analyzer`, `tclsh{{version.major}}.{{version.minor}}`, `tclsh`
 * @version `9.0.1` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +tcl.tk/tcl -- $SHELL -i`
 * @aliases `tcl`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.tcl
 * // Or access via domain
 * const samePkg = pantry.tcltktcl
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "tcl.tk/tcl"
 * console.log(pkg.programs)    // ["sqlite3_analyzer", "tclsh{{version.major}}.{{version.minor}}", ...]
 * console.log(pkg.versions[0]) // "9.0.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tcl-tk/tcl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tclPackage = {
  /**
   * The display name of this package.
   */
  name: 'tcl.tk/tcl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tcl.tk/tcl' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tcl.tk/tcl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +tcl.tk/tcl -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'sqlite3_analyzer',
    'tclsh{{version.major}}.{{version.minor}}',
    'tclsh',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '9.0.1',
    '8.6.16',
    '8.6.14',
    '8.6.13',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'tcl',
  ] as const,
  fullPath: 'tcl.tk/tcl' as const,
}

export type TclPackage = typeof tclPackage
