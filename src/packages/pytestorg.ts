/**
 * **pytest.org** - Package from pantry: pytest.org
 *
 * @domain `pytest.org`
 *
 * @install `launchpad install pytest.org`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pytestorg
 * console.log(pkg.name)        // "pytest.org"
 * console.log(pkg.description) // "Package from pantry: pytest.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pytest-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pytestorgPackage = {
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
  description: 'Package from pantry: pytest.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pytest.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pytest.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PytestorgPackage = typeof pytestorgPackage
