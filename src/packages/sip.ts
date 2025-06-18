/**
 * **sip** - Tool to create Python bindings for C and C++ libraries
 *
 * @domain `riverbankcomputing.com/sip`
 * @programs `sip-install`, `sip-build`, `sip-distinfo`, `sip-module`, `sip-sdist`, ... (+1 more)
 * @version `6.8.3` (6 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/riverbankcomputing-com/sip.md
 *
 * @install `sh <(curl https://pkgx.sh) +riverbankcomputing.com/sip -- $SHELL -i`
 * @name `sip`
 * @dependencies `python.org~3.11`, `llvm.org<17`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.sip
 * // Or access via domain
 * const samePkg = pantry.riverbankcomputingcomsip
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sip"
 * console.log(pkg.description) // "Tool to create Python bindings for C and C++ li..."
 * console.log(pkg.programs)    // ["sip-install", "sip-build", ...]
 * console.log(pkg.versions[0]) // "6.8.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/riverbankcomputing-com/sip.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sipPackage = {
  /**
   * The display name of this package.
   */
  name: 'sip' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'riverbankcomputing.com/sip' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Tool to create Python bindings for C and C++ libraries' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/riverbankcomputing.com/sip/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +riverbankcomputing.com/sip -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'sip-install',
    'sip-build',
    'sip-distinfo',
    'sip-module',
    'sip-sdist',
    'sip-wheel',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
    'llvm.org<17',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '6.8.3',
    '6.8.2',
    '6.8.1',
    '6.8.0',
    '6.7.11',
    '6.7.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'riverbankcomputing.com/sip' as const,
}

export type SipPackage = typeof sipPackage
