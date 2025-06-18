/**
 * **trove-classifiers** - Canonical source for classifiers on PyPI.
 *
 * @domain `pypa.io/trove-classifiers`
 * @version `2025.5.9.12` (28 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +pypa.io/trove-classifiers -- $SHELL -i`
 * @dependencies `python.org~3.12`, `pypa.io/setuptools`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pypaiotroveclassifiers
 * console.log(pkg.name)        // "trove-classifiers"
 * console.log(pkg.description) // "Canonical source for classifiers on PyPI."
 * console.log(pkg.versions[0]) // "2025.5.9.12" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pypa-io/trove-classifiers.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pypaiotroveclassifiersPackage = {
  /**
   * The display name of this package.
   */
  name: 'trove-classifiers' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pypa.io/trove-classifiers' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Canonical source for classifiers on PyPI.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pypa.io/trove-classifiers/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +pypa.io/trove-classifiers -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.12',
    'pypa.io/setuptools',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2025.5.9.12',
    '2025.5.8.15',
    '2025.5.8.13',
    '2025.5.7.19',
    '2025.5.1.12',
    '2025.4.28.22',
    '2025.4.11.15',
    '2025.3.3.18',
    '2025.3.19.19',
    '2025.3.13.13',
    '2025.2.18.16',
    '2025.1.7.14',
    '2025.1.6.15',
    '2025.1.15.22',
    '2025.1.10.15',
    '2024.9.12',
    '2024.7.2',
    '2024.7.1',
    '2024.5.22',
    '2024.5.17',
    '2024.4.10',
    '2024.3.25',
    '2024.3.3',
    '2024.10.21.16',
    '2024.10.14',
    '2024.10.13',
    '2024.10.12',
    '2024.10.11',
  ] as const,
  aliases: [] as const,
}

export type PypaiotroveclassifiersPackage = typeof pypaiotroveclassifiersPackage
