/**
 * **python-poetry.org** - Package from pantry: python-poetry.org
 *
 * @domain `python-poetry.org`
 *
 * @install `launchpad install python-poetry.org`
 * @dependencies `pkgx.sh^1`, `python.org~3.11`, `cmake.org^3`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pythonpoetryorg
 * console.log(pkg.name)        // "python-poetry.org"
 * console.log(pkg.description) // "Package from pantry: python-poetry.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/python-poetry-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pythonpoetryorgPackage = {
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
  description: 'Package from pantry: python-poetry.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install python-poetry.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
    'python.org~3.11',
    'cmake.org^3',
    'rust-lang.org/cargo',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/python-poetry.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PythonpoetryorgPackage = typeof pythonpoetryorgPackage
