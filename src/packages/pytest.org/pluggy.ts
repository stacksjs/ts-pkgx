/**
 * **pluggy** - A minimalist production ready plugin system
 *
 * @domain `pytest.org/pluggy`
 * @version `1.6.0` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +pytest.org/pluggy -- $SHELL -i`
 * @dependencies `python.org^3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pytestorgpluggy
 * console.log(pkg.name)        // "pluggy"
 * console.log(pkg.description) // "A minimalist production ready plugin system"
 * console.log(pkg.versions[0]) // "1.6.0" (latest)
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
  description: 'A minimalist production ready plugin system' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pytest.org/pluggy/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +pytest.org/pluggy -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org^3.12',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.6.0',
    '1.5.0',
    '1.4.0',
  ] as const,
  aliases: [] as const,
}

export type PytestorgpluggyPackage = typeof pytestorgpluggyPackage
