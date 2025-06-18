/**
 * **cython** - Compiler for writing C extensions for the Python language
 *
 * @domain `cython.org`
 * @programs `cython`
 * @version `3.1.2` (20 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/cython-org.md
 *
 * @install `sh <(curl https://pkgx.sh) cython`
 * @name `cython`
 * @dependencies `python.org<3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.cython
 * // Or access via domain
 * const samePkg = pantry.cythonorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cython"
 * console.log(pkg.description) // "Compiler for writing C extensions for the Pytho..."
 * console.log(pkg.programs)    // ["cython"]
 * console.log(pkg.versions[0]) // "3.1.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cython-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cythonPackage = {
  /**
   * The display name of this package.
   */
  name: 'cython' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cython.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Compiler for writing C extensions for the Python language' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cython.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) cython' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cython',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org<3.12',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.1.2',
    '3.1.1',
    '3.1.0',
    '3.0.12',
    '3.0.11',
    '3.0.10',
    '3.0.9',
    '3.0.8',
    '3.0.7',
    '3.0.6',
    '3.0.5',
    '3.0.4',
    '3.0.3',
    '3.0.2',
    '3.0.1',
    '3.0.0',
    '0.29.37.1',
    '0.29.37',
    '0.29.36',
    '0.29.35',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'cython.org' as const,
}

export type CythonPackage = typeof cythonPackage
