/**
 * **pytest** - The pytest framework makes it easy to write small tests, yet scales to support complex functional testing
 *
 * @domain `pytest.org`
 * @programs `pytest`
 * @version `8.4.1` (27 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install pytest`
 * @aliases `pytest`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.pytest
 * // Or access via domain
 * const samePkg = pantry.pytestorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pytest.org"
 * console.log(pkg.description) // "The pytest framework makes it easy to write sma..."
 * console.log(pkg.programs)    // ["pytest"]
 * console.log(pkg.versions[0]) // "8.4.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pytest-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pytestPackage = {
  /**
   * The display name of this package.
   */
  name: 'pytest.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pytest.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The pytest framework makes it easy to write small tests, yet scales to support complex functional testing' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pytest.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install pytest' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pytest',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '8.4.1',
    '8.4.0',
    '8.3.5',
    '8.3.4',
    '8.3.3',
    '8.3.2',
    '8.3.1',
    '8.3.0',
    '8.2.2',
    '8.2.1',
    '8.2.0',
    '8.1.2',
    '8.1.1',
    '8.1.0',
    '8.0.2',
    '8.0.1',
    '8.0.0',
    '7.4.4',
    '7.4.3',
    '7.4.2',
    '7.4.1',
    '7.4.0',
    '7.3.2',
    '7.3.1',
    '7.3.0',
    '7.2.2',
    '7.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'pytest',
  ] as const,
}

export type PytestPackage = typeof pytestPackage
