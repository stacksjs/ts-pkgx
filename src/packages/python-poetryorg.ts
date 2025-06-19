/**
 * **poetry** - Python packaging and dependency management made easy
 *
 * @domain `python-poetry.org`
 * @programs `poetry`
 * @version `2.1.3` (21 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install poetry`
 * @aliases `poetry`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.poetry
 * // Or access via domain
 * const samePkg = pantry.pythonpoetryorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "python-poetry.org"
 * console.log(pkg.description) // "Python packaging and dependency management made..."
 * console.log(pkg.programs)    // ["poetry"]
 * console.log(pkg.versions[0]) // "2.1.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/python-poetry-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const poetryPackage = {
  /**
   * The display name of this package.
   */
  name: 'python-poetry.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'python-poetry.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Python packaging and dependency management made easy' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/python-poetry.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install poetry' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'poetry',
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
    '2.1.3',
    '2.1.2',
    '2.1.1',
    '2.1.0',
    '2.0.1',
    '2.0.0',
    '1.8.5',
    '1.8.4',
    '1.8.3',
    '1.8.2',
    '1.8.1',
    '1.8.0',
    '1.7.1',
    '1.7.0',
    '1.6.1',
    '1.6.0',
    '1.5.1',
    '1.5.0',
    '1.4.2',
    '1.4.0',
    '1.3.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'poetry',
  ] as const,
}

export type PoetryPackage = typeof poetryPackage
