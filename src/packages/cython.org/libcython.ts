/**
 * **libcython** - Package from pantry: cython.org/libcython
 *
 * @domain `cython.org/libcython`
 *
 * @install `launchpad install cython.org/libcython`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cythonorglibcython
 * console.log(pkg.name)        // "libcython"
 * console.log(pkg.description) // "Package from pantry: cython.org/libcython"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cython-org/libcython.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cythonorglibcythonPackage = {
  /**
   * The display name of this package.
   */
  name: 'libcython' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cython.org/libcython' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: cython.org/libcython' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cython.org/libcython' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +cython.org/libcython -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cython.org/libcython' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cython.org/libcython/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CythonorglibcythonPackage = typeof cythonorglibcythonPackage
