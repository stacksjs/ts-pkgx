/**
 * **setuptools** - Package from pantry: pypa.io/setuptools
 *
 * @domain `pypa.io/setuptools`
 *
 * @install `launchpad install pypa.io/setuptools`
 * @dependencies `python.org~3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pypaiosetuptools
 * console.log(pkg.name)        // "setuptools"
 * console.log(pkg.description) // "Package from pantry: pypa.io/setuptools"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pypa-io/setuptools.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pypaiosetuptoolsPackage = {
  /**
   * The display name of this package.
   */
  name: 'setuptools' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pypa.io/setuptools' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: pypa.io/setuptools' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pypa.io/setuptools' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.12',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pypa.io/setuptools/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PypaiosetuptoolsPackage = typeof pypaiosetuptoolsPackage
