/**
 * **cython.org** - Package from pantry: cython.org
 *
 * @domain `cython.org`
 *
 * @install `launchpad install cython.org`
 * @dependencies `python.org<3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cythonorg
 * console.log(pkg.name)        // "cython.org"
 * console.log(pkg.description) // "Package from pantry: cython.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cython-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cythonorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'cython.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cython.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: cython.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cython.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +cython.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cython.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org<3.12',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cython.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CythonorgPackage = typeof cythonorgPackage
