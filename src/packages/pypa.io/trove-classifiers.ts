/**
 * **trove-classifiers** - Package from pantry: pypa.io/trove-classifiers
 *
 * @domain `pypa.io/trove-classifiers`
 *
 * @install `launchpad install pypa.io/trove-classifiers`
 * @dependencies `python.org~3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pypaiotroveclassifiers
 * console.log(pkg.name)        // "trove-classifiers"
 * console.log(pkg.description) // "Package from pantry: pypa.io/trove-classifiers"
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
  description: 'Package from pantry: pypa.io/trove-classifiers' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pypa.io/trove-classifiers' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +pypa.io/trove-classifiers -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install pypa.io/trove-classifiers' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pypa.io/trove-classifiers/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PypaiotroveclassifiersPackage = typeof pypaiotroveclassifiersPackage
