/**
 * **setuptools** - Official project repository for the Setuptools build system
 *
 * @domain `pypa.io/setuptools`
 * @version `80.9.0` (64 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +pypa.io/setuptools -- $SHELL -i`
 * @dependencies `python.org~3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pypaiosetuptools
 * console.log(pkg.name)        // "setuptools"
 * console.log(pkg.description) // "Official project repository for the Setuptools ..."
 * console.log(pkg.versions[0]) // "80.9.0" (latest)
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
  description: 'Official project repository for the Setuptools build system' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pypa.io/setuptools/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +pypa.io/setuptools -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.12',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '80.9.0',
    '80.8.0',
    '80.7.1',
    '80.7.0',
    '80.6.0',
    '80.4.0',
    '80.3.1',
    '80.3.0',
    '80.2.0',
    '80.1.0',
    '80.0.1',
    '80.0.0',
    '79.0.1',
    '79.0.0',
    '78.1.1',
    '78.1.0',
    '78.0.2',
    '78.0.1',
    '77.0.3',
    '77.0.1',
    '76.1.0',
    '76.0.0',
    '75.9.1',
    '75.9.0',
    '75.8.2',
    '75.8.1',
    '75.8.0',
    '75.7.0',
    '75.6.0',
    '75.5.0',
    '75.4.0',
    '75.3.1',
    '75.3.0',
    '75.2.0',
    '75.1.0',
    '75.0.0',
    '74.1.3',
    '74.1.2',
    '74.1.1',
    '74.1.0',
    '74.0.0',
    '73.0.0',
    '72.2.0',
    '72.1.0',
    '72.0.0',
    '71.1.0',
    '71.0.4',
    '71.0.3',
    '71.0.2',
    '71.0.1',
    '71.0.0',
    '70.3.0',
    '70.2.0',
    '70.1.1',
    '70.1.0',
    '70.0.0',
    '69.5.1',
    '69.4.2',
    '69.4.1',
    '69.4.0',
    '69.3.1',
    '69.3.0',
    '69.2.0',
    '69.1.1',
  ] as const,
  aliases: [] as const,
}

export type PypaiosetuptoolsPackage = typeof pypaiosetuptoolsPackage
