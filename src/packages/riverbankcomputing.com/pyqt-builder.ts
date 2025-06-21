/**
 * **pyqt-builder** - Package from pantry: riverbankcomputing.com/pyqt-builder
 *
 * @domain `riverbankcomputing.com/pyqt-builder`
 *
 * @install `launchpad install riverbankcomputing.com/pyqt-builder`
 * @dependencies `python.org~3.11`, `riverbankcomputing.com/sip`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.riverbankcomputingcompyqtbuilder
 * console.log(pkg.name)        // "pyqt-builder"
 * console.log(pkg.description) // "Package from pantry: riverbankcomputing.com/pyq..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/riverbankcomputing-com/pyqt-builder.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const riverbankcomputingcompyqtbuilderPackage = {
  /**
   * The display name of this package.
   */
  name: 'pyqt-builder' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'riverbankcomputing.com/pyqt-builder' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: riverbankcomputing.com/pyqt-builder' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install riverbankcomputing.com/pyqt-builder' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
    'riverbankcomputing.com/sip',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/riverbankcomputing.com/pyqt-builder/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type RiverbankcomputingcompyqtbuilderPackage = typeof riverbankcomputingcompyqtbuilderPackage
