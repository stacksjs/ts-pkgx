/**
 * **flit** - Simplified packaging of Python modules
 *
 * @domain `flit.pypa.io`
 * @programs `flit`
 * @version `3.12.0` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install flit`
 * @aliases `flit`
 * @dependencies `python.org>=3<3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.flit
 * // Or access via domain
 * const samePkg = pantry.flitpypaio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "flit.pypa.io"
 * console.log(pkg.description) // "Simplified packaging of Python modules"
 * console.log(pkg.programs)    // ["flit"]
 * console.log(pkg.versions[0]) // "3.12.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/flit-pypa-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const flitPackage = {
  /**
   * The display name of this package.
   */
  name: 'flit.pypa.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'flit.pypa.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Simplified packaging of Python modules' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/flit.pypa.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install flit' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'flit',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3<3.12',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.12.0',
    '3.11.0',
    '3.10.1',
    '3.10.0',
    '3.9.0',
    '3.8.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'flit',
  ] as const,
}

export type FlitPackage = typeof flitPackage
