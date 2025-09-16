/**
 * **cython.org/libcython** - The most widely used Python to C compiler
 *
 * @domain `cython.org/libcython`
 * @version `3.1.4` (18 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install cython.org/libcython`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cythonorglibcython
 * console.log(pkg.name)        // "cython.org/libcython"
 * console.log(pkg.description) // "The most widely used Python to C compiler"
 * console.log(pkg.versions[0]) // "3.1.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cython-org/libcython.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cythonorglibcythonPackage = {
  /**
   * The display name of this package.
   */
  name: 'cython.org/libcython' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cython.org/libcython' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The most widely used Python to C compiler' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cython.org/libcython/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cython.org/libcython' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.1.4',
    '3.1.3',
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
    '0.29.37.1',
    '0.29.37',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +cython.org/libcython -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cython.org/libcython' as const,
}

export type CythonorglibcythonPackage = typeof cythonorglibcythonPackage
