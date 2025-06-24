/**
 * **asciidoc-py** - Package from pantry: github.com/asciidoc-py/asciidoc-py
 *
 * @domain `github.com/asciidoc-py/asciidoc-py`
 *
 * @install `launchpad install github.com/asciidoc-py/asciidoc-py`
 * @dependencies `docbook.org`, `python.org~3.11`, `gnu.org/source-highlight`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomasciidocpyasciidocpy
 * console.log(pkg.name)        // "asciidoc-py"
 * console.log(pkg.description) // "Package from pantry: github.com/asciidoc-py/asc..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/asciidoc-py/asciidoc-py.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomasciidocpyasciidocpyPackage = {
  /**
   * The display name of this package.
   */
  name: 'asciidoc-py' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/asciidoc-py/asciidoc-py' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/asciidoc-py/asciidoc-py' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/asciidoc-py/asciidoc-py' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/asciidoc-py/asciidoc-py -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/asciidoc-py/asciidoc-py' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'docbook.org',
    'python.org~3.11',
    'gnu.org/source-highlight',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/asciidoc-py/asciidoc-py/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomasciidocpyasciidocpyPackage = typeof githubcomasciidocpyasciidocpyPackage
