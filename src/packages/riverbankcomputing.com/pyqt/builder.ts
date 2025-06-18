/**
 * **riverbankcomputing.com/pyqt-builder** - pkgx package
 *
 * @domain `riverbankcomputing.com/pyqt/builder`
 *
 * @install `pkgx riverbankcomputing.com/pyqt-builder`
 * @name `pyqt-builder`
 * @aliases `riverbankcomputing.com/pyqt-builder`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.riverbankcomputingcompyqtbuilder
 * // Or access via domain
 * const samePkg = pantry.riverbankcomputingcompyqtbuilder
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pyqt-builder"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/riverbankcomputing-com/pyqt/builder.md
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
  domain: 'riverbankcomputing.com/pyqt/builder' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx riverbankcomputing.com/pyqt-builder' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'riverbankcomputing.com/pyqt-builder',
  ] as const,
  fullPath: 'riverbankcomputing.com/pyqt-builder' as const,
}

export type RiverbankcomputingcompyqtbuilderPackage = typeof riverbankcomputingcompyqtbuilderPackage
