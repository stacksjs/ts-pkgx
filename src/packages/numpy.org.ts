/**
 * **f2py** - The fundamental package for scientific computing with Python.
 *
 * @domain `numpy.org`
 * @programs `f2py`
 * @version `2.2.6` (17 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/numpy-org.md
 *
 * @install `sh <(curl https://pkgx.sh) f2py`
 * @name `f2py`
 * @dependencies `openblas.net^0.3`, `python.org^3.11`
 * @companions `gnu.org/gcc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.f2py
 * // Or access via domain
 * const samePkg = pantry.numpyorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "f2py"
 * console.log(pkg.description) // "The fundamental package for scientific computin..."
 * console.log(pkg.programs)    // ["f2py"]
 * console.log(pkg.versions[0]) // "2.2.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/numpy-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const f2pyPackage = {
  /**
   * The display name of this package.
   */
  name: 'f2py' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'numpy.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The fundamental package for scientific computing with Python.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/numpy.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) f2py' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'f2py',
  ] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'gnu.org/gcc',
  ] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openblas.net^0.3',
    'python.org^3.11',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.2.6',
    '2.2.5',
    '2.2.4',
    '2.2.3',
    '2.2.2',
    '2.2.1',
    '2.2.0',
    '2.1.3',
    '2.1.2',
    '2.1.1',
    '2.1.0',
    '2.0.2',
    '2.0.1',
    '2.0.0',
    '1.26.4',
    '1.26.3',
    '1.26.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'numpy.org' as const,
}

export type F2pyPackage = typeof f2pyPackage
