/**
 * **packaging** - Core utilities for Python packages
 *
 * @domain `pypa.io/packaging`
 * @version `25.0.0` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +pypa.io/packaging -- $SHELL -i`
 * @dependencies `python.org>=3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pypaiopackaging
 * console.log(pkg.name)        // "packaging"
 * console.log(pkg.description) // "Core utilities for Python packages"
 * console.log(pkg.versions[0]) // "25.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pypa-io/packaging.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pypaiopackagingPackage = {
  /**
   * The display name of this package.
   */
  name: 'packaging' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pypa.io/packaging' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Core utilities for Python packages' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pypa.io/packaging/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pypa/packaging' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +pypa.io/packaging -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.11',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '25.0.0',
    '24.2.0',
    '24.1.0',
    '24.0.0',
    '23.2.0',
  ] as const,
  aliases: [] as const,
}

export type PypaiopackagingPackage = typeof pypaiopackagingPackage
