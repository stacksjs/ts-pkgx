/**
 * **pluggy** - Package from pantry: pytest.org/pluggy
 *
 * @domain `pytest.org/pluggy`
 *
 * @install `launchpad install pytest.org/pluggy`
 * @dependencies `python.org^3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pytestorgpluggy
 * console.log(pkg.name)        // "pluggy"
 * console.log(pkg.description) // "Package from pantry: pytest.org/pluggy"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pytest-org/pluggy.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pytestorgpluggyPackage = {
  /**
   * The display name of this package.
   */
  name: 'pluggy' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pytest.org/pluggy' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: pytest.org/pluggy' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pytest.org/pluggy' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org^3.12',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pytest.org/pluggy/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PytestorgpluggyPackage = typeof pytestorgpluggyPackage
