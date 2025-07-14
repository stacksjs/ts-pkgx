/**
 * **pycparser** - Package from pantry: github.com/eliben/pycparser
 *
 * @domain `github.com/eliben/pycparser`
 *
 * @install `launchpad install github.com/eliben/pycparser`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomelibenpycparser
 * console.log(pkg.name)        // "pycparser"
 * console.log(pkg.description) // "Package from pantry: github.com/eliben/pycparser"
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
  description: 'Package from pantry: github.com/eliben/pycparser' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/eliben/pycparser' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/eliben/pycparser -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/eliben/pycparser' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/eliben/pycparser/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomelibenpycparserPackage = typeof githubcomelibenpycparserPackage
