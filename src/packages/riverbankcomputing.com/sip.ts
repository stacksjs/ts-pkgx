/**
 * **sip-install** - Tool to create Python bindings for C and C++ libraries
 *
 * @domain `riverbankcomputing.com/sip`
 * @programs `sip-install`, `sip-build`, `sip-distinfo`, `sip-module`, `sip-sdist`, ... (+1 more)
 * @version `6.8.3` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install sip-install`
 * @name `sip-install`
 * @dependencies `python.org~3.11`, `llvm.org<17 # needs gcc to sip-install`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.sipinstall
 * // Or access via domain
 * const samePkg = pantry.riverbankcomputingcomsip
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sip-install"
 * console.log(pkg.description) // "Tool to create Python bindings for C and C++ li..."
 * console.log(pkg.programs)    // ["sip-install", "sip-build", ...]
 * console.log(pkg.versions[0]) // "6.8.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/riverbankcomputing-com/sip.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sipinstallPackage = {
  /**
   * The display name of this package.
   */
  name: 'sip-install' as const,
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sip-install' as const,
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
    'llvm.org<17 # needs gcc to sip-install',
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
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +riverbankcomputing.com/sip -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install sip-install' as const,
}

export type SipinstallPackage = typeof sipinstallPackage
