/**
 * **pycparser** - :snake: Complete C99 parser in pure Python
 *
 * @domain `github.com/eliben/pycparser`
 * @version `2.22.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/eliben/pycparser -- $SHELL -i`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomelibenpycparser
 * console.log(pkg.name)        // "pycparser"
 * console.log(pkg.description) // ":snake: Complete C99 parser in pure Python"
 * console.log(pkg.versions[0]) // "2.22.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/eliben/pycparser.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomelibenpycparserPackage = {
  /**
   * The display name of this package.
   */
  name: 'pycparser' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/eliben/pycparser' as const,
  /**
   * Brief description of what this package does.
   */
  description: ':snake: Complete C99 parser in pure Python' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/eliben/pycparser/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +github.com/eliben/pycparser -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.22.0',
    '2.21.0',
  ] as const,
  aliases: [] as const,
}

export type GithubcomelibenpycparserPackage = typeof githubcomelibenpycparserPackage
