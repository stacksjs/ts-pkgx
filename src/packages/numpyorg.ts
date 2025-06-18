/**
 * **numpy.org** - Package from pantry: numpy.org
 *
 * @domain `numpy.org`
 *
 * @install `launchpad install numpy.org`
 * @dependencies `openblas.net^0.3`, `python.org^3.11`, `cython.org/libcython`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.numpyorg
 * console.log(pkg.name)        // "numpy.org"
 * console.log(pkg.description) // "Package from pantry: numpy.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/numpy-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const numpyorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'numpy.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'numpy.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: numpy.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install numpy.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openblas.net^0.3',
    'python.org^3.11',
    'cython.org/libcython',
    'llvm.org',
    'llvm.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/numpy.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type NumpyorgPackage = typeof numpyorgPackage
