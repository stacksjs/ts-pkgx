/**
 * **pyqt-bundle** - The PyQt build system
 *
 * @domain `riverbankcomputing.com/pyqt-builder`
 * @programs `pyqt-bundle`
 * @version `1.15.4` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install pyqt-bundle`
 * @name `pyqt-bundle`
 * @dependencies `python.org~3.11`, `riverbankcomputing.com/sip`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.pyqtbundle
 * // Or access via domain
 * const samePkg = pantry.riverbankcomputingcompyqtbuilder
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pyqt-bundle"
 * console.log(pkg.description) // "The PyQt build system"
 * console.log(pkg.programs)    // ["pyqt-bundle"]
 * console.log(pkg.versions[0]) // "1.15.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/riverbankcomputing-com/pyqt-builder.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pyqtbundlePackage = {
  /**
   * The display name of this package.
   */
  name: 'pyqt-bundle' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'riverbankcomputing.com/pyqt-builder' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The PyQt build system' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/riverbankcomputing.com/pyqt-builder/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pyqt-bundle' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pyqt-bundle',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
    'riverbankcomputing.com/sip',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.15.4',
    '1.15.3',
    '1.15.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) pyqt-bundle -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install pyqt-bundle' as const,
}

export type PyqtbundlePackage = typeof pyqtbundlePackage
